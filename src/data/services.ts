export type ServiceItem = {
  slug: string
  title: string
  shortDescription: string
  description: string
  bullets: string[]
  processNote: string
  image: string
  eyebrow: string
}

export const services: ServiceItem[] = [
  {
    slug: 'barrel-saunas',
    title: 'Scenic View Barrel Saunas',
    shortDescription: 'Custom cedar barrel saunas with the signature full acrylic bubble view wall.',
    description:
      'The Scenic View barrel sauna is built for the West Coast lifestyle: warm cedar, efficient rounded form, and a durable acrylic bubble back wall that opens the sauna to forest, ocean, mountain, or backyard views.',
    bullets: [
      'Wood-fired or electric heat options',
      'Clear or smoked acrylic view wall',
      'Custom lengths, seating layouts, and change rooms',
      'Personalized graphics and exterior details',
    ],
    processNote:
      'Every sauna is scoped around the site, view, access, heat preference, and the way you want to use it.',
    image: '/images/ooak/scenic-sauna.jpg',
    eyebrow: 'Signature product',
  },
  {
    slug: 'cedar-hot-tubs',
    title: 'Cedar Hot Tubs',
    shortDescription: 'Round cedar hot tubs built for natural warmth, outdoor living, and year-round use.',
    description:
      'A cedar hot tub brings the ritual back to soaking. One of a Kind builds tubs with natural cedar presence, practical heating choices, and a finished look that belongs beside cabins, retreats, decks, and ocean-view homes.',
    bullets: [
      'Wood-fired and electric options',
      'Custom sizing and site fit',
      'Built for exterior exposure',
      'Made from Vancouver Island craft experience',
    ],
    processNote:
      'Sizing, heat source, and installation planning are discussed up front so the finished tub works with the property.',
    image: '/images/ooak/hot-tub.jpg',
    eyebrow: 'Cedar soaking',
  },
  {
    slug: 'sleeping-barrels',
    title: 'Sleeping Barrels',
    shortDescription: 'Cedar sleeping barrels for resorts, campgrounds, Airbnbs, retreats, and guest stays.',
    description:
      'Sleeping barrels turn simple overnight accommodation into a dry, memorable cedar shelter. They are compact, character-rich, and designed to sit naturally in forest, coastal, and campground settings.',
    bullets: [
      'Weather-conscious cedar construction',
      'Layouts for guest stays and retreat settings',
      'Memorable lodging for hospitality projects',
      'Custom exterior treatments and details',
    ],
    processNote:
      'Hospitality projects can be planned around guest turnover, site access, and repeatable installation.',
    image: '/images/ooak/sleeping-barrel.jpg',
    eyebrow: 'Stay-worthy',
  },
  {
    slug: 'cedar-yurts',
    title: 'Cedar Yurts',
    shortDescription: 'Round cedar structures for cabins, studios, campground units, and special-use spaces.',
    description:
      'Cedar yurts bring One of a Kind’s love of round construction into larger spaces. Vertical logs create a circle-house feel, while horizontal log layouts support more conventional cabin forms.',
    bullets: [
      'Round cedar structure planning',
      'Cabin, studio, retreat, and campground uses',
      'Vertical or horizontal log concepts',
      'Custom detailing from an experienced shop',
    ],
    processNote:
      'Yurt and cabin concepts start with intended use, size, setting, and the level of finish required.',
    image: '/images/ooak/team.jpg',
    eyebrow: 'Custom structures',
  },
  {
    slug: 'custom-woodcraft',
    title: 'Custom Woodcraft',
    shortDescription: 'Specialty woodworking, furniture, restorations, doors, wine cellars, and unusual builds.',
    description:
      'Beyond wellness products, One of a Kind takes on unusual woodcraft projects that benefit from decades of shop experience: antique reproductions, institutional furniture, custom doors, wine cellars, and whatever challenge is worth building properly.',
    bullets: [
      'Historical restorations and reproductions',
      'Custom furniture and carved details',
      'Commercial and residential woodwork',
      'One-off builds with practical durability',
    ],
    processNote:
      'Custom work begins with the practical question: what should this piece do, where will it live, and how should it age?',
    image: '/images/ooak/hero-workshop.jpg',
    eyebrow: 'One-off work',
  },
]
