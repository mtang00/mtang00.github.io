# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Modern portfolio website built with React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion for professional animations and optimal performance.

**Repository:** https://github.com/mtang00/mtang00.github.io
**Live Site:** https://mtang00.github.io/

## Tech Stack

- **React 18** with hooks and concurrent features
- **TypeScript** in strict mode (no implicit any, strict null checks, noUnusedLocals/Parameters)
- **Vite 5** - Dev server on port 3000, auto-opens browser
- **Tailwind CSS 3** - Utility-first with custom color palette (primary blue, secondary indigo)
- **Framer Motion 11** - All animations and transitions
- **ESLint + Prettier** - Code quality and formatting

## Development Commands

```bash
npm run dev            # Start dev server (port 3000)
npm run build          # TypeScript check + Vite production build
npm run preview        # Preview production build
npm run type-check     # TypeScript without emit
npm run lint           # ESLint with strict warnings
npm run format         # Prettier formatting
npm run deploy         # Build + deploy via gh-pages package
```

## Architecture Overview

### Single Page Application Layout

App.tsx renders all sections sequentially (no routing):

1. **Navigation** - Fixed sticky header, smooth scroll to hash anchors (#about, #projects, etc.)
2. **Hero** - Animated code background, gradient text, floating shapes
3. **About** - Personal bio
4. **Projects** - Grid of ProjectCards that open ProjectModal on click
5. **Skills** - Color-coded skill badges grouped by category
6. **Education** - University details with coursework grid
7. **Contact** - Email, GitHub, LinkedIn, resume links
8. **Footer** - Copyright

### Component Structure (Atomic Design)

- **Atoms** (`src/components/atoms/`) - Button, TechTag, FeatureTag
- **Molecules** (`src/components/molecules/`) - Navigation, ProjectCard, ResumePreview, ImageSlideshow
- **Organisms** (`src/components/organisms/`) - Hero, About, Projects, ProjectModal, Skills, Education, Contact, Footer

### Data Layer

All content is centralized in `src/data/` with TypeScript interfaces from `src/types/index.ts`:

- **projects.ts** - Portfolio project entries. Each Project has: id, title, description, longDescription, technologies, features, architecture (frontend/backend/database/deployment), highlights, links (with optional testCredentials), images (string[] or ProjectImage[] with businessImpact), workflow steps, and technicalDetails (lines, files, apiEndpoints, databaseTables, moduleSystem, testingApproach).
- **personal.ts** - PersonalInfo, contactInfo, skills (categorized: Frontend, Backend, Database, Tools & DevOps, Concepts), education.

### Modal System

**ProjectModal** is the main interactive component - displays full project details with:
- ImageSlideshow (keyboard nav with arrow keys, dot indicators, business impact descriptions)
- Architecture breakdown, feature list, workflow steps
- Live demo links and test credentials display
- Escape key / background click to close, AnimatePresence for enter/exit

**ResumePreview** - Floating trigger that opens full-screen PDF viewer modal with download button.

### Utilities

- `src/utils/analytics.ts` - Google Analytics wrapper (trackEvent, trackPageView, trackProjectView, trackContactClick). GA ID: G-RCGRH3NVP8.

## Portfolio Projects

Two projects are showcased, defined in `src/data/projects.ts`:

### PRO Fence Naperville (`pro-fence`)
Full-stack business management system for a fencing company. React/TypeScript frontend, C#/.NET backend, SQL Server database. Features SVG fence sketch editor, PDF estimate generation, customer/inventory management.

### FitTracker Pro (`fitness-tracker`)
Full-stack fitness tracking Progressive Web App at **fnctracker.com**. Vanilla JavaScript ES6 modules frontend, PHP/SQLite backend, Docker deployment. 15,000+ lines of code, 800+ exercise library, social features (friends/messaging/groups), goal tracking, gamification with fitness score algorithm, workout templates, leaderboards. Test credentials: username `test`, password `test`.

## Critical Development Rules

1. **NEVER add comments** unless explicitly requested - code should be self-documenting
2. **Check for duplicates** - Search existing codebase before implementing new functions
3. **Type everything** - No `any` types unless absolutely necessary; use interfaces for object shapes
4. **Framer Motion for all animations** - Use transform/opacity for performance; respect prefers-reduced-motion
5. **Mobile-first responsive** - Tailwind breakpoints (sm, md, lg)

## Deployment

- **Automatic:** GitHub Actions (`.github/workflows/deploy.yml`) deploys on push to `main` - runs npm ci, build, then deploys dist/ to GitHub Pages
- **Manual:** `npm run deploy` or `./deploy.sh`
- **TypeScript config:** Target ES2020, bundler module resolution for Vite compatibility
