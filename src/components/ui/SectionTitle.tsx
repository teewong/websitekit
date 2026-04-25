type SectionTitleProps = {
  eyebrow?: string
  title: string
  intro?: string
  center?: boolean
}

export default function SectionTitle({ eyebrow, title, intro, center = false }: SectionTitleProps) {
  return (
    <div className={`section-title ${center ? 'section-title--center' : ''}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-title__intro">{intro}</p> : null}
    </div>
  )
}
