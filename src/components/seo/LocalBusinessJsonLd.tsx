import JsonLd from './JsonLd'
import { services } from '../../data/services'
import { siteData } from '../../data/site'

export default function LocalBusinessJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Electrician',
        '@id': `${siteData.domain}/#localbusiness`,
        name: siteData.googleBusinessName,
        legalName: siteData.legalName,
        description: siteData.shortDescription,
        telephone: siteData.phoneRaw,
        email: siteData.email,
        url: siteData.domain,
        image: `${siteData.domain}${siteData.socialShareImage}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteData.addressLocality,
          addressRegion: siteData.addressRegion,
          addressCountry: siteData.addressCountry,
        },
        areaServed: siteData.serviceAreas.map((area) => ({
          '@type': 'Place',
          name: area,
        })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${siteData.businessName} electrical services`,
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.shortDescription,
              url: `${siteData.domain}/services/${service.slug}`,
              areaServed: siteData.serviceAreas.map((area) => ({
                '@type': 'Place',
                name: area,
              })),
            },
          })),
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: siteData.phoneRaw,
          contactType: 'customer service',
          areaServed: 'CA-BC',
        },
        slogan: siteData.tagline,
      }}
    />
  )
}
