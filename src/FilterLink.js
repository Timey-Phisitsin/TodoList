import React, {Component} from 'react'
import FlipMove from 'react-flip-move'
import {Row, Col, Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './css/buttonFilter.css'
class FilterLink extends React.Component {
    constructor(props){
      super()
    }
    render(){
    let countTask = this.props.tasks
    let filterList = this.props.listFilter
    let currentFilter = this.props.valueFilter
    
      return(
        <div>
          <ul>
            <li>
              <a onClick={() => filterList("all")}><i className="fa">All ({this.props.tasks.slice().length}) </i></a>
            </li>
            <li>
              <a onClick={() => filterList("complete")}><i className="fa">Completed ({this.props.tasks.filter(task => task.done).length})</i></a>
            </li>
            <li>  
            <a onClick={() => filterList("incomplete")}><i className="fa">Incompleted ({this.props.tasks.filter(task => !task.done).length})</i></a>
            </li>
          </ul>
        </div>
      )     
    }
  }

  export default FilterLink