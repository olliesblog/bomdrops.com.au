'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ImageLightbox({ src, alt, title }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <div>
        <h4 style={{ marginTop: 0, marginBottom: '1rem', textAlign: 'center' }}>{title}</h4>
        <div
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            cursor: 'pointer',
            position: 'relative',
            width: '100%',
            borderRadius: '8px',
            border: '2px solid #ddd',
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.2)' : 'none',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </div>
        <p style={{ fontSize: '0.85rem', textAlign: 'center', color: '#666', marginTop: '0.5rem' }}>
          Click to enlarge
        </p>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            cursor: 'pointer'
          }}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              width: 'auto',
              height: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10001
              }}
            >
              ×
            </button>
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}
