import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

const points = [
  'Custom dimensions and layouts instead of one-size kits',
  'Cedar craftsmanship built for West Coast weather',
  'Signature Scenic View acrylic bubble option',
  'Personalized exterior graphics and details',
  'Saunas, tubs, sleeping barrels, yurts, and custom woodwork',
]

export default function WhyChooseUs() {
  return (
    <Section>
      <div className="content-grid content-grid--balanced">
        <div>
          <SectionTitle eyebrow="Why it matters" title="Why custom matters" />
          <ul className="benefit-list">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <figure className="feature-image feature-image--offset">
          <img src="/images/ooak/scenic-sauna.jpg" alt="Custom Scenic View barrel sauna" />
        </figure>
      </div>
    </Section>
  )
}
