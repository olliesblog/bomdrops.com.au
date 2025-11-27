import Link from 'next/link'
import { notFound } from 'next/navigation'
import { comparisons, getComparisonById, calculateQuantity, categories, BOM_TOTAL_COST } from '@/data/comparisons'
import AnimatedQuantity from '@/components/AnimatedQuantity'

// Generate static params for all comparison IDs
export async function generateStaticParams() {
  return comparisons.map((item) => ({
    id: item.id,
  }))
}

// Simple pluralization function
function pluralize(name, quantity) {
  if (quantity === 1) return name

  // Handle names with parenthetical text like "Tim Tam Packet (200g)"
  const parenMatch = name.match(/^(.*?)(\s*\([^)]+\))$/)
  if (parenMatch) {
    const [, baseName, parenPart] = parenMatch
    return pluralize(baseName, quantity) + parenPart
  }

  // Check if already plural (common patterns)
  const lastWord = name.split(' ').pop()
  if (lastWord.endsWith('s') && (
    lastWord.endsWith('ies') ||
    lastWord.endsWith('oes') ||
    lastWord.endsWith('ses') ||
    lastWord.endsWith('xes') ||
    lastWord.endsWith('zes') ||
    lastWord.endsWith('ches') ||
    lastWord.endsWith('shes') ||
    lastWord.endsWith('ves') ||
    lastWord.endsWith('ees') // coffees, employees, etc
  )) {
    return name // Already plural
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

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const item = getComparisonById(params.id)

  if (!item) {
    return {
      title: 'Not Found',
    }
  }

  const quantity = calculateQuantity(item.cost)
  const pluralName = pluralize(item.name, quantity)
  const title = `${item.name} or BoM website`
  const description = `Cost comparison analysis: ${item.name} at $${item.cost.toLocaleString()} vs BOM website redesign. Source: ${item.senateReference}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://bomdrop.com.au/compare/${item.id}/`,
      images: [
        {
          url: `/og/${item.id}.png`,
          width: 1200,
          height: 630,
          alt: `${item.icon} ${item.name} - ${quantity.toLocaleString()} instead of $96.5M on BOM.gov.au`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/og/${item.id}.png`],
    },
    alternates: {
      canonical: `https://bomdrop.com.au/compare/${item.id}/`,
    },
  }
}

export default function ComparisonPage({ params }) {
  const item = getComparisonById(params.id)

  if (!item) {
    notFound()
  }

  const quantity = calculateQuantity(item.cost)
  const categoryInfo = categories[item.category]
  const relatedItems = comparisons
    .filter(c => c.id !== item.id && c.tags.some(tag => item.tags.includes(tag)))
    .slice(0, 3)

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SatiricalArticle',
    headline: `Instead of $96.5M on BOM.gov.au, you could buy ${quantity.toLocaleString()} ${item.name}`,
    description: item.description,
    datePublished: item.lastVerified,
    dateModified: item.lastVerified,
    sourceOrganization: {
      '@type': 'GovernmentOrganization',
      name: 'Australian Bureau of Meteorology',
    },
    citation: [
      item.source,
      `Senate Reference: ${item.senateReference}`,
    ],
    about: {
      '@type': 'Thing',
      name: item.name,
      description: item.description,
    },
    isBasedOn: item.source,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container">
        <div className="comparison-card">
          <div className="comparison-header">
            <div className="comparison-icon">{item.icon}</div>
            <div className="comparison-title">
              <h1>{item.name}</h1>
              <Link href={`/category/${item.category}/`} className="category">
                {categoryInfo.name}
              </Link>
            </div>
          </div>

          <AnimatedQuantity quantity={quantity} itemName={item.name} />

          <div className="info-box">
            <h3>📋 Description</h3>
            <p>{item.description}</p>
          </div>

          <div className="info-box">
            <h3>💰 Cost Breakdown</h3>
            <ul>
              <li><strong>Unit Cost:</strong> ${item.cost.toLocaleString()} AUD</li>
              <li><strong>BOM Website Cost:</strong> ${BOM_TOTAL_COST.toLocaleString()} AUD</li>
              <li><strong>Quantity Available:</strong> {quantity.toLocaleString()} units</li>
              <li><strong>Total Alternative Value:</strong> ${(quantity * item.cost).toLocaleString()} AUD</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>🎯 Procurement Context</h3>
            <p>{item.procurementContext}</p>
          </div>

          <div className="info-box source-verification">
            <h3>✅ Source Verification</h3>
            <ul>
              <li>
                <strong>Primary Source:</strong>{' '}
                <a href={item.source} target="_blank" rel="noopener noreferrer">
                  {item.source}
                </a>
              </li>
              <li><strong>Senate Reference:</strong> {item.senateReference}</li>
              <li><strong>Calculation Notes:</strong> {item.calculationNotes}</li>
              <li><strong>Last Verified:</strong> {new Date(item.lastVerified).toLocaleDateString('en-AU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</li>
            </ul>
          </div>

          {item.tags.length > 0 && (
            <div>
              <h3>🏷️ Tags</h3>
              <div className="tags">
                {item.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
            <h3>📤 Share this comparison</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Instead of $96.5M on BOM.gov.au, Australia could buy ${quantity.toLocaleString()} ${pluralize(item.name, quantity)}`)}&url=${encodeURIComponent(`https://bomdrop.com.au/compare/${item.id}/`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#000000',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Share on X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://bomdrop.com.au/compare/${item.id}/`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#0A66C2',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Share on LinkedIn
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://bomdrop.com.au/compare/${item.id}/`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#1877f2',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Share on Facebook
              </a>
            </div>
          </div>
        </div>

        {relatedItems.length > 0 && (
          <section style={{ marginTop: '3rem' }}>
            <h2>Related comparisons</h2>
            <div className="category-grid">
              {relatedItems.map((relatedItem) => {
                const relatedQuantity = calculateQuantity(relatedItem.cost)
                return (
                  <Link
                    key={relatedItem.id}
                    href={`/compare/${relatedItem.id}/`}
                    className="item-card"
                  >
                    <div className="icon">{relatedItem.icon}</div>
                    <h3>{relatedItem.name}</h3>
                    <div className="cost">${relatedItem.cost.toLocaleString()}</div>
                    <div className="quantity">
                      Could buy {relatedQuantity.toLocaleString()}
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        <div className="comparison-actions">
          <Link href="/sources/" className="btn">
            <span className="btn-text-full">View all comparisons</span>
            <span className="btn-text-mobile">Comparisons</span>
          </Link>
          <Link href={`/category/${item.category}/`} className="btn btn-secondary">
            <span className="btn-text-full">More in {categoryInfo.name.toLowerCase()}</span>
            <span className="btn-text-mobile">{categoryInfo.name}</span>
          </Link>
        </div>
      </div>
    </>
  )
}
