import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ContactSuccessPage from './pages/ContactSuccessPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import PrivacyPage from './pages/PrivacyPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ServicesPage from './pages/ServicesPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'services/:slug', element: <ServiceDetailPage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'contact-success', element: <ContactSuccessPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default router
