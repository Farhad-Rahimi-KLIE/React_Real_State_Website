import React from 'react'
import Agentbox from './Agentbox'
import web from '../images/main2.jpg'
import jeb from '../images/main3.jpg'
import teb from '../images/main4.jpg'
const Agent = () => {
  return (
    <div>
      <div className="agent">
        <div className="a-heading">
            <h1>Agent</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatem?</p>
        </div>
        <div className="b-container">
            <Agentbox web={web} name="Ali"/>
            <Agentbox web={jeb}  name="Developer"/>
            <Agentbox web={teb}  name="Rohan"/>
        </div>
      </div>
    </div>
  )
}

export default Agent
