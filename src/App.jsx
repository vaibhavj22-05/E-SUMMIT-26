import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative bg-black min-h-screen text-white font-body selection:bg-retro-primary selection:text-white">
      {/* Global Grain Overlay */}
      <div className="grain-overlay fixed inset-0 pointer-events-none z-[100] opacity-20"></div>

      <Navbar />
      <Hero />
      <About />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
