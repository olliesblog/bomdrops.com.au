'use client'

import { useEffect, useState } from 'react'

export default function AnimatedCounter({ targetAmount }) {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = targetAmount / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(targetAmount, Math.floor(increment * step))
      setCount(current)

      if (current >= targetAmount) {
        clearInterval(timer)
        setCount(targetAmount)
        setIsAnimating(false)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [targetAmount])

  return (
    <div className="cost" style={{
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.02em'
    }}>
      ${count.toLocaleString('en-AU')}
    </div>
  )
}
