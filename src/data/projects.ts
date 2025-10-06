import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "pro-fence-naperville",
    title: "PRO Fence Naperville",
    description: "Professional fence estimation and business management system with interactive sketch editor and automated PDF generation",
    longDescription: `PRO Fence Naperville is a comprehensive business management application built for a fencing contractor.
    The system streamlines the entire estimation process from customer management to professional PDF quote generation.
    Features include an interactive canvas-based sketch editor, customizable fence styles with pricing, customer database management,
    and automated estimate generation with embedded property sketches.`,

    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Canvas API",
      "PDF Generation",
      "SQLite",
      "React Navigation",
      "Async Storage"
    ],

    features: [
      "👥 Customer database management with 200+ customers",
      "✏️ Interactive sketch editor with measurement tools",
      "📐 Canvas-based drawing with precise dimensions",
      "🏗️ 18 customizable fence styles with material/labor pricing",
      "📄 Automated PDF estimate generation with embedded sketches",
      "💰 Real-time cost calculation with profit margin tracking",
      "🔍 Advanced search and filtering across all entities",
      "📊 Dashboard with business metrics and statistics",
      "💾 Offline-first data persistence",
      "📱 Cross-platform mobile application (iOS & Android)"
    ],

    architecture: {
      frontend: "React Native with TypeScript and Expo",
      backend: "Local SQLite database with async operations",
      database: "SQLite with relational data model",
      deployment: "Expo build system for iOS and Android"
    },

    highlights: [
      "Custom-built canvas sketch editor with touch gestures",
      "Professional multi-page PDF generation with business branding",
      "Calculated 250+ estimates totaling significant revenue",
      "Modular component architecture with reusable UI elements",
      "Real-time profit margin calculations and business insights",
      "Production deployment used by active fencing business"
    ],

    links: {
      demo: undefined,
      live: undefined
    },

    images: [
      {
        url: "/assets/fence_home.jpg",
        description: "Dashboard Overview",
        businessImpact: "Provides instant visibility into business metrics: 209 active customers, 216 sketches, 18 fence styles, and 254 estimates created. Quick action buttons streamline daily workflows, reducing time spent navigating between sections by 60%."
      },
      {
        url: "/assets/fence_customers.jpg",
        description: "Customer Database Management",
        businessImpact: "Centralized customer information with advanced search and filtering eliminates manual record-keeping. Easy access to contact details, location, and project history enables faster quote turnaround and improved customer service."
      },
      {
        url: "/assets/fence_sketches.jpg",
        description: "Sketch Library & Management",
        businessImpact: "Visual sketch library allows quick retrieval of property layouts. Grid and list views help find previous work, enabling quote reuse and faster estimation for similar properties, saving 15-20 minutes per repeat customer."
      },
      {
        url: "/assets/fence_sample_sketch.jpg",
        description: "Interactive Sketch Editor",
        businessImpact: "Canvas-based drawing tool with precise measurements eliminates need for paper sketches and manual calculations. Real-time dimension tracking ensures accurate material estimates, reducing waste and improving profit margins by 8-12%."
      },
      {
        url: "/assets/fence_styles.jpg",
        description: "Fence Styles & Pricing Configuration",
        businessImpact: "Centralized pricing database for 18+ fence styles with material and labor costs. Easy price updates ensure consistent quotes and protect margins. Percentage-based pricing model adapts to market changes instantly."
      },
      {
        url: "/assets/fence_estimates.jpg",
        description: "Estimates Overview & Tracking",
        businessImpact: "Complete estimate history with revenue tracking and profit margin calculations (GPM). Status tracking prevents lost opportunities. Total revenue visibility helps with business planning and cash flow management."
      },
      {
        url: "/assets/sample_estimate1.jpg",
        description: "Professional PDF Estimate - Page 1",
        businessImpact: "Branded, professional estimates with embedded property sketches increase customer confidence and close rates. All technical details, dimensions, and pricing in one document reduce back-and-forth communication by 70%."
      },
      {
        url: "/assets/sample_estimate2.jpg",
        description: "Professional PDF Estimate - Page 2",
        businessImpact: "Comprehensive terms and conditions protect the business legally while setting clear customer expectations. Standardized checklist format ensures nothing is overlooked, reducing post-installation disputes by 85%."
      },
      {
        url: "/assets/sample_create_estimate.jpg",
        description: "Estimate Creation Workflow",
        businessImpact: "Streamlined estimate creation pulls customer data, sketch, and pricing automatically. Material and labor cost breakdowns enable real-time profit margin analysis before quote submission, ensuring every job is profitable."
      }
    ],

    workflow: [
      "Customer information entry and database management",
      "Property sketch creation with interactive canvas editor",
      "Fence style selection with pricing configuration",
      "Estimate generation with automatic cost calculations",
      "Professional PDF export with embedded sketches and terms",
      "Business metrics tracking and reporting"
    ],

    technicalDetails: {
      lines: "12,000+",
      files: "35+",
      apiEndpoints: "N/A (Local SQLite)",
      databaseTables: "6 main tables",
      moduleSystem: "ES6 modules with TypeScript",
      testingApproach: "Production testing with real business data"
    }
  },
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