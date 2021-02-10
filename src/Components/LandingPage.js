import React from 'react'
import {FaAngleDoubleDown} from "react-icons/fa"

export default function LandingPage(){

    return (
        <div className="landing-page-container">
            <div className="landing-page-text">
                <h1>Juan Herrera</h1>
                <h2>Percussion</h2>
                <FaAngleDoubleDown id="landing-page-arrow"/>
            </div>
        </div>
    )
}