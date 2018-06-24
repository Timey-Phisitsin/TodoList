import React, {Component} from 'react'
import FlipMove from 'react-flip-move'
import {Row, Col, Button} from 'react-bootstrap'
import Moment from 'moment'
import FontAwesome from 'react-fontawesome'
import AddButton from './AddButton'
import AddButtonEdit from './AddButtonEdit'
import './css/Tasklist.css'
class TaskList extends Component {
    
    render() {
        let deleteItems = this.props.deleteHandle
        let checkItems = this.props.checkHandle
        let editDetail = this.props.edit
        let filter = this.props.valueFilter
        return (
            <div>
            <FlipMove duration={350} easing="ease-out">   
                {this.props.tasks.map(function(task, index) {
                 if (filter === "all") {        
                    return(
                <FlipMove duration={350} easing="ease-out">      
                    <div className="border"  key={{index}} style={{background: task.done ? '#779e4f' : 'none', transition: '0.5s'}} >
                        <Row>  
                            <Row>    
                                <Col xs={2}>
                                    <Row style={{paddingTop: '20px', textAlign: 'center'}}>
                                    <Col xs={6}>
                                    </Col>
                                    <Col xs={6}>
                                        <Button onClick={event => checkItems(event, index)}>
                                            {task.done ? <FontAwesome style={{color:"red"}} name='undo'/> : <FontAwesome style={{color:"green"}} name='check'/>}
                                        </Button>
                                    </Col>
                                    </Row>
                                </Col>
                           
                                <Col xs={3}>
                                    <div>
                                        <p style={{paddingTop: '10px',textAlign: 'center', fontWeight: 'bold'}}>{task.time}
                                            <span><p>{Moment(task.period).format('LL')}</p>{Moment(task.period).format('dddd')}</span>
                                        </p>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                        <h4>{task.activity_title}</h4>
                                        <p>{task.activity_description}</p>
                                </Col>
                                <Col xs={1}>
                                        <AddButtonEdit  editData={editDetail}
                                                        keyData={index}
                                                        status={task.done}
                                                        />
                                    </Col>
                                <Col xs={3}>
                                    <Col xs={10}></Col>
                                    <Col xs={2}>
                                    <Row style={{paddingTop: '20px', textAlign: 'center'}}>
                                        <Button bsStyle="danger" onClick={event => deleteItems(event, index)} >
                                        <FontAwesome name='times' />
                                        </Button>
                                    </Row>
                                    </Col>
                                </Col>
                            </Row> 
                        </Row>
                    </div>
                </FlipMove>
                );
                  } else if (filter === "incomplete") {        
                    if(!task.done){
                      return(
                        <FlipMove duration={350} easing="ease-out">      
                        <div className="border"  key={{index}} style={{background: task.done ? '#779e4f' : 'none', transition: '0.5s'}} >
                            <Row>  
                                <Row>    
                                    <Col xs={2}>
                                        <Row style={{paddingTop: '20px', textAlign: 'center'}}>
                                        <Col xs={6}>
                                        </Col>
                                        <Col xs={6}>
                                            <Button onClick={event => checkItems(event, index)}>
                                                {task.done ? <FontAwesome style={{color:"red"}} name='undo'/> : <FontAwesome style={{color:"green"}} name='check'/>}
                                            </Button>
                                        </Col>
                                        </Row>
                                    </Col>
                               
                                    <Col xs={3}>
                                        <div>
                                            <p style={{paddingTop: '10px',textAlign: 'center', fontWeight: 'bold'}}>{task.time}
                                                <span><p>{Moment(task.period).format('LL')}</p>{Moment(task.period).format('dddd')}</span>
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xs={3}>
                                            <h4>{task.activity_title}</h4>
                                            <p>{task.activity_description}</p>
                                    </Col>
                                    <Col xs={1}>
                                            <AddButtonEdit  editData={editDetail}
                                                            keyData={index}
                                                            status={task.done}
                                                            />
                                        </Col>
                                    <Col xs={3}>
                                        <Col xs={10}></Col>
                                        <Col xs={2}>
                                        <Row style={{paddingTop: '20px', textAlign: 'center'}}>
                                            <Button bsStyle="danger" onClick={event => deleteItems(event, index)} >
                                            <FontAwesome name='times' />
                                            </Button>
                                        </Row>
                                        </Col>
                                    </Col>
                                </Row> 
                            </Row>
                        </div>
                    </FlipMove>
                    );
                    }        
                  } else {
                      if(task.done){
                        return(
                            <FlipMove duration={350} easing="ease-out">      
                            <div className="border"  key={{index}} style={{background: task.done ? '#779e4f' : 'none', transition: '0.5s'}} >
                                <Row>  
                                    <Row>    
                                        <Col xs={2}>
                                            <Row style={{paddingTop: '20px', textAlign: 'center'}}>
                                            <Col xs={6}>
                                            </Col>
                                            <Col xs={6}>
                                                <Button onClick={event => checkItems(event, index)}>
                                                    {task.done ? <FontAwesome style={{color:"red"}} name='undo'/> : <FontAwesome style={{color:"green"}} name='check'/>}
                                                </Button>
                                            </Col>
                                            </Row>
                                        </Col>
                                   
                                        <Col xs={3}>
                                            <div>
                                                <p style={{paddingTop: '10px',textAlign: 'center', fontWeight: 'bold'}}>{task.time}
                                                    <span><p>{Moment(task.period).format('LL')}</p>{Moment(task.period).format('dddd')}</span>
                                                </p>
                                            </div>
                                        </Col>
                                        <Col xs={3}>
                                                <h4>{task.activity_title}</h4>
                                                <p>{task.activity_description}</p>
                                        </Col>
                                        <Col xs={1}>
                                                <AddButtonEdit  editData={editDetail}
                                                                keyData={index}
                                                                status={task.done}
                                                                />
                                            </Col>
                                        <Col xs={3}>
                                            <Col xs={10}></Col>
                                            <Col xs={2}>
                                            <Row style={{paddingTop: '20px', textAlign: 'center'}}>
                                                <Button bsStyle="danger" onClick={event => deleteItems(event, index)} >
                                                <FontAwesome name='times' />
                                                </Button>
                                            </Row>
                                            </Col>
                                        </Col>
                                    </Row> 
                                </Row>
                            </div>
                        </FlipMove>
                        );
                      }         
                  }
                })}
                
            </FlipMove>
            </div>
        )
    }
}

export default TaskList