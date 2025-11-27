#!/bin/bash
# Safe build script that always clears cache before building
# This prevents CSS breaking issues

echo "🧹 Clearing Next.js cache..."
rm -rf .next

echo "📦 Building site..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🔧 Running fix-upload script..."
    bash fix-upload.sh
    echo ""
    echo "✅ Site exported to /out and ready to upload!"
else
    echo "❌ Build failed!"
    exit 1
fi
