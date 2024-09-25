import React from 'react'
import { Header, AboutUs, Simulation, WhyBube, Contact } from '../../components'

function Home() {
  return (
    <div className='home-container'>
        <Header />
        <AboutUs />
        <Simulation />
        <WhyBube />
        <Contact />

    </div>
  )
}

export default Home