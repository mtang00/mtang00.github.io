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