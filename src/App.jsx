import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from './components/profile/About';
import Index from './components/Index';
import Footer from './components/Footer/Footer';
import Project from './components/portfolio/Project';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Index/>} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Footer/>}/>
      
    </Routes>
   
  )
}

export default App