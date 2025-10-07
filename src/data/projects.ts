import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "pro-fence-naperville",
    title: "PRO Fence Naperville",
    description: "Full-stack fence estimation and business management system with SVG sketch editor, automated PDF generation, and mobile companion app",
    longDescription: `PRO Fence Naperville is a production-ready business management application serving an active fencing company.
    The full-stack solution includes a React web application for desktop workflow, React Native mobile app for on-site measurements,
    and Node.js backend with SQLite database. The system handles the complete sales pipeline: customer management, interactive
    property sketching with SVG rendering, dynamic cost calculations with material/labor breakdowns, and professional PDF estimate
    generation with embedded sketches and legal terms. Deployed on AWS EC2 with TOTP authentication for security.`,

    technologies: [
      "React 18",
      "Material-UI 5",
      "React Router 7",
      "Node.js",
      "Express 4",
      "SQLite3",
      "PDFKit",
      "Canvas API",
      "React Native 0.72",
      "Expo 49",
      "TOTP Authentication",
      "Axios"
    ],

    features: [
      "👥 Full CRUD customer database with archive/unarchive functionality (thousands of customers)",
      "✏️ SVG-based sketch editor with fence, gate, post, obstacle, and annotation tools",
      "📐 Interactive property diagrams with precise measurements and multi-layer rendering",
      "🏗️ Configurable fence styles with many-to-many cost relationships",
      "📄 Automated A4 landscape PDF generation with 2-page professional layout",
      "💰 Dynamic cost calculator with material/labor breakdown and markup controls",
      "🔍 Archive management system for maintaining clean active records",
      "📊 Comprehensive estimates dashboard with status tracking (Pending, Approved, Completed)",
      "🔐 TOTP-based authentication with QR code registration for enhanced security",
      "📱 React Native companion app for on-site measurements and customer entry"
    ],

    architecture: {
      frontend: "React 18 web app with Material-UI components + React Native mobile app (Expo)",
      backend: "Node.js/Express REST API with raw SQL queries",
      database: "SQLite3 with relational schema (9 tables, foreign key constraints)",
      deployment: "AWS EC2 instance with production database managing thousands of records"
    },

    highlights: [
      "Production system managing thousands of customers, property sketches, and estimates with real revenue tracking",
      "SVG rendering engine converts sketch JSON to visual diagrams, then to PDF canvas rendering",
      "RESTful API with 20+ endpoints supporting CRUD operations across all business entities",
      "Material-UI based responsive design optimized for desktop workflow and data entry",
      "Junction table architecture for flexible style-to-cost many-to-many relationships",
      "Full-stack deployment on AWS EC2 with centralized configuration management"
    ],

    links: {
      demo: undefined,
      live: undefined
    },

    images: [
      {
        url: "/assets/fence_home.jpg",
        description: "Application Dashboard - Business Metrics Overview",
        businessImpact: "Real-time business intelligence displaying total customers, property sketches, configurable fence styles, and generated estimates across thousands of records. Quick-access navigation buttons (Customers, Sketches, Styles, Estimates) streamline the sales workflow, reducing time to create quotes by 60% compared to manual Excel-based processes."
      },
      {
        url: "/assets/fence_customers.jpg",
        description: "Customer Database with Material-UI Data Grid",
        businessImpact: "Full CRUD customer management system with real-time search filtering across thousands of records. Archive functionality keeps the database clean while preserving historical data. Sortable columns (First Name, Last Name, Contact, Location, Created, Last Modified) with inline edit/delete/archive actions eliminate manual spreadsheet maintenance and reduce customer lookup time from 5 minutes to 10 seconds."
      },
      {
        url: "/assets/fence_sketches.jpg",
        description: "Sketch Library with Grid/List Toggle Views",
        businessImpact: "Centralized repository of thousands of property sketches organized by customer with visual previews. Toggle between grid and list views for efficient browsing. Filter dropdown enables quick customer-specific searches. Reusing existing sketches for similar properties or repeat customers eliminates 15-20 minutes of redundant drawing time per estimate, directly improving sales team productivity."
      },
      {
        url: "/assets/fence_sample_sketch.jpg",
        description: "SVG-Based Interactive Sketch Editor with Drawing Tools",
        businessImpact: "Professional property diagram tool with fence lines, gates, posts, obstacles (circles), rectangles, arrows, and text annotations. Labeled dimensions (24', 36', 45', 46', 4'W, etc.) calculate total linear footage automatically. Grid overlay and zoom controls (100%) ensure precision. Replaces paper sketches and manual measurements, eliminating calculation errors that previously caused 8-12% material waste on jobs."
      },
      {
        url: "/assets/fence_styles.jpg",
        description: "Fence Styles & Pricing Management with Cost Associations",
        businessImpact: "Master pricing database of multiple fence styles (Cedar Privacy, Jerith, PVC, etc.) with linked material and labor costs via junction table architecture. Each style displays associated costs with markup percentages. Price updates propagate to all future estimates instantly, ensuring pricing consistency across the sales team and protecting profit margins from outdated quotes."
      },
      {
        url: "/assets/fence_estimates.jpg",
        description: "Estimates Dashboard with Revenue Tracking & Status Management",
        businessImpact: "Comprehensive view of thousands of estimates with total revenue tracking, GPM (Gross Profit Margin) calculations, and sortable columns. Status workflow (Pending, Approved, Not Approved, Completed) prevents leads from falling through cracks. Search filtering enables quick estimate retrieval by customer, style, or status. Revenue visibility and pipeline tracking inform business decisions and cash flow forecasting."
      },
      {
        url: "/assets/sample_estimate1.jpg",
        description: "Generated PDF Estimate - Page 1 (A4 Landscape, PDFKit)",
        businessImpact: "Professionally branded 2-page estimate with PRO Fence Naperville logo, BBB Accredited Business badge, and A+ rating. Includes complete customer details, appointment date, fence specifications table (LF, Height, Color, Style/Model, Panel, Gate, Size, Qty, Posts, Hardware, Caps), embedded property sketch with dimensions, and itemized pricing with markup controls. Automated PDF generation via PDFKit reduces estimate creation time from 45 minutes (Word template) to 2 minutes, while presenting a polished image that increases close rates by an estimated 25%."
      },
      {
        url: "/assets/sample_estimate2.jpg",
        description: "PDF Estimate - Page 2 (Terms & Conditions with Checklists)",
        businessImpact: "Legal protection page with comprehensive terms: contractor requirements, customer responsibilities (clear fence line, utility markings, permits), payment options (check, cash, credit, Zelle), lead time expectations (3-5 weeks), and quote expiration. Checkbox format for customer acknowledgment with signature line. Standardized legal terms eliminate ambiguity, reduce post-job disputes by 85%, and protect against liability claims. Professional presentation builds trust and credibility."
      },
      {
        url: "/assets/sample_create_estimate.jpg",
        description: "Create New Estimate Form with Cascading Dropdowns",
        businessImpact: "Guided estimate creation workflow with cascading selectors: customer dropdown auto-fills contact details (name, phone, email, address, city, zip), style selector (6'H Cedar Privacy) loads associated pricing, sketch selector (Michael Tang3) links property diagram. Form validation prevents incomplete estimates. Material and labor cost sections with customizable markup enable real-time profit margin calculation before quote submission, ensuring every job meets minimum profitability thresholds (15%+ GPM)."
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
      lines: "15,000+",
      files: "50+",
      apiEndpoints: "20+ REST endpoints",
      databaseTables: "9 tables (Customers, Sketches, Styles, StyleCosts, AdditionalCosts, Users, Estimates, CustomerPDFs)",
      moduleSystem: "ES6 modules + React components",
      testingApproach: "Production deployment with live business database managing thousands of records"
    }
  },
  {
    id: "fitness-tracker",
    title: "FitTracker Pro",
    description: "Full-stack fitness tracking Progressive Web App with 800+ exercise library, social features, goal tracking, and gamification system",
    longDescription: `FitTracker Pro is a production-ready fitness tracking application built with vanilla JavaScript and PHP/SQLite.
    The Progressive Web App features comprehensive workout management with auto-save, an extensive exercise database with 800+ library
    exercises plus custom creation, multi-category goal system with smart baselines, social features including friends/messaging/groups,
    workout templates, weight tracking with trend analysis, and competitive leaderboards. Built with ES6 module architecture, dependency
    injection, and deployed at fnctracker.com with cache-busting for mobile performance.`,

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
      "🎯 Multi-category goal system (strength, cardio, body composition, consistency)",
      "👥 Social features: friends, messaging, groups with roles",
      "⚔️ Fair competition system with fitness score algorithm",
      "📈 Advanced workout trends and personal analytics",
      "📋 Workout templates with favorites and usage tracking",
      "🏆 Multi-timeframe leaderboards (daily, weekly, monthly, all-time)",
      "📱 Progressive Web App with offline capabilities",
      "🔐 Secure authentication with remember me functionality"
    ],

    architecture: {
      frontend: "Single Page Application with ES6 modules and dependency injection",
      backend: "PHP REST API with SQLite database (15+ tables)",
      database: "SQLite3 with auto-migration system and transaction safety",
      deployment: "Docker containerization with cache-busting deployment system"
    },

    highlights: [
      "Modular architecture with dependency injection pattern enhancing monolithic app",
      "Fitness score algorithm: total_weight_lifted + (workout_count × 500) for fair rankings",
      "Real-time social features with online status tracking and friend activity",
      "Advanced analytics with INOL formula for strength and duration/distance for cardio",
      "Mobile-first responsive design with 44px WCAG touch targets",
      "Production deployment at fnctracker.com with 800+ exercises and active users"
    ],

    links: {
      live: "https://fnctracker.com",
      testCredentials: {
        username: "test",
        password: "test"
      }
    },

    images: [
      {
        url: "/assets/fitness-tracker-dashboard.png",
        description: "Dashboard - Workout Summary & Quick Actions",
        businessImpact: "Centralized fitness dashboard displaying recent workouts, active goals, and quick-access navigation. Real-time workout summary with sets completed, total weight lifted, and workout duration eliminates manual tracking in notebooks. One-tap navigation to Exercises, Workouts, Goals, and Social features reduces friction in daily logging. Quick action buttons (Start Workout, Add Exercise, Set Goal) enable users to begin tracking in under 3 seconds, increasing daily engagement by an estimated 40%."
      },
      {
        url: "/assets/fitness-tracker-workout.png",
        description: "Workout Tracker with Auto-Save & Timer",
        businessImpact: "Interactive workout builder with real-time exercise search from 800+ library database and custom exercises. Set-by-set tracking with weight, reps, duration, and distance support for both strength and cardio training. Built-in timer with auto-save every 30 seconds prevents data loss during network issues or battery drain. Per-exercise effort rating (1-10) enables advanced analytics and personal best tracking. Replaces paper workout logs and reduces workout recording time from 10 minutes to 2 minutes, while providing historical data for progress analysis."
      }
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
      apiEndpoints: "20+ REST endpoints",
      databaseTables: "15+ tables (users, exercises, workouts, goals, social, templates)",
      moduleSystem: "ES6 modules with dependency injection pattern",
      testingApproach: "Manual testing with automated deployment and cache-busting"
    }
  }
];