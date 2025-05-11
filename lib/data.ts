import html from "@/assets/imgs/Skills/html.png";
import css from "@/assets/imgs/Skills/css.png";
import js from "@/assets/imgs/Skills/js.png";
import cpp from "@/assets/imgs/Skills/c++.png";
import bootstrap from "@/assets/imgs/Skills/bootstrap.png";
import mui from "@/assets/imgs/Skills/mui.png";
import tailwind from "@/assets/imgs/Skills/tailwind.png";
import sass from "@/assets/imgs/Skills/sass.png";
import react from "@/assets/imgs/Skills/react.png";
import next from "@/assets/imgs/Skills/next.png";
import react_router from "@/assets/imgs/Skills/react-router.png";
import vuejs from "@/assets/imgs/Skills/vuejs.png";
import node from "@/assets/imgs/Skills/nodejs.png";
import express from "@/assets/imgs/Skills/express.png";
import mongodb from "@/assets/imgs/Skills/mongodb.png";
import mysql from "@/assets/imgs/Skills/mysql.png";
import firebase from "@/assets/imgs/Skills/fireabse.png";
import heroku from "@/assets/imgs/Skills/heroku.png";
import github from "@/assets/imgs/Skills/github.png";
import vercel from "@/assets/imgs/Skills/vercel.png";
import git from "@/assets/imgs/Skills/git.png";

import finTracker from "@/assets/imgs/portfolio/fintrackerio.png";
import eseba from "@/assets/imgs/portfolio/certi.png";
import shareRide from "@/assets/imgs/portfolio/shareRide.png";
import netflix from "@/assets/imgs/portfolio/netflix.png";
import numberGuess from "@/assets/imgs/portfolio/numberGuess.png";
import weather from "@/assets/imgs/portfolio/weather.png";
import management from "@/assets/imgs/portfolio/management.png";
import powerOdd from "@/assets/imgs/portfolio/powerOdd.png";
import openai from "@/assets/imgs/portfolio/openai.png";

import fed from "@/assets/imgs/Others/FED.jpeg";
import pwj from "@/assets/imgs/Others/PWJ.jpeg";
import rb from "@/assets/imgs/Others/RB.jpeg";
import mine from "@/assets/imgs/portfolio/mine.png";

// Skills data

export const skills = {
  frontend: [
    {
      name: "HTML",
      icon: html,
      color: "bg-orange-50 dark:bg-orange-800/20",
      description:
        "Strong command of semantic HTML, accessibility standards, and modern structuring techniques.",
      level: 95,
    },
    {
      name: "CSS",
      icon: css,
      color: "bg-blue-50 dark:bg-blue-800/20",
      description:
        "Skilled in responsive layouts, animations, flexbox, grid systems, and cross-browser styling.",
      level: 90,
    },
    {
      name: "React.Js",
      icon: react,
      color: "bg-cyan-50 dark:bg-cyan-800/20",
      description:
        "Advanced experience in building scalable and performant SPAs with React and modern hooks.",
      level: 90,
    },
    {
      name: "React Router",
      icon: react_router,
      color: "bg-indigo-50 dark:bg-indigo-800/20",
      description:
        "Efficiently manage navigation and dynamic routing in React applications.",
      level: 80,
    },
    {
      name: "Next.js",
      icon: next,
      color: "bg-gray-100 dark:bg-gray-700/30",
      description:
        "Built production-ready SSR and SSG applications with API routes and app directory.",
      level: 85,
    },
    {
      name: "Vue.js",
      icon: vuejs,
      color: "bg-green-50 dark:bg-green-800/20",
      description:
        "Implemented features using Vue 2/3, Vuex store, and component-driven UI patterns.",
      level: 85,
    },
    {
      name: "Tailwind Css",
      icon: tailwind,
      color: "bg-sky-50 dark:bg-sky-800/20",
      description:
        "Rapidly developed UI with utility-first classes and custom theme configuration.",
      level: 90,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
      color: "bg-purple-50 dark:bg-purple-800/20",
      description:
        "Experienced with layout, utility classes, and component customization using Bootstrap.",
      level: 85,
    },
    {
      name: "Material UI",
      icon: mui,
      color: "bg-indigo-50 dark:bg-indigo-800/20",
      description:
        "Styled React apps using MUI components and theme overrides for professional UIs.",
      level: 70,
    },
    {
      name: "Sass",
      icon: sass,
      color: "bg-pink-50 dark:bg-pink-7/20",
      description:
        "Used variables, mixins, and nesting to write clean, maintainable CSS.",
      level: 70,
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: node,
      color: "bg-lime-50 dark:bg-lime-800/20",
      description:
        "Built scalable backend services with Node.js and asynchronous I/O patterns.",
      level: 75,
    },
    {
      name: "Express.js",
      icon: express,
      color: "bg-gray-100 dark:bg-gray-800/20",
      description:
        "Developed REST APIs, middleware, and authentication flows using Express.",
      level: 80,
    },
    {
      name: "MongoDB",
      icon: mongodb,
      color: "bg-green-50 dark:bg-green-800/20",
      description:
        "Experienced in schema-less design and CRUD operations using Mongoose.",
      level: 70,
    },
    {
      name: "MySQL",
      icon: mysql,
      color: "bg-yellow-50 dark:bg-yellow-800/20",
      description:
        "Designed relational schemas, optimized queries, and managed joins and indexes.",
      level: 75,
    },
  ],
  hosting: [
    {
      name: "Firebase",
      icon: firebase,
      color: "bg-amber-50 dark:bg-amber-800/20",
      description:
        "Used Firebase Auth, Firestore, and Hosting to deploy and manage web apps.",
      level: 80,
    },
    {
      name: "Heroku",
      icon: heroku,
      color: "bg-purple-50 dark:bg-purple-800/20",
      description:
        "Deployed full-stack apps with Procfile, environment variables, and add-ons.",
      level: 70,
    },
    {
      name: "Github Pages",
      icon: github,
      color: "bg-gray-100 dark:bg-gray-800/20",
      description:
        "Published static frontend projects and portfolios via GitHub Pages.",
      level: 80,
    },
    {
      name: "Vercel",
      icon: vercel,
      color: "bg-slate-100 dark:bg-slate-800/20",
      description:
        "Deployed Next.js apps with seamless CI/CD and custom domains on Vercel.",
      level: 90,
    },
  ],
  language: [
    {
      name: "JavaScript",
      icon: js,
      color: "bg-yellow-50 dark:bg-yellow-800/20",
      description:
        "Expert in ES6+, async programming, DOM manipulation, and frameworks.",
      level: 90,
    },
    {
      name: "C++",
      icon: cpp,
      color: "bg-indigo-50 dark:bg-indigo-800/20",
      description:
        "Good understanding of OOP, STL, and algorithmic problem solving in C++.",
      level: 75,
    },
  ],
  version_control: [
    {
      name: "Git",
      icon: git,
      color: "bg-rose-50 dark:bg-rose-800/20",
      description:
        "Proficient in Git workflows including branching, merging, and conflict resolution.",
      level: 95,
    },
  ],
};

