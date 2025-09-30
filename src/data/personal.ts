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
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" }
];