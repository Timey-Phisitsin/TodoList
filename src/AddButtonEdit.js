import React, {Component} from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './css/Modal.css'
import FlipMove from 'react-flip-move'

class AddEditButton extends Component {
    constructor (props) {
        super(props)
        
        this.state = {
        editTitle: '',
        editDate: '',
        editDescription: '',
          modalOpened: false
        }
        this.modalToggle = this.modalToggle.bind(this)
        this.addClicked = this.addClicked.bind(this)
    }
    
    // Modal popup //
    modalToggle () {
        this.setState({ modalOpened: !this.state.modalOpened })
    }
    addClicked(event, keyItems){
        let {editData} = this.props
        editData(event, keyItems, this.state.editTitle, this.state.editDate,this.state.editDescription, this.props.status)
        this.setState({
            editTitle: '',
            editDate: '',
            editDescription: '' 
        })
    }
    render() {
        let editItems = this.props.editData;
        let keyItems = this.props.keyData;
        const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
        const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container'
        return (
            <div>
              <Row style={{paddingTop: '20px', textAlign: 'center'}}>
                <Col xs={10}></Col>
                <Col xs={2}>
                <Button bsStyle="primary" onClick={this.modalToggle}>
                    <FontAwesome name='edit' />
                </Button>
                 
                </Col>
              </Row>
              <div className={containerClass}>
                    <div className='modal-header'>
                        Edit Todo
                    </div>
                    <div className='modal-body'>
                    <div>
                    <form>    
                      <input
                      type="text"   value={this.state.editTitle} onChange={(e)=> this.setState({editTitle: e.target.value})}
                                    placeholder="Title"/>
                      <br/>
                      <br/>
                      <input 
                      type="date"   value={this.state.editDate} onChange={(e)=> this.setState({editDate: e.target.value})}
                                    placeholder="Finish time"/>
                      <br/>
                      <br/>
                      <textarea 
                      type="text"   value={this.state.editDescription} onChange={(e)=> this.setState({editDescription: e.target.value})}
                                    placeholder="your description"/>

                      <br/>
                      <br/>
                      <Button bsStyle="primary" bsSize="large" onClick={event => this.addClicked(event, keyItems)}>Edit</Button>
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

export default AddEditButton;