import { testimonials } from '../../data/testimonials'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

export default function TestimonialsBlock() {
  return (
    <Section tinted>
      <SectionTitle
        eyebrow="Testimonials"
        title="What Clients Remember"
        intro="For service businesses like this, trust is part of the product."
      />
      <div className="card-grid">
        {testimonials.map((item) => (
          <blockquote key={item.name} className="quote-card">
            <p>{item.quote}</p>
            <footer>
              {item.name}, {item.location}
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  )
}
