import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

const links = [
  { to: '/about', label: 'About' },
  { to: '/writing', label: 'Writing' },
  { to: '/projects', label: 'Projects' },
  { to: '/talks', label: 'Talks' },
  { to: '/moments', label: 'Moments' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [open])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      height: 'var(--nav-height)',
      background: 'rgba(40,90,50,0.97)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 15px',
    }}>
      <NavLink
        to="/about"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontWeight: 400,
          color: '#e8d0b0',
          fontSize: '2rem',
          textDecoration: 'none',
          letterSpacing: '-0.02em',
          border: 'none',
          borderBottom: 'none',
          lineHeight: 1,
        }}
      >
        Yuan Yan
      </NavLink>

      {/* Desktop links */}
      <ul className="nav-links-desktop">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="nav-hamburger"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={e => { e.stopPropagation(); setOpen(o => !o) }}
      >
        <span /><span /><span />
      </button>

      {/* Mobile dropdown */}
      {open && (
        <ul className="nav-mobile-menu" onClick={e => e.stopPropagation()}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
