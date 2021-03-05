import React from 'react'
import {FaAngleDoubleDown} from "react-icons/fa"
import {Link} from "react-scroll"
import {fadeIn} from 'react-animations'
import styled from 'styled-components'

export default function LandingPage(){

    return (
        <div className="landing-page-container">
            <div className="landing-page-text animate__animated animate__fadeIn">
                <h1>Juan Herrera</h1>
                <h2>Percussion</h2>
                <Link to="home-main" className="down-arrow" spy={true} smooth={true} duration={1000}><FaAngleDoubleDown id="landing-page-arrow"/></Link>
            </div>
        </div>
    )
}