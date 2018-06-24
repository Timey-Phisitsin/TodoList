import React, {Component} from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import './css/AvatarSpin.css'
import Date from './Date'
class Avatar extends Component {
    render() {
        return (
            <div style={{paddingTop: '10px',textAlign: 'center'}}>
                  <div className="circle-container">
                    <div className="outer-ring"></div>
                    <div className="circle">
                      <div className="front">
                      <img style={{width: '170px', height: '170px'}} src={require('./icon/scale360.png')} />
                      </div>
                      <div className="back">
                        <br/>
                        <Date/>
                      </div>
                    </div>
                  </div>
            </div>
        )
    }
}

export default Avatar