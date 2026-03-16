import Image from "next/image"
import { propertyDetails, propertyMedia, agentInfo, formatPhoneForLink } from "@/lib/propertyData"
import { Phone, ArrowRight, Bed, Bath, Maximize, TreePine, Play } from "lucide-react"

export default function Hero() {
  const bathroomLabel = propertyDetails.halfBaths
    ? `${propertyDetails.baths}.${propertyDetails.halfBaths} Baths`
    : `${propertyDetails.baths} Baths`

  return (
    <header className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Soft gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-sky-100/40 to-teal-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-50/50 to-indigo-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nav */}
        <nav className="flex items-center justify-between py-4 sm:py-6">
          <a href={agentInfo.websiteUrl} className="flex items-center">
            <Image
              src={agentInfo.brandLogoUrl || "/placeholder.svg"}
              alt={agentInfo.brokerage}
              width={200}
              height={50}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
          </a>
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href={agentInfo.websiteUrl}
              className="hidden sm:inline text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              Website
            </a>
            <a
              href={agentInfo.aboutUrl}
              className="hidden sm:inline text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              About Rosie
            </a>
            <a
              href={`tel:${formatPhoneForLink(agentInfo.phone)}`}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{agentInfo.phone}</span>
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh] py-8 lg:py-12">
          {/* Left - Text */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-slate-100 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 shadow-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm text-slate-600">{propertyDetails.heroTag}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-slate-800 tracking-tight leading-tight mb-3 sm:mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400">
                {propertyDetails.headline}
              </span>
            </h1>

            <p className="max-w-2xl text-base sm:text-lg text-slate-500 mb-4 sm:mb-6">{propertyDetails.subheadline}</p>
            <p className="text-base sm:text-lg text-slate-500 mb-1 sm:mb-2">{propertyDetails.address}</p>
            <p className="text-sm sm:text-base text-slate-400 mb-6 sm:mb-8">
              {propertyDetails.city}, {propertyDetails.state} {propertyDetails.zip}
            </p>

            {/* Price */}
            <div className="mb-6 sm:mb-8">
              <span className="text-3xl sm:text-4xl font-semibold text-slate-900">{propertyDetails.price}</span>
            </div>

            {/* Stats pills - mobile optimized */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm border border-slate-100">
                <Bed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">{propertyDetails.beds} Beds</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm border border-slate-100">
                <Bath className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">{bathroomLabel}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm border border-slate-100">
                <Maximize className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  {propertyDetails.sqft?.toLocaleString()} sqft
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm border border-slate-100">
                <TreePine className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">{propertyDetails.lotSize}</span>
              </div>
            </div>

            {/* CTAs - stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-medium"
              >
                Schedule a Tour
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${formatPhoneForLink(agentInfo.phone)}`}
                className="btn-secondary inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-medium"
              >
                <Phone className="w-4 h-4" />
                Call Rosie
              </a>
            </div>
          </div>

          {/* Right - Image + Video Preview */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
                <Image
                  src={propertyMedia.heroImage || "/placeholder.svg"}
                  alt={`${propertyDetails.address} - Beautiful home on ${propertyDetails.lotSize}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {propertyMedia.videoUrl && (
                <a
                  href="#video"
                  className="absolute bottom-4 right-4 w-24 sm:w-32 aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-xl border-2 border-white hover:scale-105 transition-transform group"
                  aria-label="Watch property video tour"
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={propertyMedia.videoPosterUrl ?? propertyMedia.heroImage}
                    className="w-full h-full object-cover"
                  >
                    <source src={propertyMedia.videoUrl} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-3 h-3 sm:w-4 sm:h-4 text-slate-800 ml-0.5" />
                    </div>
                  </div>
                </a>
              )}

              {/* Floating badge - hidden on small mobile */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
                <p className="text-xs text-slate-400 mb-1">No HOA + AG</p>
                <p className="text-sm font-medium text-slate-700">Luxury acreage without restrictions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
