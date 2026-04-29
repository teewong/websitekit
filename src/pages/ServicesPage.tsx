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
        title={`Products | ${siteData.businessName}`}
        description={`Explore custom cedar saunas, hot tubs, sleeping barrels, yurts, and woodcraft from ${siteData.businessName}.`}
        path="/services"
      />
      <Section>
        <SectionTitle
          eyebrow="Products"
          title="Custom cedar builds, not catalogue compromises."
          intro="Choose a proven One of a Kind product, then shape the dimensions, heat source, site fit, and details around your property."
        />
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.slug} className="card">
              <img className="service-card__image" src={service.image} alt={service.title} />
              <p className="eyebrow">{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="bullet-list">
                {service.bullets.slice(0, 3).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Link className="text-link" to={`/services/${service.slug}`}>
                View details
              </Link>
            </article>
          ))}
        </div>
      </Section>
      <ContactCta />
    </>
  )
}
