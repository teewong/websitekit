import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import Section from '../components/ui/Section'
import { siteData } from '../data/site'

export default function ContactSuccessPage() {
  return (
    <>
      <Seo
        title={`Message Sent | ${siteData.businessName}`}
        description="Confirmation page for the contact form."
        path="/contact-success"
        noIndex
      />
      <Section tinted>
        <div className="success-panel">
          <div className="success-panel__hero">
            <div className="success-panel__badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="success-panel__icon">
                <path
                  d="M20 6L9 17l-5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.6"
                />
              </svg>
            </div>
            <p className="eyebrow">Thanks</p>
            <h1 className="success-panel__title">Your message has been sent</h1>
            <p className="success-panel__intro">
              We have your request and will follow up as soon as we can. This page is designed to give clients a clear
              end state instead of leaving them guessing whether the form worked.
            </p>
          </div>

          <div className="success-panel__grid">
            <article className="success-card">
              <h2>What happens next</h2>
              <ol className="success-list">
                <li>We review the message and contact details you submitted.</li>
                <li>We follow up to clarify scope, timing, or property details if needed.</li>
                <li>We provide the next practical step, usually a quote conversation or booking window.</li>
              </ol>
            </article>

            <article className="success-card">
              <h2>Need something faster?</h2>
              <p>
                If the job feels urgent or time-sensitive, calling is usually the fastest path. You can also return to
                the site and keep browsing the service pages.
              </p>
              <div className="success-actions">
                <a className="button" href={siteData.phoneHref}>
                  Call {siteData.phoneDisplay}
                </a>
                <Link className="button button--ghost" to="/">
                  Back to home
                </Link>
              </div>
            </article>
          </div>

          <div className="success-panel__footer">
            <p>
              {siteData.businessName} serves {siteData.serviceAreas.slice(0, 4).join(', ')} and nearby areas.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
