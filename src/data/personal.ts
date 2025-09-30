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
  { name: "React.js", category: "frontend" },
  { name: "React Native", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "HTML5 & CSS3", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "Responsive Design", category: "frontend" },
  
  // Backend Technologies
  { name: "Python", category: "backend" },
  { name: "Rust", category: "backend" },
  { name: "C#", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "ASP.NET Core", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "REST APIs", category: "backend" },
  
  // Database Technologies
  { name: "MongoDB", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "Microsoft SQL Server", category: "database" },
  
  // Cloud & DevOps
  { name: "AWS", category: "tools" },
  { name: "AWS EC2", category: "tools" },
  { name: "Git & GitHub", category: "tools" },
  { name: "Vite", category: "tools" },
  { name: "GitHub Actions", category: "tools" },
  { name: "ESLint & Prettier", category: "tools" },
  
  // Operating Systems
  { name: "Linux", category: "tools" },
  { name: "Unix", category: "tools" },
  { name: "Windows", category: "tools" },
  
  // Specialized Technologies
  { name: "3D Image Processing", category: "concepts" },
  { name: "DICOM Medical Imaging", category: "concepts" },
  { name: "AI-Assisted Segmentation", category: "concepts" },
  { name: "PDF Generation", category: "concepts" },
  { name: "Cross-Platform Development", category: "concepts" },
  { name: "Performance Optimization", category: "concepts" }
];