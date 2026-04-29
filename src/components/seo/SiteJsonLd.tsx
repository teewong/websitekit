import JsonLd from './JsonLd'
import { siteData } from '../../data/site'

export default function SiteJsonLd() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': `${siteData.domain}/#organization`,
          name: siteData.businessName,
          legalName: siteData.legalName,
          url: siteData.domain,
          email: siteData.email,
          telephone: siteData.phoneRaw,
          logo: `${siteData.domain}/images/constant-electric-logo.jpg`,
          description: siteData.shortDescription,
          address: {
            '@type': 'PostalAddress',
            addressLocality: siteData.addressLocality,
            addressRegion: siteData.addressRegion,
            addressCountry: siteData.addressCountry,
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${siteData.domain}/#website`,
          name: siteData.businessName,
          url: siteData.domain,
          publisher: {
            '@id': `${siteData.domain}/#organization`,
          },
        }}
      />
    </>
  )
}
