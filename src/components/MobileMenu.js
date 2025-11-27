'use client'

import { useState } from 'react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        className="hamburger-menu"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>

      <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="/search/" onClick={toggleMenu}>🔍 Search</a>
          <a href="/category/" onClick={toggleMenu}>Categories</a>
          <a href="/sources/" onClick={toggleMenu}>Sources</a>
          <a href="/methodology/" onClick={toggleMenu}>Methodology</a>
          <a href="/press/" onClick={toggleMenu}>Press</a>
          <a href="/addendum/" onClick={toggleMenu}>Addendum</a>
          <a href="/weather/" onClick={toggleMenu}>⚠️ Perspective</a>
        </nav>
      </div>
    </>
  )
}
