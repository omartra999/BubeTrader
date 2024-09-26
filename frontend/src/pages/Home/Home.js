import React from 'react'
import { Header, AboutUs, Simulation, WhyBube, Contact, Navbar, Footer } from '../../components'

function Home() {
  return (
    <div className='home-container'>
        <Navbar />
       <div id='header'> <Header /></div>
       <div id='about-us'><AboutUs /></div>
       <div id='simulation'> <Simulation /></div>
       <div id='why-bube'> <WhyBube /></div>
       <div id='contact'><Contact /></div>
       <Footer />

    </div>
  )
}

export default Home