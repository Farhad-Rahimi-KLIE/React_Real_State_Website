import React from 'react'
import web from '../images/main8.jpg';
const Home = () => {
  return (
    <div>
      <div className="div">
  <img src={web} alt="" className='pictures' />
</div>
<div className="intro">
  <p>Looking for a Property</p>
  <h1><span>Buy</span><span>And</span>Properties</h1>
  <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, enim!</p>
  <a href="" className='header-btn'>Details</a>
</div>
    </div>
  )
}

export default Home
