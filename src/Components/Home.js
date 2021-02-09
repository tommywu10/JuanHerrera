import React from 'react'

import Header from './Header'
import Footer from './Footer'

import recitalImage from '../images/recital.jpg'

export default function Home(){
    return (
        <div className="home-container">

            <div className="landing-page-container">
                <div className="landing-page-text">
                    <h1>Juan Herrera</h1>
                    <h2>Percussion</h2>
                </div>
            </div>

            <Header />
            <img src={recitalImage} alt="Juan's recital" />
            <Footer />
        </div>
    )
}