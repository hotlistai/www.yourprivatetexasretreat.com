import type React from "react"
import { propertyDetails } from "@/lib/propertyData"
import { Sofa, TreePine, Sparkles } from "lucide-react"

type FeatureGroup = {
  title: string
  icon: React.ElementType
  items: string[]
}

export default function FeaturesGrid() {
  const featureGroups: FeatureGroup[] = [
    { title: "Interior", icon: Sofa, items: propertyDetails.interiorFeatures || [] },
    { title: "Exterior", icon: TreePine, items: propertyDetails.exteriorFeatures || [] },
    { title: "Upgrades", icon: Sparkles, items: propertyDetails.upgrades || [] },
  ].filter((group) => group.items.length > 0)

  return (
    <section id="features" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">Features & Amenities</h2>
          <p className="text-slate-500">The details that make this home special</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featureGroups.map((group) => (
            <div key={group.title} className="bg-white rounded-3xl p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                  <group.icon className="w-5 h-5 text-slate-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">{group.title}</h3>
              </div>
              <ul className="space-y-3">
                {group.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
