import { getMapUrl, getMapEmbedUrl, getFullAddress } from "@/lib/propertyData"
import { ExternalLink } from "lucide-react"

export default function MapSection() {
  return (
    <section id="map" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-slate-800">Location</h2>
          <a
            href={getMapUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            Open in Maps
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
          <iframe
            src={getMapEmbedUrl()}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map showing ${getFullAddress()}`}
          />
        </div>

        <p className="text-sm text-slate-400 mt-4 text-center">{getFullAddress()}</p>
      </div>
    </section>
  )
}
