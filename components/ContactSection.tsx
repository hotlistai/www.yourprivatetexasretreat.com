"use client"

import { useState, type FormEvent } from "react"
import { agentInfo, propertyDetails, formatPhoneForLink } from "@/lib/propertyData"
import { Phone, Mail, CheckCircle, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", preferredDate: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">Schedule a Tour</h2>
          <p className="text-slate-500">
            See {propertyDetails.address} in person. {agentInfo.name.split(" ")[0]} will reach out within 24 hours.
          </p>
        </div>

        {/* Quick Contact */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={`tel:${formatPhoneForLink(agentInfo.phone)}`}
            className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full"
          >
            <Phone className="w-4 h-4" />
            {agentInfo.phone}
          </a>
          <a
            href={`mailto:${agentInfo.email}?subject=Inquiry: ${propertyDetails.address}`}
            className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full"
          >
            <Mail className="w-4 h-4" />
            {agentInfo.email}
          </a>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Request Sent!</h3>
              <p className="text-slate-500">{agentInfo.name.split(" ")[0]} will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all bg-slate-50/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all bg-slate-50/50"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all bg-slate-50/50"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-slate-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all resize-none bg-slate-50/50"
                  placeholder="Any questions or requests?"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium"
              >
                <Send className="w-4 h-4" />
                Request a Showing
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
