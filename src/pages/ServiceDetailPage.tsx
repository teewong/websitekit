import { Link, useParams } from 'react-router-dom'
import ContactCta from '../components/blocks/ContactCta'
import Seo from '../components/seo/Seo'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import { services } from '../data/services'
import { siteData } from '../data/site'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return (
      <Section>
        <SectionTitle title="Service not found" intro="The starter includes a not-found state for missing dynamic routes." />
        <Link className="text-link" to="/services">
          Return to services
        </Link>
      </Section>
    )
  }

  return (
    <>
      <Seo
        title={`${service.title} | ${siteData.businessName}`}
        description={service.shortDescription}
        path={`/services/${service.slug}`}
      />
      <Section>
        <SectionTitle eyebrow={service.eyebrow} title={service.title} intro={service.shortDescription} />
        <div className="content-grid">
          <div className="prose">
            <figure className="feature-image">
              <img src={service.image} alt={service.title} />
            </figure>
            <p>{service.description}</p>
            <p>{service.processNote}</p>
          </div>
          <aside className="info-panel">
            <h3>What may be included</h3>
            <ul className="bullet-list">
              {service.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
      <ContactCta />
    </>
  )
}
