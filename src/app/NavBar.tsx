'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CSSProperties, useState } from 'react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function NavBar() {
  const pathname = usePathname()
  const [hoverPos, setHoverPos] = useState<{ [key: string]: CSSProperties }>({})

  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #222' }}>
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
                        background: `radial-gradient(400px circle at ${x}px ${y}px, rgba(0,255,200,0.1), transparent 80%)`,
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0,255,200,0.05)',
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
                        ? '1px solid rgba(0,255,200,0.4)'
                        : '1px solid rgba(255,255,255,0.05)',
                    background: hoverPos[link.path]?.background ||
                        (pathname === link.path
                        ? 'rgba(0, 255, 200, 0.06)'
                        : 'transparent'),
                    transform: hoverPos[link.path]?.transform ??
                        (pathname === link.path ? 'translateY(-1px)' : 'translateY(0)'),
                    boxShadow: hoverPos[link.path]?.boxShadow ??
                        (pathname === link.path
                        ? '0 4px 20px rgba(0, 255, 200, 0.1), inset 0 -2px 0 rgba(0,255,200,0.6)'
                        : undefined),
                    transition: 'all 0.2s ease',
                    color: 'white',
                }}
                >
                {link.name}
                </div>
            </Link>
        ))}

      </nav>
    </header>
  )
}
