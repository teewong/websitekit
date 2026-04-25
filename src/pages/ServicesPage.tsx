import { Link } from 'react-router-dom'
import ContactCta from '../components/blocks/ContactCta'
import Seo from '../components/seo/Seo'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import { services } from '../data/services'
import { siteData } from '../data/site'

export default function ServicesPage() {
  return (
    <>
      <Seo
        title={`Services | ${siteData.businessName}`}
        description={`Explore the services offered by ${siteData.businessName}.`}
        path="/services"
      />
      <Section>
        <SectionTitle
          eyebrow="Services"
          title="Residential Electrical Services"
          intro="Core electrical services for homeowners, renovations, upgrades, and backup power projects across Mid-Vancouver Island."
        />
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.slug} className="card">
              <img className="service-card__image" src={siteData.heroImage} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="bullet-list">
                {service.bullets.slice(0, 3).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Link className="text-link" to={`/services/${service.slug}`}>
                Read details
              </Link>
            </article>
          ))}
        </div>
      </Section>
      <ContactCta />
    </>
  )
}
