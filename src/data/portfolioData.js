// src/data/portfolioData.js
export const portfolioData = {
  personal: {
    name: "Mohamed Abusin",
    shortName: "Abu",
    title: "Full Stack Developer | Java | Spring Boot | React | MySQL | DSA Enthusiast",
    location: "Tamil Nadu, India",
    intro: "I'm Abu, a passionate Full Stack Developer with expertise in building robust web applications using Java, Spring Boot, and React. I love solving complex problems and creating efficient, scalable solutions.",
    resumeLink: "/resume.pdf", // Replace with actual resume path
    profilePhoto: "/profile.jpg" // Replace with actual photo path
  },
  
  projects: [
    {
      id: 1,
      title: "Employee Task Management System",
      description: "A comprehensive task management system with role-based access control, real-time notifications, and performance analytics.",
      techStack: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
      liveDemo: "#",
      sourceCode: "https://github.com/abu0101/employee-task-management",
      image: "/project1.jpg"
    },
    {
      id: 2,
      title: "Freelancing Portfolio Platform",
      description: "A platform for freelancers to showcase their work, manage clients, and track projects with integrated payment system.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
      liveDemo: "#",
      sourceCode: "https://github.com/abu0101/freelance-platform",
      image: "/project2.jpg"
    },
    {
      id: 3,
      title: "Book Store Management App",
      description: "Inventory management system for bookstores with sales tracking, stock management, and customer relationship features.",
      techStack: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Bootstrap"],
      liveDemo: "#",
      sourceCode: "https://github.com/abu0101/bookstore-management",
      image: "/project3.jpg"
    },
    {
      id: 4,
      title: "Food Order App",
      description: "Food delivery application with restaurant management, order tracking, and real-time delivery updates.",
      techStack: ["React", "Spring Boot", "MySQL", "WebSocket"],
      liveDemo: "#",
      sourceCode: "https://github.com/abu0101/food-order-app",
      image: "/project4.jpg"
    }
  ],

  skills: {
    languages: ["Java", "JavaScript", "SQL", "HTML", "CSS"],
    frameworks: ["Spring Boot", "React.js", "Bootstrap", "Tailwind CSS"],
    tools: ["Git", "GitHub", "Postman", "Maven", "IntelliJ IDEA"],
    concepts: ["OOP", "REST APIs", "JWT Authentication", "DSA", "Microservices"]
  },

  experience: [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Tech Startup",
      duration: "2+ months",
      period: "2024",
      achievements: [
        "Developed and deployed RESTful APIs using Spring Boot and Java",
        "Integrated frontend React applications with backend services",
        "Optimized database queries improving performance by 40%",
        "Implemented JWT-based authentication and authorization",
        "Collaborated in agile development environment using Git"
      ]
    }
  ],

  certifications: [
    {
      id: 1,
      title: "Java Full Stack Development",
      platform: "Udemy",
      year: "2024",
      credential: "#"
    },
    {
      id: 2,
      title: "Spring Boot Microservices",
      platform: "Coursera",
      year: "2024",
      credential: "#"
    },
    {
      id: 3,
      title: "React.js Developer Certificate",
      platform: "freeCodeCamp",
      year: "2023",
      credential: "#"
    },
    {
      id: 4,
      title: "SQL Database Management",
      platform: "HackerRank",
      year: "2023",
      credential: "#"
    }
  ],

  codingProfiles: {
    github: "https://github.com/abu0101",
    leetcode: "https://leetcode.com/abu0101/",
    hackerrank: "#"
  },

  socialLinks: {
    linkedin: "https://linkedin.com/in/mohamed-abusin",
    github: "https://github.com/abu0101",
    email: "mailto:mohamed.abusin@example.com"
  }
};