import { agentInfo, formatPhoneForLink } from "@/lib/propertyData"
import { Phone, Mail, ArrowRight } from "lucide-react"

export default function AgentSection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Agent Card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative">
              <img
                src={agentInfo.headshotUrl || "/placeholder.svg"}
                alt={agentInfo.name}
                className="w-36 h-36 rounded-2xl object-cover shadow-xl ring-4 ring-slate-800"
              />
            </div>
            <div className="text-center sm:text-left">
              <img
                src={agentInfo.appleLogoUrl || "/placeholder.svg"}
                alt="Buying in Dallas"
                className="h-9 mb-4 mx-auto sm:mx-0 brightness-0 invert"
              />
              <h3 className="text-2xl font-semibold mb-1">{agentInfo.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{agentInfo.tagline}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${formatPhoneForLink(agentInfo.phone)}`}
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Johnny
                </a>
                <a
                  href={`mailto:${agentInfo.email}`}
                  className="inline-flex items-center justify-center gap-2 border border-slate-600 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center lg:text-right">
            <p className="text-slate-400 mb-4">Ready to see this property in person?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xl font-semibold hover:text-slate-300 transition-colors group"
            >
              Schedule Your Private Tour
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col items-center justify-center gap-3">
          <span className="text-xs text-slate-500 uppercase tracking-wider">Brokered by</span>
          <img
            src={agentInfo.brokerageLogoUrl || "/placeholder.svg"}
            alt={agentInfo.brokerage}
            className="h-8 invert brightness-200"
          />
        </div>
      </div>
    </section>
  )
}
