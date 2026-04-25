import Seo from '../components/seo/Seo'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import { siteData } from '../data/site'

export default function ContactPage() {
  return (
    <>
      <Seo
        title={`Contact | ${siteData.businessName}`}
        description={`Contact ${siteData.businessName} for quotes, questions, or service requests.`}
        path="/contact"
      />
      <Section tinted>
        <div className="consultation-layout">
          <div className="consultation-copy">
            <SectionTitle
              eyebrow="Contact"
              title="Request a professional quote"
              intro="Call, email, or send a message with your project details. You&apos;ll get a clear response and a practical next step."
            />
            <div className="consultation-steps">
              <h3>What to expect:</h3>
              <ol className="number-list">
                <li>Review of the electrical work you need completed</li>
                <li>Transparent pricing before work begins</li>
                <li>Scheduling that fits the project scope</li>
                <li>Professional execution and clean finish</li>
              </ol>
            </div>
            <div className="consultation-footnote">
              Serving homeowners and contractors across Mid-Vancouver Island.
              <br />
              Licensed, insured, and committed to excellent workmanship.
            </div>
          </div>
          <form className="contact-form contact-form--editorial" method="post" action="/contact-success" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="contact-form__grid">
              <label>
                First Name *
                <input type="text" name="firstName" required />
              </label>
              <label>
                Last Name *
                <input type="text" name="lastName" required />
              </label>
              <label>
                Phone *
                <input type="text" name="phone" required />
              </label>
              <label>
                ZIP / Postal Code *
                <input type="text" name="postalCode" required />
              </label>
            </div>
            <label>
              Email *
              <input type="email" name="email" required />
            </label>
            <label>
              Service Needed
              <select name="serviceType" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>Custom Home Wiring</option>
                <option>Renovation / Upgrade</option>
                <option>EV Charger Installation</option>
                <option>Panel Upgrade</option>
                <option>Solar / Backup Power</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              Additional Information
              <textarea
                name="message"
                rows={6}
                required
                placeholder="Tell us about the project, location, timeline, or any concerns you want reviewed..."
              />
            </label>
            <button className="button" type="submit">
              Request Quote
            </button>
            <p className="contact-form__fineprint">
              By submitting this form, you consent to be contacted regarding your electrical project. We respect your
              privacy and will never share your information.
            </p>
          </form>
        </div>
      </Section>
    </>
  )
}
