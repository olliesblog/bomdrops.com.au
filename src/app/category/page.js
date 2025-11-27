import Link from 'next/link'
import { getAllCategories, getComparisonsByCategory } from '@/data/comparisons'

export const metadata = {
  title: 'All Categories - BoMdrop.com.au',
  description: 'Browse all comparison categories showing alternatives to the $96.5M BOM.gov.au redesign. Explore infrastructure, emergency services, education, healthcare, and more.',
  openGraph: {
    title: 'All Categories - BoMdrop.com.au',
    description: 'Browse all comparison categories showing alternatives to the $96.5M BOM.gov.au redesign.',
    type: 'website',
    url: 'https://bomdrop.com.au/category/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Categories - BoMdrop.com.au',
    description: 'Browse all comparison categories',
  },
  alternates: {
    canonical: 'https://bomdrop.com.au/category/',
  },
}

export default function CategoriesPage() {
  const categories = getAllCategories()

  return (
    <div className="container">
      <h1>Browse by category</h1>

      <div className="info-box">
        <h3>📂 All categories</h3>
        <p>
          Explore {categories.length} categories of sourced comparisons showing what Australia
          could have purchased instead of spending $96.5M on the <a href="https://bom.gov.au" target="_blank" rel="noopener noreferrer">BOM.gov.au</a> redesign.
        </p>
      </div>

      <div className="category-grid" style={{ marginTop: '2rem' }}>
        {categories.map((category) => {
          const itemCount = getComparisonsByCategory(category.slug).length
          return (
            <Link
              key={category.slug}
              href={`/category/${category.slug}/`}
              className="category-card"
            >
              <div className="icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <div className="quantity" style={{
                marginTop: '1rem',
                fontSize: '0.9rem',
                color: 'var(--primary)',
                fontWeight: '600'
              }}>
                {itemCount} comparison{itemCount !== 1 ? 's' : ''}
              </div>
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
  )
}
