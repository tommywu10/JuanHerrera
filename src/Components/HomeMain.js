import React from 'react'
import recitalImage from '../images/recital.jpg'
import Header from './Header'

const HomeMain = () => {
    return (
        <div className="home-main-container" id="home-main">
            <Header />
                <div className="home-main-content">
                    <img src={recitalImage} alt="Juan's recital" />
                </div>
                <div className="home-main-text">
                    <p>Performer</p>
                    <p>Teacher</p>
                    <p>Innovator</p>
                </div>
            </div>
    )
}

export default HomeMain
