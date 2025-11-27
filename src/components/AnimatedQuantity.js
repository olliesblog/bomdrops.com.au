'use client'

import { useEffect, useState } from 'react'

export default function AnimatedQuantity({ quantity, itemName }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = quantity / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(quantity, Math.floor(increment * step))
      setCount(current)

      if (current >= quantity) {
        clearInterval(timer)
        setCount(quantity)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [quantity])

  return (
    <div className="quantity-display">
      <span className="quantity" style={{
        fontVariantNumeric: 'tabular-nums',
        letterSpacing: '-0.02em'
      }}>
        {count.toLocaleString()}
      </span>
      <span className="description">
        Instead of $96.5M on BOM.gov.au, you could buy {quantity.toLocaleString()} × {itemName}
      </span>
    </div>
  )
}
