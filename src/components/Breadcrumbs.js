'use client'

import { usePathname } from 'next/navigation'

export default function Breadcrumbs() {
  const pathname = usePathname()

  // Don't show breadcrumbs on homepage
  if (pathname === '/') {
    return null
  }

  // Build breadcrumb trail
  const pathSegments = pathname.split('/').filter(segment => segment)

  const breadcrumbs = [
    { label: 'Home', href: '/' }
  ]

  // Build up the path
  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`

    // Format the label
    let label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    // Handle special cases
    if (segment === 'compare') {
      label = 'Comparisons'
    } else if (segment === 'category') {
      label = 'Categories'
    }

    breadcrumbs.push({
      label,
      href: currentPath + '/'
    })
  })

  return (
    <div className="breadcrumb-bar">
      <div className="nav-container">
        <div className="breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.href}>
              <a href={crumb.href}>{crumb.label}</a>
              {index < breadcrumbs.length - 1 && (
                <span className="separator">›</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
