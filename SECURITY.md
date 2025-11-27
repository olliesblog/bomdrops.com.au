# Security Policy

## Overview

BoMdrop.com.au is a static website with no server-side processing, no databases, and no user authentication. This document outlines the security measures implemented.

## Security Features

### 1. Static Site Generation
- **No Server-Side Code**: Entire site is pre-rendered as static HTML/CSS/JS
- **No Database**: All data is embedded in the static build
- **No User Authentication**: No login system or user accounts
- **No Form Submissions**: No data collection or processing

### 2. Content Security Policy (CSP)
The site implements strict CSP headers via `_headers` file:
- `default-src 'self'`: Only load resources from same origin
- `script-src 'self' 'unsafe-inline' 'unsafe-eval'`: Scripts from same origin (inline needed for Next.js)
- `style-src 'self' 'unsafe-inline'`: Styles from same origin
- `img-src 'self' data: https:`: Images from same origin, data URIs, and HTTPS
- `frame-ancestors 'none'`: Prevent clickjacking
- `form-action 'self'`: Forms can only submit to same origin

### 3. Security Headers
- `X-Frame-Options: DENY`: Prevents clickjacking attacks
- `X-Content-Type-Options: nosniff`: Prevents MIME type sniffing
- `X-XSS-Protection: 1; mode=block`: Legacy XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin`: Controls referrer information
- `Permissions-Policy`: Disables unnecessary browser features

### 4. XSS Protection
- **React Auto-Escaping**: All user input automatically escaped by React
- **No dangerouslySetInnerHTML with user data**: Only used for JSON-LD structured data
- **URL Encoding**: All URL parameters properly encoded
- **Safe External Links**: All external links use `rel="noopener noreferrer"`

### 5. Search Functionality Security
- **Client-Side Only**: Search runs entirely in browser, no server queries
- **No Data Transmission**: Search queries never leave the user's browser
- **SEO Protected**: Search results pages marked as `noindex, nofollow`
- **robots.txt**: Search paths blocked from crawlers

### 6. Data Sources
- **Public Data Only**: All comparisons sourced from public government records
- **No PII**: No personal identifiable information collected or displayed
- **No Tracking**: No analytics or tracking scripts
- **No Cookies**: Site functions without cookies

### 7. Dependencies
- **Next.js 14.2.33**: Modern React framework with security features
- **No Third-Party Scripts**: No external JavaScript dependencies loaded at runtime
- **npm audit**: Regular dependency vulnerability checks

### 8. Deployment Security
- **HTTPS Only**: Site should only be served over HTTPS
- **CDN**: Static files served via CDN for DDoS protection
- **No Secrets in Code**: No API keys, tokens, or credentials in codebase
- **Environment Variables**: Not used (static site has no backend)

## Reporting Security Issues

If you discover a security vulnerability, please contact us via:
- X (Twitter): [@UnderdogDigital](https://x.com/UnderdogDigital)
- security.txt: `/.well-known/security.txt`

Please do NOT create public GitHub issues for security vulnerabilities.

## Scope

### In Scope
- XSS vulnerabilities in static content
- Content Security Policy bypasses
- Clickjacking vulnerabilities
- HTTPS/TLS configuration issues
- Information disclosure

### Out of Scope
- Social engineering attacks
- Denial of Service (DoS) attacks
- Issues with third-party hosting providers
- Browser-specific bugs
- Physical security

## Security Best Practices for Deployment

When deploying this static site:

1. **Enable HTTPS**: Always serve over HTTPS with valid SSL certificate
2. **HSTS**: Enable HTTP Strict Transport Security
3. **Deploy _headers file**: Ensure security headers are served
4. **CDN Configuration**: Use CDN for DDoS protection
5. **Regular Updates**: Keep Next.js and dependencies updated
6. **Monitor**: Set up monitoring for unusual traffic patterns

## Static Site Security Advantages

This site benefits from static site security:
- ✅ No SQL injection (no database)
- ✅ No authentication bypass (no auth system)
- ✅ No session hijacking (no sessions)
- ✅ No server-side code execution
- ✅ No file upload vulnerabilities
- ✅ No API endpoint exploitation
- ✅ Minimal attack surface

## Verification

To verify security headers are being served:
```bash
curl -I https://bomdrop.com.au/
```

Check for:
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Content-Security-Policy`
- `Referrer-Policy`
- `Permissions-Policy`

## License

This security policy is part of the BoMdrop.com.au project.
Data available under Creative Commons Attribution 4.0.
