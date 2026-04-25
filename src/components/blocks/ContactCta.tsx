import { siteData } from '../../data/site'
import Section from '../ui/Section'

export default function ContactCta() {
  return (
    <Section tinted compact>
      <div className="cta-panel">
        <div>
          <p className="eyebrow">Get in Touch</p>
          <h2>Ready to discuss your project?</h2>
          <p>
            Reach out for a professional consultation, a straightforward quote, and clear advice on the next step.
          </p>
        </div>
        <div className="cta-panel__actions">
          <a className="button" href={siteData.primaryCtaHref}>
            {siteData.primaryCtaLabel}
          </a>
          <a className="button button--ghost" href={siteData.phoneHref}>
            {siteData.phoneDisplay}
          </a>
        </div>
      </div>
    </Section>
  )
}
