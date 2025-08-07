'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext, CSSProperties, useState } from 'react'
import { ThemeContext } from './ThemeContext'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function NavBar() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [hoverPos, setHoverPos] = useState<{ [key: string]: CSSProperties }>({})

  return (
    <header style={{ 
      padding: '1rem', 
      borderBottom: '1px solid var(--color-accent-border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backdropFilter: 'blur(10px)',
      background: 'rgba(255, 255, 255, 0.05)'
    }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        {navLinks.map((link) => (
            <Link key={link.name} href={link.path} style={{ textDecoration: 'none' }}>
                <div
                onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const x = e.clientX - rect.left
                    const y = e.clientY - rect.top

                    setHoverPos((prev) => ({
                    ...prev,
                    [link.path]: {
                        background: `radial-gradient(400px circle at ${x}px ${y}px, var(--color-accent-transparent), transparent 80%)`,
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px var(--color-accent-glow)',
                    },
                    }))
                }}
                onMouseLeave={() =>
                    setHoverPos((prev) => ({
                    ...prev,
                    [link.path]: {},
                    }))
                }
                style={{
                    position: 'relative',
                    borderRadius: '8px',
                    padding: '0.5rem 1.25rem',
                    cursor: 'pointer',
                    backdropFilter: 'blur(6px)',
                    border: pathname === link.path
                        ? '1px solid var(--color-accent-border)'
                        : '1px solid rgba(255,255,255,0.05)',
                    background: hoverPos[link.path]?.background ||
                        (pathname === link.path
                        ? 'var(--color-accent-bg)'
                        : 'transparent'),
                    transform: hoverPos[link.path]?.transform ??
                        (pathname === link.path ? 'translateY(-1px)' : 'translateY(0)'),
                    boxShadow: hoverPos[link.path]?.boxShadow ??
                        (pathname === link.path
                        ? '0 4px 20px var(--color-accent-glow), inset 0 -2px 0 var(--color-accent)'
                        : undefined),
                    transition: 'all 0.2s ease',
                    color: 'var(--color-foreground)',
                }}
                >
                {link.name}
                </div>
            </Link>
        ))}
      </nav>

      {/* Apple-style Theme Slider */}
      <div
        onClick={toggleTheme}
        style={{
          position: 'relative',
          width: '60px',
          height: '32px',
          borderRadius: '16px',
          background: 'var(--color-accent)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.3)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '2px',
            left: theme === 'dark' ? '2px' : '30px',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'white',
            transition: 'left 0.3s ease',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          }}
        />
      </div>
    </header>
  )
}