export type ServiceItem = {
  slug: string
  title: string
  shortDescription: string
  description: string
  bullets: string[]
  processNote: string
}

export const services: ServiceItem[] = [
  {
    slug: 'custom-home-wiring',
    title: 'Custom Home Wiring',
    shortDescription: 'Complete electrical systems designed and installed for new construction and custom builds.',
    description:
      'From service planning to final device installation, custom home wiring is handled with a focus on code compliance, layout clarity, and long-term reliability.',
    bullets: [
      'Service layout planning',
      'Lighting and receptacle circuits',
      'Coordination with builders and homeowners',
      'Code-compliant rough-in and finish work',
    ],
    processNote:
      'Projects stay organized with clear communication from rough-in through final walkthrough.',
  },
  {
    slug: 'renovations-upgrades',
    title: 'Renovations & Upgrades',
    shortDescription: 'Expert electrical work for kitchen remodels, home additions, and full renovations.',
    description:
      'Renovation work demands practical planning, respect for occupied homes, and attention to detail so the electrical scope supports the finished design instead of slowing it down.',
    bullets: [
      'Kitchen and bath remodel wiring',
      'Additions and reconfigurations',
      'Device relocation and circuit extensions',
      'Code updates during renovation',
    ],
    processNote:
      'You get direct coordination, tidy work areas, and realistic scheduling.',
  },
  {
    slug: 'ev-charger-installation',
    title: 'EV Charger Installation',
    shortDescription: 'Professional installation of electric vehicle charging stations with proper load assessment.',
    description:
      'Home EV charging needs more than mounting hardware. Load capacity, panel condition, and device placement all matter for safe daily use.',
    bullets: [
      'Load calculations',
      'Dedicated circuit installation',
      'Interior or exterior charger locations',
      'Permit-ready professional installation',
    ],
    processNote:
      'The goal is reliable charging without overloading the rest of the home.',
  },
  {
    slug: 'panel-upgrades',
    title: 'Panel Upgrades',
    shortDescription: 'Modern electrical panel installations to meet current safety standards and power demands.',
    description:
      'Older electrical panels can become a bottleneck when homes add heat pumps, EV chargers, workshops, or major renovations. Panel upgrades create safer capacity for modern usage.',
    bullets: [
      'Main panel replacements',
      'Capacity upgrades',
      'Breaker organization and labeling',
      'Cleaner support for future additions',
    ],
    processNote:
      'Panel work is scoped clearly up front so homeowners know what is changing and why.',
  },
  {
    slug: 'lighting-design-installation',
    title: 'Lighting Design & Installation',
    shortDescription: "Thoughtful lighting solutions to enhance your home's functionality and ambiance.",
    description:
      'Good lighting improves how a home works and how it feels. Fixture placement, switching logic, and dimming all get planned to match the space.',
    bullets: [
      'Interior and exterior lighting plans',
      'Fixture replacement and new installs',
      'Dimmers, controls, and accent lighting',
      'Practical recommendations for daily use',
    ],
    processNote:
      'Lighting work balances function, comfort, and clean visual results.',
  },
  {
    slug: 'solar-power',
    title: 'Solar Power',
    shortDescription: 'Solar panel and inverter systems, off-grid support, and rebate-aware planning.',
    description:
      'Solar projects are handled with attention to electrical integration, equipment compatibility, and system performance so the installation serves the home properly long term.',
    bullets: [
      'Solar panel and inverter systems',
      'Grid-tied and remote off-grid support',
      'Battery integration planning',
      'Rebate-aware electrical scope',
    ],
    processNote:
      'Green energy work is approached as a full system, not just a product install.',
  },
  {
    slug: 'battery-wall-packs',
    title: 'Battery Wall Packs',
    shortDescription: 'Install a backup battery system and keep essential circuits available during outages.',
    description:
      'Battery storage can keep core appliances, lighting, and critical systems operating when the grid is down, especially when combined with solar or transfer equipment.',
    bullets: [
      'Essential-load planning',
      'Battery storage installation',
      'Backup power integration',
      'Future-ready system layout',
    ],
    processNote:
      'Battery systems are designed around what the household actually needs during an outage.',
  },
  {
    slug: 'generator-backup-system',
    title: 'Generator Backup System',
    shortDescription: 'Generator systems with transfer switching and essential load support for emergencies.',
    description:
      'Backup generator systems give homeowners a practical emergency plan for outages, storms, and service interruptions without unsafe temporary setups.',
    bullets: [
      'Generator connection systems',
      'Automatic or manual transfer options',
      'Essential load panels',
      'Dependable emergency-ready operation',
    ],
    processNote:
      'The installation is built to be easy to use when conditions are stressful.',
  },
  {
    slug: 'electromagnetic-field-detection',
    title: 'Electromagnetic Field (EMF) Detection',
    shortDescription: 'Identification of high EMF sources and mitigation planning inside the home.',
    description:
      'If you are concerned about elevated EMF exposure in sleeping areas or living spaces, the system can be assessed and potential sources can be identified for mitigation planning.',
    bullets: [
      'In-home EMF source identification',
      'Sleeping and living area review',
      'Mitigation recommendations',
      'Practical discussion of electrical causes',
    ],
    processNote:
      'This service is approached carefully and explained in plain language so you understand the findings.',
  },
]
