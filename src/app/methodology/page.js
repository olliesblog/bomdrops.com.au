import Link from 'next/link'
import ImageLightbox from '@/components/ImageLightbox'

export const metadata = {
  title: 'Data Methodology or BoM website',
  description: 'Source verification methodology and data collection process for BoMdrop.com.au cost comparisons. All data sourced from Senate Estimates, FOI requests, and government records.',
  openGraph: {
    title: 'Data Methodology or BoM website',
    description: 'How we source, verify, and maintain cost comparison data from Australian government sources.',
    type: 'article',
    url: 'https://bomdrop.com.au/methodology/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Methodology or BoM website',
    description: 'Source verification methodology for cost comparison data.',
  },
  alternates: {
    canonical: 'https://bomdrop.com.au/methodology/',
  },
}

export default function MethodologyPage() {
  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Methodology & source verification',
    description: 'Source verification methodology and data collection process for BoMdrop.com.au cost comparisons',
    url: 'https://bomdrop.com.au/methodology/',
    datePublished: '2024-11-27',
    dateModified: '2024-11-27',
    author: {
      '@type': 'Organization',
      name: 'BoMdrop.com.au',
    },
    about: {
      '@type': 'GovernmentOrganization',
      name: 'Australian Bureau of Meteorology',
    },
  }

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>Methodology & source verification</h1>

      <div className="info-box">
        <h3>📊 About this project</h3>
        <p>
          <a href="https://bomdrop.com.au" target="_blank" rel="noopener noreferrer">BoMdrop.com.au</a> is an independent satirical analysis of the <strong>$96.5 million spent</strong> on
          redesigning the Bureau of Meteorology website (<a href="https://bom.gov.au" target="_blank" rel="noopener noreferrer">BOM.gov.au</a>). This project aims to provide
          context for government IT spending by comparing the cost to tangible alternatives that
          could benefit Australian communities. This website, the contents and the idea was created
          by one person on a free evening, and took around 12 hours, rushed out (excuse any errors).
        </p>
      </div>

      <section style={{ marginTop: '3rem' }}>
        <h2>The $96.5M BOM website redesign</h2>
        <div className="info-box">
          <h3>Background</h3>
          <p>
            In October 2024, the Australian Bureau of Meteorology launched a controversial website
            redesign at <a href="https://BOM.gov.au" target="_blank" rel="noopener noreferrer">BOM.gov.au</a> with a total cost of $96.5 million—over 20 times the original $4.5 million budget.
            The project sparked national debate about government IT spending and value for money.
          </p>
          <ul>
            <li><strong>Project Duration:</strong> Multi-year digital transformation (2020-2024)</li>
            <li><strong>Total Cost:</strong> $96,500,000 AUD</li>
            <li><strong>Original Budget:</strong> $4,500,000 AUD</li>
            <li><strong>Cost Blowout:</strong> 2,044% over original estimate</li>
            <li><strong>Launch Date:</strong> October 2024</li>
            <li>
              <strong>Source:</strong> BOM Chief Executive Stuart Minchin's open letter, November 2025 (
              <a
                href="https://www.bom.gov.au/work-continues-to-deliver-website-improvements"
                target="_blank"
                rel="noopener noreferrer"
              >
                link
              </a>
              )
            </li>
          </ul>
        </div>

        <div className="info-box">
          <h3>Detailed cost breakdown</h3>
          <p>
            The BOM Chief Executive revealed the following breakdown of costs in response to public
            outcry over the project's budget blowout:
          </p>
          <ul>
            <li><strong>Redesign Phase:</strong> $4,100,000</li>
            <li><strong>Build Phase:</strong> $79,800,000</li>
            <li><strong>Launch & Security Testing:</strong> $12,600,000</li>
            <li><strong>Total:</strong> $96,500,000</li>
          </ul>

          <h4 style={{ marginTop: '1.5rem' }}>Major Contractor Costs</h4>
          <ul>
            <li>
              <strong>Accenture:</strong> $79,500,000 for IT components and channel platform infrastructure
            </li>
            <li>
              <strong>Deloitte:</strong> $35,000,000 (originally forecasted at $11,000,000)
            </li>
          </ul>

          <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            Note: BOM initially reported only the $4.1 million redesign cost in October 2024.
            The full $96.5 million figure was not disclosed until November 2024 after public pressure
            and media scrutiny. The bureau stated the higher costs reflected "big IT systems contracts"
            for backend infrastructure, data systems, and security testing that were not included in
            initial public statements.
          </p>
        </div>

        <div className="info-box">
          <h3>Public response</h3>
          <p>
            The project generated significant controversy due to:
          </p>
          <ul>
            <li>Dramatic cost blowout from $4.5M to $96.5M</li>
            <li>Widespread user complaints about usability and functionality</li>
            <li>Initial lack of transparency about true project costs</li>
            <li>Questions about value for money in government IT procurement</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            <strong>Media Coverage:</strong>{' '}
            <a href="https://www.sbs.com.au/news/article/bom-under-pressure-over-website-redesign-cost-blowout/mjb611x0p" target="_blank" rel="noopener noreferrer">
              SBS News
            </a>
            {' | '}
            <a href="https://thenightly.com.au/politics/bom-bureau-of-meteorology-website-redesign-cost-taxpayers-965-million-after-initial-45m-budget-c-20773937" target="_blank" rel="noopener noreferrer">
              The Nightly
            </a>
            {' | '}
            <a href="https://www.pedestrian.tv/news/bom-website-redesign-cost/" target="_blank" rel="noopener noreferrer">
              Pedestrian.TV
            </a>
            {' | '}
            <a href="https://www.bom.gov.au/work-continues-to-deliver-website-improvements" target="_blank" rel="noopener noreferrer">
              BOM Official Response
            </a>
          </p>
        </div>

        <div className="info-box">
          <h3>Observations</h3>
          <p>
            The redesigned BOM.gov.au website bears striking visual similarity to the BBC Weather website,
            raising questions about what the initially quoted $4.1 million redesign cost actually covered.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <ImageLightbox
              src="/bom-melbourne.png"
              alt="BOM.gov.au Melbourne weather page screenshot"
              title="BOM.gov.au"
            />
            <ImageLightbox
              src="/bbcweather-melbourne.png"
              alt="BBC Weather Melbourne page screenshot"
              title="BBC Weather"
            />
          </div>

          <p>
            While both sites share similar design patterns common to modern weather websites (card-based layouts,
            prominent temperature displays, forecast widgets), the resemblance does prompt examination of the value
            proposition of the reported $4.1 million initial redesign cost—let alone the eventual $96.5 million
            total project cost.
          </p>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Data collection methodology</h2>

        <div className="info-box">
          <h3>Source requirements</h3>
          <p>Every comparison on this website meets strict verification standards:</p>
          <ul>
            <li><strong>Official sources only:</strong> Government websites, Senate Estimates, FOI responses, or public procurement data</li>
            <li><strong>Recent data:</strong> Figures from 2023-2024 with verification dates</li>
            <li><strong>Australian dollars:</strong> All costs reflect current Australian market conditions</li>
            <li><strong>Direct links:</strong> Working HTTPS links to source documents</li>
          </ul>
        </div>

        <div className="info-box">
          <h3>Calculation method</h3>
          <p>Each comparison shows what $96.5M could purchase instead:</p>
          <ul>
            <li><strong>Unit cost:</strong> Single item cost from official sources</li>
            <li><strong>Quantity:</strong> $96,500,000 ÷ unit cost (rounded down)</li>
            <li><strong>Loaded costs:</strong> Staff positions include salary + 25-30% oncosts</li>
            <li><strong>Inflation:</strong> 2023 figures adjusted using ABS CPI data</li>
          </ul>
        </div>

        <div className="info-box">
          <h3>Categories</h3>
          <p>Comparisons are organised into sixteen categories:</p>
          <ul>
            <li><strong>Infrastructure</strong> — Roads, buildings, public facilities</li>
            <li><strong>Emergency Services</strong> — Fire trucks, ambulances, equipment</li>
            <li><strong>Staffing</strong> — Public sector salaries and positions</li>
            <li><strong>Technology</strong> — Digital services and IT infrastructure</li>
            <li><strong>Climate Action</strong> — Environmental programs and renewable energy</li>
            <li><strong>Education</strong> — Schools, teachers, educational resources</li>
            <li><strong>Health Services</strong> — Healthcare facilities and medical equipment</li>
            <li><strong>Housing</strong> — Public and affordable housing initiatives</li>
            <li><strong>Defence</strong> — Military equipment and defence infrastructure</li>
            <li><strong>Transport</strong> — Public transport and mobility infrastructure</li>
            <li><strong>Environment</strong> — Conservation and environmental protection</li>
            <li><strong>Arts & Culture</strong> — Arts programs and cultural initiatives</li>
            <li><strong>Sports</strong> — Sports facilities and athlete support</li>
            <li><strong>Agriculture</strong> — Farming support and rural infrastructure</li>
            <li><strong>Healthcare</strong> — Medical services and health infrastructure</li>
            <li><strong>Absurd Comparisons</strong> — Satirical comparisons highlighting the scale of spending</li>
          </ul>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Transparency & limitations</h2>

        <div className="info-box source-verification">
          <h3>What this project is</h3>
          <ul>
            <li>A satirical critique of large-scale government IT spending</li>
            <li>A sourced comparison showing alternative uses for $96.5M</li>
            <li>An exercise in transparency and source documentation</li>
            <li>A tool for journalists, researchers, and concerned citizens</li>
            <li>A way to promote my services for web design, website promotion, marketing and consulting that'll cost you less than $96.5 million AUD</li>
          </ul>
        </div>

        <div className="info-box">
          <h3>What this project is not</h3>
          <ul>
            <li>
              <strong>Not Policy Advocacy:</strong> This project does not claim that any specific
              alternative use would be better or more appropriate than the BOM redesign
            </li>
            <li>
              <strong>Not Technical Assessment:</strong> We do not assess the technical merits
              or outcomes of the BOM website project
            </li>
            <li>
              <strong>Not Official:</strong> This project is not affiliated with the Australian
              Government, BOM, or any political party
            </li>
            <li>
              <strong>Not Complete Context:</strong> The BOM project may have delivered value
              not captured in simple cost comparisons
            </li>
          </ul>
        </div>

        <div className="info-box">
          <h3>Acknowledged limitations</h3>
          <ul>
            <li>
              Comparisons are simplified and do not account for project complexity, ongoing costs,
              or long-term value
            </li>
            <li>
              Not all government spending is directly comparable (capital vs operational,
              one-time vs recurring)
            </li>
            <li>
              The BOM project may have included costs beyond just "website design" such as
              infrastructure, data systems, etc.
            </li>
            <li>
              Satirical items in the "Absurd" category are intentionally exaggerated for comedic
              effect, although the stats are accurate (based on collected data)
            </li>
          </ul>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Data usage & licensing</h2>

        <div className="info-box">
          <h3>📂 Open data & API access</h3>
          <p>
            All data on this website is freely available under{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creative Commons Attribution 4.0 International (CC BY 4.0)
            </a>.
          </p>
          <p><strong>You are free to:</strong></p>
          <ul>
            <li>Share and redistribute the data in any format</li>
            <li>Adapt and build upon the data for any purpose (commercial or non-commercial)</li>
            <li>Use for journalism, research, advocacy, or satire</li>
          </ul>
          <p><strong>Attribution:</strong></p>
          <ul>
            <li>
              Feel free to credit{' '}
              <Link href="/" style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>
                BoMdrop.com.au
              </Link>{' '}
              as the source, I could do with the clients
            </li>
            <li>Link back to original government sources where possible, this helps limit misinformation</li>
          </ul>
          <p><strong>Machine-readable formats:</strong></p>
          <ul>
            <li>
              <strong>JSON API:</strong>{' '}
              <Link href="/api/feed.json">/api/feed.json</Link>
            </li>
            <li>
              <strong>CSV Export:</strong>{' '}
              <Link href="/sources/">sources page</Link>
            </li>
            <li>
              <strong>Sitemap:</strong>{' '}
              <a href="/sitemap.xml">/sitemap.xml</a>
            </li>
          </ul>
          <p>
            <strong>Why open data?</strong> Transparency and accountability require accessible information.
            Every comparison on this site is verifiable, traceable, and freely available for public scrutiny.
          </p>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Corrections & updates</h2>

        <div className="info-box">
          <h3>Report issues</h3>
          <p>
            If you find an error in our data, a broken source link, or have additional
            government-sourced comparisons to suggest, please:
          </p>
          <ul>
            <li>Verify the error against our listed source</li>
            <li>Prepare alternative source documentation</li>
            <li>
              Contact us with specific details (note: as a demonstration project, no contact
              details are provided)
            </li>
          </ul>
          <p>
            We are committed to accuracy and will update sources as new government data becomes
            available. However, all costs represent a snapshot of pricing for services, products and goods
            at the time of publishing (November 2025), when the total cost to Australian taxpayers was
            $96.5 million AUD.
          </p>
        </div>
      </section>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link href="/sources/" className="btn">
          View all sources
        </Link>
        <Link href="/" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
          Back to home
        </Link>
      </div>
    </div>
  )
}
