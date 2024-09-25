import React from 'react'
import { Header, AboutUs, Simulation, WhyBube } from '../../components'

function Home() {
  return (
    <div className='home-container'>
        <Header />
        <AboutUs />
        <Simulation />
        <WhyBube />

    </div>
  )
}

export default Home