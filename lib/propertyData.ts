export type PropertyMedia = {
  heroImage: string
  gallery: string[]
  videoUrl?: string
  videoPosterUrl?: string
}

export type PropertyDetails = {
  heroTag: string
  headline: string
  subheadline: string
  address: string
  city: string
  state: string
  zip: string
  price: string
  beds: number
  baths: number
  halfBaths?: number
  sqft?: number
  lotSize?: string
  lotAcres?: number
  yearBuilt?: number
  propertyType?: string
  style?: string
  construction?: string
  garage?: string
  fireplace?: string
  hoa?: string
  features: string[]
  interiorFeatures?: string[]
  exteriorFeatures?: string[]
  upgrades?: string[]
  appliances?: string[]
  utilities?: string[]
  description: string
  highlights?: string[]
  neighborhood?: string
  locationHighlights?: string[]
  lifestyleHighlights?: string[]
  schools?: {
    district: string
    elementary?: string
    middle?: string
    high?: string
  }
  directions?: string
  mlsNumber?: string
  listingTerms?: string[]
}

export type AgentInfo = {
  name: string
  email: string
  phone: string
  tagline: string
  serviceAreas: string
  brokerage: string
  headshotUrl: string
  logoUrl: string
  brokerageLogoUrl: string
  brandLogoUrl: string
  websiteUrl: string
  aboutUrl: string
}

// ======================
// AGENT INFO
// ======================
export const agentInfo: AgentInfo = {
  name: "Rosie Carrasco Cox",
  email: "rcox@sourcesunlimited.net",
  phone: "(972) 672-5888",
  tagline: "Helping You Find Your Piece of Texas.",
  serviceAreas: "Serving Rockwall, Heath, Forney, Royse City, Dallas, and surrounding communities.",
  brokerage: "Carrasco Real Estate Co.",
  headshotUrl: "/images/rosie-carrasco-cox.jpg",
  logoUrl: "/images/carrasco-real-estate-logo.png",
  brokerageLogoUrl: "/images/carrasco-real-estate-logo.png",
  brandLogoUrl: "/images/carrasco-real-estate-logo.png",
  websiteUrl: "https://rosiecarrascocox.com/",
  aboutUrl: "https://rosiecarrascocox.com/about",
}

// ======================
// PROPERTY MEDIA
// ======================
export const propertyMedia: PropertyMedia = {
  heroImage: "/images/1501-the-rock/01.jpeg",
  gallery: [
    "/images/1501-the-rock/04.jpeg",
    "/images/1501-the-rock/02.jpeg",
    "/images/1501-the-rock/06.jpeg",
    "/images/1501-the-rock/08.jpeg",
    "/images/1501-the-rock/10.jpeg",
    "/images/1501-the-rock/16.jpeg",
    "/images/1501-the-rock/17.jpeg",
    "/images/1501-the-rock/18.jpeg",
    "/images/1501-the-rock/20.jpeg",
    "/images/1501-the-rock/11.jpeg",
  ],
  videoUrl: "/videos/1501-the-rock-tour.mp4",
  videoPosterUrl: "/images/1501-the-rock/01.jpeg",
}

