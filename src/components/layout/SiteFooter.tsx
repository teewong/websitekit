import { NavLink } from 'react-router-dom'
import { siteData } from '../../data/site'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div>
            <h2>Contact Information</h2>
            <ul className="plain-list site-footer__list">
              <li>
                <a href={siteData.phoneHref}>Phone: {siteData.phoneDisplay}</a>
              </li>
              <li>
                <a href={siteData.emailHref}>Email: {siteData.email}</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Service Area</h2>
            <ul className="plain-list site-footer__list">
              {siteData.serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Quick Links</h2>
            <ul className="plain-list site-footer__list">
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/privacy">Privacy</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>&copy; 2026 {siteData.legalName}</p>
          <p>Dan Valliquette, Owner/Operator · Licensed &amp; Insured</p>
          <p>Business License: LIC-00215142</p>
        </div>
      </div>
    </footer>
  )
}
