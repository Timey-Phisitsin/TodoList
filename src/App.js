import React, { Component } from 'react'
import TaskList from './TaskList.js'
import Date from './Date.js'
import Avatar from './Avatar.js'
import AddButton from './AddButton.js'
import FilterLink from './FilterLink.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      date: '',
      descritption: '',
      filter: 'all',
      tasks: []
    };
    this.onHandleChangeInputTitle = this.onHandleChangeInputTitle.bind(this)
    this.onHandleChangeInputDate = this.onHandleChangeInputDate.bind(this)
    this.onHandleChangeInputDescription = this.onHandleChangeInputDescription.bind(this)
    this.onHandleAddTodo = this.onHandleAddTodo.bind(this)
    this.onHandleDeleteTodo = this.onHandleDeleteTodo.bind(this)
    this.onHandleCheckComplete = this.onHandleCheckComplete.bind(this)
    this.onHandleEditDetail = this.onHandleEditDetail.bind(this)
    this.changeViewByFilter = this.changeViewByFilter.bind(this)
  }
 
  componentDidMount() {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('localStorageTodos'))

    this.setState({
        tasks: tasksFromLocalStorage || []
    })
}

/// Addbutton///
onHandleChangeInputTitle(e) {
    const newTitle = e.target.value

    this.setState({
        title: newTitle
    })
}
onHandleChangeInputDate(e) {
  const newDate = e.target.value

  this.setState({
      date: newDate
  })
}
onHandleChangeInputDescription(e) {
  const newDescription = e.target.value

  this.setState({
      descritption: newDescription
  })
}

onHandleAddTodo(e) {
    e.preventDefault();
    // copy the array in state
    let tasksCopy = this.state.tasks.slice()

    tasksCopy.push({'activity_title' : this.state.title, 'period': this.state.date,
    'activity_description': this.state.descritption, 'done': false})

    this.setState({
      tasks: tasksCopy,
      title: '',
      date: '',
      descritption: ''
    }, this.updateLocalStorageWithState);


}

onHandleDeleteTodo(event, indexOfItemToRemove) {
  
  event.preventDefault()
  ///copy the array in state
  let tasksCopy = this.state.tasks.slice()

  tasksCopy.splice(indexOfItemToRemove, 1);

  this.setState({
      tasks: tasksCopy
  }, () => {
      this.updateLocalStorageWithState()
  })

}

onHandleCheckComplete(event, indexOfItemtoCheck) {
  
  event.preventDefault();

  let tasksCopy = this.state.tasks.slice()

  let check = this.state.tasks[indexOfItemtoCheck].done


  check = !this.state.tasks[indexOfItemtoCheck].done

  tasksCopy[indexOfItemtoCheck].done = check
  
  this.setState({
    tasks: tasksCopy
  }, () => {
      this.updateLocalStorageWithState()
  });

}

onHandleEditDetail(event, indexOfItemtoEdit, editTitle, editDate, editDescription, status) {
  console.log(editTitle)
  event.preventDefault()
  console.log(indexOfItemtoEdit);
  let tasksCopy = this.state.tasks.slice()
  console.log(tasksCopy[indexOfItemtoEdit])
  console.log(tasksCopy[indexOfItemtoEdit].activity_title)
  console.log(tasksCopy[indexOfItemtoEdit].activity_description)
  console.log(tasksCopy[indexOfItemtoEdit].period)

  if(editTitle !== "" && editDate !== "" && editDescription !== ""){
    tasksCopy[indexOfItemtoEdit].activity_title = editTitle
    tasksCopy[indexOfItemtoEdit].period = editDate
    tasksCopy[indexOfItemtoEdit].activity_description = editDescription


  }else if(editTitle !== "" && editDate !== ""){
    tasksCopy[indexOfItemtoEdit].activity_title = editTitle
    tasksCopy[indexOfItemtoEdit].period = editDate

  }else if(editTitle !== "" && editDescription !== ""){
    tasksCopy[indexOfItemtoEdit].activity_title = editTitle
    tasksCopy[indexOfItemtoEdit].activity_description = editDescription

  }else if(editDate !== "" && editDescription !== ""){
    tasksCopy[indexOfItemtoEdit].period = editDate
    tasksCopy[indexOfItemtoEdit].activity_description = editDescription

  }else if(editTitle !== ""){
    tasksCopy[indexOfItemtoEdit].activity_title = editTitle

  }else if(editDate !== ""){
    tasksCopy[indexOfItemtoEdit].period = editDate

  }else if(editDescription !== ""){
    tasksCopy[indexOfItemtoEdit].activity_description = editDescription
  }
  this.setState({
    tasks: tasksCopy,
    title: '',
    date: '',
    descritption: ''
  }, () => {
      this.updateLocalStorageWithState();
  });

}

updateLocalStorageWithState() {
    localStorage.setItem('localStorageTodos', JSON.stringify(this.state.tasks))
}

///filter active-complete
changeViewByFilter(val){
  let newFilter = val;
  this.setState({ 
    filter: newFilter
  });
}

  render() {
    return (
      <div style={{padding: '30px 30px'}}>
          <Avatar />
          <br />
          <br/>
          <br/>
          <FilterLink listFilter={this.changeViewByFilter}
                      valueFilter={this.state.filter}
                      tasks={this.state.tasks}
                      />
                      
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <TaskList tasks={this.state.tasks} 
                    deleteHandle={this.onHandleDeleteTodo} 
                    checkHandle={this.onHandleCheckComplete} 
                    edit={this.onHandleEditDetail}
                    valueFilter={this.state.filter}
                    />
          <br/>
          <br/>
          <br/>
          <AddButton inputTitle={this.onHandleChangeInputTitle}
                     inputDate={this.onHandleChangeInputDate}
                     inputDescription={this.onHandleChangeInputDescription}
                     onHandleAddTodo={this.onHandleAddTodo}
                     valueTitle={this.state.title}
                     valueDate={this.state.date}
                     valueDescription={this.state.descritption} />
          
      </div>
    )
  }
}

export default App