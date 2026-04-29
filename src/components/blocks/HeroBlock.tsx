import { siteData } from '../../data/site'

export default function HeroBlock() {
  return (
    <section className="hero">
      <img className="hero__image" src={siteData.heroImage} alt="" aria-hidden="true" />
      <div className="hero__shade" />
      <div className="hero__content">
        <p className="eyebrow">{siteData.heroEyebrow}</p>
        <h1>Custom cedar spaces with a point of view.</h1>
        <p>
          Barrel saunas, cedar hot tubs, sleeping barrels, yurts, and one-of-a-kind woodcraft made by hand in
          Parksville.
        </p>
        <div className="action-row">
          <a className="button" href={siteData.primaryCtaHref}>
            Start a custom build
          </a>
          <a className="button button--ghost" href="/services">
            Explore products
          </a>
        </div>
        <p className="hero__meta">Free quote · Built on Vancouver Island · Shipped worldwide</p>
      </div>
    </section>
  )
}
