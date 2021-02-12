import React from 'react'
import logo from "../images/liminal-space-logo.png"

export default function LiminalSpace(){
    return (
        <div className="liminal-space-container">
            
            <div className="liminal-space-left">
                <p>The word liminal comes from the Latin word limen, meaning threshold – any point or place of entering or beginning. A liminal space is the time between the ‘what was’ and the ‘next.’ It is a place of transition, waiting, and not knowing. Classical music audiences have been dwindling for generations due to loss of interest in 2020’s fast paced world. Liminal Space Ensemble leans into this rapid change and offers a new model for enjoying classical music with the belief that the future of our industry is in reflecting programming choices for diverse audiences, and showing that classical music is by and for everyone.
                <br></br>
                <br></br>
                Based in Buffalo, NY, Liminal Space Ensemble was founded in August 2019 by Nicole Murray (flute) and Hope Wilk (harp) and features a core artist lineup of the top chamber musicians in the area; Nicole Murray (flute), Josh Lauretig (oboe), Spencer Reese (clarinet), Jared Yackiw (saxophone), Hope Wilk (harp), Madeline Olsen (harp), Ben Havey (piano), Juan Herrera (percussion), John Smigielski (percussion), Evan Courtin (violin), Shannon Reilly (violin), Isa Constanza (viola), Bob Donowick (viola), Alex Cousins (cello), and Jonathan Borden (bass). When not performing with LSE, members can be found performing with the Buffalo Philharmonic Orchestra, Buffalo Chamber Players, and several other prestigious ensembles. LSE’s musicians represent the top music conservatories in the world including Curtis, Juilliard, Peabody, Manhattan School of Music, San Francisco Conservatory of Music, New England Conservatory, and the Glenn Gould School of Music at the Royal Conservatory.</p>
            </div>
            <div className="liminal-space-right">
                <img id="liminal-logo" src={logo} alt="logo" />
            </div>
        </div>
    )
}