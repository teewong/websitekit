import { siteData } from '../../data/site'
import Section from '../ui/Section'

export default function ContactCta() {
  return (
    <Section tinted compact>
      <div className="cta-panel">
        <div>
          <p className="eyebrow">Get a free quote</p>
          <h2>Ready to make it one of a kind?</h2>
          <p>
            Tell us about the sauna, tub, sleeping barrel, yurt, or custom woodcraft idea you want to build.
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
