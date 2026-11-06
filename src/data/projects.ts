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
    The app features workout tracking with auto-save and server-side session persistence, a 386-exercise library with demonstration images and muscle group data,
    per-exercise trend analysis with estimated 1RM tracking and performance charts, a social platform with friends, direct messaging, groups with role-based permissions,
    and workout activity feeds with emoji reactions. The leaderboard uses a multi-component scoring algorithm factoring volume, intensity, consistency, and PR bonuses.
    Additional features include workout templates with sharing, a workout calendar, interactive muscle diagram visualization, plateau detection,
    and goal tracking across five categories. Built with ES6 modules using dependency injection, a PHP REST API, and a SQLite database with auto-migration.`,

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
      "📈 Per-exercise trend analysis with estimated 1RM tracking, performance charts, and trend indicators",
      "📋 Workout templates with favorites, share codes, and one-tap session start",
      "📅 Workout calendar with daily completion indicators for consistency tracking",
      "🏆 Multi-timeframe leaderboards (daily, weekly, monthly, all-time) with fair scoring that rewards consistency and personal improvement",
      "👥 Social platform: friends with online status, direct messaging, groups with roles, emoji reactions, and live workout spectating",
      "💪 Interactive SVG muscle diagram showing exercise coverage and progress trends across muscle groups",
      "📱 Responsive PWA with mobile bottom navigation for gym use",
      "🎯 Goal system across strength, cardio, body composition, consistency, and progressive overload categories"
    ],

    architecture: {
      frontend: "Single Page Application with ES6 modules loaded via dependency injection pattern",
      backend: "PHP REST API with endpoints for auth, workouts, exercises, goals, social, leaderboard, trends, templates, groups, messages, notifications, and more",
      database: "SQLite3 with 33 tables, auto-migration, foreign key cascades, and comprehensive indexing",
      deployment: "Docker for local development, deployed via SFTP with cache-busting system"
    },

    highlights: [
      "Multi-component workout scoring with volume, intensity, metabolic, technique, and power factors plus bodyweight exercise multipliers and unilateral bonuses",
      "Auto-save with hash-based change detection and server-side session persistence for cross-device workout restore",
      "Plateau detection using exponential weighted moving average (EWMA) algorithm with per-exercise tracking",
      "Social platform with online status polling, friend activity feeds, direct messaging, group challenges, and live workout spectating",
      "Responsive PWA with service worker caching, installable on mobile/desktop, and identical feature set across screen sizes",
      "Relational database with cascading deletes, unique constraints, comprehensive indexing, and auto-migration on first request"
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
        description: "Dashboard - Progress Tracking & Workout Streaks",
        businessImpact: "See your fitness journey at a glance — track how many exercises you've improved, your overall improvement percentage, and how long you've been training. Stay motivated with workout streak banners, weekly summaries of workouts completed, weight lifted, and time spent. Recent workout cards let you review past sessions instantly, and a single button gets you into your next workout."
      },
      {
        url: "/assets/fitness-tracker/fnc_pc_exercises.png",
        description: "Exercise Library - Browse & Discover Exercises",
        businessImpact: "Explore a library of 386 exercises with demonstration images showing proper form, tagged by muscle group, equipment type, and difficulty. Your personal stats appear on each exercise — max weight, when you last performed it, and how many workouts include it — so you can easily find exercises you haven't done recently or discover new ones to try."
      },
      {
        url: "/assets/fitness-tracker/fnc_pc_leaderboard.png",
        description: "Leaderboard - Compete with Friends",
        businessImpact: "Compete with friends across daily, weekly, monthly, and all-time rankings. The scoring system rewards consistency and personal improvement, not just raw strength — so beginners and advanced lifters can compete fairly. See everyone's workout count, score breakdown, and PR bonuses, and tap into their workouts or profiles to stay connected."
      },
      {
        url: "/assets/fitness-tracker/fnc_pc_social.png",
        description: "Social Hub - Train Together",
        businessImpact: "Stay connected with your training partners through friends, groups, messaging, and activity feeds. See who's online, away, or offline at a glance, and jump straight into messaging or viewing someone's workouts. Sort friends by recent activity to keep up with who's been putting in work and who might need a nudge."
      },
      {
        url: "/assets/fitness-tracker/fnc_pc_trends1.png",
        description: "Exercise Trends - Track Your Lifts Over Time",
        businessImpact: "Dive into your performance history for any exercise — see your recent sessions with sets, weights, estimated 1RM, and total volume side by side. Filter by time period to zoom in on recent progress or zoom out for the big picture. A trend indicator instantly tells you if you're improving, stable, or declining so you know when to push harder or deload."
      },
      {
        url: "/assets/fitness-tracker/fnc_pc_trends2.png",
        description: "Performance Charts - Visualize Your Strength Gains",
        businessImpact: "Watch your estimated 1RM climb over time with interactive performance charts. At-a-glance stat cards show your max, current level, and percentage change so you can see exactly how far you've come. Spot plateaus early and make informed decisions about when to change your programming."
      },
      {
        url: "/assets/fitness-tracker/fnc_mobile_home.png",
        description: "Mobile Dashboard - Your Gym Companion",
        businessImpact: "Take your full dashboard to the gym as an installable Progressive Web App. The mobile layout puts everything within thumb's reach — progress stats, streak notifications, and quick navigation to workouts, leaderboard, social, and exercises through the bottom nav bar."
      },
      {
        url: "/assets/fitness-tracker/fnc_mobile_exercise.png",
        description: "Mobile Workout - Log Sets on the Gym Floor",
        businessImpact: "Log your sets between exercises with a clean, distraction-free interface. Load a saved template to skip setup entirely, then just tap in your reps and weight after each set. Auto-save keeps your data safe even if you lose connection or your phone dies mid-workout."
      },
      {
        url: "/assets/fitness-tracker/fnc_mobile_recents.png",
        description: "Recent Workouts - Review Past Sessions",
        businessImpact: "Scroll through your workout history to see what you did last session, last week, or last month. Each card shows exercises, sets, duration, and total weight at a glance, with template tags so you can quickly identify your routine. Use past sessions as a reference to plan progressive overload for your next workout."
      },
      {
        url: "/assets/fitness-tracker/fnc_mobile_calendar.png",
        description: "Workout Calendar - See Your Consistency",
        businessImpact: "A simple monthly calendar view marks every day you trained. Instantly spot your patterns — rest days, training frequency, and streaks. Seeing a month full of completed workouts is one of the best motivators to keep showing up."
      },
      {
        url: "/assets/fitness-tracker/fnc_mobile_friends.png",
        description: "Friend Activity - See What Your Friends Are Training",
        businessImpact: "Keep up with your friends' workouts in a social feed — see what muscle groups they hit, how many sets they did, and how heavy they went. Tap into any workout for the full breakdown. Knowing your friends are training creates accountability that keeps everyone coming back."
      },
      {
        url: "/assets/fitness-tracker/fnc_mobile_template.png",
        description: "Workout Templates - Start Training in Seconds",
        businessImpact: "Save your favorite routines as templates and start a workout with a single tap. Share templates with friends via share codes so your whole group can follow the same program. No more re-entering the same exercises every session — just pick a template and go."
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
      apiEndpoints: "37 PHP endpoints covering auth, workouts, exercises, goals, friends, messages, groups, challenges, leaderboard, trends, templates, notifications, reactions, weight, achievements, and plateau detection",
      databaseTables: "33 tables covering workouts, exercises, sets, users, goals, friendships, messages, groups, challenges, templates, weight tracking, notifications, reactions, achievements, scoring, session persistence, and more",
      moduleSystem: "ES6 modules with dependency injection — PointsCalculator, WorkoutManager, SocialManager, TrendsManager, TemplatesManager, GoalsManager, GroupsManager, ChallengesManager, WeightManager, SpectateManager, NotificationsManager, ReactionsManager, and others",
      testingApproach: "Manual testing with Docker for local development, deployed via SFTP with cache-busting"
    }
  },
  {
    id: "roulette-royal",
    title: "Roulette Royal",
    description: "Multiplayer American roulette as a Discord Activity, with server-authoritative outcomes, provably-fair commit/reveal, and a real-time shared table for everyone in a voice channel",
    longDescription: `Roulette Royal is a registered, verified Discord Activity: an embedded web app that launches inside a
    Discord voice channel so everyone in that channel sits at one table, bets against one wheel, and watches a single spin
    resolve together. The client is a Vite single-page app driving a canvas wheel with simulated ball physics; the server is
    Node.js and Express with a WebSocket round clock that owns the RNG and every balance. A shared TypeScript package holds
    the rules, payouts, economy and wire protocol, so both sides import the same source of truth and the test suite can
    exercise it directly. Outcomes are decided server-side and only after betting closes, and each round publishes a SHA-256
    commitment before the spin that is revealed afterwards, so players can verify the result was fixed in advance. Live in
    production on Railway with 4,300+ player wallets.`,

    technologies: [
      "TypeScript",
      "Vite",
      "Node.js",
      "Express 4",
      "WebSocket (ws)",
      "Discord Embedded App SDK",
      "HTML5 Canvas",
      "Discord OAuth2",
      "Discord Monetization (SKUs)",
      "Railway"
    ],

    features: [
      "🎯 One shared table per voice channel, so everyone who launches from the same channel bets on the same wheel",
      "🎰 Canvas wheel with simulated ball physics: deceleration, pocket capture, and a landing that matches the server's result",
      "🔒 Provably fair rounds: a SHA-256 commitment is published before the spin and revealed after, so outcomes are verifiable",
      "💰 Full American roulette bet set: straights, splits, corners, streets, dozens, columns, outside bets, and call bets",
      "👤 Live seat cards showing each player's balance, stake and bet summary as the round fills",
      "👀 Spectator mode: watchers sit outside the seat limit and can take a seat when one opens",
      "🎁 Daily login streak, referral rewards, and a free top-up that is immediate and uncapped so nobody is ever asked to pay to keep playing",
      "🛒 In-app storefront with six chip tiers and a subscription, purchased through Discord's own checkout",
      "📱 Responsive down to 320px with a landscape layout for phones, measured at eight viewports rather than eyeballed",
      "📊 Server-side funnel and retention instrumentation feeding a dedicated metrics endpoint"
    ],

    architecture: {
      frontend: "Vite single-page app in TypeScript with a canvas wheel renderer, embedded via the Discord Embedded App SDK",
      backend: "Node.js/Express with a ws WebSocket server owning the round clock, the RNG and every balance",
      database: "JSON file persistence with atomic rename-on-write, keeping wallets and metrics in separate files so a corrupt counter can never cost anyone their balance",
      deployment: "Railway, auto-deploying on push to main, pinned to a single replica because tables live in process memory"
    },

    highlights: [
      "Server decides the winning pocket and only after betting closes, so the client never generates an outcome and no client-reported bet, balance or entitlement is trusted",
      "Provably-fair commit/reveal: the round's seed is hashed and published before the spin, so a player can check afterwards that the result was not chosen to suit the house",
      "Shared TypeScript package imported by both client and server, so payouts and the 5.26% house edge are asserted by the same tests both sides run against",
      "30-message typed WebSocket protocol covering betting, settlement, presence, spectating, emotes, purchases and reconnection",
      "250 tests across 16 suites, with the house-edge test as the one that matters, since money logic is confined to a single module by design",
      "Six weeks of production measurement: funnel, retention and checkout instrumentation used to run pre-registered experiments with stated falsifiers rather than post-hoc explanations"
    ],

    links: {
      live: undefined,
      demo: undefined
    },

    images: [
      {
        url: "/assets/roulette/table_desktop.png",
        description: "The Shared Table - One Wheel for the Whole Voice Channel",
        businessImpact: "Everyone who launches the activity from the same Discord voice channel lands here, at the same table, watching the same wheel. The 38-pocket American layout (0 and 00) sits above the full felt, with seat cards on the left showing who else is playing and what they are holding. Because the activity runs inside Discord, there is no install, no account to create and no link to share, so people already talking to each other are one click from playing together."
      },
      {
        url: "/assets/roulette/betting_desktop.png",
        description: "Placing Bets - Live Stake Readout as the Round Fills",
        businessImpact: "Pick a chip from the rack and click the felt; every bet lands instantly with its stake shown on the spot. The header tracks the committed stake (Bet 600) separately from the balance, and the seat card updates to '4,650 · 600 out' with a running summary of exactly which bets are live. Undo, redo, clear, rebet and double are all one click, and an auto-rebet toggle repeats the same spread every round for players who have settled on a system."
      },
      {
        url: "/assets/roulette/shop_desktop.png",
        description: "Chip Store - Six Tiers and a Subscription, Through Discord Checkout",
        businessImpact: "Chips can be bought but never cashed out, transferred or redeemed outside the game. A purchase buys more play, never better odds, and the wheel is the same 38 pockets for everyone. Purchases run through Discord's own checkout, so no payment details ever touch this app. The figure on each card is deliberately the figure Discord is about to charge for: an earlier version showed the doubled first-purchase amount and quietly broke checkout for first-time buyers until the funnel instrumentation caught it."
      },
      {
        url: "/assets/roulette/table_mobile.png",
        description: "Mobile Portrait - The Whole Game on a Phone",
        businessImpact: "Discord Activities launch on phones as readily as desktops, so the felt reflows rather than shrinking: the number grid scrolls horizontally, outside bets stack, and the chip rack and Ready button stay within thumb's reach at the bottom. Layout here is verified by an automated audit across eight viewports down to 320px, because the real defects in this area passed every visual check and were only ever visible as numbers."
      },
      {
        url: "/assets/roulette/table_mobile_landscape.png",
        description: "Mobile Landscape - The Full Board, No Scrolling",
        businessImpact: "Turned sideways, the entire board fits with nothing cut off and nothing to scroll: the wheel, the full three-row number grid and every outside bet at once. The app detects an upright phone and suggests the rotation once, timed to land after the first betting window so it never collides with a message about free chips."
      }
    ],

    workflow: [
      "Launch from a Discord voice channel: OAuth handshake, then join the table keyed to that activity instance",
      "Claim the daily login streak and any referral chips before the first round",
      "Place bets during the betting window, with live validation against the balance and the rules",
      "Betting closes, the server derives the pocket from the committed seed, and the wheel animates to the result",
      "Settlement pays every bet from the shared payout table and broadcasts updated balances",
      "Bust, and the free top-up lands immediately, then either rebet, spectate, or open the shop"
    ],

    technicalDetails: {
      lines: "25,000+",
      files: "53 TypeScript/CSS source files (14 client, 9 server, 16 shared, 14 test suites)",
      apiEndpoints: "5 REST endpoints (OAuth token exchange, config, health, metrics, export) plus a 30-message typed WebSocket protocol",
      databaseTables: "No SQL database. JSON file persistence with atomic rename-on-write, wallets and metrics in separate files so a corrupt counter cannot cost anyone their balance",
      moduleSystem: "ES modules with a shared TypeScript package imported by both client and server, defining rules, payouts, fairness, economy and wire protocol once",
      testingApproach: "250 tests across 16 suites run with the Node test runner, plus an automated multi-viewport layout audit and headless multiplayer smoke tests against a live server"
    }
  }
];