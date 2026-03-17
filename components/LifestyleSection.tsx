import Image from "next/image"

export default function LifestyleSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-sky-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 text-sm font-medium tracking-wide uppercase">Country Living</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-800 text-balance">
            Your Own Private Retreat
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
            7.5 acres of Texas countryside with a stocked fishing pond, mature trees, and endless blue skies
          </p>
        </div>

        {/* Feature image with pond and bluebonnets */}
        <div className="relative mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
            <Image
              src="/images/brian-20photos-2027.jpeg"
              alt="Stocked fishing pond with mature tree and Texas bluebonnets"
              width={1600}
              height={900}
              className="w-full aspect-[16/9] object-cover"
            />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
              <p className="text-emerald-700 font-semibold">Stocked Fishing Pond</p>
              <p className="text-slate-500 text-sm">Cast a line right in your backyard</p>
            </div>
          </div>
        </div>

        {/* Two-column feature grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Aerial view */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 group">
            <Image
              src="/images/brian-20photos-202.jpeg"
              alt="Aerial view of the 7.5 acre property showing home, workshop, and pond"
              width={800}
              height={600}
              className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-semibold text-lg">7.56 Acres</p>
              <p className="text-white/80 text-sm">Room to roam, room to grow</p>
            </div>
          </div>

          {/* Feature list card */}
          <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Freedom to Live Your Way</h3>
            <ul className="space-y-4">
              {[
                { icon: "🎣", text: "Stocked fishing pond", detail: "Bass and catfish ready to catch" },
                { icon: "🌳", text: "Mature shade trees", detail: "Natural beauty and privacy" },
                { icon: "🚜", text: "No HOA restrictions", detail: "Bring your boat, RV, and livestock" },
                { icon: "🔧", text: "720 sq ft workshop", detail: "With electric for your projects" },
                { icon: "☀️", text: "Solar panels (2023)", detail: "Lower bills, smaller footprint" },
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
