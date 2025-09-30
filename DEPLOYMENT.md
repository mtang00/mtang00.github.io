# GitHub Pages Deployment Guide

Your React + TypeScript portfolio is now configured for GitHub Pages deployment.

## 🚀 Automatic Deployment (Recommended)

The project is configured with **GitHub Actions** for automatic deployment:

### Setup Steps:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: "GitHub Actions"
   - The workflow will automatically run and deploy your site

3. **Your site will be live at:**
   `https://mtang00.github.io/`

### Automatic Features:
- ✅ Deploys on every push to `main` branch
- ✅ Builds with Node.js 18 and optimized Vite
- ✅ Automatically handles asset paths
- ✅ No manual intervention needed

## 🔧 Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Install dependencies
npm install

# Deploy manually
npm run deploy
```

## 📝 Configuration Details

### Vite Configuration:
- **Base path:** `/` (root domain for mtang00.github.io)
- **Build output:** `dist/` folder
- **Asset optimization:** Enabled for production

### GitHub Actions Workflow:
- **Trigger:** Push to main branch or manual dispatch
- **Node.js:** Version 18
- **Build:** TypeScript compilation + Vite build
- **Deploy:** Automatic to GitHub Pages

## 🔍 Troubleshooting

### Common Issues:

1. **Assets not loading:**
   - Ensure `base: '/repo/'` in `vite.config.ts` matches your repository name
   - Check that all assets are in the `public/` folder

2. **Build failures:**
   - Run `npm run type-check` to check TypeScript errors
   - Run `npm run lint` to check linting issues

3. **GitHub Actions not running:**
   - Check repository Settings → Actions → General
   - Ensure "Allow all actions and reusable workflows" is selected

### Local Testing:
```bash
# Test production build locally
npm run build
npm run preview
```

## 📱 Mobile Optimization

Your portfolio is optimized for:
- ✅ Responsive design (mobile-first)
- ✅ Touch-friendly interactions
- ✅ Fast loading with Vite optimizations
- ✅ Progressive animations with Framer Motion

## 🎯 Performance Features

- **Code splitting:** Automatic with Vite
- **Asset optimization:** Images and CSS minified
- **Modern browser support:** ES2020 target
- **Bundle analysis:** Source maps included in build

Your portfolio is now ready for GitHub Pages! 🎉