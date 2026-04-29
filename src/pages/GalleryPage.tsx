import Seo from '../components/seo/Seo'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import { galleryItems } from '../data/gallery'
import { siteData } from '../data/site'

export default function GalleryPage() {
  return (
    <>
      <Seo
        title={`Gallery | ${siteData.businessName}`}
        description={`See cedar sauna, hot tub, sleeping barrel, and workshop examples from ${siteData.businessName}.`}
        path="/gallery"
      />
      <Section>
        <SectionTitle
          eyebrow="Gallery"
          title="Cedar, curves, heat, and weather."
          intro="A tighter look at the materials, interiors, installs, and workshop details behind One of a Kind builds."
        />
        <div className="gallery-grid gallery-grid--full">
          {galleryItems.map((item, index) => (
            <figure key={`${item.alt}-${index}`} className="gallery-card">
              <img className="gallery-card__image" src={item.src} alt={item.alt} />
              <figcaption>{item.alt}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  )
}
