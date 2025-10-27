// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "I'm Abu, a passionate Full Stack Developer...";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
            >
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  Profile Photo
                </span>
              </div>
            </motion.div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {portfolioData.personal.name}
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {portfolioData.personal.title}
            </motion.h2>

            {/* Typing Effect */}
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto min-h-[2rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </motion.p>
          </div>

          {/* Location */}
          <motion.p 
            className="text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Based in {portfolioData.personal.location}
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href={portfolioData.personal.resumeLink}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              <Download size={20} />
              View Resume
            </motion.a>
            
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              <Mail size={20} />
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;