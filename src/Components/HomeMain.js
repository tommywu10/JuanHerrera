import React from 'react'
import recitalImage from '../images/recital.jpg'

const HomeMain = () => {
    return (
        <div className="home-main-container">
                <div className="home-main-content">
                    <div className="home-main-text">
                        <p>Performer</p>
                        <p>Teacher</p>
                        <p>Innovator</p>
                    </div>
                    <img src={recitalImage} alt="Juan's recital" />

                </div>
            </div>
    )
}

export default HomeMain
