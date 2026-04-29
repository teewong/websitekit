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
              We have your request and will follow up as soon as we can with a practical next step for your custom build.
            </p>
          </div>

          <div className="success-panel__grid">
            <article className="success-card">
              <h2>What happens next</h2>
              <ol className="success-list">
                <li>We review the message and contact details you submitted.</li>
                <li>We follow up to clarify product, size, site access, timing, or delivery details if needed.</li>
                <li>We provide the next practical step, usually a quote conversation or shop schedule window.</li>
              </ol>
            </article>

            <article className="success-card">
              <h2>Need something faster?</h2>
              <p>
                If your timeline is urgent or you are coordinating a delivery window, calling the workshop is usually
                the fastest path.
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
              {siteData.businessName} builds in Parksville and ships across Canada, the United States, and beyond.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
