import { siteData } from '../../data/site'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

export default function ServiceAreaBlock() {
  return (
    <Section compact>
      <SectionTitle
        eyebrow="Service area"
        title="Serving Homeowners Across Central Vancouver Island"
      />
      <div className="chip-row">
        {siteData.serviceAreas.map((area) => (
          <span key={area} className="chip">
            {area}
          </span>
        ))}
      </div>
    </Section>
  )
}
