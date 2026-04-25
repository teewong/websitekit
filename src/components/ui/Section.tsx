import { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  tinted?: boolean
  compact?: boolean
}

export default function Section({ children, tinted = false, compact = false }: SectionProps) {
  return (
    <section className={`section ${tinted ? 'section--tinted' : ''} ${compact ? 'section--compact' : ''}`}>
      <div className="section__inner">{children}</div>
    </section>
  )
}
