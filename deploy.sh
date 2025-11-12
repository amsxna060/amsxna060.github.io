#!/bin/bash

# Manual deployment script for GitHub Pages
# Run this if npm run deploy fails

echo "🚀 Building React app..."
npm run build

echo "📦 Creating temporary deployment directory..."
cd build

echo "🌿 Initializing git in build folder..."
git init
git checkout -b gh-pages
git add -A
git commit -m "Deploy to GitHub Pages"

echo "🔗 Pushing to gh-pages branch..."
git push -f https://github.com/amsxna060/amolsaxena060.github.io.git gh-pages

echo "✅ Deployment complete!"
echo "🌐 Your site will be live at: https://amsxna060.github.io"
echo "⏰ Wait 2-3 minutes for GitHub Pages to update"

cd ..
rm -rf build/.git
