// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', skills: portfolioData.skills.languages, color: 'blue' },
    { title: 'Frameworks', skills: portfolioData.skills.frameworks, color: 'green' },
    { title: 'Tools', skills: portfolioData.skills.tools, color: 'purple' },
    { title: 'Concepts', skills: portfolioData.skills.concepts, color: 'orange' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
      green: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      purple: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
      orange: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-4 py-2 rounded-lg font-medium ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;