import Link from 'next/link'
import { comparisons } from '@/data/comparisons'
import WeatherBoxes from '@/components/WeatherBoxes'
import CountUpNumber from '@/components/CountUpNumber'

export const metadata = {
  title: 'Spending Perspective or BoM website',
  description: 'Understanding the scale of $96.5 million: perspective, interest earnings, and what it means for every Australian.',
  openGraph: {
    title: 'Spending Perspective or BoM website',
    description: 'Putting $96.5 million in perspective',
    type: 'website',
    url: 'https://bomdrop.com.au/weather/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spending Perspective or BoM website',
    description: 'Understanding the true scale of $96.5 million',
  },
  alternates: {
    canonical: 'https://bomdrop.com.au/weather/',
  },
}

export default function PerspectivePage() {
  // Enhanced JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AnalysisNewsArticle',
    headline: 'Whether or not it\'s money well spent: Understanding the $96.5M BOM Website Redesign',
    description: 'Comprehensive analysis putting the $96.5 million Australian Bureau of Meteorology website redesign in perspective, including daily cost breakdowns, interest calculations, and per-capita analysis.',
    url: 'https://bomdrop.com.au/weather/',
    datePublished: '2024-11-27',
    dateModified: '2024-11-27',
    author: {
      '@type': 'Organization',
      name: 'BoMdrop.com.au',
      url: 'https://bomdrop.com.au',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BoMdrop.com.au',
      url: 'https://bomdrop.com.au',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://bomdrop.com.au/weather/',
    },
    about: [
      {
        '@type': 'GovernmentOrganization',
        name: 'Australian Bureau of Meteorology',
        url: 'https://www.bom.gov.au',
      },
      {
        '@type': 'MonetaryAmount',
        currency: 'AUD',
        value: '96500000',
        description: 'Total cost of BOM.gov.au website redesign',
      },
    ],
    mentions: [
      {
        '@type': 'QuantitativeValue',
        name: 'Cost per Australian',
        value: '3.61',
        unitText: 'AUD',
        description: 'Cost divided by 26.7 million Australians',
      },
      {
        '@type': 'QuantitativeValue',
        name: 'Daily cost over one year',
        value: '265068',
        unitText: 'AUD',
        description: 'If spent evenly over 365 days',
      },
      {
        '@type': 'QuantitativeValue',
        name: 'Annual interest at 5.5%',
        value: '5307500',
        unitText: 'AUD',
        description: 'Interest earnings in high-interest savings account',
      },
    ],
    isAccessibleForFree: true,
    inLanguage: 'en-AU',
  }

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="hero" style={{ padding: '2rem 0' }}>
        <h1>Weather, it's money well spent?</h1>
      </div>

      <WeatherBoxes />

      <section style={{ marginTop: '3rem' }}>
        <div className="info-box" style={{ background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)', color: 'white', border: 'none' }}>
          <h3 style={{ color: 'white', fontSize: '1.8rem' }}>🤯 Putting $96.5 million in perspective</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <CountUpNumber value="183" suffix=" years" style={{ fontSize: '2.5rem', fontWeight: 'bold' }} />
              </div>
              <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>If you spent $1,447 every single day</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <CountUpNumber value="2683" suffix=" hours" style={{ fontSize: '2.5rem', fontWeight: 'bold' }} />
              </div>
              <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Working 24/7 at $35,965/hour</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <CountUpNumber value="160972" suffix=" minutes" style={{ fontSize: '2.5rem', fontWeight: 'bold' }} />
              </div>
              <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Earning $599 every single minute</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <CountUpNumber value="3.61" prefix="$" suffix=" AUD" decimals={2} style={{ fontSize: '2.5rem', fontWeight: 'bold' }} />
              </div>
              <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>For every Australian (26.7M people)</div>
            </div>
          </div>
        </div>

        <div className="info-box" style={{ background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)', color: '#333', border: 'none', marginTop: '2rem' }}>
          <h3 style={{ color: '#333', fontSize: '1.8rem' }}>💸 More mind-blowing numbers</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.3)', padding: '1.5rem', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <CountUpNumber value="265068" prefix="$" style={{ fontSize: '2.5rem', fontWeight: 'bold' }} />
              </div>
              <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Cost per day over 1 year</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.3)', padding: '1.5rem', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <CountUpNumber value="11045" prefix="$" style={{ fontSize: '2.5rem', fontWeight: 'bold' }} />
              </div>
              <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Cost per hour over 1 year</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.3)', padding: '1.5rem', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <CountUpNumber value="193000" style={{ fontSize: '2.5rem', fontWeight: 'bold' }} />
              </div>
              <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Average annual salaries ($50k)</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.3)', padding: '1.5rem', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <CountUpNumber value="1930" style={{ fontSize: '2.5rem', fontWeight: 'bold' }} />
              </div>
              <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Median Australian homes ($500k)</div>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', opacity: '0.85', marginTop: '1.5rem', fontStyle: 'italic', textAlign: 'center' }}>
            Or, you know, just one website redesign.
          </p>
        </div>

        <div className="info-box" style={{ background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)', color: 'white', border: 'none', marginTop: '2rem' }}>
          <h3 style={{ color: 'white', fontSize: '1.8rem' }}>💰 If $96.5M was in a high interest savings account</h3>
          <p style={{ fontSize: '0.95rem', opacity: '0.95', marginBottom: '1.5rem' }}>
            At 5.5% p.a. interest (typical Australian high-interest savings rate in 2025), this money would generate:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <CountUpNumber value="14538" prefix="$" style={{ fontSize: '2.5rem', fontWeight: 'bold' }} />
              </div>
              <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Interest earned per day</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <CountUpNumber value="101769" prefix="$" style={{ fontSize: '2.5rem', fontWeight: 'bold' }} />
              </div>
              <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Interest earned per week</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <CountUpNumber value="441667" prefix="$" style={{ fontSize: '2.5rem', fontWeight: 'bold' }} />
              </div>
              <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Interest earned per month</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <CountUpNumber value="5.31" prefix="$" suffix="M" decimals={2} style={{ fontSize: '2.5rem', fontWeight: 'bold' }} />
              </div>
              <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Interest earned per year</div>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', opacity: '0.85', marginTop: '1.5rem', fontStyle: 'italic' }}>
            That's enough interest each year to fund another small government website project!
          </p>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <div className="info-box">
          <h3 style={{ fontSize: '1.8rem' }}>💡 What this means</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            $96.5 million isn't just a number—it's public money that could have been allocated
            to essential services, infrastructure, or kept in taxpayers' pockets.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Whether this represents good value for a website redesign is a question worth asking.
            Especially when you consider the comparisons available throughout this site.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1rem' }}>
            <Link href="/addendum/" style={{ color: '#0066cc', fontWeight: '600', textDecoration: 'underline' }}>
              ➕ Show me great web design and marketing
            </Link>
          </p>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <div className="info-box source-verification">
          <h3 style={{ fontSize: '1.8rem' }}>🔍 Explore the alternatives</h3>
          <p>
            Browse through <Link href="/sources/">{comparisons.length} sourced comparisons</Link> to see what else
            $96.5 million could have purchased. Every item includes:
          </p>
          <ul>
            <li>Direct source link to government documents or official data</li>
            <li>Calculation methodology and verification date</li>
            <li>Reference to Senate Estimates where applicable</li>
            <li>Procurement context showing alternative uses</li>
            <li>Hire me, for less than $96.5 million for your project</li>
          </ul>
        </div>
      </section>

      <div style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '3rem' }}>
        <Link href="/" className="btn">
          Back to home
        </Link>
        <Link href="/sources/" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
          View all comparisons
        </Link>
      </div>
    </div>
  )
}
