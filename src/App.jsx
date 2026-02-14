import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LazyLoadSection from './components/LazyLoadSection';

// Lazy Load Heavy Components
const About = lazy(() => import('./components/About'));
const Events = lazy(() => import('./components/Events'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading Fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen bg-black text-white">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-retro-primary"></div>
  </div>
);

function App() {
  return (
    <div className="relative bg-black min-h-screen text-white font-body selection:bg-retro-primary selection:text-white pt-14 md:pt-0">
      {/* Global Grain Overlay */}
      <div className="grain-overlay fixed inset-0 pointer-events-none z-[100] opacity-20"></div>

      <Navbar />
      <Hero />

      <Suspense fallback={<LoadingSpinner />}>
        <LazyLoadSection placeholderHeight="100vh">
          <About />
        </LazyLoadSection>

        <LazyLoadSection placeholderHeight="400vh">
          <Events />
        </LazyLoadSection>

        <LazyLoadSection placeholderHeight="100vh">
          <Contact />
        </LazyLoadSection>

        <LazyLoadSection placeholderHeight="400px">
          <Footer />
        </LazyLoadSection>
      </Suspense>
    </div>
  );
}

export default App;
