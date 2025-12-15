import { agentInfo } from "@/lib/propertyData"

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a href="https://www.buywithapple.com">
              <img src={agentInfo.appleLogoUrl || "/placeholder.svg"} alt="Apple Real Estate" className="h-5" />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href={agentInfo.buyUrl} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              Buy
            </a>
            <a href={agentInfo.sellUrl} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              Sell
            </a>
            <a href="#contact" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              Contact
            </a>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-sm text-slate-500">
              {agentInfo.name} · {agentInfo.phone}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Serving Frisco, Plano, McKinney, Allen, Prosper, Celina & Caddo Mills
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Brokered by</span>
            <img
              src={agentInfo.brokerageLogoUrl || "/placeholder.svg"}
              alt={agentInfo.brokerage}
              className="h-3 opacity-50"
            />
          </div>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Apple Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
