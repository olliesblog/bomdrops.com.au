# GEMINI.md - Project Context for AI Agent

This file provides guidance for the Gemini AI agent when working with code in this repository.

## Project Overview

BoMdrop.com.au is a satirical static website that analyzes the $96.5 million Australian Bureau of Meteorology website redesign by comparing the cost to tangible alternatives.

- **Technology**: Next.js 14 (React) with App Router.
- **Architecture**: This is a **fully static site** configured for export via `output: 'export'` in `next.config.js`. All pages are pre-rendered at build time.
- **Data Source**: The **single source of truth** for all content is the `/src/data/comparisons.js` file. This file contains all comparison items, categories, and related data. There is no external CMS or database.

## Building and Running

### Production Build & Export

The primary command for creating a production-ready build is:

```bash
bash safe-build.sh
```

**CRITICAL**: Always use this script for production builds. It prevents CSS caching issues and prepares the site for static hosting. The script performs the following steps:
1.  Clears the Next.js cache (`rm -rf .next`).
2.  Runs the standard build (`npm run build`).
3.  Executes `fix-upload.sh` to handle special hosting requirements.
4.  The final static site is placed in the `/out` directory, ready for deployment.

### Development Server

To run the local development server:

```bash
npm run dev
```

By default, this runs on port 3000. To specify a different port (e.g., 3001):

```bash
PORT=3001 npm run dev
```

**Troubleshooting**: If CSS or other styles appear broken during development, it is likely a caching issue. Stop the server and restart it with a clean cache:

```bash
rm -rf .next && npm run dev
```

## Development Conventions

### Data Architecture

-   All comparison data and categories are managed exclusively in `/src/data/comparisons.js`.
-   To add a new comparison item, add a new object to the `comparisons` array in this file. The site will automatically generate the corresponding pages and links.
-   To add a new category, update the `categories` object in the same file.

### Static Export Workaround

-   **Problem**: Some hosting providers (especially FTP-based ones) do not correctly serve directories that start with an underscore, such as Next.js's `_next` directory.
-   **Solution**: The `fix-upload.sh` script (run automatically by `safe-build.sh`) copies the `/out/_next` directory to `/out/nextstatic` and then updates all HTML files to reference the new `/nextstatic/` path for CSS, JS, and other assets.

### Styling

-   **Global CSS**: All styling is handled by a single file: `/src/app/globals.css`.
-   **Methodology**: The project uses vanilla CSS with CSS custom properties (variables) for theming (e.g., `--primary`, `--text-color`).
-   **No CSS-in-JS**: There are no CSS Modules, Styled-components, or other CSS-in-JS libraries.

### Content & Language

-   **Language**: Use Australian English (e.g., "organised," "favourites").
-   **Capitalization**: All headings should use Sentence case (e.g., "Complete source database," not "Complete Source Database").

### AI Agent Instructions

-   **No AI References**: Do not include any references to Gemini, Claude, or any other AI tools in code comments or documentation.
