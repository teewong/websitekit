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
        description={`Learn about Dave Byers, the Parksville workshop, and the woodworking background behind ${siteData.businessName}.`}
        path="/about"
      />
      <Section>
        <SectionTitle
          eyebrow="About"
          title="A workshop built around round things, durable things, and unusual ideas."
          intro="Dave Byers has spent nearly 50 years building residential, commercial, and custom woodworking projects. One of a Kind is where that experience meets cedar wellness structures."
        />
        <div className="content-grid">
          <div className="prose">
            <p>
              One of a Kind Creative Woodcrafting is based in Parksville on Vancouver Island. The shop handcrafts
              barrel saunas, cedar hot tubs, sleeping barrels, cedar yurts, insulated log concepts, and custom woodwork
              that does not fit neatly in a catalogue.
            </p>
            <p>
              Dave moved west with Shirley after losing a large New Brunswick woodworking shop to extreme winter snow.
              The new workshop carries forward decades of building knowledge with a clear rule: do not offer something
              that will not stand up to real weather.
            </p>
            <p>
              That is why the best work here feels both playful and serious. A surfer graphic on a barrel sauna, a
              smoked acrylic scenic-view wall, a cedar sleeping pod for a retreat property, or a one-off furniture piece
              all still need to be built with the same practical attention.
            </p>
          </div>
          <div className="visual-stack">
            <figure className="feature-image">
              <img src={siteData.aboutImage} alt="Dave Byers of One of a Kind Creative Woodcrafting" />
            </figure>
            <aside className="info-panel">
              <h3>What clients value</h3>
              <ul className="plain-list">
                <li>Real custom capability from a working cedar shop</li>
                <li>Nearly 50 years of building experience</li>
                <li>Personalization that makes each barrel identifiable</li>
                <li>Worldwide shipping from Vancouver Island</li>
              </ul>
            </aside>
          </div>
        </div>
      </Section>
      <ContactCta />
    </>
  )
}
