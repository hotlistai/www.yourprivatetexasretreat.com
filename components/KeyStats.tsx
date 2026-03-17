import { propertyDetails } from "@/lib/propertyData"
import { TreePine, Home, Flame, Car, Sun, Wrench, Zap, Droplets } from "lucide-react"

const stats = [
  { icon: Sun, label: "Solar Panels", value: "2023", highlight: true },
  { icon: Wrench, label: "Workshop", value: "720 sqft" },
  { icon: TreePine, label: "Acreage", value: propertyDetails.lotSize || "7.56" },
  { icon: Flame, label: "Fireplace", value: "Wood Burning" },
  { icon: Car, label: "Garage", value: "2-Car" },
  { icon: Home, label: "Built", value: propertyDetails.yearBuilt?.toString() || "1998" },
  { icon: Zap, label: "Electric", value: "Co-op" },
  { icon: Droplets, label: "Water", value: "Co-op" },
]

export default function KeyStats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">Property Highlights</h2>
          <p className="text-slate-500">Everything you need, nothing you don't</p>
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
