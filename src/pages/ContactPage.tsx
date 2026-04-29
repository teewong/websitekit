import Seo from '../components/seo/Seo'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import { siteData } from '../data/site'

export default function ContactPage() {
  return (
    <>
      <Seo
        title={`Contact | ${siteData.businessName}`}
        description={`Contact ${siteData.businessName} for custom cedar saunas, hot tubs, sleeping barrels, yurts, and woodcraft quotes.`}
        path="/contact"
      />
      <Section tinted>
        <div className="consultation-layout">
          <div className="consultation-copy">
            <SectionTitle
              eyebrow="Contact"
              title="Start your custom build."
              intro="Tell us what you want to build, where it is going, and what would make it one of a kind."
            />
            <div className="consultation-steps">
              <h3>What to include:</h3>
              <ol className="number-list">
                <li>The product you are interested in</li>
                <li>Your location and delivery access</li>
                <li>Preferred size, heat source, and timeline</li>
                <li>Any personalization, view, or site-specific detail</li>
              </ol>
            </div>
            <div className="consultation-footnote">
              Workshop: 1401 Springhill Rd, Parksville, BC V9P 2B8.
              <br />
              Open Monday to Saturday, 9:00 AM to 5:00 PM.
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
              Product
              <select name="serviceType" defaultValue="">
                <option value="" disabled>
                  Select a product
                </option>
                <option>Barrel sauna</option>
                <option>Cedar hot tub</option>
                <option>Sleeping barrel</option>
                <option>Cedar yurt</option>
                <option>Custom woodcraft</option>
                <option>Something else</option>
              </select>
            </label>
            <label>
              Project Details
              <textarea
                name="message"
                rows={6}
                required
                placeholder="Tell us about the site, dimensions, heat source, delivery location, view, timeline, or custom detail you have in mind..."
              />
            </label>
            <button className="button" type="submit">
              Send to One of a Kind
            </button>
            <p className="contact-form__fineprint">
              By submitting this form, you consent to be contacted regarding your custom woodcraft project. We respect your
              privacy and will never share your information.
            </p>
          </form>
        </div>
      </Section>
    </>
  )
}
