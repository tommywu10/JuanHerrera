import React from 'react';
import {Link} from 'react-router-dom'
import {FaFacebookSquare, FaInstagram, FaEnvelope} from "react-icons/fa"

export default function Footer(){
    return (
        <div className="footer-container">
            <p>JUAN HERRERA</p>
           <div className="footer-icon-container">
               <Link to="#"><FaFacebookSquare className="footer-icon" size="25px"/></Link>
               <Link to="#"><FaInstagram className="footer-icon" size="25px"/></Link>
               <Link to="#"><FaEnvelope className="footer-icon" size="25px"/></Link>
           </div>  
        </div>
    )
}