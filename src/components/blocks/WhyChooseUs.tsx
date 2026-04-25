import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

const points = [
  'Increases fruit yield by up to 40%',
  'Prevents disease and pest infestations',
  'Extends the productive life of your trees',
  'Improves air circulation and sunlight exposure',
  'Creates stronger, more resilient tree structure',
]

export default function WhyChooseUs() {
  return (
    <Section>
      <div className="content-grid content-grid--balanced">
        <div>
          <SectionTitle eyebrow="Why it matters" title="Why pruning matters" />
          <ul className="benefit-list">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <figure className="feature-image feature-image--offset">
          <img src="/images/gallery-6.svg" alt="Flowering tree branch close-up" />
        </figure>
      </div>
    </Section>
  )
}
