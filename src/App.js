import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import HowWork from "./Components/HowWork";
import About from "./Components/About";
import Agent from "./Components/Agent";
import Contact from "./Components/Contact";
const App = () => {

  return (
    <div className="App">
    <BrowserRouter>
  <Navbar title="Real_State" home="Home" about="HowWork" Agent="Agent" Contact="Contact"/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/HowWork" element={<HowWork/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Agent" element={<Agent/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App

