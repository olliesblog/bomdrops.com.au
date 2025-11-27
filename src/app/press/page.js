import Link from 'next/link'
import { comparisons } from '@/data/comparisons'

export const metadata = {
  title: 'Press & Media Coverage or BoM website',
  description: 'Media coverage, press mentions, and citations of BoMdrop.com.au\'s analysis of the $96.5 million BOM.gov.au redesign.',
  openGraph: {
    title: 'Press & Media Coverage or BoM website',
    description: 'Media coverage and press mentions of our analysis of government IT spending.',
    type: 'website',
    url: 'https://bomdrop.com.au/press/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press & Media Coverage or BoM website',
    description: 'Media coverage and press mentions of our analysis of government IT spending.',
  },
  alternates: {
    canonical: 'https://bomdrop.com.au/press/',
  },
}

export default function PressPage() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Press & media coverage</h1>
        <p>
          Media coverage, citations, and press mentions of BoMdrop.com.au's analysis of the
          $96.5 million BOM.gov.au redesign and government IT spending.
        </p>
      </div>

      <section style={{ marginTop: '3rem' }}>
        <div className="info-box">
          <h3>📰 Media inquiries</h3>
          <p>
            BoMdrop.com.au is available for comment on government IT spending, transparency,
            and the BOM website redesign. All data on this site is sourced from official
            government documents and Senate Estimates.
          </p>
          <p><strong>For media inquiries:</strong></p>
          <ul>
            <li>All comparison data is freely available via our <Link href="/api/feed.json">JSON API</Link></li>
            <li>Every item includes source links and Senate references</li>
            <li>Last verified dates are included for all comparisons</li>
            <li>Full methodology is documented on our <Link href="/methodology/">methodology page</Link></li>
          </ul>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Press coverage</h2>

        <div className="info-box">
          <p style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: '1.1rem' }}>
            No press coverage yet. Check back soon!
          </p>
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>
            If you've covered or cited BoMdrop.com.au, <a href="https://x.com/UnderdogDigital" target="_blank" rel="noopener noreferrer">please let us know</a> and we'll add your article here.
          </p>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Press resources</h2>

        <div className="info-box">
          <h3>📊 Data & resources</h3>
          <ul>
            <li>
              <strong>Complete Dataset:</strong>{' '}
              <Link href="/sources/">View all sourced comparisons</Link>
            </li>
            <li>
              <strong>Machine-Readable Data:</strong>{' '}
              <Link href="/api/feed.json">JSON API</Link>
            </li>
            <li>
              <strong>Methodology:</strong>{' '}
              <Link href="/methodology/">How we source and verify data</Link>
            </li>
            <li>
              <strong>Categories:</strong>{' '}
              <Link href="/category/">Browse by category</Link>
            </li>
          </ul>
        </div>

        <div className="info-box" style={{ marginTop: '2rem' }}>
          <h3>🎯 Key statistics</h3>
          <ul>
            <li><strong>Total BOM Website Cost:</strong> $96.5 million AUD</li>
            <li><strong>Comparisons Available:</strong> {comparisons.length} sourced alternatives</li>
            <li><strong>Data License:</strong> CC BY 4.0 (freely available)</li>
            <li><strong>All Sources:</strong> Government documents and Senate Estimates</li>
          </ul>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>About this project</h2>

        <div className="info-box source-verification">
          <h3>What is BoMdrop.com.au?</h3>
          <p>
            BoMdrop.com.au is a satirical critique of the $96.5 million spent on redesigning
            the Bureau of Meteorology website (BOM.gov.au). Every comparison on this site is:
          </p>
          <ul>
            <li>Sourced from official government documents</li>
            <li>Referenced to Senate Estimates where applicable</li>
            <li>Verified and dated for accuracy</li>
            <li>Available as open data for public use</li>
          </ul>
          <p>
            The project aims to provide context for large-scale government IT spending through
            sourced comparisons with everyday items and alternative government priorities.
          </p>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <div className="info-box">
          <h3>📧 Contact for press</h3>
          <p>
            Journalists and media inquiries are welcome. All data is freely available and
            properly sourced. For specific questions about methodology, sources, or data accuracy,
            please review our <Link href="/methodology/">methodology page</Link> first.
          </p>
        </div>
      </section>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link href="/" className="btn">
          Back to home
        </Link>
        <Link href="/sources/" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
          View all sources
        </Link>
      </div>
    </div>
  )
}
