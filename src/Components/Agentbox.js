import React from 'react'

const Agentbox = (props) => {
  return (
    <div>
      <div className="a-box">
        <div className="a-b-img">
            <img src={props.web} alt="" />
        </div>
        <div className="a-b-text">
            <h2>{props.name}</h2>
            <a href="" className='agent-btn'>Search More</a>
        </div>
      </div>
    </div>
  )
}

export default Agentbox
