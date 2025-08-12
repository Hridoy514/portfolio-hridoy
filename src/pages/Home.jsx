import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
      <div>
        <Navbar></Navbar>
        <main className="bg-[#121212] text-white">
          <Hero />
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
        </main>
        <Footer></Footer>
      </div>
    );
};

export default Home;