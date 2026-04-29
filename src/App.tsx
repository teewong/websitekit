import { useEffect, useState, type CSSProperties } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import SiteFooter from './components/layout/SiteFooter'
import SiteHeader from './components/layout/SiteHeader'
import SiteJsonLd from './components/seo/SiteJsonLd'
import { siteData } from './data/site'

type ThemeMode = 'dark' | 'light'

const themeTokens: Record<ThemeMode, CSSProperties> = {
  dark: {
    '--hero-gradient': siteData.theme.heroGradient,
    '--color-bg': '#0c1018',
    '--color-surface': '#161d2b',
    '--color-surface-tint': siteData.theme.surfaceTint,
    '--color-text': '#ede9df',
    '--color-muted': '#8a96ae',
    '--color-border': 'rgba(255, 255, 255, 0.07)',
    '--color-accent': 'yellowgreen',
    '--color-accent-dark': 'greenyellow',
  } as CSSProperties,
  light: {
    '--hero-gradient': 'linear-gradient(135deg, #f6f1e8 0%, #fffaf0 48%, #e7eadf 100%)',
    '--color-bg': '#f4efe6',
    '--color-surface': '#fffaf0',
    '--color-surface-tint': '#eee8dc',
    '--color-text': '#0d2245',
    '--color-muted': '#667286',
    '--color-border': 'rgba(13, 34, 69, 0.13)',
    '--color-accent': 'dodgerblue',
    '--color-accent-dark': 'dodgerblue',
  } as CSSProperties,
}

function App() {
  const location = useLocation()
  const isContactPage = location.pathname === '/contact'
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }

    return window.localStorage.getItem('theme-mode') === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    window.localStorage.setItem('theme-mode', themeMode)
  }, [themeMode])

  const toggleTheme = () => {
    setThemeMode((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div
      className="site-shell"
      data-theme={themeMode}
      style={themeTokens[themeMode]}
    >
      <SiteJsonLd />
      <SiteHeader themeMode={themeMode} onToggleTheme={toggleTheme} />
      <main id="main" className={`site-main ${isContactPage ? 'site-main--narrow' : ''}`}>
        <Outlet />
      </main>
      <SiteFooter />
      <ScrollRestoration />
    </div>
  )
}

export default App
