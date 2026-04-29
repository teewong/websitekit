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
  businessName: 'One of a Kind Creative Woodcrafting',
  legalName: 'One of a Kind Creative Woodworking',
  domain: 'https://www.oneofakindcw.com',
  phoneDisplay: '250-415-9628',
  phoneHref: 'tel:+12504159628',
  phoneRaw: '+12504159628',
  email: 'info@oneofakindcw.com',
  emailHref: 'mailto:info@oneofakindcw.com',
  location: 'Parksville, Vancouver Island',
  addressLocality: 'Parksville',
  addressRegion: 'BC',
  addressCountry: 'CA',
  serviceAreas: ['Vancouver Island', 'British Columbia', 'Canada', 'United States', 'Worldwide shipping'],
  tagline: 'Handcrafted barrel saunas, cedar hot tubs, sleeping barrels, cedar yurts, and custom woodcraft built on Vancouver Island.',
  shortDescription:
    'One of a Kind Creative Woodcrafting handcrafts custom cedar barrel saunas, cedar hot tubs, sleeping barrels, yurts, and specialty wood projects from its Parksville workshop.',
  primaryCtaLabel: 'Request a Quote',
  primaryCtaHref: '/contact',
  secondaryCtaLabel: 'Call the Workshop',
  secondaryCtaHref: 'tel:+12504159628',
  yearsInBusiness: '50',
  isLicensed: false,
  isInsured: false,
  googleBusinessName: 'One of a Kind Creative Woodcrafting',
  hours: ['Monday to Saturday: 9:00 AM - 5:00 PM', 'Sunday: Closed'],
  heroEyebrow: 'Built in Parksville. Shipped worldwide.',
  heroImage: '/images/ooak/hero-workshop.jpg',
  aboutImage: '/images/ooak/dave.jpg',
  socialShareImage: '/favicon.svg',
  footerBlurb:
    'Custom cedar wellness structures and one-of-a-kind woodcraft from a Vancouver Island workshop.',
  theme: {
    variant: 'warm',
    accent: '#b96524',
    accentDark: '#5b311c',
    surfaceTint: '#f4efe7',
    heroGradient: 'linear-gradient(135deg, #2a1710 0%, #6a3b1f 52%, #d89a57 100%)',
  },
}
