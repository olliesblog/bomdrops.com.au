import { comparisons, getAllCategories } from '@/data/comparisons'

export default function sitemap() {
  const baseUrl = 'https://bomdrop.com.au'

  // Home page
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sources/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/methodology/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Category pages
  const categories = getAllCategories()
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/category/${category.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Comparison pages
  const comparisonRoutes = comparisons.map((item) => ({
    url: `${baseUrl}/compare/${item.id}/`,
    lastModified: new Date(item.lastVerified),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...routes, ...categoryRoutes, ...comparisonRoutes]
}
