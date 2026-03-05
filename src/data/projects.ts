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
    description: "Full-stack fitness tracking Progressive Web App with 386 exercise library, social platform, per-exercise analytics, and competitive leaderboards deployed at fnctracker.com",
    longDescription: `Fitness N Conditioning is a fitness tracking Progressive Web App built with vanilla JavaScript (ES6 modules) and PHP/SQLite, deployed at fnctracker.com.
    The app features workout tracking with 10-second auto-save and server-side session persistence, a 386-exercise library with demonstration images and muscle group data,
    per-exercise trend analysis using the Epley 1RM formula with performance charts, a social platform with friends, direct messaging, groups with role-based permissions,
    and workout activity feeds with emoji reactions. The leaderboard uses a multi-component scoring algorithm factoring volume, intensity, consistency multiplier, and PR bonuses.
    Additional features include workout templates with sharing, a workout calendar, interactive muscle diagram visualization, plateau detection via EWMA algorithm,
    and goal tracking across five categories. Built with 25 ES6 modules using dependency injection, 37 PHP API endpoints, and a 33-table SQLite database with auto-migration.`,

    technologies: [
      "Vanilla JavaScript (ES6)",
      "PHP 8.1",
      "SQLite3",
      "Progressive Web App",
      "Docker",
      "HTML5 Canvas",
      "CSS3"
    ],

    features: [
      "📊 Dashboard with cumulative progress stats, workout streaks, and recent session summaries",
      "🏋️ 386-exercise library with demonstration images, primary/secondary muscle groups, and personal performance stats",
      "📈 Per-exercise trend analysis with Epley 1RM estimation, performance charts, and trend indicators (Improving/Stable/Declining)",
      "📋 Workout templates with favorites, share codes, and one-tap session start",
      "📅 Workout calendar with daily completion indicators for consistency tracking",
      "🏆 Multi-timeframe leaderboards (daily, weekly, monthly, all-time) with 5-component scoring algorithm",
      "👥 Social platform: friends with online/away/offline status, direct messaging, groups with admin/member roles, emoji reactions",
      "💪 Interactive SVG muscle diagram with 12 muscle groups showing per-exercise progress and trend percentages",
      "📱 Responsive PWA with mobile bottom navigation and 44px WCAG touch targets for gym use",
      "🎯 Goal system across 5 categories: strength (1RM), cardio (distance/duration), body composition, consistency, progressive overload"
    ],

    architecture: {
      frontend: "Single Page Application with 25 ES6 modules loaded via dependency injection (module-init.js orchestrator)",
      backend: "PHP REST API with 37 endpoints handling auth, workouts, exercises, goals, social, leaderboard, trends, templates, groups, messages, notifications, weight tracking, and reactions",
      database: "SQLite3 with 33 tables, auto-migration on first request, foreign key cascades, and comprehensive indexing",
      deployment: "Docker containerization for local dev, deployed to Namecheap shared hosting via SFTP with cache-busting system"
    },

    highlights: [
      "5-component workout scoring: volume, intensity, metabolic, technique, and power scores with bodyweight exercise multipliers (pull-up 3.0x, dip 2.0x, human flag 4.0x) and unilateral 2x bonus",
      "10-second auto-save with hash-based change detection, server-side session persistence, and cross-device restore within 24 hours",
      "Plateau detection using EWMA (exponential weighted moving average) algorithm with per-exercise consecutive-use tracking",
      "Social platform with HTTP polling (3s messages, 30s activity/notifications), online status derived from last_seen timestamps, and workout spectating",
      "Responsive PWA with service worker caching, installable on mobile/desktop, and identical feature set across screen sizes",
      "33-table relational database with cascading deletes, unique constraints on friendships/reactions/sessions, and auto-migration system"
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
        url: "/assets/fitness-tracker/fnc_pc_home.png",
        description: "Dashboard - Progress Tracking & Workout Streak",
        businessImpact: "Centralized fitness dashboard with \"Progress Since Day 1\" panel showing exercises improved, best exercise gain percentage, and total days tracking. Weekly stats cards display workout count, total weight lifted, and workout time. Workout streak banner and recent workout cards with exercise/set/weight summaries provide at-a-glance progress, with a one-click button to start a new session."
      },
      {
        url: "/assets/fitness-tracker/fnc_pc_exercises.png",
        description: "Exercise Library - 386 Exercises with Visual Cards",
        businessImpact: "Searchable exercise database with 386 library entries displayed as visual cards with demonstration images, primary/secondary muscle groups, equipment type, and personal stats (max weight, last used date, workout count). Category, source, and sort filters enable rapid exercise discovery. Each card shows Library/Custom source tags and strength classification badges for building balanced programs."
      },
      {
        url: "/assets/fitness-tracker/fnc_pc_leaderboard.png",
        description: "Competitive Leaderboard - Multi-Timeframe Rankings",
        businessImpact: "Multi-timeframe leaderboard (Daily, Weekly, Monthly, All Time) ranking users by fitness score with workout count, consistency multiplier, and PR bonus percentages displayed per user. View Workouts and View Profile buttons enable social discovery. The 5-component scoring algorithm with bodyweight multipliers and unilateral bonuses creates fair rankings across all fitness levels."
      },
      {
        url: "/assets/fitness-tracker/fnc_pc_social.png",
        description: "Social Hub - Friends, Groups, Messaging & Activity Feed",
        businessImpact: "Social platform with Friends, Groups, Discover, Messages, and Activity tabs. Real-time online status tracking (Online/Away/Offline indicators) derived from last-seen timestamps via 30-second polling. Friend cards show avatar initials, username, and one-click actions (Message, Workouts, Profile, Remove). Sortable by activity for quick engagement with training partners."
      },
      {
        url: "/assets/fitness-tracker/fnc_pc_trends1.png",
        description: "Exercise Trends - Recent Sets & Performance History",
        businessImpact: "Per-exercise analytics modal showing recent sessions with date, sets, best set (weight x reps), estimated 1RM via Epley formula, and volume. Time period filters (All Time, 1 Year, 6 Months, 3 Months, 1 Month, YTD) and configurable chart metric enable granular progress tracking. Trend indicator (Improving/Stable/Declining) based on 28-day rolling averages provides quick performance assessment."
      },
      {
        url: "/assets/fitness-tracker/fnc_pc_trends2.png",
        description: "Performance Chart - Estimated 1RM Progression Over Time",
        businessImpact: "Interactive canvas-rendered line chart plotting estimated 1RM progression over time. Stat cards show total workouts for the exercise, estimated max 1RM, current 1RM, percentage change, max weight, and max reps. Visual representation of strength gains helps users adjust training intensity based on trend data and identify plateaus early."
      },
      {
        url: "/assets/fitness-tracker/fnc_mobile_home.png",
        description: "Mobile Dashboard - Responsive PWA Design",
        businessImpact: "Mobile-optimized Progressive Web App at fnctracker.com with bottom navigation bar, condensed progress panel, and streak notifications. Identical feature set to desktop in a touch-friendly layout with 44px WCAG touch targets. Bottom nav (Dashboard, Workout, Leaderboard, Social, Exercises, Settings) provides thumb-reachable navigation for gym-floor usage."
      },
      {
        url: "/assets/fitness-tracker/fnc_mobile_exercise.png",
        description: "Mobile Workout - Set-by-Set Tracking with Auto-Save",
        businessImpact: "Active workout interface with exercise name, reps/weight input fields, and Add Set button. Template label shows the workout was loaded from a saved template. Auto-save runs every 10 seconds with hash-based change detection and server-side session persistence, preventing data loss during network issues. Floating action buttons enable quick exercise addition mid-workout."
      },
      {
        url: "/assets/fitness-tracker/fnc_mobile_recents.png",
        description: "Mobile Recent Workouts - Session History",
        businessImpact: "Scrollable workout history showing session cards with relative date labels, template tags, exercise count, sets, duration, total weight lifted, and exercise list previews. View Calendar button links to the monthly workout calendar. Quick access to historical sessions enables workout comparison and progressive overload planning."
      },
      {
        url: "/assets/fitness-tracker/fnc_mobile_calendar.png",
        description: "Workout Calendar - Monthly Consistency View",
        businessImpact: "Visual monthly calendar with green dot indicators marking workout days. Helps users identify rest days, track weekly frequency, and maintain training schedules. Simple visual format makes consistency patterns immediately obvious, reinforcing habit formation and supporting the consistency goal category."
      },
      {
        url: "/assets/fitness-tracker/fnc_mobile_friends.png",
        description: "Mobile Friend Activity - Social Workout Feed",
        businessImpact: "Friend activity feed showing workout summaries with avatar, name, date, workout type tag, and stats (exercises, sets, weight, minutes). Expandable cards reveal full workout details. Social visibility of friends' training creates accountability and supports the workout spectating feature where users can watch in-progress sessions."
      },
      {
        url: "/assets/fitness-tracker/fnc_mobile_template.png",
        description: "Mobile Workout Templates - Quick Start from Saved Routines",
        businessImpact: "Template selection interface with recent templates list showing saved routines with share, favorite, edit, and delete actions. Templates store exercise selections with suggested sets, reps, and weights, enabling one-tap workout start. Share codes allow users to distribute templates to friends and group members."
      }
    ],

    workflow: [
      "User authentication with remember-me token persistence",
      "Exercise library browsing with category, muscle group, and equipment filters",
      "Workout creation from scratch or saved templates with auto-save",
      "Set-by-set logging with reps, weight, duration, and distance tracking",
      "Goal setting across strength, cardio, body composition, consistency, and progressive overload categories",
      "Social interaction: add friends, join groups, send messages, react to workouts, spectate live sessions",
      "Progress review via per-exercise trend charts, muscle diagrams, and leaderboard rankings"
    ],

    technicalDetails: {
      lines: "50,000+",
      files: "76 (25 JS modules, 37 PHP API endpoints, 14 CSS files)",
      apiEndpoints: "37 PHP endpoints covering auth, workouts, exercises, goals, friends, messages, groups, challenges, leaderboard, trends, templates, notifications, reactions, weight, achievements, plateau detection, and personal averages",
      databaseTables: "33 tables (workouts, workout_exercises, sets, exercises, default_exercises, users, user_preferences, goals, goal_progress, friendships, messages, groups, group_members, group_invitations, group_join_requests, group_challenges, challenge_participants, challenge_progress, workout_templates, template_exercises, weight_entries, notifications, reactions, achievements, workout_scores, exercise_performance, personal_exercise_averages, plateau_data, workout_sessions, workout_spectators, remember_tokens, cardio_sessions, email_verifications)",
      moduleSystem: "25 ES6 modules with dependency injection via module-init.js orchestrator — PointsCalculator, WorkoutManager, ExerciseManager, SocialManager, TrendsManager, TemplatesManager, GoalsManager, GroupsManager, ChallengesManager, WeightManager, ProgressManager, SpectateManager, NotificationsManager, ReactionsManager, and others",
      testingApproach: "Manual testing with Docker for local development and SFTP deployment to Namecheap shared hosting with cache-busting"
    }
  }
];