import { Link } from 'react-router-dom'
import { galleryItems } from '../../data/gallery'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

export default function GalleryPreview() {
  return (
    <Section>
      <SectionTitle
        eyebrow="Gallery"
        title="A Clean, Reusable Gallery Pattern"
        intro="The starter includes a simple gallery layout that works for arborists, electricians, painters, and similar local services."
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
