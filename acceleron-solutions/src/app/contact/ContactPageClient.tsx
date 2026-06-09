"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  "SAP S/4HANA", "Salesforce CRM", "Zoho Suite",
  "Custom Software Development", "IT Infrastructure",
  "Cyber Security", "CXO Advisory", "Analytics & BI", "Other",
];

const inputClass =
  "w-full bg-transparent border-b border-gray-200 py-3 text-sm text-[#252F61] placeholder-gray-300 focus:outline-none focus:border-[#252F61] transition-colors";

const labelClass = "block text-[10px] uppercase font-bold tracking-widest text-[#3B4A9E] mb-2";

export default function ContactPageClient() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", phone: "", service: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  };

  return (
    <section className="py-28 bg-[#F5F7FB] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left — Reassurance */}
          <div className="lg:col-span-4">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#3B4A9E] block mb-4">
              Why Reach Out
            </span>
            <h2 className="text-2xl font-extrabold text-[#252F61] tracking-tight leading-tight mb-6">
              Your inquiry is handled personally by a practice lead.
            </h2>
            <div className="space-y-8 mt-10">
              {[
                { n: "01", title: "Free initial consultation", desc: "No commitment or fees for the discovery call." },
                { n: "02", title: "Certified practice experts", desc: "SAP, Salesforce & Zoho certified professionals respond." },
                { n: "03", title: "Transparent fixed pricing", desc: "We quote committed timelines and guaranteed budgets." },
                { n: "04", title: "Global delivery capability", desc: "On-ground presence in 6+ countries for seamless execution." },
              ].map((item) => (
                <div key={item.n} className="flex gap-4 border-t border-gray-200 pt-6">
                  <span className="text-xs font-bold text-[#3B4A9E] pt-0.5">{item.n} /</span>
                  <div>
                    <div className="text-xs font-bold text-[#252F61] mb-1">{item.title}</div>
                    <div className="text-xs text-gray-400 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-gray-100 p-8 sm:p-12">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-16 text-center"
                >
                  <div className="w-12 h-12 border-2 border-[#252F61] flex items-center justify-center mx-auto mb-6 text-[#252F61] text-xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-xl font-extrabold text-[#252F61] mb-2">Message Received</h3>
                  <p className="text-xs text-gray-400">Our team will respond within 24 business hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#3B4A9E] block mb-8">
                      Inquiry Form
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input name="name" type="text" required value={form.name}
                          onChange={handleChange} placeholder="Jane Smith"
                          className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Work Email *</label>
                        <input name="email" type="email" required value={form.email}
                          onChange={handleChange} placeholder="jane@company.com"
                          className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Company</label>
                        <input name="company" type="text" value={form.company}
                          onChange={handleChange} placeholder="Acme Corporation"
                          className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Phone</label>
                        <input name="phone" type="tel" value={form.phone}
                          onChange={handleChange} placeholder="+91 98765 43210"
                          className={inputClass} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Practice Area of Interest</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}>
                      <option value="">Select a practice</option>
                      {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Project Brief *</label>
                    <textarea name="message" required value={form.message}
                      onChange={handleChange} rows={4}
                      placeholder="Describe your project, challenges, or goals..."
                      className={`${inputClass} resize-none`} />
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <p className="text-[10px] text-gray-300">
                      By submitting you agree to our{" "}
                      <a href="/privacy-policy" className="text-[#252F61] hover:underline">Privacy Policy</a>.
                    </p>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="bg-[#252F61] text-white px-8 py-3 text-xs uppercase font-extrabold tracking-widest hover:bg-[#3B4A9E] transition-colors disabled:opacity-60"
                    >
                      {status === "loading" ? "Sending…" : "Send Inquiry"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
