# CLAUDE.md

This file provides guidance to Claude Code when working with this React + TypeScript portfolio project.

## Project Overview

Modern portfolio website built with React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion for professional animations and optimal performance.

## Tech Stack

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Professional animations and transitions
- **ESLint + Prettier** - Code quality and formatting

## Development Guidelines

### Code Quality Rules
- **NEVER add comments** unless explicitly requested by the user
- **Check for duplicate functions** before adding new functionality - search existing codebase first
- **Use TypeScript interfaces** for all data structures and props
- **Follow React best practices** - hooks, functional components, proper state management
- **Prefer composition over inheritance** - small, reusable components

### Component Architecture
- **Atomic Design** - Atoms, molecules, organisms, templates, pages
- **Single Responsibility** - Each component has one clear purpose
- **Type Safety** - All props, state, and function parameters properly typed
- **Performance** - Use React.memo, useMemo, useCallback when appropriate

### Animation Guidelines
- **Framer Motion** - Primary animation library for all transitions
- **Performance First** - Use transform and opacity for smooth animations
- **Accessibility** - Respect prefers-reduced-motion settings
- **Progressive Enhancement** - Ensure functionality works without animations

### File Structure
```
src/
├── components/          # Reusable UI components
│   ├── atoms/          # Basic building blocks
│   ├── molecules/      # Simple component combinations
│   └── organisms/      # Complex component combinations
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── data/               # Static data and configuration
└── styles/             # Global styles and Tailwind config
```

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Lint code
npm run lint

# Format code
npm run format
```

### TypeScript Best Practices
- **Strict mode enabled** - No implicit any, strict null checks
- **Interface over type** - Use interfaces for object shapes
- **Generic components** - Make components reusable with generics
- **Proper typing** - Event handlers, refs, children props

### Performance Optimization
- **Code splitting** - Lazy load routes and heavy components
- **Image optimization** - Use modern formats and proper sizing
- **Bundle analysis** - Keep bundle size minimal
- **Memoization** - Strategic use of React optimization hooks

### Styling Guidelines
- **Tailwind CSS** - Utility-first approach for consistent design
- **Responsive design** - Mobile-first approach with breakpoints
- **Dark mode ready** - Design system supports theme switching
- **Component variants** - Use className patterns for component states

## Project-Specific Notes

### Portfolio Features
- Dynamic project loading from TypeScript data
- Professional animations for user interactions
- Responsive design for all screen sizes
- Accessible navigation and interactions
- Modern gradient backgrounds and hover effects

### Data Management
- Project data typed with comprehensive interfaces
- Contact information and social links configurable
- Skills and technologies dynamically rendered
- Modal system for detailed project information

## Critical Development Rules

1. **NEVER add comments** - Code should be self-documenting
2. **Check for duplicates** - Search before implementing new functions
3. **Type everything** - No `any` types unless absolutely necessary
4. **Performance matters** - Optimize for speed and user experience
5. **Accessibility first** - Follow WCAG guidelines
6. **Mobile responsive** - Test on various screen sizes
7. **Clean code** - Prefer readability and maintainability

## Animation Patterns

### Page Transitions
- Smooth fade-in animations for page loads
- Staggered animations for lists and grids
- Parallax effects for hero sections
- Hover animations for interactive elements

### Component Animations
- Button hover states with scale transforms
- Card animations with shadow and scale effects
- Modal entrance/exit animations
- Scroll-triggered animations for sections

## Deployment

- **Vercel** recommended for zero-config deployment
- Build optimization for production
- Environment variables for configuration
- Automatic TypeScript checking in CI/CD

Remember: Build fast, type-safe, and beautiful. Always prioritize user experience and performance.