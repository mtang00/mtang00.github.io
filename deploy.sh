#!/bin/bash

# Build the project
npm run build

# Navigate to build output directory
cd dist

# Initialize git repository in dist folder
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Force push to gh-pages branch
git push -f https://github.com/mtang00/mtang00.github.io.git main:gh-pages

cd ..