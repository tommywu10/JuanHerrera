import React from 'react'

import Header from './Header'
import Footer from './Footer'

import {FaAngleDoubleDown} from "react-icons/fa"
import recitalImage from '../images/recital.jpg'

export default function Home(){
    return (
        <div className="home-container">

            <div className="landing-page-container">
                <div className="landing-page-text">
                    <h1>Juan Herrera</h1>
                    <h2>Percussion</h2>
                    <FaAngleDoubleDown id="landing-page-arrow"/>
                </div>
            </div>

            

            <div className="home-main-container">
                <Header />
                
                <div className="home-main-content">
                    <div className="home-text-left">
                        <p>Performer</p>
                        <p>Teacher</p>
                        <p>Innovator</p>
                    </div>
                    <img src={recitalImage} alt="Juan's recital" />

                </div>
                
            </div>
            <Footer />
        </div>
    )
}