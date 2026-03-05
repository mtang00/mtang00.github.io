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
    title: "Fitness N Conditioning",
    description: "Full-stack fitness tracking Progressive Web App with 800+ exercise library, social features, advanced analytics, and competitive leaderboards",
    longDescription: `Fitness N Conditioning is a production-ready fitness tracking Progressive Web App built with vanilla JavaScript and PHP/SQLite, deployed at fnctracker.com with active users.
    Features comprehensive workout management with auto-save and templates, an extensive exercise database with 800+ library exercises plus custom creation,
    per-exercise trend analysis with estimated 1RM tracking and performance charts, social platform with friends/messaging/groups and activity feeds,
    competitive leaderboards with a fair fitness score algorithm (factoring weight lifted, consistency, and PR bonuses), workout calendar with streak tracking,
    and muscle diagram progress visualization. Built with ES6 module architecture, dependency injection, and cache-busting deployment for mobile performance.`,

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
      "📊 Dashboard with progress tracking, workout streaks, and weekly stats (workouts, weight lifted, time)",
      "🏋️ 800+ exercise library with images, muscle groups, equipment tags, and personal stats",
      "📈 Per-exercise trend analysis with estimated 1RM charts, performance history, and trend indicators",
      "📋 Workout templates with favorites, sharing, and one-tap session start",
      "📅 Workout calendar with daily indicators and monthly consistency view",
      "🏆 Multi-timeframe leaderboards (daily, weekly, monthly, all-time) with fair scoring algorithm",
      "👥 Social platform: friends with online status, direct messaging, groups, and activity feeds",
      "💪 Muscle diagram visualization showing exercise coverage and progress",
      "📱 Responsive PWA with mobile-optimized layout and bottom navigation for gym use",
      "🔐 Secure authentication with remember me and profile customization"
    ],

    architecture: {
      frontend: "Single Page Application with ES6 modules and dependency injection",
      backend: "PHP REST API with SQLite database (15+ tables)",
      database: "SQLite3 with auto-migration system and transaction safety",
      deployment: "Docker containerization with cache-busting deployment system"
    },

    highlights: [
      "Modular ES6 architecture with dependency injection pattern across 40+ JavaScript modules",
      "Fair leaderboard scoring with consistency multiplier and PR bonus percentages to rank all fitness levels",
      "Full social platform: friends with online status, direct messaging, groups with roles, and workout activity feeds",
      "Per-exercise analytics with estimated 1RM tracking, performance charts, and trend indicators (Improving/Stable/Declining)",
      "Responsive PWA with identical feature set on desktop and mobile, 44px WCAG touch targets, bottom nav for gym-floor use",
      "Production deployment at fnctracker.com with 30+ PHP API endpoints, 15+ database tables, and active users"
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
        url: "/assets/fnc_pc_home.png",
        description: "Dashboard - Progress Tracking & Workout Streak",
        businessImpact: "Centralized fitness dashboard with \"Progress Since Day 1\" panel showing 18 exercises improved, +143.8% best exercise gain, and 263 days tracking. Weekly stats cards display 6 workouts, 50,840 lbs total weight lifted, and 4h 30m workout time. Workout streak banner (4-day streak) and recent workout cards with exercise/set/weight summaries provide at-a-glance progress. \"Create New Workout\" button enables one-click session start, reducing friction in daily logging."
      },
      {
        url: "/assets/fnc_pc_exercises.png",
        description: "Exercise Library - 800+ Exercises with Visual Cards",
        businessImpact: "Searchable exercise database with 800+ library entries displayed as visual cards with demonstration images, primary/secondary muscle groups, equipment type, and personal stats (max weight, last used date, workout count). Category/source/sort filters enable rapid exercise discovery. Each card shows Library/Custom source tags and strength classification badges, helping users build balanced training programs."
      },
      {
        url: "/assets/fnc_pc_leaderboard.png",
        description: "Competitive Leaderboard - Weekly Rankings with Fitness Scores",
        businessImpact: "Multi-timeframe leaderboard (Daily, Weekly, Monthly, All Time) ranking users by fitness score with workout count, consistency multiplier, and PR bonus percentages. View Workouts and View Profile buttons enable social discovery. Fair scoring algorithm factors total weight lifted, workout frequency, and personal record improvements to prevent advanced lifters from dominating rankings, encouraging engagement across all fitness levels."
      },
      {
        url: "/assets/fnc_pc_social.png",
        description: "Social Hub - Friends, Groups, Messaging & Activity Feed",
        businessImpact: "Full social platform with Friends (12 connections), Groups, Discover, Messages, and Activity tabs. Real-time online status tracking (Online/Away/Offline indicators) with last-active timestamps. Friend cards show avatar initials, username, and one-click actions (Message, Workouts, Profile, Remove). Sortable by activity for quick engagement with active training partners, building accountability and community retention."
      },
      {
        url: "/assets/fnc_pc_trends1.png",
        description: "Exercise Trends - Recent Sets & Performance History",
        businessImpact: "Per-exercise analytics modal showing last 5 sessions with date, sets, best set (weight x reps), estimated 1RM, and volume. Time period filters (All Time, 1 Year, 6 Months, 3 Months, 1 Month, YTD) and chart metric selector (Estimated 1RM) enable granular progress tracking. Trend indicator (STABLE) provides quick performance assessment without deep analysis."
      },
      {
        url: "/assets/fnc_pc_trends2.png",
        description: "Performance Chart - 1RM Progression Over Time",
        businessImpact: "Interactive line chart plotting estimated 1RM progression from 342 lbs to 385 lbs over 6 months. Stat cards show total workouts (36), estimated max 1RM (397 lbs), current 1RM (385 lbs), 1RM change (+7.0%), max weight (340 lbs), and max reps (10). Visual proof of strength gains over time helps users stay motivated and adjust training intensity based on trend data."
      },
      {
        url: "/assets/fnc_mobile_home.png",
        description: "Mobile Dashboard - Responsive PWA Design",
        businessImpact: "Mobile-optimized Progressive Web App running at fnctracker.com with bottom navigation bar, condensed progress panel, and streak notifications. Same full feature set as desktop in a touch-friendly layout with 44px WCAG touch targets. Bottom nav icons (Dashboard, Workout, Leaderboard, Social, Exercises, Settings) provide thumb-reachable navigation for gym-floor usage."
      },
      {
        url: "/assets/fnc_mobile_exercise.png",
        description: "Mobile Workout - Set-by-Set Tracking with Auto-Save",
        businessImpact: "Active workout interface with exercise name, reps/weight input fields, and Add Set button. Template label (Push2) shows workout loaded from saved template. Auto-save indicator and floating action buttons (+, save) enable quick set logging between exercises. Minimal UI reduces distraction during active training while capturing all data points for analytics."
      },
      {
        url: "/assets/fnc_mobile_recents.png",
        description: "Mobile Recent Workouts - Session History with Details",
        businessImpact: "Scrollable workout history showing session cards with date labels (Today, Yesterday), template tags (Pull2, Push3), exercise count, sets, duration, total weight, and exercise list preview. View Calendar button links to monthly workout calendar. Delete option per workout for data management. Quick access to historical sessions enables workout comparison and progressive overload planning."
      },
      {
        url: "/assets/fnc_mobile_calendar.png",
        description: "Workout Calendar - Monthly Training Consistency View",
        businessImpact: "Visual monthly calendar with green dot indicators marking workout days. February 2026 view shows near-daily training consistency. Calendar view helps users identify rest days, track weekly frequency, and maintain training schedules. Simple visual format makes consistency patterns immediately obvious, reinforcing habit formation."
      },
      {
        url: "/assets/fnc_mobile_friends.png",
        description: "Mobile Friend Activity - Social Workout Feed",
        businessImpact: "Friend activity feed showing workout summaries with avatar, name, date, workout type tag (Chest), and stats (exercises, sets, lbs, minutes). \"Tap for details\" expands full workout breakdown. Social visibility of friends' training creates accountability and friendly competition, driving consistent app usage and workout frequency among connected users."
      },
      {
        url: "/assets/fnc_mobile_template.png",
        description: "Mobile Workout Templates - Quick Start from Saved Routines",
        businessImpact: "Template selection interface with \"Start from Template\" option and recent templates list showing saved routines (Legs) with share, favorite, edit, and delete actions. Add Template button for creating new routines. Templates reduce workout setup time from 5 minutes to 10 seconds by pre-loading exercise selections, sets, and weights from previous sessions."
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
      files: "60+ (40+ JS modules, 30+ PHP API endpoints)",
      apiEndpoints: "30+ REST endpoints (auth, workouts, exercises, goals, social, leaderboard, trends, templates, groups, messages, notifications, weight, reactions)",
      databaseTables: "15+ tables (users, exercises, workouts, workout_sets, goals, friends, messages, groups, group_members, templates, weight_logs, notifications, reactions, achievements)",
      moduleSystem: "ES6 modules with dependency injection pattern and module-init.js orchestrator",
      testingApproach: "Production deployment with cache-busting system and Docker containerization"
    }
  }
];