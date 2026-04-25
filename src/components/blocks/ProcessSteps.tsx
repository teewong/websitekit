import { processSteps } from '../../data/processSteps'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

export default function ProcessSteps() {
  return (
    <Section>
      <SectionTitle
        eyebrow="How it works"
        title="A Simple Process That Keeps Things Moving"
        intro="This starter kit is designed for service businesses where trust and clarity matter more than complexity."
      />
      <div className="steps-grid">
        {processSteps.map((step, index) => (
          <article key={step.title} className="step-card">
            <p className="step-card__number">0{index + 1}</p>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
