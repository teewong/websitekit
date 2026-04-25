import { siteData } from '../../data/site'

export default function HeroBlock() {
  return (
    <section className="hero-block">
      <img className="hero-block__background" src={siteData.heroImage} alt="" aria-hidden="true" />
      <div className="hero-block__overlay" />
      <div className="hero-block__content">
        <p className="eyebrow">{siteData.heroEyebrow}</p>
        <h1>Your trees aren&apos;t dying. They&apos;re asking for care.</h1>
        <p className="hero-block__intro">
          Expert fruit tree pruning services that nurture healthy growth, maximize yield, and extend the life of your
          orchard.
        </p>
        <div className="hero-block__actions">
          <a className="button" href={siteData.primaryCtaHref}>
            Schedule a consultation
          </a>
          <a className="button button--ghost hero-block__secondary" href="/services">
            Learn about our services
          </a>
        </div>
        <p className="hero-block__meta">Takes 2-3 minutes · Free quote · No obligation</p>
      </div>
    </section>
  )
}
