'use client'

import { useState } from 'react'

export default function WeatherBox({ location, emoji, amount, subtitle, emojiOnClick, isNegative }) {
  const [showEmojis, setShowEmojis] = useState(false)
  const [fallingEmojis, setFallingEmojis] = useState([])

  const handleClick = () => {
    if (!emojiOnClick) return

    setShowEmojis(true)

    // Create 20 falling emojis
    const emojis = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1
    }))

    setFallingEmojis(emojis)

    // Hide after 3 seconds
    setTimeout(() => {
      setShowEmojis(false)
      setFallingEmojis([])
    }, 3000)
  }

  return (
    <>
      <style>{`
        @keyframes fall {
          from {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          to {
            transform: translateY(500px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
      <div
        onClick={handleClick}
        style={{
          background: 'white',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          cursor: emojiOnClick ? 'pointer' : 'default',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 0.2s'
        }}
        onMouseEnter={(e) => {
          if (emojiOnClick) e.currentTarget.style.transform = 'scale(1.02)'
        }}
        onMouseLeave={(e) => {
          if (emojiOnClick) e.currentTarget.style.transform = 'scale(1)'
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem'
        }}>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#333'
          }}>
            <strong>{location}</strong>
          </span>
          <span style={{ fontSize: '3.5rem' }}>{emoji}</span>
        </div>
        <div style={{
          fontSize: '3.5rem',
          fontWeight: '300',
          color: '#333',
          lineHeight: '1',
          marginBottom: '0.5rem'
        }}>
          {isNegative ? '-' : ''}{amount}
        </div>
        <div style={{
          fontSize: '1rem',
          color: '#666'
        }}>
          {subtitle}
        </div>

        {/* Falling emojis */}
        {showEmojis && fallingEmojis.map((emoji) => (
          <div
            key={emoji.id}
            style={{
              position: 'absolute',
              top: '-50px',
              left: `${emoji.left}%`,
              fontSize: '2rem',
              animation: `fall ${emoji.duration}s linear ${emoji.delay}s`,
              pointerEvents: 'none',
              zIndex: 10
            }}
          >
            {emojiOnClick}
          </div>
        ))}
      </div>
    </>
  )
}
