import Link from 'next/link'

export default function NotFound() {
  const totalCost = 96500000
  const bomErrors = 729
  const costPerError = totalCost / bomErrors

  return (
    <div className="container" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <div style={{
        fontSize: '12rem',
        marginBottom: '1rem',
        fontWeight: '900',
        color: '#0c4ad0',
        filter: 'drop-shadow(0 4px 12px rgba(12,74,208,0.3))',
        lineHeight: '1'
      }}>
        404
      </div>

      <h1 style={{
        fontSize: '3rem',
        marginBottom: '2rem',
        color: 'var(--primary)'
      }}>
        Page not found
      </h1>

      <div className="info-box" style={{
        maxWidth: '800px',
        margin: '2rem auto',
        background: 'linear-gradient(135deg, #ffeb3b 0%, #fbc02d 100%)',
        border: '3px solid #f57f17',
        padding: '2rem'
      }}>
        <div style={{
          fontSize: '3rem',
          fontWeight: '900',
          color: '#003366',
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}>
          💸 FUN FACT 💸
        </div>

        <p style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#003366',
          marginBottom: '1.5rem',
          lineHeight: '1.4'
        }}>
          The "go live" BOM.gov.au website had <strong style={{ fontSize: '1.8rem' }}>729 different 404 errors</strong>
        </p>

        <div style={{
          fontSize: '2.5rem',
          fontWeight: '900',
          color: '#d32f2f',
          marginBottom: '1rem',
          padding: '1rem',
          background: 'rgba(255,255,255,0.7)',
          borderRadius: '8px',
          border: '2px solid #c62828'
        }}>
          That's ${costPerError.toLocaleString('en-AU', { maximumFractionDigits: 2 })} per 404 error!
        </div>

        <p style={{
          fontSize: '1.2rem',
          fontWeight: '600',
          color: '#1565c0',
          marginTop: '1.5rem'
        }}>
          At least this 404 page was free. 🤷‍♂️
        </p>
      </div>

      <div style={{
        marginTop: '3rem',
        fontSize: '1.1rem',
        color: 'var(--text-light)'
      }}>
        <p style={{ marginBottom: '2rem' }}>
          The page you're looking for doesn't exist. Unlike BOM.gov.au's 404s,
          this one didn't cost six figures to create.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn">
            🏠 Go Home
          </Link>
          <Link href="/sources/" className="btn btn-secondary">
            📊 View all sources
          </Link>
          <Link href="/category/" className="btn btn-secondary">
            📂 Browse categories
          </Link>
        </div>
      </div>

      <div className="info-box" style={{
        maxWidth: '600px',
        margin: '3rem auto',
        fontSize: '0.9rem',
        background: 'var(--bg-grey)'
      }}>
        <p style={{ marginBottom: '0.5rem' }}>
          <strong>Calculation:</strong> $96,500,000 ÷ 729 404 errors = ${costPerError.toLocaleString('en-AU', { maximumFractionDigits: 2 })} per error
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
          Source: <a
            href="https://www.bom.gov.au/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--primary)' }}
          >
            BOM.gov.au live site analytics
          </a>
        </p>
      </div>
    </div>
  )
}
