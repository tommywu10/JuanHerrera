import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faLocationArrow, faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons'
import cactus from '../images/cactus.jpg'

export default function Contact(){
    return (
        <div className="contact-container" id="contact">
            <h1>Get in touch!</h1>
            <div className="contact-content">
                
                <div className="contact-info">
                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/>
                    <h3><a href= "mailto: juanherrera@smallpp.com">juanherrera@smallpp.com</a></h3>
                </div>
                <div className="contact-info">
                    <FontAwesomeIcon icon={faLocationArrow} className="contact-icon"/>
                    <h3><a href="https://goo.gl/maps/7SAfwiaveQphU76n9" target="_blank">Fredonia, NY</a></h3>
                </div>
                <div className="contact-info">
                    <FontAwesomeIcon icon={faPhoneSquareAlt} className="contact-icon"/>
                    <h3>911-420-6969</h3>
                </div>
                <h4>Currently accepting students for remote and in-person lessons.</h4>
            </div>
            
        </div>
    )
}