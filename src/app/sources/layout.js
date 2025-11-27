import { comparisons } from '@/data/comparisons'

export const metadata = {
  title: `All ${comparisons.length} Sourced Comparisons or BoM website`,
  description: `Browse all ${comparisons.length} sourced cost comparisons showing alternatives to the $96.5M BOM.gov.au redesign. Filter by category, sort by cost, and verify all sources from Senate Estimates.`,
  openGraph: {
    title: `All ${comparisons.length} Sourced Comparisons or BoM website`,
    description: `Browse and filter ${comparisons.length} sourced comparisons from Senate Estimates and government data.`,
    type: 'website',
    url: 'https://bomdrop.com.au/sources/',
  },
  twitter: {
    card: 'summary_large_image',
    title: `All ${comparisons.length} Sourced Comparisons or BoM website`,
    description: `Browse ${comparisons.length} sourced cost comparisons from Senate Estimates.`,
  },
  alternates: {
    canonical: 'https://bomdrop.com.au/sources/',
  },
}

export default function SourcesLayout({ children }) {
  return <>{children}</>
}
