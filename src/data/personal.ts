import { PersonalInfo, ContactInfo, Skill } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Michael Tang",
  title: "Software Developer & Problem Solver",
  bio: "I'm a developer who enjoys tackling challenges and building solutions that actually help people. Whether it's creating a fitness app or designing a smooth user experience, I focus on making technology work better for everyone."
};

export const contactInfo: ContactInfo = {
  email: "michaeltang00@gmail.com",
  github: "https://github.com/mtang00",
  linkedin: "https://www.linkedin.com/in/michael-tang123/",
  resume: "./resume.pdf"
};

export const skills: Skill[] = [
  // Frontend Technologies
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "HTML5 & CSS3", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "Responsive Design", category: "frontend" },
  
  // Backend & Database
  { name: "PHP", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "SQLite", category: "database" },
  { name: "REST APIs", category: "backend" },
  
  // Tools & DevOps
  { name: "Git & GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Vite", category: "tools" },
  { name: "GitHub Actions", category: "tools" },
  { name: "ESLint & Prettier", category: "tools" },
  
  // Development Practices
  { name: "Progressive Web Apps", category: "concepts" },
  { name: "Mobile-First Design", category: "concepts" },
  { name: "Component Architecture", category: "concepts" },
  { name: "Performance Optimization", category: "concepts" }
];