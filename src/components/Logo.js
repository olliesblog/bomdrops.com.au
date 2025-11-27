'use client'

import { useState } from 'react'

export default function Logo() {
  const [isExploding, setIsExploding] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setIsExploding(true)
    setTimeout(() => {
      setIsExploding(false)
      window.location.href = '/'
    }, 500)
  }

  return (
    <a href="/" className="logo" onClick={handleClick}>
      <span className="logo-icon">
        <span className="icon-default">⛈️</span>
        <span className="icon-hover">{isExploding ? '💥' : '💣'}</span>
      </span>
      <span className="site-name">BoMdrop.com.au</span>
    </a>
  )
}
