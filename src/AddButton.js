import React, {Component} from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './css/Modal.css'
import FlipMove from 'react-flip-move'
class AddButton extends Component {
    constructor (props) {
        super(props)
        
        this.state = {
          modalOpened: false
        }
        this.modalToggle = this.modalToggle.bind(this)
    }
    
    // Modal popup //
    modalToggle () {
        this.setState({ modalOpened: !this.state.modalOpened })
    }

    render() {
        const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
        const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container'
        return (
            <div>
              <Row>
                <Col xs={10}></Col>
                <Col xs={2}>
                <Button bsStyle="danger" bsSize="large" onClick={this.modalToggle}>
                    <FontAwesome name='plus' />
                </Button>
                 
                </Col>
              </Row>
              <div className={containerClass}>
                    <div className='modal-header'>
                        Your Todo
                    </div>
                    <div className='modal-body'>
                    <div>
                    <form>    
                      <input
                      type="text"   onChange={this.props.inputTitle}
                                    value={this.props.valueTitle} 
                                    placeholder="Title"/>
                      <br/>
                      <br/>
                      <input 
                      type="date"   onChange={this.props.inputDate}
                                    value={this.props.valueDate} 
                                    placeholder="Finish time"/>
                      <br/>
                      <br/>
                      <textarea 
                      type="text"   onChange={this.props.inputDescription}
                                    value={this.props.valueDescription} 
                                    placeholder="your description"/>
                      <br/>
                      <br/>
                      <Button onClick={this.props.onHandleAddTodo} bsStyle="danger" bsSize="large">
                        Add
                      </Button>
                    </form>
                    </div>
                        <br/>
                </div>
                <div className='modal-footer'>
                </div>

            </div>        
            <div className={coverClass} onClick={this.modalToggle}></div>
        </div>
        )
    }
}

export default AddButton