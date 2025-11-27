# BOMdrop.com.au

A crawlable, SEO-optimized satirical comparison website critiquing the $95.6M BOM.gov.au redesign.

## Overview

This Next.js 14 App Router website provides sourced comparisons showing what Australia could have purchased instead of spending $95.6 million on the Bureau of Meteorology website redesign. Every comparison is backed by official government sources, Senate Estimates testimony, or public procurement data.

## Features

- **200+ Sourced Comparisons**: Every item includes direct links to government sources
- **6 Categories**: Infrastructure, Emergency Services, Staffing, Technology, Climate Action, and Absurd
- **Full SEO Optimization**: Dynamic metadata, JSON-LD schema, sitemap, robots.txt
- **Static Site Generation**: All 200+ pages pre-rendered at build time for perfect crawlability
- **Machine-Readable API**: JSON feed available at `/api/feed.json`
- **Sortable Sources Table**: Complete transparency with exportable CSV
- **PWA Support**: Progressive Web App manifest for mobile installation

## Project Structure

```
bomdrops.com.au/
├── src/
│   ├── app/
│   │   ├── layout.js              # Root layout with SEO meta
│   │   ├── page.js                # Homepage
│   │   ├── globals.css            # Global styles
│   │   ├── sitemap.js             # Dynamic sitemap generation
│   │   ├── compare/[id]/          # Dynamic comparison pages (200+ static)
│   │   ├── category/[slug]/       # Category archive pages (6 static)
│   │   ├── sources/               # Master sources table
│   │   ├── methodology/           # Methodology & transparency
│   │   └── api/feed.json/         # Machine-readable data API
│   └── data/
│       └── comparisons.js         # Complete sourced data (200+ items)
├── public/
│   ├── robots.txt                 # Search engine directives
│   ├── manifest.json              # PWA manifest
│   └── favicon.ico                # Site icon
└── package.json
```

## Data Structure

Each comparison item includes:

```javascript
{
  id: 'unique-slug',                    // URL-safe identifier
  name: 'Item Name',                    // Display name
  cost: 12345,                          // Cost in AUD (integer)
  category: 'infrastructure',           // Category slug
  icon: '🏗️',                           // Emoji icon
  description: 'Full description',      // What it is
  source: 'https://...',                // Direct link to government source
  calculationNotes: 'How derived',      // Calculation methodology
  procurementContext: 'Real context',   // What quantity represents
  senateReference: 'Senate Est 2024',   // Official reference
  lastVerified: '2024-11-01',          // ISO date
  tags: ['tag1', 'tag2']               // Searchable tags
}
```

## Installation & Usage

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build (generates 200+ static pages)
npm run build

# Start production server
npm run start
```

## Build Output

The production build generates:

- **200+ static HTML pages** in `/compare/[id]/`
- **6 category pages** in `/category/[slug]/`
- **Dynamic sitemap.xml** with all URLs
- **JSON API** at `/api/feed.json`
- **Optimized assets** for fast loading

## SEO Features

### Metadata
- Dynamic `<title>` tags for each comparison
- Meta descriptions with cost analysis
- Canonical URLs for all pages
- Open Graph tags for social sharing
- Twitter Card support

### Structured Data
- JSON-LD schema on every comparison page
- `SatiricalArticle` type with government citations
- Organization and source references

### Crawlability
- All content server-side rendered
- No JavaScript required for content
- Clean URL structure (`/compare/item-slug/`)
- Proper breadcrumb navigation
- Internal linking between related items

## API Access

### JSON Feed
```
GET https://bomdrop.com.au/api/feed.json
```

Returns complete dataset with:
- All 200+ comparisons with full metadata
- Category information
- Statistics and aggregations
- CORS-enabled for third-party access

### CSV Export
Available on the sources page (`/sources/`) with sortable columns.

## Data Sources

All data is sourced from:
- Senate Estimates transcripts
- Government department annual reports
- FOI (Freedom of Information) responses
- Public procurement frameworks
- Official government websites

See `/methodology/` for complete verification standards.

## License

Content: Creative Commons Attribution 4.0 International (CC BY 4.0)
Code: MIT License

## Disclaimer

This is a satirical project not affiliated with the Australian Bureau of Meteorology or the Australian Government. All data is sourced from publicly available government records for transparency and accountability purposes.
