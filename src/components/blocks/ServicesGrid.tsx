import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

export default function ServicesGrid() {
  return (
    <Section>
      <SectionTitle
        eyebrow="Services"
        title="Professional fruit tree pruning services"
        intro="Specialized care for apple, pear, cherry, plum, and peach trees. Every cut matters."
        center
      />
      <div className="card-grid">
        {services.slice(0, 4).map((service, index) => (
          <article key={service.slug} className="card">
            <div className="service-card__icon" aria-hidden="true">
              {index === 0 ? '✂' : index === 1 ? '❋' : index === 2 ? '□' : '◉'}
            </div>
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
