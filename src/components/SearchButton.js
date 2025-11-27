'use client'

import { useState } from 'react'

export default function SearchButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search/?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  return (
    <>
      <button
        className="search-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Search"
        aria-expanded={isOpen}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="search-overlay" onClick={() => setIsOpen(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="search-modal-header">
              <h2>BoMdrop Search Comparisons</h2>
              <button
                className="search-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close search"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search for comparisons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="search-input"
              />
              <button type="submit" className="search-submit">
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
