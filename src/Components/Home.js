import React from 'react'

import Footer from './Footer'
import LandingPage from './LandingPage'
import About from './About'
import LiminalSpace from './LiminalSpace'
import Contact from './Contact'
import HomeMain from './HomeMain'



export default function Home(){
    return (
        <div className="home-container">
            <LandingPage />
            <HomeMain />
            <About />
            <LiminalSpace />
            <Contact />
            <Footer />
        </div>
    )
}