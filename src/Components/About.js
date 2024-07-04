import React from 'react'
import web from '../images/main1.jpg'
const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-mode">
            <img src={web} alt="" />
        </div>
        <div className="about-text">
            <h2>We Are the Best <br /> Real State Company </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Dolor cumque accusamus ea suscipit deleniti non pariatur
                  facilis aperiam laboriosam quisquam!</p>
                  <button>View More Details</button>
        </div>
      </div>
    </div>
  )
}

export default About
