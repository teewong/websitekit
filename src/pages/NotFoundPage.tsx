import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found" description="The requested page could not be found." path="/404" />
      <Section>
        <SectionTitle
          eyebrow="404"
          title="Page not found"
          intro="The route does not exist in this starter kit."
          center
        />
        <p className="section-cta section-cta--center">
          <Link className="button" to="/">
            Return home
          </Link>
        </p>
      </Section>
    </>
  )
}
