import { Link } from 'react-router-dom'
import { galleryItems } from '../../data/gallery'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

export default function GalleryPreview() {
  return (
    <Section>
      <SectionTitle
        eyebrow="Gallery"
        title="Recent cedar builds"
        intro="A closer look at sauna interiors, installations, hot tubs, sleeping barrels, and workshop details."
      />
      <div className="gallery-grid">
        {galleryItems.slice(0, 4).map((item, index) => (
          <figure key={`${item.alt}-${index}`} className="gallery-card">
            <img className="gallery-card__image" src={item.src} alt={item.alt} />
            <figcaption>{item.alt}</figcaption>
          </figure>
        ))}
      </div>
      <p className="section-cta">
        <Link className="text-link" to="/gallery">
          See the full gallery
        </Link>
      </p>
    </Section>
  )
}
