'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { comparisons, BOM_TOTAL_COST } from '@/data/comparisons'

// Simple pluralization function
function pluralize(name, quantity) {
  if (quantity === 1) return name

  // Handle names with parenthetical text like "Tim Tam Packet (200g)"
  const parenMatch = name.match(/^(.*?)(\s*\([^)]+\))$/)
  if (parenMatch) {
    const [, baseName, parenPart] = parenMatch
    return pluralize(baseName, quantity) + parenPart
  }

  // Special cases
  if (name.endsWith('y') && !name.endsWith('ay') && !name.endsWith('ey') && !name.endsWith('oy') && !name.endsWith('uy')) {
    return name.slice(0, -1) + 'ies'
  }
  if (name.endsWith('s') || name.endsWith('x') || name.endsWith('z') || name.endsWith('ch') || name.endsWith('sh')) {
    return name + 'es'
  }

  // Default: just add 's'
  return name + 's'
}

export default function RotatingComparison() {
  // Start from 0 on server, then randomize on client mount
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fadeState, setFadeState] = useState('fade-in')
  const [isClient, setIsClient] = useState(false)

  // Set random index on client mount
  useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * comparisons.length))
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const interval = setInterval(() => {
      setFadeState('fade-out')

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % comparisons.length)
        setFadeState('fade-in')
      }, 500) // Half second for fade out
    }, 8000) // Change every 8 seconds

    return () => clearInterval(interval)
  }, [isClient])

  const randomItem = comparisons[currentIndex]
  const randomQuantity = Math.floor(BOM_TOTAL_COST / randomItem.cost)

  return (
    <Link href={`/compare/${randomItem.id}/`} style={{ textDecoration: 'none' }}>
      <div
        className={`comparison-card ${fadeState}`}
        style={{
          background: 'linear-gradient(135deg, #003366 0%, #0066cc 100%)',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          transition: 'all 0.3s ease, opacity 0.5s ease',
          opacity: fadeState === 'fade-in' ? 1 : 0
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            fontSize: 'clamp(3rem, 12vw, 6rem)',
            textAlign: 'center',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
          }}>
            {randomItem.icon}
          </div>

          <div>
            <div style={{
              fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              opacity: 0.8,
              marginBottom: '0.5rem',
              fontWeight: '600',
              textAlign: 'center'
            }}>
              Instead of $96.5M on BOM.gov.au
            </div>

            <h3 style={{
              fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
              marginBottom: '1rem',
              color: 'white',
              fontWeight: '800',
              lineHeight: '1.2',
              textAlign: 'center'
            }}>
              {randomQuantity.toLocaleString()} × {pluralize(randomItem.name, randomQuantity)}
            </h3>

            <p style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
              marginBottom: '1.5rem',
              opacity: 0.9,
              lineHeight: '1.6',
              textAlign: 'center'
            }}>
              {randomItem.description}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem',
              marginTop: '1.5rem'
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.15)',
                padding: '1rem',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', opacity: 0.8, marginBottom: '0.25rem' }}>
                  Unit Cost
                </div>
                <div style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: '700' }}>
                  ${randomItem.cost.toLocaleString()}
                </div>
              </div>

              <div style={{
                background: 'rgba(255,255,255,0.15)',
                padding: '1rem',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', opacity: 0.8, marginBottom: '0.25rem' }}>
                  Category
                </div>
                <div style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: '700', textTransform: 'capitalize' }}>
                  {randomItem.category}
                </div>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: '2rem',
            padding: 'clamp(1rem, 2.5vw, 1.25rem)',
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '8px',
            fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
            borderLeft: '4px solid rgba(255,255,255,0.3)',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              fontWeight: '600',
              marginBottom: '0.5rem',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              opacity: 0.8
            }}>
              Procurement Context
            </div>
            {randomItem.procurementContext}
          </div>

          <div style={{
            marginTop: '1.5rem',
            textAlign: 'center',
            fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
            opacity: 0.7,
            position: 'relative',
            zIndex: 1,
            padding: '0 1rem'
          }}>
            Click to view full details and sources →
          </div>
        </div>
      </div>
    </Link>
  )
}
