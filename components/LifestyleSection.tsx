import Image from "next/image"

export default function LifestyleSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-sky-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 text-sm font-medium tracking-wide uppercase">Estate Living</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-800 text-balance">
            Architecture, Privacy, and Resort-Style Grounds
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
            Steel-and-glass design, nearly 12 gated acres, pond and creek frontage, and entertaining spaces built to
            host at a different level
          </p>
        </div>

        {/* Feature image */}
        <div className="relative mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
            <Image
              src="/images/1501-the-rock/04.jpeg"
              alt="Aerial view of the estate showing the home, pool, and surrounding acreage"
              width={1600}
              height={900}
              className="w-full aspect-[16/9] object-cover"
            />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
              <p className="text-emerald-700 font-semibold">Resort Pool + Infinity Spa</p>
              <p className="text-slate-500 text-sm">Outdoor living built for all-day entertaining</p>
            </div>
          </div>
        </div>

        {/* Two-column feature grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Aerial view */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 group">
            <Image
              src="/images/1501-the-rock/08.jpeg"
              alt="Private gated entry and long drive leading into the estate"
              width={800}
              height={600}
              className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-semibold text-lg">Secured and Privately Gated</p>
              <p className="text-white/80 text-sm">A long private arrival sets the tone from the first turn</p>
            </div>
          </div>

          {/* Feature list card */}
          <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">What Sets It Apart</h3>
            <ul className="space-y-4">
              {[
                { icon: "🛡️", text: "Private gated estate", detail: "Secure arrival with estate-scale setback and privacy" },
                { icon: "🌳", text: "Pond, creek, and heavy tree cover", detail: "Rare natural privacy in a Rockwall location" },
                { icon: "🏊", text: "Sport pool and infinity-edge spa", detail: "Designed for family fun and elevated entertaining" },
                { icon: "🍽️", text: "Outdoor kitchen and fireplace", detail: "Formal dining, grill station, smoker, and lounge seating" },
                { icon: "⚡", text: "Fiber + whole-home backup systems", detail: "Dedicated fiber, surge protection, and Generac support" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-slate-800 font-medium">{item.text}</p>
                    <p className="text-slate-500 text-sm">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
