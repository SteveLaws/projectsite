import React, { useEffect } from 'react';
import './App.css';
// npm i aos --save >> "AOS" UPPERCASE 
import AOS from 'aos';
// must add css link
import 'aos/dist/aos.css';
import Hero from './components/Hero.js';
import Header from './components/Header.js';
import Bio from './components/Bio';
import Resume from './components/Resume.js';
import Certifications from './components/Certifications.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

export default function App() {
  
  return (
    <>
    <Header />  
    <main id="main">
      <Hero data-aos="fade-up"/>
      <Bio data-aos="fade-up"/>
      <Resume data-aos="fade-up"/>
      <Projects data-aos="fade-up"/>
      <Certifications data-aos="fade-up"/>
      <Contact data-aos="fade-up"/>
    </main>
    </>
  )
};
 
