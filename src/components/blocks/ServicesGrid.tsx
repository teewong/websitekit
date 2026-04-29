import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

export default function ServicesGrid() {
  return (
    <Section>
      <SectionTitle
        eyebrow="Products"
        title="Handcrafted cedar products"
        intro="Barrel saunas, cedar hot tubs, sleeping barrels, yurts, and specialty woodcraft built around your setting."
        center
      />
      <div className="card-grid">
        {services.slice(0, 4).map((service) => (
          <article key={service.slug} className="card">
            <img className="service-card__image" src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.shortDescription}</p>
            <Link className="text-link" to={`/services/${service.slug}`}>
              Learn more
            </Link>
          </article>
        ))}
      </div>
    </Section>
  )
}
