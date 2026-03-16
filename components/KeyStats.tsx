import { propertyDetails } from "@/lib/propertyData"
import { Ban, Car, GraduationCap, Home, Shield, TreePine, UtensilsCrossed, Waves } from "lucide-react"

const stats = [
  { icon: Shield, label: "Estate", value: "Privately Gated", highlight: true },
  { icon: TreePine, label: "Acreage", value: propertyDetails.lotSize || "11.96 Acres" },
  { icon: Waves, label: "Pool + Spa", value: "Resort Style" },
  { icon: UtensilsCrossed, label: "Chef Kitchen", value: "16ft Island" },
  { icon: Car, label: "Garage", value: "6-Car + Shop" },
  { icon: Home, label: "Built", value: propertyDetails.yearBuilt?.toString() || "2018" },
  { icon: GraduationCap, label: "Schools", value: propertyDetails.schools?.district || "Rockwall ISD" },
  { icon: Ban, label: "HOA", value: "None" },
]

export default function KeyStats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">Property Highlights</h2>
          <p className="text-slate-500">Luxury details, privacy, and the estate-scale amenities buyers remember</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`group rounded-2xl p-6 text-center transition-all duration-300 ${
                stat.highlight
                  ? "bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100"
                  : "bg-slate-50/50 hover:bg-slate-50 border border-transparent hover:border-slate-100"
              }`}
            >
              <stat.icon
                className={`w-6 h-6 mx-auto mb-3 ${stat.highlight ? "text-emerald-500" : "text-slate-400 group-hover:text-slate-500"}`}
              />
              <p className="text-xl font-semibold text-slate-800 mb-1">{stat.value}</p>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
