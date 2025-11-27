# Deployment Guide for BOMdrop.com.au

## Build Output Summary

The production build generates:
- **157 comparison pages** at `/compare/[id]/`
- **6 category pages** at `/category/[slug]/`
- **3 static pages**: Home, Sources, Methodology
- **Dynamic sitemap.xml** with all URLs
- **JSON API** at `/api/feed.json`
- **robots.txt** for search engine crawlers

Total: **171 statically generated pages**

## Deployment Options

### Option 1: Static Export (Recommended for Maximum SEO)

The site is pre-configured with `output: 'export'` in `next.config.js`, which generates a fully static site in the `out/` directory.

```bash
npm run build
```

This creates a complete static website in `/out/` that can be deployed to:
- **Netlify**: Drag and drop the `out/` folder
- **Vercel**: Connect repo and deploy (auto-detects Next.js)
- **GitHub Pages**: Push `out/` folder to gh-pages branch
- **AWS S3 + CloudFront**: Upload `out/` folder
- **Any static hosting**: nginx, Apache, etc.

### Option 2: Vercel (Next.js Optimized)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Vercel provides:
- Automatic builds on git push
- Edge caching for performance
- Analytics and monitoring
- Free SSL certificates

### Option 3: Netlify

1. Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "out"
```

2. Deploy:
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Option 4: Self-Hosted

```bash
# Build the site
npm run build

# Serve with any static file server
npx serve out

# Or use nginx/Apache to serve the out/ directory
```

## Pre-Deployment Checklist

- [ ] Update domain in `src/app/layout.js` metadata
- [ ] Update domain in `src/app/sitemap.js`
- [ ] Update domain in comparison page canonical URLs
- [ ] Replace placeholder favicon with actual icon
- [ ] Add Google Analytics (optional)
- [ ] Configure CDN caching headers
- [ ] Test all 157 comparison pages load correctly
- [ ] Verify sitemap.xml is accessible
- [ ] Verify robots.txt is accessible
- [ ] Test JSON API endpoint
- [ ] Test CSV export functionality

## SEO Configuration Post-Deployment

1. **Google Search Console**
   - Submit sitemap: `https://bomdrop.com.au/sitemap.xml`
   - Verify domain ownership
   - Request indexing for key pages

2. **Bing Webmaster Tools**
   - Submit sitemap
   - Verify ownership

3. **Social Media**
   - Test Open Graph tags with Facebook Debugger
   - Test Twitter Cards with Twitter Card Validator
   - Share on social media to generate previews

4. **Performance**
   - Run Lighthouse audit (aim for 90+ on all metrics)
   - Enable Brotli/Gzip compression
   - Set cache headers: `Cache-Control: public, max-age=31536000, immutable` for assets

## Caching Strategy

Recommended cache headers:

```nginx
# Static assets (CSS, JS, images)
location /_next/static/ {
    add_header Cache-Control "public, max-age=31536000, immutable";
}

# HTML pages
location / {
    add_header Cache-Control "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800";
}

# Sitemap (update daily)
location /sitemap.xml {
    add_header Cache-Control "public, max-age=86400";
}

# API feed (update daily)
location /api/ {
    add_header Cache-Control "public, max-age=86400";
}
```

## Monitoring

After deployment, monitor:
- Google Search Console for indexing status
- Page load speed (Core Web Vitals)
- 404 errors
- Sitemap coverage
- Social media sharing previews

## Updates

To add new comparisons:

1. Edit `src/data/comparisons.js`
2. Add new item following the schema
3. Run `npm run build`
4. Deploy updated `out/` folder

The sitemap will automatically include new pages.

## Analytics (Optional)

Add Google Analytics by updating `src/app/layout.js`:

```javascript
<head>
  {/* Google Analytics */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `
  }}/>
</head>
```

## Troubleshooting

**Pages not indexing?**
- Check robots.txt allows crawling
- Verify sitemap.xml is accessible
- Submit sitemap to Google Search Console
- Check for noindex tags (should not be present)

**Slow performance?**
- Enable CDN caching
- Compress assets (Brotli/Gzip)
- Use image optimization
- Enable HTTP/2

**API not working?**
- Verify `/api/feed.json/route.js` is deployed
- Check CORS headers if accessing from different domain
- Ensure JSON is valid

## Production Checklist

Before going live:
- [ ] Build completes without errors
- [ ] All 171 pages generated
- [ ] Sitemap includes all URLs
- [ ] Robots.txt configured correctly
- [ ] Metadata is accurate
- [ ] Sources links are working
- [ ] Mobile responsive design tested
- [ ] Accessibility checked (WCAG 2.1 AA)
- [ ] Performance optimized (Lighthouse 90+)
- [ ] SSL certificate configured
- [ ] Domain configured correctly
- [ ] Analytics configured (if using)
