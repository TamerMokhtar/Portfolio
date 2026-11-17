export const GITHUB = 'https://github.com/TamerMokhtar';
export const LINKEDIN = 'https://www.linkedin.com/in/tamer-mokhtar';
// Assembled at runtime so the address isn't a plain string in the page source (light scraper protection).
export const EMAIL = ['tamer.ashur.mokhtar', 'gmail.com'].join('@');

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

import problemSolvingImg from './assets/cert-problem-solving.png';
import nodeBootcampImg from './assets/cert-nodejs-bootcamp.jpg';

export const certifications = [
  {
    title: 'Certificate of Problem Solving & Competitive Programming',
    issuer: 'Coach Academy EG',
    image: problemSolvingImg,
    imageAlt: 'Coach Academy Problem Solving certificate for Tamer Mokhtar',
    description:
      'Completed intensive C++ training covering fundamentals, conditions, loops, arrays, strings, functions, recursion, complexity analysis (Big-O), and the Standard Template Library (STL) with dynamic memory management.',
    tags: ['C++', 'STL', 'Recursion', 'Big-O'],
  },
  {
    title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
    issuer: 'Udemy',
    instructor: 'Jonas Schmedtmann',
    date: 'Jan 23, 2025',
    image: nodeBootcampImg,
    imageAlt: 'Udemy certificate of completion for the Node.js, Express, MongoDB & More bootcamp',
    description:
      'Comprehensive 42-hour bootcamp covering the full back-end stack: Node.js internals, Express framework, RESTful API design (filtering, sorting, pagination), MongoDB & Mongoose (including advanced features and geospatial data), MVC architecture, JWT authentication, security best practices (encryption, sanitization, rate limiting), and Stripe payment integration.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe'],
  },
];

export const softSkills = [
  'Strong Communication',
  'Analytical Thinking',
  'Problem Solving',
  'Presentation Skills',
  'Well-Organized',
  'Teamwork & Collaboration',
];

export const facts = [
  ['Location', 'New Cairo, Egypt'],
  ['Role', 'Backend Software Engineer'],
  ['Education', 'BSc Computer Science, AASTMT'],
  ['Focus', 'APIs, auth, real-time'],
];

export const skills = [
  { title: 'Backend', tags: ['Node.js', 'Express', 'REST APIs', 'Socket.IO', 'JWT Auth', 'RBAC'] },
  { title: 'Databases', tags: ['MongoDB', 'Mongoose', 'PostgreSQL'] },
  { title: 'Frontend', tags: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS', 'EJS'] },
  { title: 'Tooling', tags: ['Git', 'GitHub', 'Postman', 'VS Code', 'Cursor', 'npm'] },
];

export const filters = [
  { key: 'all', label: 'All' },
  { key: 'api', label: 'APIs' },
  { key: 'fullstack', label: 'Full-stack' },
  { key: 'realtime', label: 'Real-time' },
  { key: 'cli', label: 'CLI' },
];

const lang = {
  HTML: '#e34c26',
  JavaScript: '#f1e05a',
  EJS: '#a91e50',
};

export const projects = [
  {
    name: 'Natours',
    featured: true,
    language: 'HTML',
    cats: ['api', 'fullstack'],
    description: 'REST API for a tour-booking platform, built with Node.js, Express and MongoDB.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    url: 'https://github.com/TamerMokhtar/Natours',
  },
  {
    name: 'PERN Stack Cars Store',
    featured: true,
    language: 'JavaScript',
    cats: ['fullstack'],
    description: 'Preconfigured PERN starter (PostgreSQL, Express, React, Node.js) with example apps and a monorepo layout.',
    tags: ['PostgreSQL', 'Express', 'React', 'Node.js'],
    url: 'https://github.com/TamerMokhtar/PERN-Stack-Cars-Store',
  },
  {
    name: 'Course Express',
    featured: true,
    language: 'JavaScript',
    cats: ['api'],
    description: 'API for managing courses and users with authentication, authorization and role-based access control.',
    tags: ['Express', 'Auth', 'RBAC'],
    url: 'https://github.com/TamerMokhtar/Course-Express',
  },
  {
    name: 'Socket.IO Chat Application',
    language: 'HTML',
    cats: ['realtime', 'fullstack'],
    description: 'Real-time chat app built with Socket.IO, Express and Node.js, including typing indicators.',
    tags: ['Socket.IO', 'Express', 'Node.js'],
    url: 'https://github.com/TamerMokhtar/Socket.IO-Chat-Application',
  },
  {
    name: 'Crash Course Node.js',
    language: 'EJS',
    cats: ['fullstack'],
    description: 'CRUD app that displays customer data from MongoDB, with a Node.js backend and EJS templates.',
    tags: ['Node.js', 'MongoDB', 'EJS'],
    url: 'https://github.com/TamerMokhtar/Crash-Course-Node-JS-',
  },
  {
    name: 'Node Farm',
    language: 'HTML',
    cats: ['fullstack'],
    description: 'Responsive web app that displays farm products and their details, served with plain Node.js.',
    tags: ['Node.js', 'HTML', 'Templating'],
    url: 'https://github.com/TamerMokhtar/Node-Farm',
  },
  {
    name: 'Courses Manager',
    language: 'JavaScript',
    cats: ['cli'],
    description: 'Command-line tool for adding and listing courses.',
    tags: ['Node.js', 'CLI'],
    url: 'https://github.com/TamerMokhtar/courses-manger',
  },
].map((p) => ({ ...p, color: lang[p.language] }));
