import { faqItems } from '../../data/faq'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

export default function FaqBlock() {
  return (
    <Section compact>
      <SectionTitle eyebrow="FAQ" title="A Useful Trust Section for Local Service Sites" />
      <div className="faq-list">
        {faqItems.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
