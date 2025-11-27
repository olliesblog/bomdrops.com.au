import Link from 'next/link'
import { comparisons, getAllCategories, calculateQuantity, BOM_TOTAL_COST } from '@/data/comparisons'

export const metadata = {
  title: 'All comparisons - BoMdrop.com.au',
  description: `Browse all ${comparisons.length} sourced comparisons showing what Australia could have purchased instead of spending $96.5 million on the BOM.gov.au redesign.`,
  openGraph: {
    title: 'All comparisons - BoMdrop.com.au',
    description: `Browse all ${comparisons.length} sourced comparisons showing alternative uses for the $96.5M BOM website budget.`,
    type: 'website',
    url: 'https://bomdrop.com.au/compare/',
  },
  alternates: {
    canonical: 'https://bomdrop.com.au/compare/',
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

export default function ComparePage() {
  const categories = getAllCategories()

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'All BOM.gov.au budget comparisons',
    description: `Complete list of ${comparisons.length} sourced alternatives to the $96.5M BOM website redesign`,
    url: 'https://bomdrop.com.au/compare/',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: comparisons.length,
      itemListElement: comparisons.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: item.name,
          description: item.description,
          url: `https://bomdrop.com.au/compare/${item.id}/`,
          offers: {
            '@type': 'Offer',
            price: item.cost,
            priceCurrency: 'AUD',
          },
        },
      })),
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'BoMdrop.com.au',
      url: 'https://bomdrop.com.au',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container">
        <div className="hero">
          <h1>All comparisons</h1>
          <p>
            Browse all {comparisons.length} sourced comparisons showing what Australia could have purchased
            instead of spending ${(BOM_TOTAL_COST / 1000000).toFixed(1)} million on the BOM.gov.au redesign.
          </p>
        </div>

        <div className="info-box">
          <h3>📊 Dataset Overview</h3>
          <ul>
            <li><strong>Total comparisons:</strong> {comparisons.length} sourced items</li>
            <li><strong>Categories:</strong> {categories.length} categories</li>
            <li><strong>BOM Budget:</strong> ${BOM_TOTAL_COST.toLocaleString()} AUD</li>
            <li><strong>All items verified:</strong> Senate Estimates, government sources, and public data</li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2>Browse by category</h2>
          <div className="category-grid">
            {categories.map((category) => (
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
        </div>

        <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>
          All {comparisons.length} comparisons
        </h2>

        <div className="category-grid">
          {comparisons.map((item) => {
            const quantity = calculateQuantity(item.cost)
            const pluralName = pluralize(item.name, quantity)
            // Get only the first sentence of the description
            const shortDescription = item.description.split(/\.\s+/)[0] + '.'
            return (
              <Link
                key={item.id}
                href={`/compare/${item.id}/`}
                className="item-card"
              >
                <div className="icon">{item.icon}</div>
                <h3>{item.name}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>
                  {shortDescription}
                </p>
                <div className="cost">${item.cost.toLocaleString()}</div>
                <div className="quantity">
                  Could buy {quantity.toLocaleString()} {pluralName}
                </div>
                {item.tags.length > 0 && (
                  <div className="tags" style={{ marginTop: '1rem' }}>
                    {item.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </Link>
            )
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/sources/" className="btn">
            View all sources & methodology
          </Link>
          <Link href="/" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
            Back to home
          </Link>
        </div>
      </div>
    </>
  )
}
