'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { comparisons, categories, BOM_TOTAL_COST } from '@/data/comparisons'

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const params = new URLSearchParams(window.location.search)
    const query = params.get('q') || ''
    setSearchQuery(query)
    performSearch(query)
  }, [])

  const performSearch = (query) => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const lowerQuery = query.toLowerCase().trim()

    const filtered = comparisons.filter(item => {
      return (
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery) ||
        item.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
        item.procurementContext.toLowerCase().includes(lowerQuery)
      )
    })

    setResults(filtered)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.history.pushState({}, '', `/search/?q=${encodeURIComponent(searchQuery.trim())}`)
      performSearch(searchQuery)
    }
  }

  if (!isClient) {
    return (
      <div className="container">
        <div className="hero">
          <h1>Search</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="hero">
        <h1>BoMdrop Search Comparisons</h1>
        <p>Search through {comparisons.length} sourced comparisons</p>
      </div>

      <div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
        <form onSubmit={handleSearch} style={{
          display: 'flex',
          gap: '1rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <input
            type="text"
            placeholder="Search for comparisons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              padding: '1rem',
              fontSize: '1rem',
              border: '2px solid var(--border-color)',
              borderRadius: '8px',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            className="btn"
            style={{ whiteSpace: 'nowrap' }}
          >
            Search
          </button>
        </form>
      </div>

      {searchQuery && (
        <div style={{ marginBottom: '2rem' }}>
          <h2>
            {results.length > 0
              ? `Found ${results.length} result${results.length === 1 ? '' : 's'} for "${searchQuery}"`
              : `No results found for "${searchQuery}"`
            }
          </h2>
        </div>
      )}

      {results.length > 0 && (
        <div className="category-grid">
          {results.map((item) => {
            const quantity = Math.floor(BOM_TOTAL_COST / item.cost)
            const categoryInfo = categories[item.category]
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
                <div className="category" style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-light)',
                  marginBottom: '0.5rem'
                }}>
                  {categoryInfo.name}
                </div>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-light)',
                  marginBottom: '1rem'
                }}>
                  {shortDescription}
                </p>
                <div className="cost">${item.cost.toLocaleString()}</div>
                <div className="quantity">
                  Could buy {quantity.toLocaleString()}
                </div>
              </Link>
            )
          })}
        </div>
      )}

      {searchQuery && results.length === 0 && (
        <div className="info-box">
          <h3>No results found</h3>
          <p>Try searching for:</p>
          <ul>
            <li>Item names (e.g., "radar", "coffee", "laptop")</li>
            <li>Categories (e.g., "technology", "food", "transport")</li>
            <li>Keywords from descriptions</li>
          </ul>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/sources/" className="btn">
              Browse All Comparisons
            </Link>
            <Link href="/category/" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
              Browse by category
            </Link>
          </div>
        </div>
      )}

      {!searchQuery && (
        <div className="info-box">
          <h3>How to search</h3>
          <p>
            Enter keywords to search through all {comparisons.length} comparisons.
            You can search by item name, category, description, or tags.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/sources/" className="btn">
              Browse All Comparisons
            </Link>
            <Link href="/category/" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
              Browse by category
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
