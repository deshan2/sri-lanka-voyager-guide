
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from './Chatbot';

const Layout: React.FC = () => {
  // Always start in dark mode
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Initialize smooth scrolling with lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Using only properties supported by LenisOptions
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Add animation observers for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          entry.target.classList.remove('hidden');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section-fade-in').forEach((section) => {
      observer.observe(section);
    });

    // Set initial dark mode
    document.documentElement.classList.add('dark');
    document.documentElement.classList.add('lenis');

    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Layout;
