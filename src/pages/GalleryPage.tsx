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
        description={`See recent project examples from ${siteData.businessName}.`}
        path="/gallery"
      />
      <Section>
        <SectionTitle
          eyebrow="Gallery"
          title="Recent Work"
          intro="A simple gallery page is useful for any visual local business niche and easy to repurpose."
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
