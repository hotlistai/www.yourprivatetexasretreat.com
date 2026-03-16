import { propertyDetails } from "@/lib/propertyData"
import { GraduationCap, MapPin, TreePine } from "lucide-react"

export default function Neighborhood() {
  const { schools, neighborhood } = propertyDetails
  if (!schools && !neighborhood) return null

  return (
    <section id="neighborhood" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">Life in {neighborhood || propertyDetails.city}</h2>
          <p className="text-slate-500">Estate privacy without giving up the best parts of living in Rockwall</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {/* Schools */}
          {schools && (
            <div className="bg-slate-50 rounded-3xl p-8">
              <GraduationCap className="w-6 h-6 text-slate-400 mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 mb-4">{schools.district}</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {schools.elementary && <li>Elementary: {schools.elementary}</li>}
                {schools.middle && <li>Middle: {schools.middle}</li>}
                {schools.high && <li>High: {schools.high}</li>}
              </ul>
            </div>
          )}

          {/* Location */}
          <div className="bg-slate-50 rounded-3xl p-8">
            <MapPin className="w-6 h-6 text-slate-400 mb-4" />
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Location</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {propertyDetails.locationHighlights?.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          {/* Lifestyle */}
          <div className="bg-slate-50 rounded-3xl p-8">
            <TreePine className="w-6 h-6 text-slate-400 mb-4" />
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Lifestyle</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {propertyDetails.lifestyleHighlights?.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
