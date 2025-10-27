// src/components/CodingProfiles.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const CodingProfiles = () => {
  const profiles = [
    {
      name: 'GitHub',
      icon: Github,
      href: portfolioData.codingProfiles.github,
      description: 'Check out my projects and contributions',
      color: 'gray'
    },
    {
      name: 'LeetCode',
      icon: Code,
      href: portfolioData.codingProfiles.leetcode,
      description: 'View my DSA problem-solving journey',
      color: 'orange'
    },
    {
      name: 'HackerRank',
      icon: Trophy,
      href: portfolioData.codingProfiles.hackerrank,
      description: 'See my coding challenges and certificates',
      color: 'green'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      gray: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700',
      orange: 'bg-orange-100 dark:bg-orange-900 text-orange-900 dark:text-orange-100 hover:bg-orange-200 dark:hover:bg-orange-800',
      green: 'bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800'
    };
    return colors[color] || colors.gray;
  };

  return (
    <section id="coding-profiles" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Coding Profiles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Connect with me on these platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-xl shadow-lg transition-all duration-300 ${getColorClasses(profile.color)}`}
            >
              <div className="text-center">
                <profile.icon size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{profile.name}</h3>
                <p className="text-sm opacity-80">{profile.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;