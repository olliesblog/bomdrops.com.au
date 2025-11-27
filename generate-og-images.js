import { ImageResponse } from '@vercel/og'
import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { comparisons, calculateQuantity } from './src/data/comparisons.js'
import React from 'react'

// Create output directory
const ogDir = './public/og'
if (!existsSync(ogDir)) {
  mkdirSync(ogDir, { recursive: true })
}

console.log(`Generating OG images for ${comparisons.length} comparisons...`)

let completed = 0

// Generate images for each comparison
for (const item of comparisons) {
  const quantity = calculateQuantity(item.cost)

  try {
    const imageResponse = new ImageResponse(
      React.createElement(
        'div',
        {
          style: {
            width: '1200px',
            height: '630px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%)',
            fontFamily: 'Arial, sans-serif',
            color: 'white',
            padding: '60px',
            position: 'relative',
          },
        },
        // Site name at TOP
        React.createElement(
          'div',
          {
            style: {
              position: 'absolute',
              top: '40px',
              fontSize: '28px',
              fontWeight: 'bold',
              opacity: 0.95,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            },
          },
          '💣 BoMdrop.com.au'
        ),
        // Emoji Icon
        React.createElement('div', { style: { fontSize: '110px', marginBottom: '20px', marginTop: '20px' } }, item.icon),
        // Item Name
        React.createElement(
          'div',
          {
            style: {
              fontSize: '46px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '25px',
              maxWidth: '1000px',
              lineHeight: '1.2',
            },
          },
          item.name
        ),
        // Quantity
        React.createElement(
          'div',
          {
            style: {
              fontSize: '68px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#FFD700',
            },
          },
          quantity.toLocaleString()
        ),
        // Description
        React.createElement(
          'div',
          {
            style: {
              fontSize: '30px',
              textAlign: 'center',
              opacity: 0.9,
              marginBottom: '20px',
            },
          },
          'Instead of $96.5M on BOM.gov.au'
        ),
        // Cost
        React.createElement(
          'div',
          {
            style: {
              fontSize: '26px',
              opacity: 0.85,
            },
          },
          `$${item.cost.toLocaleString()} each`
        )
      ),
      {
        width: 1200,
        height: 630,
      }
    )

    const arrayBuffer = await imageResponse.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    writeFileSync(`${ogDir}/${item.id}.png`, buffer)

    completed++
    if (completed % 50 === 0) {
      console.log(`Generated ${completed}/${comparisons.length} images...`)
    }
  } catch (error) {
    console.error(`Error generating image for ${item.id}:`, error)
  }
}

console.log(`✅ Successfully generated ${completed} OG images!`)
