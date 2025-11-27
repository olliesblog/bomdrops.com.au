'use client'

import { useState, useEffect } from 'react'

export default function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(null)

  useEffect(() => {
    const dismissed = localStorage.getItem('disclaimer-dismissed')
    setIsVisible(dismissed !== 'true')

    // Listen for custom event to show the banner
    const handleShowBanner = () => {
      setIsVisible(true)
      localStorage.removeItem('disclaimer-dismissed')
    }
    window.addEventListener('show-disclaimer', handleShowBanner)
    return () => window.removeEventListener('show-disclaimer', handleShowBanner)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('disclaimer-dismissed', 'true')
  }

  if (isVisible === null || !isVisible) return null

  return (
    <div className="disclaimer-banner">
      <p>
        <strong>Notice:</strong> Satirical critique of the $96.5M BOM.gov.au redesign. All data sourced from government records and Senate Estimates.
        <br />
        Not affiliated with BOM or Australian Government.
      </p>
      <button
        onClick={handleClose}
        className="disclaimer-close"
        aria-label="Close disclaimer"
      >
        ×
      </button>
    </div>
  )
}
