import { propertyDetails } from "@/lib/propertyData"
import { Check } from "lucide-react"

export default function AboutHome() {
  const paragraphs = propertyDetails.description.split("\n\n")

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Main Description */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">About This Property</h2>
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100">
              <p className="text-sm text-slate-400">MLS# {propertyDetails.mlsNumber}</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-slate-50 rounded-3xl p-8">
              <h3 className="text-lg font-semibold text-slate-800 mb-6">What We Love</h3>
              <ul className="space-y-4">
                {propertyDetails.highlights?.slice(0, 6).map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-slate-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NO HOA Badge */}
            {propertyDetails.hoa === "None" && (
              <div className="mt-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 text-center border border-sky-100">
                <p className="text-lg font-semibold text-slate-800">No HOA</p>
                <p className="text-sm text-slate-500 mt-1">Complete freedom, zero restrictions</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
