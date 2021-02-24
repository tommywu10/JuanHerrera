import React from 'react'
import {Link} from "react-scroll"

export default function Header(){
    return (
        <div className="header-container">
            <nav className="nav-bar">
                <Link to="home-main" spy={true} smooth={true} duration={1000}>Home</Link>
                <Link to="about" spy={true} smooth={true} duration={1000}>About</Link>
                <Link to="contact" spy={true} smooth={true} duration={1750}>Contact</Link>
               
            </nav>
        </div>
    )
}