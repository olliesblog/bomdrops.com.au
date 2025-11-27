#!/bin/bash

# Export Next.js static site to /out directory
# Includes all JavaScript bundles for client-side components

echo "🚀 Starting export process..."

# Clean previous export
echo "🧹 Cleaning previous export..."
rm -rf out

# Create out directory
echo "📁 Creating /out directory..."
mkdir -p out

# Copy static HTML/assets from .next/server/app
echo "📄 Copying HTML pages and assets..."
cp -r .next/server/app/* out/

# Copy JavaScript bundles from .next/static
echo "⚙️  Copying JavaScript bundles..."
mkdir -p out/_next
cp -r .next/static out/_next/

# Copy public assets
echo "🖼️  Copying public assets..."
cp -r public/* out/

# Summary
echo ""
echo "✅ Export complete!"
echo ""
echo "📊 Statistics:"
echo "   Total size: $(du -sh out/ | cut -f1)"
echo "   Total files: $(find out -type f | wc -l | tr -d ' ')"
echo "   OG images: $(ls out/og/ 2>/dev/null | wc -l | tr -d ' ')"
echo ""
echo "🚀 Ready to deploy from /out directory!"
