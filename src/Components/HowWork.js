import React from 'react'
import jan from '../images/main5.jpg'
import khan from '../images/main6.jpg'
import mod from '../images/main7.jpg'
const HowWork = () => {
  return (
    <div>
      <div className="how-it-work">
        <div className="container">
            <h2>How it Work</h2>
            <div className="flex">
                <div>
                    <img src={jan} className='first' alt="" />
                    <h4>Find a Property</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div>
                    <img src={khan} className='second' alt="" />
                    <h4>Buy a Property</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div>
                    <img src={mod} className='third' alt="" />
                    <h4>Investing</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HowWork
