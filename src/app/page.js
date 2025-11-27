import Link from 'next/link'
import { comparisons, getAllCategories, BOM_TOTAL_COST } from '@/data/comparisons'
import HoverableCostBanner from '@/components/HoverableCostBanner'
import RotatingComparison from '@/components/RotatingComparison'

export const metadata = {
  title: 'BoMdrop: What $96.5 Million AUD Could Have Bought Instead',
  description: 'Explore what Australia could have purchased instead of spending $96.5 million on the Bureau of Meteorology website redesign. Sourced comparisons from Senate Estimates and government data.',
  openGraph: {
    title: 'BoMdrop: What $96.5 Million AUD Could Have Bought Instead',
    description: 'Explore what Australia could have purchased instead of spending $96.5 million on the Bureau of Meteorology website redesign.',
    type: 'website',
    url: 'https://bomdrop.com.au/',
    siteName: 'BoMdrop.com.au',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BoMdrop: What $96.5 Million AUD Could Have Bought Instead',
    description: 'Explore what Australia could have purchased instead of spending $96.5 million on BOM.gov.au.',
  },
  alternates: {
    canonical: 'https://bomdrop.com.au/',
  },
}

// Pluralization helper function
function pluralize(name, quantity) {
  if (quantity === 1) return name

  // Handle names with parenthetical text like "Tim Tam Packet (200g)"
  const parenMatch = name.match(/^(.*?)(\s*\([^)]+\))$/)
  if (parenMatch) {
    const [, baseName, parenPart] = parenMatch
    return pluralize(baseName, quantity) + parenPart
  }

  // Special cases
  if (name.endsWith('y') && !name.endsWith('ay') && !name.endsWith('ey') && !name.endsWith('oy') && !name.endsWith('uy')) {
    return name.slice(0, -1) + 'ies'
  }
  if (name.endsWith('s') || name.endsWith('x') || name.endsWith('z') || name.endsWith('ch') || name.endsWith('sh')) {
    return name + 'es'
  }

  // Default: just add 's'
  return name + 's'
}

