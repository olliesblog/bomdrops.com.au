#!/bin/bash
# Script to fix _next directory issue by copying and renaming, then updating HTML references

cd out

# Copy _next to nextstatic (without underscore)
echo "Copying _next to nextstatic..."
cp -r _next nextstatic

# Update all HTML files to reference nextstatic instead of _next
echo "Updating HTML references..."
find . -name "*.html" -type f -exec sed -i '' 's|/_next/|/nextstatic/|g' {} +

echo "Done! Upload the 'out' directory. CSS will now be at /nextstatic/static/css/"
