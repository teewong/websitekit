import Seo from '../components/seo/Seo'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import { siteData } from '../data/site'

export default function PrivacyPage() {
  return (
    <>
      <Seo title={`Privacy | ${siteData.businessName}`} description={`Privacy information for ${siteData.businessName}.`} path="/privacy" />
      <Section>
        <SectionTitle
          eyebrow="Privacy"
          title="Privacy Policy"
          intro="How contact form and project inquiry information is handled."
        />
        <div className="prose">
          <p>
            Information submitted through this website is used to respond to project inquiries, prepare quotes, and
            communicate about custom cedar builds. Personal details are not sold or shared for unrelated marketing.
          </p>
          <p>
            Hosting, analytics, email, or form-processing providers may process information as needed to operate the
            website and respond to requests.
          </p>
        </div>
      </Section>
    </>
  )
}
