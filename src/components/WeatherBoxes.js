'use client'

import WeatherBox from './WeatherBox'

export default function WeatherBoxes() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
      maxWidth: '1000px',
      margin: '2rem auto',
      padding: '0 1rem'
    }}>
      <WeatherBox
        location="Australia ⚠️"
        emoji="☔️"
        amount="$96.5M"
        subtitle={<>Feels like <strong style={{ color: '#333' }}>$4.1M</strong></>}
        emojiOnClick="😭"
        isNegative={true}
      />

      <WeatherBox
        location="Accenture"
        emoji="☀️"
        amount="$79.5M"
        subtitle="Consulting fees & IT work"
        emojiOnClick="💰"
      />

      <WeatherBox
        location="Deloitte"
        emoji="☀️"
        amount="$35M"
        subtitle={<><strong>$11M</strong> forecast</>}
        emojiOnClick="💰"
      />
    </div>
  )
}
