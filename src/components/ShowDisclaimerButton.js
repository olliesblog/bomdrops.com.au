'use client'

export default function ShowDisclaimerButton() {
  const handleClick = () => {
    window.dispatchEvent(new Event('show-disclaimer'))
  }

  return (
    <button
      onClick={handleClick}
      style={{
        background: 'none',
        border: 'none',
        color: 'var(--link)',
        cursor: 'pointer',
        textDecoration: 'underline',
        fontSize: 'inherit',
        padding: 0,
        font: 'inherit'
      }}
    >
      Show Notice
    </button>
  )
}
