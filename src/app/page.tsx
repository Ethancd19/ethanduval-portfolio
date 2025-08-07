'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [tiltStyle, setTiltStyle] = useState({})

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const deltaX = (x - centerX) / centerX
    const deltaY = (y - centerY) / centerY

    const rotateX = deltaY * 6
    const rotateY = deltaX * -6

    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.4s ease',
    })
  }

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.4s ease',
    })
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01))',
      }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: '1000px' }}
      >
        <div
          style={{
            backdropFilter: 'blur(12px)',
            background: 'linear-gradient(135deg, rgba(0, 255, 200, 0.2), rgba(0, 0, 0, 0.4))',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '3rem',
            maxWidth: '600px',
            textAlign: 'center',
            color: '#fff',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            transformStyle: 'preserve-3d',
            ...tiltStyle,
          }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ethan Duval</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
            Cybersecurity Engineer – Researcher – Maker
          </p>
          <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
            Welcome to my portfolio website!
          </p>
          <Link
            href="/projects"
            style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: '500',
              backdropFilter: 'blur(8px)',
            }}
          >
            View My Projects →
          </Link>
        </div>
      </div>
    </div>
  )
}
