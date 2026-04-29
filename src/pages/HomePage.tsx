import { Link } from 'react-router-dom'
import LocalBusinessJsonLd from '../components/seo/LocalBusinessJsonLd'
import Seo from '../components/seo/Seo'
import { processSteps } from '../data/processSteps'
import { services } from '../data/services'
import { siteData } from '../data/site'
import { testimonials } from '../data/testimonials'

const stats = [
  { value: '50+', label: 'years of woodworking and construction experience' },
  { value: '100%', label: 'Canadian owned and built on Vancouver Island' },
  { value: 'Global', label: 'shipping for homes, resorts, and retreat properties' },
]

const competitors = [
  'Custom work beyond standard sauna models',
  'Scenic acrylic bubble view wall',
  'Barrel saunas, tubs, yurts, sleeping barrels, and one-off woodcraft',
  'Personalization, graphics, and unusual requests welcome',
]

export default function HomePage() {
  const featured = services.slice(0, 3)

  return (
    <>
      <Seo
        title={`${siteData.businessName} | Custom Cedar Saunas, Hot Tubs & Sleeping Barrels`}
        description={siteData.shortDescription}
        path="/"
      />
      <LocalBusinessJsonLd />
      <section className="home-page">
        <section className="hero">
          <img className="hero__image" src={siteData.heroImage} alt="" aria-hidden="true" />
          <div className="hero__shade" />
          <div className="hero__content">
            <p className="eyebrow">{siteData.heroEyebrow}</p>
            <h1>Custom cedar spaces with a point of view.</h1>
            <p>
              Barrel saunas, cedar hot tubs, sleeping barrels, yurts, and one-of-a-kind woodcraft made by hand in
              Parksville for people who want more than a kit.
            </p>
            <div className="action-row">
              <Link className="button" to="/contact">
                Start a Custom Build
              </Link>
              <a className="button button--ghost" href={siteData.phoneHref}>
                {siteData.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="hero__panel">
            <img src="/images/ooak/scenic-sauna.jpg" alt="Scenic View barrel sauna installed near the coast" />
            <div>
              <span>Featured build</span>
              <strong>Scenic View barrel sauna</strong>
              <p>A full acrylic bubble back wall creates a panoramic view without the kit-sauna compromise.</p>
            </div>
          </div>
        </section>

        <section className="band band--stats">
          <div className="stat-grid">
            {stats.map((stat) => (
              <article key={stat.value}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section__inner split">
            <div>
              <p className="eyebrow">Why One of a Kind</p>
              <h2>Built like West Coast weather is part of the brief.</h2>
            </div>
            <div className="prose prose--large">
              <p>
                Vancouver Island has plenty of sauna companies with clean model pages. One of a Kind has something
                harder to copy: deep woodworking experience, flexible custom capability, and a portfolio that reaches
                from wellness products to unusual cedar structures.
              </p>
              <ul className="check-list">
                {competitors.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--tinted">
          <div className="section__inner">
            <div className="section-heading">
              <p className="eyebrow">Products</p>
              <h2>Signature builds for heat, rest, and retreat.</h2>
            </div>
            <div className="product-grid">
              {featured.map((service) => (
                <Link key={service.slug} className="product-card" to={`/services/${service.slug}`}>
                  <img src={service.image} alt={service.title} />
                  <div>
                    <span>{service.eyebrow}</span>
                    <h3>{service.title}</h3>
                    <p>{service.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="section-cta section-cta--center">
              <Link className="text-link" to="/services">
                Explore all products
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section__inner showcase">
            <img src="/images/ooak/sauna-inside.jpg" alt="Warm cedar barrel sauna interior" />
            <div className="showcase__copy">
              <p className="eyebrow">Scenic View sauna</p>
              <h2>The detail competitors do not have.</h2>
              <p>
                The full back wall can be a large durable acrylic bubble. It is UV-protected, does not give off gas, and
                can be smoked for extra privacy. That turns a barrel sauna into a place to watch weather, water, trees,
                and stars.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--dark">
          <div className="section__inner">
            <div className="section-heading">
              <p className="eyebrow">Process</p>
              <h2>Custom does not need to feel complicated.</h2>
            </div>
            <div className="steps-grid">
              {processSteps.map((step, index) => (
                <article key={step.title} className="step-card">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section__inner">
            <div className="section-heading">
              <p className="eyebrow">Happy people</p>
              <h2>Used by homeowners, resorts, and hosts.</h2>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article key={item.name} className="quote-card">
                  <p>&ldquo;{item.quote}&rdquo;</p>
                  <strong>{item.name}</strong>
                  <span>{item.location}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