// Projects data
export const projects = [
  {
    id: "project1",
    title: "Fintracker",
    description:
      "Finance tracking app for recording all income and expense of each date, month & year. Includes charts for visualizing data and a user-friendly interface.",
    image: finTracker,
    technologies: ["Next.JS", "Tailwind Css", "Express.js", "MySql"],
    liveUrl: "Next.JS, Tailwind Css, Express.js, MySql.",
    // repoUrl: "https://github.com/shounaksarker",
  },
  {
    id: "project2",
    title: "Certificate Validation",
    description:
      "People of the ward applied and get councilor's certificates through this app. It includes a dashboard for councilors to manage applications and certificates.",
    image: eseba,
    technologies: ["Next.JS", "Tailwind Css", "Laravel", "MySql"],
    liveUrl: "https://eseba-chittarajandas.vercel.app",
    // repoUrl: "https://github.com/shounaksarker",
  },
  {
    id: "project3",
    title: "Share Ride",
    description:
      "People who use Pathao bike/car ride, can share their live location and details with others.",
    image: shareRide,
    technologies: ["React", "Tailwind", "React-leaflet (Map)", "Rest API"],
    liveUrl: "https://pages.pathao.com/share-ride/YY75g6H7cT7AKXnnTY3Cwg==",
    // repoUrl: "https://github.com/shounak/weather",
  },
  {
    id: "project4",
    title: "Netflix Clone",
    description:
      "A website where user can watch the trailer of new trendy movie or series. It includes a user-friendly interface and responsive design.",
    image: netflix,
    technologies: ["React", "Firebase", "Flex-box", "React-youtube"],
    liveUrl: "https://netflix-snk.web.app/",
    repoUrl: "https://github.com/shounaksarker/Netflix-clone",
  },
  {
    id: "project5",
    title: "Number Guessing Game",
    description:
      "A simple number guessing game where users try to guess a randomly generated number within a limited number of attempts. Features user-friendly interface and fun.",
    image: numberGuess,
    technologies: ["React", "React-router", "Bootstrap"],
    liveUrl: "https://number-guess-snk.netlify.app/",
    repoUrl: "https://github.com/shounaksarker/Number-guess-game",
  },
  {
    id: "project6",
    title: "Weather App",
    description:
      "A weather application that provides real-time weather information for any location. Users can search for cities and view current conditions, forecasts, and more.",
    image: weather,
    technologies: ["React", "Bootstrap", "OpenWeatherMap API"],
    liveUrl: "https://web-app-snk.netlify.app/",
    repoUrl: "https://github.com/shounaksarker/weatherApp",
  },
  {
    id: "project7",
    title: "Bill Management System",
    description:
      "A management app for tracing all income and expense of a religious organization. It includes a dashboard for managing bills and a user-friendly interface.",
    image: management,
    technologies: [
      "Next.JS",
      "Firebase",
      "TypeScipt",
      "Tailwind Css",
      "Prisma",
    ],
    liveUrl: "https://temp-manage.vercel.app/",
    repoUrl: "https://github.com/shounaksarker/ManagementApp",
  },
  {
    id: "project8",
    title: "OTP - authentication",
    description:
      "Signup Through Phone OTP. A simple OTP authentication system that allows users to sign up using their phone numbers. It sends a one-time password (OTP) to the user's phone for verification.",
    image: powerOdd,
    technologies: ["React", "Firebase", "Bootstrap", "React Router"],
    liveUrl: "https://phone-auth-snk.web.app/",
    repoUrl: "https://github.com/shounaksarker/phone-authentication",
  },
  {
    id: "project9",
    title: "Image by AI",
    description:
      "An AI-powered image generation app that allows users to create images based on text prompts. It uses OpenAI's DALL-E API to generate images.",
    image: openai,
    technologies: ["React.js", "Tailwind Css", "Express.js", "OpenAI"],
    liveUrl: "https://aipicgen.onrender.com/",
    repoUrl: "https://github.com/shounaksarker/ai-image-generator",
  },
];

