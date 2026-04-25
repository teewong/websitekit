import Seo from '../components/seo/Seo'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import { siteData } from '../data/site'

export default function PrivacyPage() {
  return (
    <>
      <Seo title={`Privacy | ${siteData.businessName}`} description="Basic privacy page placeholder." path="/privacy" />
      <Section>
        <SectionTitle
          eyebrow="Privacy"
          title="Privacy Policy Placeholder"
          intro="Replace this draft with the final policy used for Constant Electric form submissions and client communications."
        />
        <div className="prose">
          <p>
            This page exists so the site includes a proper location for privacy disclosures covering contact forms,
            email communication, and any analytics or hosting services used in deployment.
          </p>
        </div>
      </Section>
    </>
  )
}
