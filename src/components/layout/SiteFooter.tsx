import { NavLink } from 'react-router-dom'
import { siteData } from '../../data/site'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div>
            <h2>Workshop</h2>
            <ul className="plain-list site-footer__list">
              <li>
                <a href={siteData.phoneHref}>Phone: {siteData.phoneDisplay}</a>
              </li>
              <li>
                <a href={siteData.emailHref}>Email: {siteData.email}</a>
              </li>
              <li>1401 Springhill Rd, Parksville, BC</li>
            </ul>
          </div>
          <div>
            <h2>Built For</h2>
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
                <NavLink to="/services">Products</NavLink>
              </li>
              <li>
                <NavLink to="/gallery">Gallery</NavLink>
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
          <p>{siteData.footerBlurb}</p>
        </div>
      </div>
    </footer>
  )
}
