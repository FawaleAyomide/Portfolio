import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Section/Home';
import Projects from './Section/Projects';
import Features from './Section/Features';
import Contact from './Section/Contact';

const Pages = () => {
  return (
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/features' element={<Features/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>} />
      </Routes>
  )
}

export default Pages;