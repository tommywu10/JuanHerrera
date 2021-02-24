import React from 'react'
import {FaAngleDoubleDown} from "react-icons/fa"
import {Link} from "react-scroll"

export default function LandingPage(){

    return (
        <div className="landing-page-container">
            <div className="landing-page-text">
                <h1>Juan Herrera</h1>
                <h2>Percussion</h2>
                <Link to="home-main" className="down-arrow" spy={true} smooth={true} duration={1000}><FaAngleDoubleDown id="landing-page-arrow"/></Link>
            </div>
        </div>
    )
}