// ======================
// PROPERTY DETAILS
// ======================
export const propertyDetails: PropertyDetails = {
  heroTag: "Just Listed",
  headline: "Private Gated Modern Architectural Estate",
  subheadline:
    "A one-of-a-kind 11.96-acre Rockwall estate with steel-and-glass architecture, a 15-foot vaulted great room, chef's kitchen, resort-style sport pool, infinity spa, pond, creek, and a 6-car garage with workshop space.",
  address: "1501 The Rock",
  city: "Rockwall",
  state: "Texas",
  zip: "75087",
  price: "$3,489,000",
  beds: 5,
  baths: 5,
  sqft: 4349,
  lotSize: "11.96 Acres",
  lotAcres: 11.96,
  yearBuilt: 2018,
  propertyType: "Single Family Residence",
  style: "Contemporary / Modern",
  construction: "Custom steel, glass, limestone, and hardwood accents",
  garage: "6-Car Garage + Workshop",
  fireplace: "Decorative gas fireplaces in the great room and outdoor living",
  hoa: "None",
  mlsNumber: "21205044",
  listingTerms: ["Cash", "Conventional"],

  description: `This one-of-a-kind architectural showpiece delivers craftsmanship, design, and an extraordinary setting on nearly 12 gated acres in Rockwall ISD. The arrival is unforgettable, with monumental steel-and-glass double doors, gas lanterns, IPE hardwood, limestone accents, and mature trees framing the drive.

Inside, the great room is the heart of the residence with a 15-foot vaulted white oak ceiling, designer lighting, custom built-ins, tailored seating, and a dramatic wall of steel-reinforced glass. The chef's kitchen centers around a 16-foot waterfall island, walnut cabinetry, a 48-inch Thermador gas range with griddle and double oven, built-in refrigerator, breakfast nook, and a butler's pantry with a second prep kitchen.

The grounds are built for resort-style entertaining with a sport pool, infinity-edge spa, Brazilian hardwood decking, covered outdoor fireplace, grill station, smoker, firepit lounge, pond, creek, and room to spread out. Add in dedicated fiber, whole-home backup power, no HOA, and AG acreage, and this is a rare Rockwall estate that balances privacy, luxury, and everyday functionality.`,

  highlights: [
    "11.96 acres with AG",
    "Secured and privately gated",
    "Heavily treed with pond and creek",
    "Whole-home Generac generator",
    "Whole-home surge protector",
    "Dedicated fiber internet",
    "6-car garage plus workshop space",
    "Resort-style sport pool",
    "Infinity-edge spa",
    "No HOA",
    "Chef's kitchen with 16-foot island",
    "Grand great room with 15-foot white oak ceiling",
  ],

  interiorFeatures: [
    "15-foot vaulted great room clad in white oak",
    "Wall of steel-reinforced glass and 8-foot steel-framed doors",
    "16-foot waterfall island with seating for five",
    "48-inch Thermador gas range with griddle and double oven",
    "Butler's pantry with second prep kitchen",
    "Private office, family wing, and media lounge",
    "Primary suite with private patio access and blackout drapery",
    "Primary dressing room with island, vanity, and custom storage",
  ],

  exteriorFeatures: [
    "Private gated entrance and long circular drive",
    "Resort-style sport pool with infinity-edge spa and tanning ledge",
    "Brazilian hardwood decking and covered outdoor living",
    "Outdoor fireplace, grill station, smoker, and firepit lounge",
    "Pond, creek, mature trees, and landscaped grounds",
    "6-car garage, workshop area, and expansive parking",
  ],

  upgrades: ["Whole-home Generac generator", "Whole-home surge protector", "Dedicated fiber internet", "Multi-zone surround sound"],

  appliances: [
    "Built-in gas range",
    "Built-in refrigerator",
    "Dishwasher",
    "Disposal",
    "Commercial-grade vent hood",
    "Dryer",
  ],
  utilities: ["Dedicated fiber internet", "Natural gas", "Central air", "Whole-home generator backup"],
  features: ["Private gated estate", "AG acreage", "No HOA", "Pond and creek", "Media lounge", "Private office"],

  neighborhood: "Rockwall",
  locationHighlights: [
    "Rockwall County private estate setting",
    "Rockwall ISD: Celia Hays, J.W. Williams, and Rockwall High",
    "Gated privacy with quick access to shopping, dining, and daily conveniences",
  ],
  lifestyleHighlights: [
    "Private gated luxury living",
    "Resort-style pool, spa, and outdoor entertaining",
    "No HOA flexibility across nearly 12 AG acres",
  ],
  schools: {
    district: "Rockwall ISD",
    elementary: "Celia Hays",
    middle: "J.W. Williams",
    high: "Rockwall",
  },
  directions: "Enter 1501 The Rock, Rockwall, TX 75087 into your preferred maps app for gate-to-door routing.",
}

export const formatPhoneForLink = (phone: string): string => {
  return phone.replace(/[^\d]/g, "")
}

export const getFullAddress = (): string => {
  return `${propertyDetails.address}, ${propertyDetails.city}, ${propertyDetails.state} ${propertyDetails.zip}`
}

export const getMapUrl = (): string => {
  const address = encodeURIComponent(getFullAddress())
  return `https://www.google.com/maps/search/?api=1&query=${address}`
}

export const getMapEmbedUrl = (): string => {
  const address = encodeURIComponent(getFullAddress())
  return `https://maps.google.com/maps?q=${address}&output=embed`
}
