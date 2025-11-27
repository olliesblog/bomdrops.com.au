import Link from 'next/link'
import { comparisons } from '@/data/comparisons'

export const metadata = {
  title: 'Digital Services or BoM website',
  description: 'Need web design, digital marketing, SEO, or promotional services? Get professional results without the government-scale price tag.',
  openGraph: {
    title: 'Digital Services or BoM website',
    description: 'Professional digital services at sensible prices.',
    type: 'website',
    url: 'https://bomdrop.com.au/addendum/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Services or BoM website',
    description: 'Professional web services that won\'t cost $96.5M',
  },
  alternates: {
    canonical: 'https://bomdrop.com.au/addendum/',
  },
}

export default function ContactPage() {
  // JSON-LD structured data for service offering
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Digital Services by BoMdrop.com.au',
    url: 'https://bomdrop.com.au/addendum/',
    description: 'Professional web design, digital marketing, SEO, and promotional services at sensible prices',
    areaServed: {
      '@type': 'Country',
      name: 'Australia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Design & Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Marketing',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO (Search Engine Optimisation)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media Management',
          },
        },
      ],
    },
  }

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="hero" style={{ padding: '2rem 0' }}>
        <h1>Addendum</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '1rem auto' }}>
          Professional digital services that won't cost $96.5 million
          <br />
          <span style={{ fontSize: '0.9rem', opacity: '0.8' }}>(though the government is welcome to pay that)</span>
        </p>
      </div>

      <section style={{ marginTop: '3rem' }}>
        <div className="info-box" style={{ background: 'linear-gradient(135deg, #0c4ad0 0%, #0066cc 100%)', color: 'white', border: 'none' }}>
          <h2 style={{ color: 'white', marginTop: 0 }}>💡 Here's the thing...</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            After analyzing $96.5 million worth of website redesign spending, I figured I should mention:
            I offer web design, digital marketing, SEO, and all manner of digital promotional services.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            The difference? My services cost significantly less than $96.5 million.
            Like, several orders of magnitude less.
          </p>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Services offered</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          <div className="info-box">
            <h3>🎨 Web design & development</h3>
            <ul>
              <li>Custom website design and development</li>
              <li>Responsive, mobile-first design</li>
              <li>Modern frameworks (Next.js, React, etc.)</li>
              <li>Performance optimisation</li>
              <li>Maintenance and support</li>
            </ul>
            <p style={{ fontSize: '0.9rem', marginTop: '1rem', opacity: '0.8' }}>
              Price: Not $96.5M
            </p>
          </div>

          <div className="info-box">
            <h3>📈 Digital marketing</h3>
            <ul>
              <li>Content strategy and creation</li>
              <li>Social media management</li>
              <li>Email marketing campaigns</li>
              <li>Analytics and reporting</li>
              <li>Conversion optimisation</li>
            </ul>
            <p style={{ fontSize: '0.9rem', marginTop: '1rem', opacity: '0.8' }}>
              Price: Also not $96.5M
            </p>
          </div>

          <div className="info-box">
            <h3>🔍 SEO & promotional services</h3>
            <ul>
              <li>Search engine optimisation</li>
              <li>Technical SEO audits</li>
              <li>Content marketing</li>
              <li>Link building strategies</li>
              <li>Local SEO optimisation</li>
            </ul>
            <p style={{ fontSize: '0.9rem', marginTop: '1rem', opacity: '0.8' }}>
              Price: Still not $96.5M
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <div className="info-box source-verification">
          <h3 style={{ fontSize: '1.8rem' }}>📊 The value proposition</h3>
          <p style={{ fontSize: '1.1rem' }}>
            This entire website - <a href="https://BoMdrop.com.au" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'underline' }}>BoMdrop.com.au</a> - was built to demonstrate what's possible
            with modern web development. It features:
          </p>
          <ul>
            <li><strong>{comparisons.length}+ dynamically generated comparison pages</strong> from a single data source</li>
            <li><strong>Responsive design</strong> that works on all devices</li>
            <li><strong>SEO (Search Engine Optimisation)</strong> with proper metadata and structured data</li>
            <li><strong>Fast performance</strong> with static site generation</li>
            <li><strong>Custom animations</strong> and interactive elements</li>
            <li><strong>JSON API</strong> for data access</li>
            <li><strong>Built in</strong> 12 hours from idea to live</li>
          </ul>
          <p style={{ fontSize: '1.1rem', marginTop: '1.5rem' }}>
            <strong>Total cost to build:</strong> A fraction of $96.5 million.
            <br />
            <span style={{ fontSize: '0.95rem', opacity: '0.8' }}>Like, a very small fraction. Microscopic, really.</span>
          </p>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <div className="info-box" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <h2 style={{ marginTop: 0 }}>Interested in working together?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Whether you're a government agency looking to save $96.4 million, or a business
            wanting professional digital services at reasonable prices, let's talk.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://x.com/UnderdogDigital"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--primary)', color: 'white' }}
            >
              <span>📱</span> Connect on X/Twitter
            </a>
            <a
              href="https://x.com/UnderdogDigital"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>📱</span> Visit X/UnderdogDigital
            </a>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <div className="info-box" style={{ background: '#f5f5f5', border: '2px dashed var(--border)' }}>
          <p style={{ fontSize: '0.95rem', textAlign: 'center', margin: 0, opacity: '0.8' }}>
            <strong>Government agencies:</strong> I am genuinely happy to accept $96.5 million for a website redesign.
            Please form an orderly queue.
          </p>
        </div>
      </section>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link href="/" className="btn">
          Back to home
        </Link>
      </div>
    </div>
  )
}
