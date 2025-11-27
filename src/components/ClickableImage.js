'use client'

export default function ClickableImage({ src, alt, title }) {
  return (
    <div>
      <h4 style={{ marginTop: 0, marginBottom: '1rem', textAlign: 'center' }}>{title}</h4>
      <a href={src} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: 'auto',
            border: '2px solid #ddd',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        />
      </a>
      <p style={{ fontSize: '0.85rem', textAlign: 'center', color: '#666', marginTop: '0.5rem' }}>
        Click to view full size
      </p>
    </div>
  )
}
