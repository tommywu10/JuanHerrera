import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(){
    return (
        <div className="header-container">
            <nav className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
               
            </nav>
        </div>
    )
}