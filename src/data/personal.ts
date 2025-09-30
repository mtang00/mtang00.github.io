import { PersonalInfo, ContactInfo, Skill } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Michael Tang",
  title: "Software Developer & Portfolio Showcase",
  bio: "Brief introduction about yourself and your passion for development."
};

export const contactInfo: ContactInfo = {
  email: "michaeltang00@gmail.com",
  github: "https://github.com/mtang00",
  linkedin: "https://www.linkedin.com/in/michael-tang123/",
  resume: "./resume.pdf"
};

export const skills: Skill[] = [
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" }
];