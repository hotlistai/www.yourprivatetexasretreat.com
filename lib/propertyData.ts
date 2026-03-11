export type PropertyMedia = {
  heroImage: string
  gallery: string[]
  videoUrl?: string
}

export type PropertyDetails = {
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
  brokerage: string
  headshotUrl: string
  logoUrl: string
  brokerageLogoUrl: string
  appleLogoUrl: string
  buyUrl: string
  sellUrl: string
}

// ======================
// AGENT INFO
// ======================
export const agentInfo: AgentInfo = {
  name: "Johnny Apple",
  email: "info@buyingindallas.com",
  phone: "(469) 569-2007",
  tagline: "People-first, tech-smart real estate in North Dallas.",
  brokerage: "Carrasco Real Estate Co.",
  headshotUrl: "/images/main-20headshot-clean.png",
  logoUrl: "/images/a.png",
  brokerageLogoUrl: "/images/carrasco-dark.png",
  appleLogoUrl: "/images/buying-in-dallas-logo.png",
  buyUrl: "https://www.buywithapple.com/buy",
  sellUrl: "https://www.buywithapple.com/sell",
}

// ======================
// PROPERTY MEDIA
// ======================
export const propertyMedia: PropertyMedia = {
  heroImage: "/images/brian-20photos-201.jpeg",
  gallery: [
    "/images/brian-20photos-203.jpeg", // Aerial with property lines - shows full 7.56 acres
    "/images/brian-20photos-202.jpeg", // Aerial view of property
    "/images/brian-20photos-201.jpeg", // Home exterior
    "/images/brian-20photos-2012.jpeg", // Renovated kitchen - beautiful selling point
    "/images/brian-20photos-2015.jpeg", // Primary bedroom with tray ceiling
    "/images/brian-20photos-2016.jpeg", // Primary bedroom alternate view
    "/images/brian-20photos-2023.jpeg", // Guest bedroom with views
    "/images/brian-20photos-2027.jpeg", // Pond with bluebonnets - lifestyle
  ],
  videoUrl: "https://blog.hotlistdigital.com/wp-content/uploads/2026/03/Video.mov",
}

// ======================
// PROPERTY DETAILS
// ======================
export const propertyDetails: PropertyDetails = {
  address: "4223 County Road 2727",
  city: "Caddo Mills",
  state: "Texas",
  zip: "75135",
  price: "$699,000",
  beds: 3,
  baths: 3,
  halfBaths: 1,
  sqft: 2567,
  lotSize: "7.56 Acres",
  lotAcres: 7.56,
  yearBuilt: 1998,
  propertyType: "Single Family",
  style: "Traditional",
  construction: "Brick",
  garage: "2-Car Attached",
  fireplace: "Wood Burning",
  hoa: "None",
  mlsNumber: "21120849",
  listingTerms: ["Cash", "Conventional", "FHA", "VA Loan"],

  description: `Escape the city to this solid brick custom home on a rare 7.5+ acre private retreat in Caddo Mills ISD. This property features a massive 30×24 (720 sq ft) workshop with electric—perfect for hobbies, a home business, or storing all your toys.

The thoughtfully designed 3-bedroom, 3.5-bathroom floorplan is anchored by a spacious 20×18 living room with a cozy wood-burning fireplace and a beautifully renovated kitchen. Energy efficiency comes standard with 2023 solar panels installed to keep those summer electric bills in check.

With NO HOA, you're free to bring your boat, RV, and livestock. Enjoy true privacy with your own stocked fishing pond, mature trees, and wide-open Texas sky—all just minutes from Highway 36.`,

  highlights: [
    "7.56 acres of private land",
    "Private stocked fishing pond",
    "720 sq ft workshop with electric",
    "2023 solar panels installed",
    "NO HOA",
    "Renovated kitchen",
    "Wood-burning fireplace",
    "Minutes from Highway 36",
  ],

  interiorFeatures: [
    "Spacious 20×18 living room",
    "Primary suite with ensuite",
    "Built-in features",
    "Eat-in kitchen",
    "Walk-in closets",
    "High-speed internet ready",
  ],

  exteriorFeatures: [
    "Covered patio",
    "Rain gutters",
    "Chain link & wrought iron fencing",
    "Mature trees",
    "Stocked fishing pond",
    "Workshop with electric",
  ],

  upgrades: ["2023 solar panels", "Renovated kitchen", "720 sq ft workshop"],

  appliances: ["Dishwasher", "Disposal"],
  utilities: ["Aerobic septic", "Co-op electric", "Co-op water"],
  features: ["Single-level", "Central HVAC", "Composition roof", "Slab foundation", "2-car attached garage"],

  neighborhood: "Caddo Mills",
  schools: {
    district: "Caddo Mills ISD",
    elementary: "Frances and Jeannette Lee Elementary",
    middle: "Caddo Mills Middle School",
    high: "Caddo Mills High School",
  },
  directions: "From Hwy 36 in Caddo Mills, turn left onto CR 2727, house is on the left.",
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
