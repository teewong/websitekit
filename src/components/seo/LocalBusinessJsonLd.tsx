import JsonLd from './JsonLd'
import { siteData } from '../../data/site'

export default function LocalBusinessJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: siteData.googleBusinessName,
        legalName: siteData.legalName,
        telephone: siteData.phoneRaw,
        email: siteData.email,
        url: siteData.domain,
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteData.addressLocality,
          addressRegion: siteData.addressRegion,
          addressCountry: siteData.addressCountry,
        },
        areaServed: siteData.serviceAreas,
        slogan: siteData.tagline,
      }}
    />
  )
}
