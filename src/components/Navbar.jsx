
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import './Navbar.css'

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'What We Do', path: '/services' },
  { label: 'Global Network', path: '/global-network' },
  { label: 'Partnerships', path: '/partnerships' },
  { label: 'Insights & Media', path: '/insights-media' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="tc-header">
      <div className="tc-header-inner">
        <Link
          to="/"
          className="tc-brand"
          aria-label="Tconsult Global home"
          onClick={closeMenu}
        >
          <span className="tc-brand-name">
            Tconsult<span className="tc-brand-mark">®</span>
          </span>
          <span className="tc-brand-caption">
            PEOPLE · IDEAS · OPPORTUNITIES
          </span>
        </Link>

        <button
          type="button"
          className="tc-mobile-toggle"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="tc-main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav
          id="tc-main-navigation"
          className={`tc-navigation ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          <div className="tc-navigation-links">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `tc-nav-link${isActive ? ' is-active' : ''}`
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            className="tc-header-cta"
            onClick={closeMenu}
          >
            <span>Start a Conversation</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
