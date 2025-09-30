import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "fitness-tracker",
    title: "FitTracker Pro",
    description: "A comprehensive fitness tracking web application with workout management, social features, and goal tracking",
    longDescription: `FitTracker Pro is a full-stack fitness tracking application that provides users with comprehensive workout management, 
    exercise database with 800+ exercises, social features including friends and messaging, goal tracking across multiple categories, 
    weight tracking, workout templates, and leaderboard functionality. Built as a Progressive Web App with offline capabilities.`,
    
    technologies: [
      "Vanilla JavaScript",
      "PHP 7.4+", 
      "SQLite3",
      "ES6 Modules",
      "Progressive Web App",
      "Docker",
      "HTML5/CSS3"
    ],
    
    features: [
      "📊 Comprehensive workout tracking with timer and auto-save",
      "🏋️ 800+ exercise database with custom exercise creation",
      "🎯 Multi-category goal system (strength, cardio, body composition)",
      "👥 Social features: friends, messaging, groups",
      "⚔️ Fair competition system with Personal Best Consistency scoring",
      "📈 Advanced workout trends and personal analytics",
      "📋 Workout templates and favorites",
      "🏆 Multi-timeframe leaderboards (daily, weekly, monthly)",
      "📱 Progressive Web App with offline capabilities",
      "🔐 Secure authentication with remember me functionality"
    ],
    
    architecture: {
      frontend: "Single Page Application with ES6 modules and dynamic imports",
      backend: "PHP REST API with SQLite database",
      database: "SQLite3 with auto-migration system",
      deployment: "Docker containerization with cache-busting system"
    },
    
    highlights: [
      "Modular architecture with dependency injection",
      "Fair scoring algorithm comparing personal progress vs absolute performance",
      "Real-time social features with friend activity tracking",
      "Advanced analytics with personal averages and trend analysis",
      "Mobile-first responsive design with 44px touch targets",
      "Production deployment at fnctracker.com with 800+ exercises"
    ],
    
    links: {
      live: "https://fnctracker.com",
      demo: "https://fnctracker.com",
      testCredentials: {
        username: "test",
        password: "test"
      }
    },
    
    images: [
      "/assets/fitness-tracker-dashboard.png",
      "/assets/fitness-tracker-workout.png",
      "/assets/fitness-tracker-social.png"
    ],
    
    workflow: [
      "User authentication and profile setup",
      "Exercise database exploration (800+ exercises)",
      "Workout creation with timer and progress tracking",
      "Goal setting across multiple fitness categories",
      "Social interaction: friends, messaging, groups",
      "Progress analytics and leaderboard competition"
    ],
    
    technicalDetails: {
      lines: "15,000+",
      files: "40+",
      apiEndpoints: "12+",
      databaseTables: "15+",
      moduleSystem: "ES6 with dependency injection",
      testingApproach: "Manual testing with automated deployment"
    }
  }
];