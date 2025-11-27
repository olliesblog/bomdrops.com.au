import Link from 'next/link'

export const metadata = {
  title: 'Technical Audit or BoM website',
  description: 'Comprehensive technical SEO audit of the $96.5 million BOM.gov.au redesign including Screaming Frog analysis, performance metrics, accessibility scores, and design comparison with BBC Weather.',
  openGraph: {
    title: 'Technical Audit or BoM website',
    description: 'Independent technical analysis of BOM.gov.au including SEO audit, performance testing, and design comparison.',
    type: 'website',
    url: 'https://bomdrop.com.au/audit/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Audit or BoM website',
    description: 'Independent technical analysis of BOM.gov.au including SEO audit, performance testing, and design comparison.',
  },
  alternates: {
    canonical: 'https://bomdrop.com.au/audit/',
  },
}

export default function AuditPage() {
  return (
    <div className="container">
      <div className="hero" style={{ padding: '2rem 0' }}>
        <h1>Technical Audit of BOM.gov.au</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '1rem auto' }}>
          What did $96.5 million actually deliver?
          <br />
          An independent technical analysis of the redesigned Bureau of Meteorology website
        </p>
      </div>

      <section style={{ marginTop: '3rem' }}>
        <div className="info-box" style={{ background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)', color: 'white', border: 'none' }}>
          <h2 style={{ color: 'white', marginTop: 0 }}>⚠️ Executive Summary</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            The redesigned BOM.gov.au launched with significant technical issues despite the $96.5 million budget.
            This page documents the findings from comprehensive technical audits conducted post-launch.
          </p>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>📊 SEO & Technical Audit</h2>

        <div className="info-box">
          <h3>Screaming Frog Analysis</h3>
          <p>
            Comprehensive crawl analysis of BOM.gov.au using Screaming Frog SEO Spider to identify
            technical issues, broken links, and SEO problems.
          </p>

          <div style={{ marginTop: '1.5rem' }}>
            <h4>Key Findings:</h4>
            <ul>
              <li><strong>729 Different 404 Errors</strong> - At $132,373 per 404 error, that's quite the investment in broken links</li>
              <li><strong>URL Structure Issues</strong> - [Add your Screaming Frog findings here]</li>
              <li><strong>Redirect Chains</strong> - [Add redirect analysis]</li>
              <li><strong>Missing Meta Descriptions</strong> - [Add meta description audit]</li>
              <li><strong>Duplicate Content</strong> - [Add duplicate content findings]</li>
              <li><strong>Image Optimization</strong> - [Add image analysis]</li>
            </ul>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              <strong>Note:</strong> Full Screaming Frog audit data and screenshots available upon request.
              Data collected: [Add date of audit]
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>⚡ Performance Metrics</h2>

        <div className="info-box">
          <h3>Page Speed & Core Web Vitals</h3>
          <p>Performance analysis using Google Lighthouse, PageSpeed Insights, and WebPageTest.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{ padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ marginTop: 0 }}>Lighthouse Score</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Performance, Accessibility, Best Practices, SEO
              </p>
              <div style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
                [Add Lighthouse scores here]
              </div>
            </div>

            <div style={{ padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ marginTop: 0 }}>Core Web Vitals</h4>
              <ul style={{ fontSize: '0.9rem', margin: '1rem 0 0 0' }}>
                <li>LCP: [Add Largest Contentful Paint]</li>
                <li>FID: [Add First Input Delay]</li>
                <li>CLS: [Add Cumulative Layout Shift]</li>
              </ul>
            </div>

            <div style={{ padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ marginTop: 0 }}>Load Times</h4>
              <ul style={{ fontSize: '0.9rem', margin: '1rem 0 0 0' }}>
                <li>First Byte: [Add TTFB]</li>
                <li>First Paint: [Add FP]</li>
                <li>Full Load: [Add total load time]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>♿ Accessibility Audit</h2>

        <div className="info-box">
          <h3>WCAG 2.1 Compliance Analysis</h3>
          <p>
            Accessibility testing against Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
          </p>

          <div style={{ marginTop: '1.5rem' }}>
            <h4>Findings:</h4>
            <ul>
              <li><strong>WAVE Accessibility Score:</strong> [Add WAVE results]</li>
              <li><strong>Keyboard Navigation:</strong> [Add keyboard nav testing]</li>
              <li><strong>Screen Reader Compatibility:</strong> [Add screen reader testing]</li>
              <li><strong>Color Contrast Issues:</strong> [Add contrast analysis]</li>
              <li><strong>Alt Text Coverage:</strong> [Add alt text audit]</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>🎨 Design Comparison: BOM.gov.au vs BBC Weather</h2>

        <div className="info-box" style={{ background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)', border: 'none' }}>
          <h3 style={{ marginTop: 0 }}>Design Origins & Similarities</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Visual and structural analysis comparing the $96.5M BOM.gov.au redesign with BBC Weather's interface.
          </p>
        </div>

        <div className="info-box" style={{ marginTop: '2rem' }}>
          <h3>Side-by-Side Comparison</h3>
          <p>
            Detailed comparison of layout, navigation, color schemes, typography, and UI components.
          </p>

          <div style={{ marginTop: '1.5rem' }}>
            <h4>Key Similarities Identified:</h4>
            <ul>
              <li><strong>Layout Structure:</strong> [Add layout comparison]</li>
              <li><strong>Navigation Patterns:</strong> [Add navigation analysis]</li>
              <li><strong>Color Palette:</strong> [Add color scheme comparison]</li>
              <li><strong>Typography Choices:</strong> [Add font analysis]</li>
              <li><strong>Weather Icons:</strong> [Add icon comparison]</li>
              <li><strong>Data Visualization:</strong> [Add chart/graph comparison]</li>
            </ul>
          </div>

          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#e8f4f8', borderRadius: '8px', border: '1px solid #b8dce8' }}>
            <h4 style={{ marginTop: 0, color: '#003366' }}>Cost Comparison</h4>
            <p style={{ marginBottom: '1rem' }}>
              <strong>BBC Weather:</strong> Built and maintained as part of BBC Digital operations
            </p>
            <p style={{ marginBottom: '0' }}>
              <strong>BOM.gov.au:</strong> $96.5 million for redesign
            </p>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              <strong>Note:</strong> Screenshots and detailed design analysis available. This comparison is not to
              criticize design inspiration, but to question the value delivered for $96.5M of public money.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>🔍 Site Architecture Analysis</h2>

        <div className="info-box">
          <h3>Information Architecture Review</h3>
          <p>
            Analysis of site structure, content organization, and user journey optimization.
          </p>

          <div style={{ marginTop: '1.5rem' }}>
            <h4>Findings:</h4>
            <ul>
              <li><strong>Navigation Depth:</strong> [Add navigation hierarchy analysis]</li>
              <li><strong>Internal Linking:</strong> [Add internal link structure]</li>
              <li><strong>Content Silos:</strong> [Add content organization analysis]</li>
              <li><strong>User Journey Paths:</strong> [Add user flow analysis]</li>
              <li><strong>Search Functionality:</strong> [Add search testing results]</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>📱 Mobile Experience</h2>

        <div className="info-box">
          <h3>Mobile Responsiveness & Usability</h3>
          <p>
            Testing across multiple devices and screen sizes to evaluate mobile user experience.
          </p>

          <div style={{ marginTop: '1.5rem' }}>
            <h4>Mobile Testing Results:</h4>
            <ul>
              <li><strong>Responsive Breakpoints:</strong> [Add breakpoint analysis]</li>
              <li><strong>Touch Target Sizes:</strong> [Add touch target testing]</li>
              <li><strong>Mobile Performance:</strong> [Add mobile speed metrics]</li>
              <li><strong>Mobile-Specific Issues:</strong> [Add mobile bugs/issues]</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>🔒 Security & Privacy</h2>

        <div className="info-box">
          <h3>Security Headers & Privacy Analysis</h3>
          <p>
            Review of security configurations, HTTPS implementation, and privacy compliance.
          </p>

          <div style={{ marginTop: '1.5rem' }}>
            <h4>Security Audit:</h4>
            <ul>
              <li><strong>HTTPS Configuration:</strong> [Add SSL/TLS analysis]</li>
              <li><strong>Security Headers:</strong> [Add security header check]</li>
              <li><strong>Cookie Policy:</strong> [Add cookie analysis]</li>
              <li><strong>Third-Party Scripts:</strong> [Add third-party script audit]</li>
              <li><strong>Privacy Compliance:</strong> [Add privacy policy review]</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <div className="info-box source-verification">
          <h3>📋 Audit Methodology</h3>
          <p>
            This technical audit was conducted using industry-standard tools and methodologies:
          </p>
          <ul>
            <li><strong>Screaming Frog SEO Spider</strong> - Comprehensive site crawl and technical analysis</li>
            <li><strong>Google Lighthouse</strong> - Performance, accessibility, and SEO scoring</li>
            <li><strong>PageSpeed Insights</strong> - Core Web Vitals and performance metrics</li>
            <li><strong>WAVE Accessibility Tool</strong> - WCAG 2.1 compliance testing</li>
            <li><strong>WebPageTest</strong> - Detailed performance waterfall analysis</li>
            <li><strong>Manual Testing</strong> - Cross-browser and cross-device testing</li>
          </ul>
          <p style={{ marginTop: '1.5rem' }}>
            All audit data collected: [Add audit date]
            <br />
            Raw data and detailed reports available upon request.
          </p>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <div className="info-box" style={{ background: '#e8f4f8', border: '1px solid #b8dce8' }}>
          <h3 style={{ color: '#003366' }}>💡 Contribute to This Audit</h3>
          <p>
            Have additional audit data or findings to share? Technical issues to report?
            We welcome contributions to this ongoing analysis.
          </p>
          <p style={{ marginBottom: 0 }}>
            <Link href="/addendum/" style={{ color: '#0066cc', textDecoration: 'underline' }}>
              Contact us
            </Link> to contribute your findings or request the full audit dataset.
          </p>
        </div>
      </section>

      <div style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '3rem' }}>
        <Link href="/" className="btn">
          Back to home
        </Link>
        <Link href="/methodology/" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
          View Methodology
        </Link>
      </div>
    </div>
  )
}
