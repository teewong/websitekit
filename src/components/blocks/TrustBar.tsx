import { trustPoints } from '../../data/trustPoints'

export default function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Trust points">
      {trustPoints.map((point) => (
        <div key={point.label} className="trust-bar__item">
          <strong>{point.value}</strong>
          <span>{point.label}</span>
        </div>
      ))}
    </section>
  )
}
