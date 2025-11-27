import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getComparisonsByCategory, getAllCategories, calculateQuantity, categories } from '@/data/comparisons'

// Generate static params for all categories
export async function generateStaticParams() {
  return getAllCategories().map((category) => ({
    slug: category.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const categoryInfo = categories[params.slug]

  if (!categoryInfo) {
    return {
      title: 'Not Found',
    }
  }

  const items = getComparisonsByCategory(params.slug)

  // Guard against empty items array
  if (!items || items.length === 0) {
    return {
      title: 'Not Found',
    }
  }

  const avgCost = items.reduce((sum, item) => sum + item.cost, 0) / items.length

  const title = `${categoryInfo.name} Comparisons or BoM website`
  const description = `${items.length} ${categoryInfo.name.toLowerCase()} alternatives to the $96.5M BOM redesign, averaging $${Math.round(avgCost).toLocaleString()} each. ${categoryInfo.description}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://bomdrop.com.au/category/${params.slug}/`,
    },
    alternates: {
      canonical: `https://bomdrop.com.au/category/${params.slug}/`,
    },
  }
}

export default function CategoryPage({ params }) {
  const categoryInfo = categories[params.slug]

  if (!categoryInfo) {
    notFound()
  }

  const items = getComparisonsByCategory(params.slug)
  const totalCost = items.reduce((sum, item) => sum + item.cost, 0)
  const avgCost = totalCost / items.length

  // JSON-LD structured data for category page
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${categoryInfo.name} - BoMdrop.com.au`,
    description: categoryInfo.description,
    url: `https://bomdrop.com.au/category/${params.slug}/`,
    about: {
      '@type': 'Thing',
      name: categoryInfo.name,
      description: categoryInfo.description,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
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
          category: categoryInfo.name,
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
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{categoryInfo.icon}</div>
        <h1>{categoryInfo.name}</h1>
        <p>{categoryInfo.description}</p>
      </div>

      <div className="info-box">
        <h3>📊 Category Overview</h3>
        <ul>
          <li><strong>Total Items:</strong> {items.length} sourced comparisons</li>
          <li><strong>Average Cost:</strong> ${Math.round(avgCost).toLocaleString()} AUD</li>
          <li><strong>Cost Range:</strong> ${Math.min(...items.map(i => i.cost)).toLocaleString()} - ${Math.max(...items.map(i => i.cost)).toLocaleString()}</li>
          <li><strong>Total Combined Value:</strong> ${totalCost.toLocaleString()} AUD</li>
        </ul>
      </div>

      <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>
        All {categoryInfo.name} Comparisons
      </h2>

      <div className="category-grid">
        {items.map((item) => {
          const quantity = calculateQuantity(item.cost)
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
                Could buy {quantity.toLocaleString()}
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
          View all sources
        </Link>
        <Link href="/" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
          Back to home
        </Link>
      </div>
    </div>
    </>
  )
}
