import type { CSSProperties } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import SiteFooter from './components/layout/SiteFooter'
import SiteHeader from './components/layout/SiteHeader'
import { siteData } from './data/site'

function App() {
  const location = useLocation()
  const isContactPage = location.pathname === '/contact'

  return (
    <div
      className="site-shell"
      style={
        {
          '--hero-gradient': siteData.theme.heroGradient,
          '--color-surface-tint': siteData.theme.surfaceTint,
          '--color-accent': siteData.theme.accent,
          '--color-accent-dark': siteData.theme.accentDark,
        } as CSSProperties
      }
    >
      <SiteHeader />
      <main id="main" className={`site-main ${isContactPage ? 'site-main--narrow' : ''}`}>
        <Outlet />
      </main>
      <SiteFooter />
      <ScrollRestoration />
    </div>
  )
}

export default App
