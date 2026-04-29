import { NavLink } from 'react-router-dom'
import { siteData } from '../../data/site'
import logo from './../../assets/constant-electric-logo.jpg'

const links = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

type SiteHeaderProps = {
  themeMode: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function SiteHeader({ themeMode, onToggleTheme }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="site-header__brand" to="/">
          {/* <span className="site-header__swoosh" aria-hidden="true" />
          <span className="site-header__brand-copy">
            <strong>
              <span className="site-header__brand-accent">Constant</span> Electric <small>Inc.</small>
            </strong>
            <small>Providing Residential, Commercial &amp; Green Energy Services</small>
          </span> */}
          <img src={logo} className="site-header__logo" alt="Constant Electric Inc." />
        </NavLink>

        <nav className="site-nav" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${themeMode === 'dark' ? 'light' : 'dark'} theme`}
            aria-pressed={themeMode === 'light'}
            onClick={onToggleTheme}
          >
            <span className="theme-toggle__track" aria-hidden="true">
              <span className="theme-toggle__thumb" />
            </span>
            <span className="theme-toggle__label">{themeMode === 'dark' ? 'Dark' : 'Light'}</span>
          </button>
          <a className="button button--small" href={siteData.primaryCtaHref}>
            {siteData.primaryCtaLabel}
          </a>
        </div>
      </div>
    </header>
  )
}
