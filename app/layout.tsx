import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { agentInfo, propertyDetails, propertyMedia } from "@/lib/propertyData"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hotlist-1501-the-rock-rockwall.morning-mouse-824a.workers.dev"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${propertyDetails.address} | ${propertyDetails.city}, ${propertyDetails.state}`,
  description: propertyDetails.subheadline,
  keywords: [
    "1501 The Rock",
    "Rockwall luxury real estate",
    "Rockwall acreage estate",
    "Rockwall homes for sale",
    "gated estate Rockwall TX",
    "luxury property Rockwall ISD",
    "Texas modern architectural estate",
    "estate with pond and creek",
    "Carrasco Real Estate Co.",
    "Rosie Carrasco Cox",
  ],
  authors: [{ name: agentInfo.name, url: agentInfo.websiteUrl }],
  creator: agentInfo.name,
  publisher: agentInfo.brokerage,
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
    title: `${propertyDetails.address} | ${propertyDetails.headline}`,
    description: propertyDetails.subheadline,
    images: [
      {
        url: propertyMedia.heroImage,
        width: 1200,
        height: 630,
        alt: `${propertyDetails.address} - ${propertyDetails.headline}`,
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: `${propertyDetails.address} | ${propertyDetails.city}, ${propertyDetails.state}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${propertyDetails.address} | ${propertyDetails.city}, ${propertyDetails.state}`,
    description: propertyDetails.subheadline,
    images: [propertyMedia.heroImage],
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  generator: "v0.app",
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
    numberOfRooms: propertyDetails.beds,
    numberOfBathroomsTotal: propertyDetails.baths + (propertyDetails.halfBaths || 0) * 0.5,
    floorSize: {
      "@type": "QuantitativeValue",
      value: propertyDetails.sqft,
      unitCode: "FTK",
    },
    lotSize: {
      "@type": "QuantitativeValue",
      value: propertyDetails.lotAcres,
      unitCode: "ACR",
    },
    yearBuilt: propertyDetails.yearBuilt,
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
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
