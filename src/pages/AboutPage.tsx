import ContactCta from '../components/blocks/ContactCta'
import Seo from '../components/seo/Seo'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import { siteData } from '../data/site'

export default function AboutPage() {
  return (
    <>
      <Seo
        title={`About | ${siteData.businessName}`}
        description={`Learn more about ${siteData.businessName} and how the business approaches local service work.`}
        path="/about"
      />
      <Section>
        <SectionTitle
          eyebrow="About"
          title={`About ${siteData.businessName}`}
          intro="A local electrical business built around direct communication, precise workmanship, and respect for the home."
        />
        <div className="content-grid">
          <div className="prose">
            <p>
              Constant Electric is led by Dan Valliquette and focused on practical, high-quality electrical work for
              homeowners and contractors across Mid-Vancouver Island.
            </p>
            <p>
              The business handles everything from custom home wiring and renovation work to EV chargers, panel
              upgrades, solar integration, and backup power systems.
            </p>
            <p>
              Projects are approached with clear estimates, careful execution, and a tidy finish so clients understand
              the scope before work begins and feel confident in the result afterward.
            </p>
          </div>
          <div className="visual-stack">
            <figure className="feature-image">
              <img src={siteData.aboutImage} alt="Dan Valliquette with the Constant Electric truck" />
            </figure>
            <aside className="info-panel">
              <h3>What clients value</h3>
              <ul className="plain-list">
                <li>Direct contact with the owner/operator</li>
                <li>Transparent estimates and scheduling</li>
                <li>Licensed, insured, locally owned service</li>
              </ul>
            </aside>
          </div>
        </div>
      </Section>
      <ContactCta />
    </>
  )
}
