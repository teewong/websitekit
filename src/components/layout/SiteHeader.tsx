import { NavLink } from 'react-router-dom'
import { siteData } from '../../data/site'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="site-header__brand" to="/">
          <img src="/images/ooak/logo.png" className="site-header__logo" alt="One of a Kind Creative Woodcrafting" />
        </NavLink>

        <nav className="site-nav" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              end={link.to === '/'}
              to={link.to}
              className={({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a className="button button--small" href={siteData.primaryCtaHref}>
          {siteData.primaryCtaLabel}
        </a>
      </div>
    </header>
  )
}
