import React from 'react'

import Header from './Header'
import Footer from './Footer'
import LandingPage from './LandingPage'
import About from './About'

import recitalImage from '../images/recital.jpg'

export default function Home(){
    return (
        <div className="home-container">
            <LandingPage />
            
            <div className="home-main-container">
                <Header />
                <div className="home-main-content">
                    <div className="home-main-text">
                        <p>Performer</p>
                        <p>Teacher</p>
                        <p>Innovator</p>
                    </div>
                    <img src={recitalImage} alt="Juan's recital" />

                </div>
            </div>
        
            <About />
            <Footer />
        </div>
    )
}