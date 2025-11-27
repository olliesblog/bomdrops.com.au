'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import { comparisons, calculateQuantity, categories } from '@/data/comparisons'

export default function SourcesPage() {
  const [sortField, setSortField] = useState('name')
  const [sortDirection, setSortDirection] = useState('asc')
  const [filterCategory, setFilterCategory] = useState('all')

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const filteredAndSorted = useMemo(() => {
    let items = [...comparisons]

    // Filter by category
    if (filterCategory !== 'all') {
      items = items.filter(item => item.category === filterCategory)
    }

    // Sort
    items.sort((a, b) => {
      let aVal, bVal

      switch (sortField) {
        case 'name':
          aVal = a.name.toLowerCase()
          bVal = b.name.toLowerCase()
          break
        case 'cost':
          aVal = a.cost
          bVal = b.cost
          break
        case 'quantity':
          aVal = calculateQuantity(a.cost)
          bVal = calculateQuantity(b.cost)
          break
        case 'category':
          aVal = a.category
          bVal = b.category
          break
        case 'verified':
          aVal = new Date(a.lastVerified)
          bVal = new Date(b.lastVerified)
          break
        default:
          return 0
      }

      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1
      return 0
    })

    return items
  }, [sortField, sortDirection, filterCategory])

  const exportToCSV = () => {
    const headers = ['Name', 'Cost (AUD)', 'Quantity', 'Category', 'Source', 'Senate Reference', 'Last Verified']
    const rows = filteredAndSorted.map(item => [
      item.name,
      item.cost,
      calculateQuantity(item.cost),
      item.category,
      item.source,
      item.senateReference,
      item.lastVerified
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'bomdrop-sources.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="container">
      <h1>All sources & comparisons</h1>

      <div className="info-box">
        <h3>📊 Complete source database</h3>
        <p>
          This page contains all {comparisons.length} sourced comparisons showing alternatives
          to the $96.5M BOM.gov.au redesign. Every item includes direct links to government
          sources, Senate Estimates references, and verification dates.
        </p>
        <p>
          <strong>Total citations:</strong> {comparisons.length} source citations across{' '}
          {Object.keys(categories).length} categories
        </p>
      </div>

      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div>
          <label htmlFor="category-filter" style={{ marginRight: '0.5rem' }}>
            Filter by category:
          </label>
          <select
            id="category-filter"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: '2px solid var(--border)',
              fontSize: '1rem'
            }}
          >
            <option value="all">All categories ({comparisons.length})</option>
            {Object.entries(categories).map(([key, cat]) => (
              <option key={key} value={key}>
                {cat.icon} {cat.name} ({comparisons.filter(c => c.category === key).length})
              </option>
            ))}
          </select>
        </div>

        <button onClick={exportToCSV} className="btn btn-secondary">
          📥 Export to CSV
        </button>

        <Link href="/api/feed.json" className="btn btn-secondary" target="_blank">
          📄 JSON feed
        </Link>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table className="sources-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('name')} title="Click to sort">
                Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('cost')} title="Click to sort">
                Cost {sortField === 'cost' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('quantity')} title="Click to sort">
                Quantity {sortField === 'quantity' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('category')} title="Click to sort">
                Category {sortField === 'category' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th>Source</th>
              <th>Senate Ref</th>
              <th onClick={() => handleSort('verified')} title="Click to sort">
                Verified {sortField === 'verified' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSorted.map((item) => {
              const quantity = calculateQuantity(item.cost)
              return (
                <tr key={item.id} id={item.id}>
                  <td>
                    <Link href={`/compare/${item.id}/`}>
                      {item.icon} {item.name}
                    </Link>
                  </td>
                  <td>${item.cost.toLocaleString()}</td>
                  <td>{quantity.toLocaleString()}</td>
                  <td>
                    <Link href={`/category/${item.category}/`}>
                      {categories[item.category].name}
                    </Link>
                  </td>
                  <td>
                    <a href={item.source} target="_blank" rel="noopener noreferrer">
                      View Source
                    </a>
                  </td>
                  <td>{item.senateReference}</td>
                  <td>
                    {new Date(item.lastVerified).toLocaleDateString('en-AU', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="info-box source-verification" style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem' }}>✅ Source verification methodology</h3>
        <p>All sources on this page are:</p>
        <ul>
          <li>Linked to official government websites, Senate Hansard, or public reports</li>
          <li>Verified within the last 6 months</li>
          <li>Cross-referenced with Senate Estimates testimony where available</li>
          <li>Documented with calculation methodology notes</li>
        </ul>
        <p>
          <Link href="/methodology/">Read our full verification methodology</Link>
        </p>
      </div>
    </div>
  )
}
