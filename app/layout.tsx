import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { propertyDetails, propertyMedia } from "@/lib/propertyData"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),
  title: `${propertyDetails.address} | ${propertyDetails.city}, ${propertyDetails.state} | Apple Real Estate`,
  description: `${propertyDetails.beds} bed, ${propertyDetails.baths}.${propertyDetails.halfBaths || 0} bath home on ${propertyDetails.lotSize} in ${propertyDetails.city}, ${propertyDetails.state}. ${propertyDetails.price}. Features include 720 sq ft workshop, solar panels, private stocked fishing pond. NO HOA. Listed by Johnny Apple at Apple Real Estate.`,
  keywords: [
    "Caddo Mills real estate",
    "Caddo Mills homes for sale",
    "Texas acreage for sale",
    "Caddo Mills ISD homes",
    "workshop property Texas",
    "rural Texas homes",
    "no HOA homes Texas",
    "homes with pond",
    "Apple Real Estate",
    "Johnny Apple realtor",
    "Hunt County real estate",
  ],
  authors: [{ name: "Johnny Apple", url: "https://www.buywithapple.com" }],
  creator: "Apple Real Estate",
  publisher: "Apple Real Estate",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${propertyDetails.address} | ${propertyDetails.city}, ${propertyDetails.state}`,
    description: `${propertyDetails.beds} bed, ${propertyDetails.baths} bath custom brick home on ${propertyDetails.lotSize}. ${propertyDetails.price}. NO HOA, 720 sqft workshop, solar panels, private stocked fishing pond.`,
    images: [
      {
        url: propertyMedia.heroImage,
        width: 1200,
        height: 630,
        alt: `${propertyDetails.address} - Beautiful Texas home on ${propertyDetails.lotSize}`,
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Apple Real Estate",
  },
  twitter: {
    card: "summary_large_image",
    title: `${propertyDetails.address} | Apple Real Estate`,
    description: `${propertyDetails.beds}bd/${propertyDetails.baths}ba on ${propertyDetails.lotSize} - ${propertyDetails.price}`,
    images: [propertyMedia.heroImage],
    creator: "@buywithapple",
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f8fafc",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: `${propertyDetails.address}, ${propertyDetails.city}, ${propertyDetails.state} ${propertyDetails.zip}`,
    description: propertyDetails.description,
    url: "https://your-domain.vercel.app",
    image: propertyMedia.heroImage,
    offers: {
      "@type": "Offer",
      price: propertyDetails.price.replace(/[^0-9]/g, ""),
      priceCurrency: "USD",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: propertyDetails.address,
      addressLocality: propertyDetails.city,
      addressRegion: propertyDetails.state,
      postalCode: propertyDetails.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.0632,
      longitude: -96.2249,
    },
    numberOfRooms: propertyDetails.beds,
    numberOfBathroomsTotal: propertyDetails.baths + (propertyDetails.halfBaths || 0) * 0.5,
    floorSize: {
      "@type": "QuantitativeValue",
      value: propertyDetails.sqft,
      unitCode: "FTK",
    },
    lotSize: {
      "@type": "QuantitativeValue",
      value: 7.56,
      unitCode: "ACR",
    },
    yearBuilt: propertyDetails.yearBuilt,
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="preconnect" href="https://my.matterport.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://my.matterport.com" />
        {/* JSON-LD structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
