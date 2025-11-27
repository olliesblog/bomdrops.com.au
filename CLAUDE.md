# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BoMdrop.com.au is a satirical static website that analyzes the $96.5 million Australian Bureau of Meteorology website redesign by comparing the cost to tangible alternatives. Built with Next.js 14 and configured for static export.

**Key Stats:**
- 306 sourced comparisons across 16 categories
- 337 total static pages generated at build time
- All data backed by government sources, Senate Estimates, or public procurement records

## Build & Deployment Commands

**CRITICAL: Always use the safe build script to prevent CSS cache corruption:**

```bash
# Production build (preferred method)
bash safe-build.sh

# This script:
# 1. Clears .next cache
# 2. Runs npm run build
# 3. Executes fix-upload.sh
# 4. Exports to /out directory ready for upload
```

**Development:**
```bash
# Start dev server on port 3001
PORT=3001 npm run dev

# If CSS breaks, restart with clean cache:
rm -rf .next && PORT=3001 npm run dev
```

**Manual build (not recommended):**
```bash
npm run build          # Build site
bash fix-upload.sh     # Fix _next directory for hosting
```

## Architecture

### Static Export Configuration

This is a **fully static site** (`output: 'export'` in next.config.js) with special hosting requirements:

- **_next Directory Issue**: Some FTP/hosting services don't upload directories starting with underscore
- **Solution**: `fix-upload.sh` copies `_next` to `nextstatic` and updates all HTML references
- **Result**: CSS/JS served from `/nextstatic/static/` instead of `/_next/static/`

### Data Architecture

**Single Source of Truth: `/src/data/comparisons.js`**

This file contains:
- `BOM_TOTAL_COST`: The $96.5M constant used throughout the site
- `comparisons`: Array of 306 comparison objects, each with:
  - `id`, `name`, `cost`, `category`, `icon`
  - `description`, `source`, `calculationNotes`
  - `procurementContext`, `senateReference`, `lastVerified`
  - `tags`: Array for filtering and related items
- `categories`: Object mapping category slugs to metadata (name, icon, description)
- Helper functions: `getComparisonById()`, `getAllCategories()`, `calculateQuantity()`

**All content is generated from this data file** - there are no separate CMS or content files.

### Route Structure

Next.js App Router with file-based routing:

- `/` - Homepage with featured comparisons
- `/compare/[id]/` - Dynamic comparison detail pages (306 static pages)
- `/category/[slug]/` - Category listing pages (16 categories)
- `/sources/` - Filterable table of all comparisons
- `/methodology/` - About the data sources and methodology
- `/weather/` - Contextual breakdowns of $96.5M ("Weather, it's money well spent?")
- `/press/` - Press coverage page
- `/addendum/` - Service offerings page
- `/search/` - Client-side search functionality
- `/api/feed.json/` - JSON API of all comparison data
- `/sitemap.xml` - Auto-generated sitemap

### Key Components

**Client Components** (marked with `'use client'`):
- `DisclaimerBanner` - Sticky top banner with localStorage persistence
- `ShowDisclaimerButton` - Re-shows dismissed disclaimer
- `MobileMenu` - Hamburger navigation menu
- `SearchButton` - Opens search modal
- `RotatingComparison` - Animated rotating comparison items
- `CountUpNumber` - Animated number counter (triggers on page load, not scroll)
- `ImageLightbox` - Modal lightbox for images (full-height thumbnails, no aspect ratio cropping)
- `HoverableCostBanner` - Interactive cost counter on homepage
- `Logo` - Animated logo (💣→💥 on click)
- `WeatherBox` / `WeatherBoxes` - Weather context fact cards

**Server Components**:
- `Breadcrumbs` - Dynamic breadcrumb navigation
- All page components (layout, pages)

### Styling

- Single global CSS file: `/src/app/globals.css`
- CSS custom properties for theming (--primary, --secondary, --text-color, etc.)
- Mobile-first responsive design with `@media (max-width: 768px)` breakpoints
- No CSS modules or styled-components - all vanilla CSS

### Content Guidelines

**Capitalization Standard**: Sentence case for all headings
- ✅ "Complete source database"
- ❌ "Complete Source Database"
- ✅ "Filter by category:"
- ❌ "Filter by Category:"
- ✅ "All comparisons" (not "All Comparisons")

**Description Truncation**: Card views (compare list, category pages, search results) show only first sentence:
```javascript
const shortDescription = item.description.split(/\.\s+/)[0] + '.'
```
Full descriptions appear only on individual comparison pages.

**Pluralization**: Item names should be grammatically correct for quantities:
- ✅ "Flood Rescue Boats" (for 1,135 items)
- ❌ "Flood Rescue Boat"
- ✅ "Solar Farms (1 MW)" (for 80 items)

**Icons**: Emoji favicons using SVG (`/public/favicon.svg` with 💣)

**Links**: Important external links:
- "BoMdrop.com.au" → https://bomdrop.com.au
- "BOM.gov.au" → https://bom.gov.au

## TypeScript Configuration

The project has TypeScript support installed but uses `.js` files. The `tsconfig.json` includes:
```json
"paths": {
  "@/*": ["./src/*"]
}
```

This enables `@/` imports (e.g., `import { comparisons } from '@/data/comparisons'`)

## Common Tasks

### Adding New Comparison Items

Edit `/src/data/comparisons.js` and add to the `comparisons` array:

```javascript
{
  id: 'unique-slug',
  name: 'Item Name',
  cost: 12345,
  category: 'infrastructure', // Must match a category in categories object
  icon: '📊',
  description: 'Detailed description',
  source: 'https://official-source.gov.au',
  calculationNotes: 'How the cost was calculated',
  procurementContext: 'Could purchase X items...',
  senateReference: 'Senate Committee Reference',
  lastVerified: 'YYYY-MM-DD',
  tags: ['tag1', 'tag2', 'tag3']
}
```

The site automatically generates:
- Detail page at `/compare/unique-slug/`
- Category listing entry
- Search index entry
- API feed entry
- Sitemap entry

### Adding New Categories

Edit `/src/data/comparisons.js` categories object:

```javascript
export const categories = {
  'category-slug': {
    name: 'Category Name',
    icon: '📊',
    description: 'Category description for listing page'
  }
}
```

Then add comparison items with `category: 'category-slug'`

### Updating Metadata

All pages export `metadata` objects for SEO. Update these for:
- Page titles
- Meta descriptions
- OpenGraph data
- Twitter cards
- Canonical URLs

## Important Notes

- **Never use `npm run build` alone** - always use `bash safe-build.sh`
- **Cache issues**: If CSS breaks during development, clear `.next` directory: `rm -rf .next && PORT=3001 npm run dev`
- **No AI references**: Never include references to Claude, ChatGPT, or other AI tools in comments
- **Static-only**: No server-side rendering, no API routes (except static JSON)
- **Australian English**: Use "organised" not "organized", "favourites" not "favorites"
- **Production deployment**: Upload entire `/out` directory after running `safe-build.sh`
- **Images**: Stored in `/public/` (e.g., `bom-melbourne.png`, `bbcweather-melbourne.png`). Compressed versions used with originals backed up as `*-original.png`
- **Unoptimized images**: Next.js Image component uses `unoptimized: true` for static export compatibility
- **The story**: Site created by "one person on a free evening, took around 12 hours, rushed out" - this is part of the satirical narrative
