import LocalBusinessJsonLd from '../components/seo/LocalBusinessJsonLd'
import Seo from '../components/seo/Seo'
import { processSteps } from '../data/processSteps'
import { services } from '../data/services'
import { siteData } from '../data/site'
import { testimonials } from '../data/testimonials'

export default function HomePage() {
  const promises = [
    { title: 'Licensed & Insured', body: 'Full coverage for your peace of mind', icon: 'shield' },
    { title: 'Clear Estimates', body: 'Before work begins', icon: 'estimate' },
    { title: 'Respectful & Tidy', body: 'In your home', icon: 'home' },
    { title: 'References Available', body: 'Happy customers throughout the island', icon: 'people' },
  ] as const

  const rates = [
    { title: 'Standard Rate', price: '$125/hr', note: 'Mon-Fri, 8am-6pm' },
    { title: 'Overtime Rate', price: '$175/hr', note: 'Evenings & Weekends' },
  ]

  return (
    <>
      <Seo
        title={`${siteData.businessName} | Electrician in ${siteData.location}`}
        description={siteData.shortDescription}
        path="/"
      />
      <LocalBusinessJsonLd />
      <section className="electric-home">
        <section className="electric-hero">
          <img className="electric-hero__image" src={siteData.heroImage} alt="" aria-hidden="true" />
          <div className="electric-hero__overlay" />
          <div className="electric-hero__content">
            <h1>Expert Electrical Work for Homes That Deserve It Done Right.</h1>
            <p className="electric-hero__intro">
              Serving Mid-Vancouver Island homeowners with precision, transparency, and {siteData.yearsInBusiness}
              years of experience.
            </p>
            <div className="hero-block__actions electric-hero__actions">
              <a className="button" href={siteData.primaryCtaHref}>
                {siteData.primaryCtaLabel}
              </a>
              <a className="button button--ghost electric-hero__secondary" href={siteData.secondaryCtaHref}>
                {siteData.secondaryCtaLabel}
              </a>
            </div>
            <div className="electric-hero__trust">
              <span>Licensed</span>
              <span>Insured</span>
              <span>Experienced</span>
              <span>Locally Owned</span>
            </div>
          </div>
        </section>

        <section className="electric-section electric-section--soft">
          <div className="electric-section__inner electric-pillars">
            {promises.map((item) => (
              <article key={item.title} className="electric-card electric-card--center">
                <div className={`electric-icon electric-icon--${item.icon}`} aria-hidden="true" />
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="electric-section">
          <div className="electric-section__inner electric-stack">
            <div className="electric-heading">
              <h2>Professional Electrical Services</h2>
            </div>
            <div className="electric-service-list">
              {services.map((service) => (
                <article key={service.slug} className="electric-service-card">
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="electric-section electric-section--soft">
          <div className="electric-section__inner electric-stack">
            <div className="electric-heading">
              <h2>Dan Valliquette</h2>
            </div>
            <article className="electric-card electric-card--about">
              <img className="electric-about__image" src={siteData.aboutImage} alt="Dan Valliquette with a Constant Electric truck" />
              <div className="electric-about__copy">
                <p>
                  With over 25 years of experience serving Vancouver Island, I bring precision, reliability, and
                  craftsmanship to every project.
                </p>
                <p>
                  From custom home wiring to complex renovations, my work reflects a commitment to quality and
                  attention to detail. Homeowners and contractors throughout Mid-Vancouver Island trust Constant
                  Electric for electrical work that meets the highest standards.
                </p>
                <p>
                  When you work with Constant Electric, you work directly with me. Clear communication, professional
                  execution, and respect for your property are standard on every job.
                </p>
                <p className="electric-about__highlight">Your project deserves expert electrical work. I&apos;m here to deliver it.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="electric-section">
          <div className="electric-section__inner electric-stack">
            <div className="electric-heading">
              <h2>What to Expect</h2>
            </div>
            <div className="electric-steps">
              {processSteps.map((step, index) => (
                <article key={step.title} className="electric-card electric-card--center electric-step-card">
                  <div className="electric-step__badge">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="electric-section electric-section--rates">
          <div className="electric-section__inner electric-stack">
            <div className="electric-heading">
              <h2>Transparent Rates</h2>
              <p>You&apos;ll receive a clear estimate before work begins. No surprise charges.</p>
            </div>
            <div className="electric-rates">
              {rates.map((rate) => (
                <article key={rate.title} className="electric-card electric-rate-card">
                  <h3>{rate.title}</h3>
                  <strong>{rate.price}</strong>
                  <p>{rate.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="electric-section">
          <div className="electric-section__inner electric-stack">
            <div className="electric-heading">
              <h2>What Customers Say</h2>
            </div>
            <div className="electric-testimonials">
              {testimonials.map((item) => (
                <article key={item.name} className="electric-card electric-testimonial">
                  <p>&ldquo;{item.quote}&rdquo;</p>
                  <strong>
                    {item.name}, {item.location}
                  </strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="electric-contact-band">
          <div className="electric-section__inner electric-stack">
            <div className="electric-heading electric-heading--light">
              <h2>Get in Touch</h2>
              <p>Ready to discuss your project? Reach out for a professional consultation.</p>
            </div>
            <div className="electric-contact-grid">
              <article className="electric-card electric-card--dark">
                <h3>Contact Information</h3>
                <ul className="plain-list electric-contact-list">
                  <li>
                    <span>Phone</span>
                    <a href={siteData.phoneHref}>{siteData.phoneDisplay}</a>
                  </li>
                  <li>
                    <span>Email</span>
                    <a href={siteData.emailHref}>{siteData.email}</a>
                  </li>
                </ul>
              </article>
              <article className="electric-card electric-card--dark">
                <h3>Service Area</h3>
                <ul className="plain-list electric-area-list">
                  {siteData.serviceAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
