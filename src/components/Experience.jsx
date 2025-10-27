// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My journey in software development
          </p>
        </motion.div>

        {portfolioData.experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            {/* Timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
            
            <div className="relative pl-20 pb-12">
              {/* Icon */}
              <div className="absolute left-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Briefcase className="text-white" size={24} />
              </div>

              {/* Content */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.duration}
                    </span>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      {exp.period}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: (index * 0.3) + (achievementIndex * 0.1) }}
                      className="flex items-start text-gray-600 dark:text-gray-300"
                    >
                      <span className="text-blue-500 mr-2">•</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;