// Achievements data
export const achievements = {
  certificates: [
    {
      title: "Introduction of Frontend development",
      issuer: "Coursera",
      date: "2023",
      grade: "93.4%",
      image: fed,
    },
    {
      title: "Programming With JavaScript",
      issuer: "Coursera",
      date: "2022",
      grade: "95.3%",
      image: pwj,
    },
    {
      title: "React Basic",
      issuer: "Coursera",
      date: "2023",
      grade: "97.5%",
      image: rb,
    },
  ],
  awards: [
    {
      title: "Showing the project 'E-sheba'",
      organization:
        "infront of the Mayor of Dhaka South City Corporation, MP and Councilor",
      // description: "2022",
      image: mine,
    },
  ],
};

// Education data
export const education = [
  {
    degree: "B.Sc in Electronics & Communication Engineering",
    institution: "Institute of Science & Technology",
    startYear: "2018",
    endYear: "2021",
    description:
      "Studied core subjects like digital systems, embedded programming, and communication theory, with a growing focus on software development and web technologies. Completed several web-based academic projects.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt. Science College",
    startYear: "2016",
    endYear: "2017",
    description:
      "Completed the science curriculum with emphasis on mathematics and physics. Participated in IT-related extracurricular activities and programming contests.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Motijheel Govt. Boys' High School",
    startYear: "2011",
    endYear: "2015",
    description:
      "Built a strong foundation in science and logical reasoning. Actively involved in school-level tech events and computer literacy programs.",
  },
];

export const experience = [
  {
    position: "Software Engineer-I",
    company: "Pathao Ltd.",
    startDate: "Jul, 2024",
    endDate: null, // Present
    description: [
      "Extended the ride-sharing feature to rental rides and auto (Tuktuk) rides in Nepal’s cities, broadening service offerings.",
      "Redesigned the UI for BNPL (Buy Now Pay Later) and Pathao Points, improving visual appeal and user accessibility for key user-facing modules.",
      "Developed APIs and created logic to support platform's ongoing innovation.",
      "Identified and fixed errors in multiple projects, ensuring a high level of user satisfaction and system stability.",
    ],
    technologies: ["Vue.js", "Vuex", "JavaScript", "Node.js"],
  },
  {
    position: "Associate Software Engineer",
    company: "Pathao Ltd.",
    startDate: "Apr, 2024",
    endDate: "Jun, 2024",
    description: [
      "Developed the ride-sharing feature for bike and car rides on the web platform, enhancing the user experience.",
      "Implemented new features on existing projects, driving continuous product improvement.",
      "Refactored functions and optimized code to enhance performance and maintainability.",
    ],
    technologies: ["Vue.js", "JavaScript", "Firebase", "Node.js"],
  },
  {
    position: "Intern Software Engineer",
    company: "Pathao Ltd.",
    startDate: "Dec, 2023",
    endDate: "Mar, 2024",
    description: [
      "Learned and applied Vue.js, Vuex, and many more in real-world projects.",
      "Assisted in resolving issues across various projects, improving system reliability.",
      "Fixed errors and bugs in dashboards, contributing to smoother project operations.",
    ],
    technologies: ["Vue.js", "Vuex", "JavaScript"],
  },
  {
    position: "Frontend Developer",
    company: "Devfirm Ltd.",
    startDate: "Jun, 2023",
    endDate: "Nov, 2023",
    description: [
      "Developed E-commerce functionalities such as shopping cart and admin dashboard, making the process 40% faster than before.",
      "Developed and designed a responsive company website that increased user engagement by 30%.",
      "Integrated Firebase for real-time data storage and collaborated with teams to meet client expectations.",
    ],
    technologies: ["React.js", "Firebase", "Tailwind CSS", "JavaScript"],
  },
];
