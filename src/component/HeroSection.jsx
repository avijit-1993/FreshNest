import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div>
      <div className='hero-text text-center'>
        <h3>Welcome to our shop</h3>
        <h1>From Farm to Fork <br/>Without the Fuss</h1>
        <Link className='button' to="/product">SHOP NOW</Link>
      </div>
    </div>
  )
}

export default HeroSection
