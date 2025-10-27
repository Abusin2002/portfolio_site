// src/App.jsx
import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <CodingProfiles />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;