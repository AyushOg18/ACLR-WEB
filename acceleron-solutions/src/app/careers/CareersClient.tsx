"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const openings = [
  { id: 1, title: "SAP S/4HANA Consultant", dept: "SAP Practice", location: "Kolkata, India", type: "Full-time", exp: "3–5 years" },
  { id: 2, title: "Salesforce Developer", dept: "Salesforce Practice", location: "Kolkata, India", type: "Full-time", exp: "2–4 years" },
  { id: 3, title: "Zoho CRM Specialist", dept: "Zoho Practice", location: "Remote", type: "Full-time", exp: "1–3 years" },
  { id: 4, title: "Full Stack Developer", dept: "Software Engineering", location: "Kolkata, India", type: "Full-time", exp: "2–4 years" },
  { id: 5, title: "Cyber Security Analyst", dept: "Security Practice", location: "Kolkata, India", type: "Full-time", exp: "2–4 years" },
  { id: 6, title: "Business Analyst", dept: "CXO Advisory", location: "Kolkata / Remote", type: "Full-time", exp: "2–5 years" },
];

const perks = [
  { n: "01", title: "Accelerated Growth Track", desc: "Structured career progression with visible leadership pathways." },
  { n: "02", title: "Certification Support", desc: "Full-funded SAP, Salesforce & Zoho certifications." },
  { n: "03", title: "Global Client Exposure", desc: "Work on enterprise projects across 6 countries." },
  { n: "04", title: "Competitive Packages", desc: "Industry-benchmarked compensation reviewed annually." },
  { n: "05", title: "Flexible Work Model", desc: "Hybrid and remote-friendly for most practice areas." },
  { n: "06", title: "Inclusive Culture", desc: "Collaborative, open environment built on accountability." },
];

const inputClass =
  "w-full bg-transparent border-b border-gray-200 py-3 text-sm text-[#252F61] placeholder-gray-300 focus:outline-none focus:border-[#252F61] transition-colors";

const labelClass = "block text-[10px] uppercase font-bold tracking-widest text-[#3B4A9E] mb-2";

export default function CareersClient() {
  const [selected, setSelected] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  };

  return (
    <>
      {/* Why Join — Perks Grid */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#3B4A9E] block mb-3">
                Why Join Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252F61] tracking-tight leading-tight">
                Grow. Learn. Lead. With Acceleron.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.n}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-gray-100 pt-6"
              >
                <span className="text-[10px] font-bold tracking-wider text-[#3B4A9E] block mb-3">{perk.n} /</span>
                <h3 className="text-sm font-bold text-[#252F61] mb-2">{perk.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-28 bg-[#F5F7FB] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#3B4A9E] block mb-3">
            Open Positions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252F61] tracking-tight leading-tight mb-16">
            Current opportunities.
          </h2>
          <div className="space-y-0">
            {openings.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="border-t border-gray-200 py-6 cursor-pointer group"
                  onClick={() => setSelected(selected === job.id ? null : job.id)}
                >
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-12 sm:col-span-5">
                      <h3 className="text-sm font-bold text-[#252F61] group-hover:text-[#3B4A9E] transition-colors">
                        {job.title}
                      </h3>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <span className="text-xs text-gray-400">{job.dept}</span>
                    </div>
                    <div className="col-span-4 sm:col-span-2">
                      <span className="text-xs text-gray-400">{job.location}</span>
                    </div>
                    <div className="col-span-2 sm:col-span-2 text-right">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#3B4A9E]">
                        {selected === job.id ? "↑ Close" : "↓ View"}
                      </span>
                    </div>
                  </div>

                  {selected === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-100 overflow-hidden"
                    >
                      <p className="text-xs text-gray-500 leading-relaxed mb-4 max-w-xl">
                        We are looking for an experienced {job.title} to join our {job.dept} team. You will work on enterprise transformation projects across diverse global clients.
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#3B4A9E] border border-[#3B4A9E]/30 px-3 py-1">
                          {job.type}
                        </span>
                        <span className="text-[10px] text-gray-400">{job.exp} experience</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
                            setForm((f) => ({ ...f, position: job.title }));
                          }}
                          className="text-[10px] font-bold uppercase tracking-widest text-[#252F61] hover:text-[#3B4A9E] transition-colors ml-auto"
                        >
                          Apply for this role →
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
            <div className="border-t border-gray-200" />
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-28 bg-white border-b border-gray-100" id="apply-form">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#3B4A9E] block mb-4">
                Apply Now
              </span>
              <h2 className="text-2xl font-extrabold text-[#252F61] tracking-tight leading-tight mb-4">
                Submit your application.
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed">
                Our talent team reviews every submission carefully. We will contact shortlisted candidates within 5 business days.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="bg-[#F5F7FB] border border-gray-100 p-8 sm:p-12">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-16 text-center"
                  >
                    <div className="w-12 h-12 border-2 border-[#252F61] flex items-center justify-center mx-auto mb-6 text-[#252F61] text-xl font-bold">✓</div>
                    <h3 className="text-xl font-extrabold text-[#252F61] mb-2">Application Submitted</h3>
                    <p className="text-xs text-gray-400">We will review your profile and reach out within 5 business days.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                      {[
                        { name: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                        { name: "email", label: "Email Address", type: "email", placeholder: "jane@gmail.com" },
                        { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
                        { name: "position", label: "Position Applying For", type: "text", placeholder: "SAP S/4HANA Consultant" },
                      ].map((f) => (
                        <div key={f.name}>
                          <label className={labelClass}>{f.label} *</label>
                          <input
                            type={f.type}
                            name={f.name}
                            required
                            value={form[f.name as keyof typeof form]}
                            onChange={(e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))}
                            placeholder={f.placeholder}
                            className={inputClass}
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className={labelClass}>Why do you want to join Acceleron? *</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                        placeholder="Share your experience and motivation..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <div className="flex justify-end pt-4 border-t border-gray-200">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="bg-[#252F61] text-white px-8 py-3 text-xs uppercase font-extrabold tracking-widest hover:bg-[#3B4A9E] transition-colors disabled:opacity-60"
                      >
                        {status === "loading" ? "Submitting…" : "Submit Application"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
