import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// Import components directly to ensure they are available for scrolling/routing
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Handle URL "Routing" to sections
  useEffect(() => {
    // Small delay to ensure DOM is ready and layout is stable
    const timer = setTimeout(() => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      let targetId = '';

      if (path === '/contact') targetId = 'contact';
      else if (path === '/about') targetId = 'about';
      else if (path === '/events') targetId = 'events';
      else if (hash) targetId = hash.replace('#', '');

      if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100); // 100ms delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-black min-h-screen text-white font-body selection:bg-retro-primary selection:text-white pt-14 md:pt-0">
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