export default function HomePage() {
  const categories = getAllCategories()
  const featuredItems = comparisons.slice(0, 9)

  // JSON-LD structured data for homepage
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BoMdrop.com.au',
    url: 'https://bomdrop.com.au',
    description: 'Satirical analysis of the $96.5 million Australian Bureau of Meteorology website redesign with sourced cost comparisons.',
    about: {
      '@type': 'GovernmentOrganization',
      name: 'Australian Bureau of Meteorology',
      url: 'https://www.bom.gov.au',
    },
    mainEntity: {
      '@type': 'Dataset',
      name: 'BOM Website Redesign Cost Comparisons',
      description: `${comparisons.length} sourced comparisons showing alternative uses for the $96.5 million spent on BOM.gov.au redesign`,
      creator: {
        '@type': 'Organization',
        name: 'BoMdrop.com.au',
      },
      distribution: {
        '@type': 'DataDownload',
        encodingFormat: 'application/json',
        contentUrl: 'https://bomdrop.com.au/api/feed.json',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="hero">
        <div className="container">
          <h1>Discover your spend</h1>
          <HoverableCostBanner targetAmount={BOM_TOTAL_COST} />
          <p>
            The Australian Bureau of Meteorology spent ninety six million, five hundred thousand dollars of Australian tax payers money redesigning their website.
            Explore what else that money could have purchased instead - all sourced from official government data.
          </p>
        </div>
      </div>

      <section style={{
        marginTop: '0',
        padding: '3rem 1rem',
        background: 'white'
      }}>
        <div className="container">
          <h2>
            Instead of spending on BOM.gov.au...
          </h2>

          <RotatingComparison />
        </div>
      </section>

      <section style={{
        marginTop: '0',
        padding: '3rem 1rem',
        background: 'var(--bg-grey)'
      }}>
        <div className="container">
          <h2>Explore comparisons by category</h2>
          <div className="category-grid">
          {categories.slice(0, 8).map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}/`}
              className="category-card"
            >
              <div className="icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </Link>
          ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/category/" className="btn">
              View all {categories.length} categories
            </Link>
          </div>
        </div>
      </section>

      <section style={{
        marginTop: '0',
        padding: '3rem 1rem',
        background: 'white'
      }}>
        <div className="container">
          <h2>Featured comparisons</h2>
          <div className="featured-grid">
            {/* Large featured item */}
            {featuredItems.slice(0, 1).map((item) => {
              const quantity = Math.floor(BOM_TOTAL_COST / item.cost)
              const isRadar = item.id === 'weather-doppler-radar'
              const pluralName = pluralize(item.name, quantity)
              return (
                <Link
                  key={item.id}
                  href={`/compare/${item.id}/`}
                  className="featured-large"
                  style={isRadar ? {
                    backgroundImage: 'url(/radar-background.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative'
                  } : {}}
                >
                  {isRadar && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(255, 255, 255, 0.85)',
                      zIndex: 0
                    }}></div>
                  )}
                  <div className="icon" style={isRadar ? { position: 'relative', zIndex: 1 } : {}}>{item.icon}</div>
                  <div className="featured-content" style={isRadar ? { position: 'relative', zIndex: 1 } : {}}>
                    <h3>{item.name}</h3>
                    <p className="featured-description">
                      Could buy {quantity.toLocaleString()} {pluralName} at ${item.cost.toLocaleString()} each
                    </p>
                    <div className="cost">${item.cost.toLocaleString()}</div>
                  </div>
                </Link>
              )
            })}

            {/* Small featured items */}
            <div className="featured-small-grid">
              {featuredItems.slice(1, 5).map((item) => {
                const quantity = Math.floor(BOM_TOTAL_COST / item.cost)
                const pluralName = pluralize(item.name, quantity)
                return (
                  <Link
                    key={item.id}
                    href={`/compare/${item.id}/`}
                    className="featured-small"
                  >
                    <div className="icon">{item.icon}</div>
                    <div>
                      <h4>{item.name}</h4>
                      <div className="quantity">
                        {quantity.toLocaleString()} {pluralName}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/sources/" className="btn">
              View all {comparisons.length} comparisons
            </Link>
          </div>
        </div>
      </section>

      <section style={{
        marginTop: '0',
        padding: '3rem 1rem',
        background: '#f0f0f0'
      }}>
        <div className="container">
          <div style={{
            background: '#e8f4f8',
            border: '1px solid #b8dce8',
            borderRadius: '4px',
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              marginTop: 0,
              marginBottom: '1rem',
              color: '#003366'
            }}>Exploring our new spending analysis</h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              color: '#333'
            }}>
              It's a new way to check government expenditure and access our other transparency services.
              Find tips to get the most out of this $96.5 million spending experience.
            </p>
            <Link
              href="/weather/"
              style={{
                color: '#0066cc',
                textDecoration: 'underline',
                fontSize: '0.95rem'
              }}
            >
              Spending perspective
            </Link>
          </div>

          <h3 style={{
            fontSize: '1.3rem',
            marginBottom: '1.5rem',
            color: '#003366'
          }}>You may also be interested in</h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <Link href="/category/" style={{
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '1.5rem',
              textDecoration: 'none',
              display: 'block',
              transition: 'box-shadow 0.2s ease'
            }} className="bom-card">
              <h4 style={{
                fontSize: '1.1rem',
                marginTop: 0,
                marginBottom: '0.5rem',
                color: '#0066cc'
              }}>Category spending radar</h4>
              <p style={{
                fontSize: '0.9rem',
                margin: 0,
                color: '#666',
                lineHeight: '1.5'
              }}>
                Track spending patterns across all government categories in real-time
              </p>
            </Link>

            <Link href="/sources/" style={{
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '1.5rem',
              textDecoration: 'none',
              display: 'block',
              transition: 'box-shadow 0.2s ease'
            }} className="bom-card">
              <h4 style={{
                fontSize: '1.1rem',
                marginTop: 0,
                marginBottom: '0.5rem',
                color: '#0066cc'
              }}>SourceEye</h4>
              <p style={{
                fontSize: '0.9rem',
                margin: 0,
                color: '#666',
                lineHeight: '1.5'
              }}>
                High-resolution view of all {comparisons.length}+ sourced comparisons from Senate Estimates
              </p>
            </Link>

            <Link href="/methodology/" style={{
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '1.5rem',
              textDecoration: 'none',
              display: 'block',
              transition: 'box-shadow 0.2s ease'
            }} className="bom-card">
              <h4 style={{
                fontSize: '1.1rem',
                marginTop: 0,
                marginBottom: '0.5rem',
                color: '#0066cc'
              }}>Accountability viewer</h4>
              <p style={{
                fontSize: '0.9rem',
                margin: 0,
                color: '#666',
                lineHeight: '1.5'
              }}>
                Interactive verification of data sources and calculation methodology
              </p>
            </Link>

            <Link href="/addendum/" style={{
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '1.5rem',
              textDecoration: 'none',
              display: 'block',
              transition: 'box-shadow 0.2s ease'
            }} className="bom-card">
              <h4 style={{
                fontSize: '1.1rem',
                marginTop: 0,
                marginBottom: '0.5rem',
                color: '#0066cc'
              }}>Marketing services</h4>
              <p style={{
                fontSize: '0.9rem',
                margin: 0,
                color: '#666',
                lineHeight: '1.5'
              }}>
                That save you at least $95 million dollars
              </p>
            </Link>
          </div>

          <div className="info-box">
          <h3>📊 About this project</h3>
          <p>
            This website provides a sourced, data-driven analysis of the $96.5 million spent on
            redesigning BOM.gov.au. Every comparison item includes:
          </p>
          <ul>
            <li>Direct source link to government documents or official data</li>
            <li>Calculation methodology and verification date</li>
            <li>Reference to Senate Estimates or FOI requests where applicable</li>
            <li>Procurement context showing what could have been purchased instead</li>
          </ul>
          <p>
            <Link href="/methodology/">Read our full methodology</Link> |
            <Link href="/sources/"> Browse all {comparisons.length} sourced comparisons</Link> |
            <Link href="/api/feed.json"> Access machine-readable data</Link>
          </p>
          </div>
        </div>
      </section>
    </>
  )
}
