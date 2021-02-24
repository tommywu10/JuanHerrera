import React from 'react'
import {Link} from "react-scroll"

export default function Header(){
    return (
        <div className="header-container">
            <nav className="nav-bar">
                <Link to="about" spy={true} smooth={true} duration={1000}>About</Link>
                <Link to="liminal" spy={true} smooth={true} duration={1000}>Liminal</Link>
                <Link to="contact" spy={true} smooth={true} duration={1750}>Contact</Link>
               
            </nav>
        </div>
    )
}