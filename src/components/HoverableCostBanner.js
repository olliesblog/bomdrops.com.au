'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimatedCounter from './AnimatedCounter'

export default function HoverableCostBanner({ targetAmount }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <Link href="/weather/" style={{ textDecoration: 'none' }}>
      <div
        className="cost-warning-banner"
        style={{ cursor: 'pointer' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="warning-icon">
          <span className="warning-exclamation">!</span>
        </div>
        <AnimatedCounter targetAmount={targetAmount} />

        {isHovering && (
          <div
            style={{
              position: 'absolute',
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: 'translate(-50%, -50%)',
              fontSize: '3rem',
              pointerEvents: 'none',
              zIndex: 100,
              transition: 'all 0.05s ease-out',
            }}
          >
            💸
          </div>
        )}
      </div>
    </Link>
  )
}
