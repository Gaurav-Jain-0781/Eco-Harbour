import React from 'react'
import {FaArrowRight} from 'react-icons/fa'

import HeroImage from '../images/logo.png'

const Hero = () => {

  return (
    <section id='hero'>
        <div id='hero-image'>
            <img src={HeroImage} alt='Hero Text'></img>
        </div>
        <div id='hero-content'>
            <h4>Navigating Tomorrow's Oceans Today</h4>
            <h1>Welcome to a Community that Grows Together, Sails Together</h1>
            <button className='btn'>Join Us</button>
            <FaArrowRight id='arrow'/>
        </div>
    </section>
  )
}

export default Hero
