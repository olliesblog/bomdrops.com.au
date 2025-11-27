'use client'

import { useState, useEffect, useRef } from 'react'

export default function CountUpNumber({
  value,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  style = {}
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const animationRef = useRef(null)

  useEffect(() => {
    // Start animation immediately on mount
    const startTime = Date.now()
    const startValue = 0
    const endValue = parseFloat(value)

    const animate = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = startValue + (endValue - startValue) * easeOut

      setDisplayValue(currentValue)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setDisplayValue(endValue)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [value, duration])

  const formatNumber = (num) => {
    if (decimals > 0) {
      return num.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    return Math.floor(num).toLocaleString('en-AU')
  }

  return (
    <span style={style}>
      {prefix}{formatNumber(displayValue)}{suffix}
    </span>
  )
}
