// src/components/Footer.jsx
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © {currentYear} Mohamed Abusin. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>using React.js & Tailwind CSS</span>
          </div>

          <div className="text-sm text-gray-400">
            Full Stack Developer | Java | Spring Boot | React
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;