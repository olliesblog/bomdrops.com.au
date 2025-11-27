import { NextResponse } from 'next/server'
import { comparisons, getAllCategories, calculateQuantity, BOM_TOTAL_COST } from '@/data/comparisons'

export async function GET() {
  const feed = {
    metadata: {
      title: 'BoMdrop.com.au - Complete Data Feed',
      description: 'Machine-readable data feed of all cost comparisons for the $96.5M BOM.gov.au redesign',
      version: '1.0',
      generated: new Date().toISOString(),
      totalItems: comparisons.length,
      bomTotalCost: BOM_TOTAL_COST,
      license: 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
      source: 'https://bomdrop.com.au',
      apiEndpoint: 'https://bomdrop.com.au/api/feed.json',
    },
    categories: getAllCategories(),
    comparisons: comparisons.map(item => ({
      ...item,
      quantity: calculateQuantity(item.cost),
      totalValue: calculateQuantity(item.cost) * item.cost,
      url: `https://bomdrop.com.au/compare/${item.id}/`,
    })),
    statistics: {
      totalComparisons: comparisons.length,
      categoryCounts: getAllCategories().reduce((acc, cat) => {
        acc[cat.slug] = comparisons.filter(c => c.category === cat.slug).length
        return acc
      }, {}),
      costRange: {
        min: Math.min(...comparisons.map(c => c.cost)),
        max: Math.max(...comparisons.map(c => c.cost)),
        average: comparisons.reduce((sum, c) => sum + c.cost, 0) / comparisons.length,
      },
      lastVerified: {
        oldest: comparisons.reduce((oldest, c) =>
          new Date(c.lastVerified) < new Date(oldest) ? c.lastVerified : oldest,
          comparisons[0].lastVerified
        ),
        newest: comparisons.reduce((newest, c) =>
          new Date(c.lastVerified) > new Date(newest) ? c.lastVerified : newest,
          comparisons[0].lastVerified
        ),
      },
    },
  }

  return NextResponse.json(feed, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  })
}
