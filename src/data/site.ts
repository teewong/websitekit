export type ThemeVariant = 'trades' | 'warm' | 'premium'

export type SiteData = {
  businessName: string
  legalName: string
  domain: string
  phoneDisplay: string
  phoneHref: string
  phoneRaw: string
  email: string
  emailHref: string
  location: string
  addressLocality: string
  addressRegion: string
  addressCountry: string
  serviceAreas: string[]
  tagline: string
  shortDescription: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
  yearsInBusiness: string
  isLicensed: boolean
  isInsured: boolean
  googleBusinessName: string
  hours: string[]
  heroEyebrow: string
  heroImage: string
  aboutImage: string
  socialShareImage: string
  footerBlurb: string
  theme: {
    variant: ThemeVariant
    accent: string
    accentDark: string
    surfaceTint: string
    heroGradient: string
  }
}

export const siteData: SiteData = {
  businessName: 'Constant Electric',
  legalName: 'Constant Electric Inc.',
  domain: 'https://www.constantelectricinc.ca',
  phoneDisplay: '250-951-5518',
  phoneHref: 'tel:+12509515518',
  phoneRaw: '+12509515518',
  email: 'constant.dv@protonmail.com',
  emailHref: 'mailto:constant.dv@protonmail.com',
  location: 'Mid-Vancouver Island, BC',
  addressLocality: 'Parksville',
  addressRegion: 'BC',
  addressCountry: 'CA',
  serviceAreas: ['Qualicum Beach', 'Parksville', 'Nanoose Bay', 'Nanaimo', 'Surrounding communities'],
  tagline: 'Residential, commercial, and green energy electrical work with clear communication and dependable execution.',
  shortDescription:
    'Constant Electric provides residential electrical service, renovations, EV charger installs, panel upgrades, solar systems, and backup power solutions across Mid-Vancouver Island.',
  primaryCtaLabel: 'Request a Professional Quote',
  primaryCtaHref: '/contact',
  secondaryCtaLabel: 'Speak Directly with Dan',
  secondaryCtaHref: 'tel:+12509515518',
  yearsInBusiness: '25+',
  isLicensed: true,
  isInsured: true,
  googleBusinessName: 'Constant Electric Inc.',
  hours: ['Monday to Friday: 8:00 AM - 6:00 PM', 'Evenings & Weekends: Overtime rate', 'Emergency support: By request'],
  heroEyebrow: 'Licensed, insured, and locally owned',
  heroImage: '/images/electrician03.png',
  aboutImage: '/images/electrician-and-the-truck.png',
  socialShareImage: '/favicon.svg',
  footerBlurb:
    'Expert electrical work for homeowners and contractors who want transparent estimates, professional execution, and clean finishes.',
  theme: {
    variant: 'trades',
    accent: '#17753f',
    accentDark: '#0d5a30',
    surfaceTint: '#eef8f0',
    heroGradient: 'linear-gradient(135deg, #0f5d32 0%, #2a7d50 46%, #dfeade 100%)',
  },
}
