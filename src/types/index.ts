export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    deployment: string;
  };
  highlights: string[];
  links: {
    live?: string;
    demo?: string;
    github?: string;
    testCredentials?: {
      username: string;
      password: string;
    };
  };
  images: string[];
  workflow: string[];
  technicalDetails: {
    lines: string;
    files: string;
    apiEndpoints: string;
    databaseTables: string;
    moduleSystem: string;
    testingApproach: string;
  };
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  resume: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
}

export interface Skill {
  name: string;
  level?: number;
  category?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  graduationYear: string;
  gpa?: string;
  relevantCoursework?: string[];
  achievements?: string[];
}