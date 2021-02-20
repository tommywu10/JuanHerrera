import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faLocationArrow} from '@fortawesome/free-solid-svg-icons'
import cactus from '../images/cactus.jpg'

export default function Contact(){
    return (
        <div className="contact-container">
            <h1>Get in touch!</h1>
            <div className="contact-content">
                
                <div className="contact-info">
                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/>
                    <h3>juanherrera@smallpp.com</h3>
                </div>
                <div className="contact-info">
                    <FontAwesomeIcon icon={faLocationArrow} className="contact-icon"/>
                    <h3>Fredonia, NY</h3>
                </div>
                <h4>Currently accepting students for remote and in-person lessons.</h4>
            </div>
            
        </div>
    )
}