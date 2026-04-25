import LocalBusinessJsonLd from '../components/seo/LocalBusinessJsonLd'
import Seo from '../components/seo/Seo'
import { processSteps } from '../data/processSteps'
import { services } from '../data/services'
import { siteData } from '../data/site'
import { testimonials } from '../data/testimonials'

export default function HomePage() {
  const promises = [
    { title: 'Licensed Red Seal Electricians', body: 'Code-aware work by experienced tradespeople', icon: 'shield' },
    { title: 'Free Estimates', body: 'Clear scope before work begins', icon: 'estimate' },
    { title: 'Emergency Response', body: 'Urgent support when electrical issues cannot wait', icon: 'home' },
    { title: 'Island-Based', body: 'Locally owned and serving Vancouver Island communities', icon: 'people' },
  ] as const

  const whoWeHelp = [
    {
      title: 'Homeowners',
      body: 'Renovations, panel upgrades, EV chargers, backup power, troubleshooting, and clean residential service.',
      href: '/services/custom-home-wiring',
    },
    {
      title: 'Businesses',
      body: 'Reliable electrical support for shops, offices, contractors, tenant improvements, and commercial upgrades.',
      href: '/services/renovations-upgrades',
    },
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
            <p className="electric-hero__eyebrow">{siteData.businessName}</p>
            <a className="electric-hero__phone" href={siteData.phoneHref}>
              Call {siteData.phoneDisplay}
            </a>
            <h1>Vancouver Island&apos;s trusted electricians, Parksville to Comox.</h1>
            <p className="electric-hero__intro">
              Residential, commercial, and green energy electrical work with clear estimates, direct communication, and
              {` ${siteData.yearsInBusiness}`} years serving Vancouver Island.
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
              <span>Bonded</span>
              <span>Safety BC Certified</span>
              <span>{siteData.yearsInBusiness} Years Serving Vancouver Island</span>
            </div>
          </div>
        </section>

        <section className="electric-section">
          <div className="electric-section__inner electric-stack">
            <div className="electric-heading">
              <span className="electric-eyebrow">Who We Help</span>
              <h2>Electrical work for homes and businesses.</h2>
            </div>
            <div className="electric-paths">
              {whoWeHelp.map((item) => (
                <a key={item.title} className="electric-path-card" href={item.href}>
                  <span>{item.title}</span>
                  <p>{item.body}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="electric-section electric-section--soft">
          <div className="electric-section__inner electric-stack">
            <div className="electric-heading">
              <span className="electric-eyebrow">What We Do</span>
              <h2>Professional Electrical Services</h2>
            </div>
            <div className="electric-service-list">
              {services.map((service) => (
                <article key={service.slug} className="electric-service-card">
                  <a href={`/services/${service.slug}`}>
                    <h3>{service.title}</h3>
                    <p>{service.shortDescription}</p>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="electric-section">
          <div className="electric-section__inner electric-stack">
            <div className="electric-heading">
              <span className="electric-eyebrow">Why Choose Us</span>
              <h2>Trust signals before the first visit.</h2>
            </div>
            <div className="electric-pillars">
              {promises.map((item) => (
                <article key={item.title} className="electric-card electric-card--center">
                  <div className={`electric-icon electric-icon--${item.icon}`} aria-hidden="true" />
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="electric-section electric-section--soft">
          <div className="electric-section__inner electric-stack">
            <div className="electric-heading">
              <span className="electric-eyebrow">About</span>
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
              <span className="electric-eyebrow">The Process</span>
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
              <span className="electric-eyebrow">Pricing</span>
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
              <span className="electric-eyebrow">Testimonials</span>
              <h2>What Customers Say</h2>
            </div>
            <div className="electric-testimonials">
              {testimonials.map((item) => (
                <article key={item.name} className="electric-card electric-testimonial">
                  <div className="electric-stars" aria-label="5 star review">
                    ★★★★★
                  </div>
                  <p>&ldquo;{item.quote}&rdquo;</p>
                  <strong>
                    {item.name}, {item.location}
                  </strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="electric-section electric-section--soft">
          <div className="electric-section__inner electric-stack">
            <div className="electric-heading">
              <span className="electric-eyebrow">Service Areas</span>
              <h2>Parksville, Nanaimo, Comox, and nearby communities.</h2>
              <p>Clear local coverage across the Parksville-Nanaimo-Comox corridor.</p>
            </div>
            <div className="electric-area-map">
              <div className="electric-area-map__visual" aria-hidden="true">
                <div className="electric-area-map__island">
                  <span className="electric-map-pin electric-map-pin--campbell">Campbell River</span>
                  <span className="electric-map-pin electric-map-pin--comox">Comox</span>
                  <span className="electric-map-pin electric-map-pin--parksville">Parksville</span>
                  <span className="electric-map-pin electric-map-pin--nanaimo">Nanaimo</span>
                </div>
              </div>
              <div className="electric-area-map__content">
                <h3>Mid-Island coverage for planned and urgent electrical work.</h3>
                <p>
                  Based near Parksville and serving homeowners, contractors, and small businesses across the island
                  corridor.
                </p>
                <div className="electric-area-grid">
                  {siteData.serviceAreas.map((area) => (
                    <span key={area}>{area}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="electric-contact-band">
          <div className="electric-section__inner electric-stack">
            <div className="electric-heading electric-heading--light">
              <span className="electric-eyebrow">Contact</span>
              <h2>Get a clear quote.</h2>
              <p>Send the basics and Dan will follow up directly.</p>
            </div>
            <div className="electric-contact-grid">
              <form className="electric-quote-form" name="quote" method="post">
                <label>
                  Name
                  <input name="name" autoComplete="name" required />
                </label>
                <label>
                  Phone
                  <input name="phone" type="tel" autoComplete="tel" required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" autoComplete="email" />
                </label>
                <label>
                  Service Type
                  <select name="service">
                    <option>Residential Electrical</option>
                    <option>Panel Upgrade</option>
                    <option>EV Charger Installation</option>
                    <option>Commercial Electrical</option>
                    <option>Emergency Service</option>
                    <option>Solar or Backup Power</option>
                  </select>
                </label>
                <label className="electric-quote-form__message">
                  Message
                  <textarea name="message" rows={4} required />
                </label>
                <button className="button" type="submit">
                  Send Quote Request
                </button>
              </form>
              <article className="electric-card electric-card--dark electric-contact-card">
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
                <a className="button button--ghost electric-hero__secondary" href={siteData.phoneHref}>
                  Emergency Service - Call Now
                </a>
              </article>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
