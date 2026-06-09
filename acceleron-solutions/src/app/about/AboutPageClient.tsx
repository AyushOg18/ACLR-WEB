"use client";

import { motion } from "framer-motion";
import { WHY_ACCELERON } from "@/lib/data";
import Link from "next/link";

const timeline = [
  { year: "1946", event: "Gainwell Group Founded", desc: "Eight-decade journey of business excellence begins in Kolkata." },
  { year: "2014", event: "Acceleron Solutions Established", desc: "Tech arm launched to digitize Gainwell Group operations." },
  { year: "2016", event: "SAP Gold Partnership", desc: "Became certified SAP implementation partner." },
  { year: "2018", event: "Salesforce CRM Certification", desc: "Expanded to full Salesforce implementation services." },
  { year: "2020", event: "International Expansion", desc: "Operations extended to USA, Australia, and Singapore." },
  { year: "2023", event: "RISE with SAP Advisory", desc: "Leading RISE with SAP and S/4HANA transformation at scale." },
  { year: "2024", event: "200+ Enterprise Projects", desc: "Crossed milestone of 200+ successful enterprise deliveries." },
];

const locations = ["Kolkata, India", "United States", "Australia", "Singapore", "Nepal", "Bhutan"];

export default function AboutPageClient() {
  return (
    <>
      {/* Mission Statement — Split */}
      <section className="py-28 lg:py-36 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#3B4A9E] block mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252F61] tracking-tight leading-tight mb-6">
                Consulting that creates real, measurable impact.
              </h2>
              <blockquote className="border-l-2 border-[#3B4A9E] pl-5 text-sm text-gray-500 leading-relaxed italic">
                &ldquo;Our vision is to help customers through our consulting approach. Together, we create a better and more sustainable world.&rdquo;
              </blockquote>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-x-8 gap-y-10 border-t lg:border-t-0 lg:border-l border-gray-100 pt-12 lg:pt-0 lg:pl-16">
              {[
                { value: "80 Years", label: "Gainwell Group legacy of operational trust" },
                { value: "300+", label: "Certified SAP, Salesforce & Zoho professionals" },
                { value: "6 Countries", label: "Active delivery presence across global markets" },
                { value: "200+", label: "Enterprise transformation projects delivered" },
              ].map((item) => (
                <div key={item.value}>
                  <div className="text-2xl font-extrabold text-[#252F61] mb-1">{item.value}</div>
                  <div className="text-xs text-gray-400 leading-relaxed">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 bg-[#F5F7FB] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#3B4A9E] block mb-3">
            Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252F61] tracking-tight leading-tight mb-16">
            A measured legacy of innovation.
          </h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-12 gap-6 border-t border-gray-200/80 py-6 group"
              >
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-xs font-bold text-[#3B4A9E] tracking-wider">{item.year}</span>
                </div>
                <div className="col-span-10 sm:col-span-4">
                  <h3 className="text-sm font-bold text-[#252F61]">{item.event}</h3>
                </div>
                <div className="col-span-12 sm:col-span-7 sm:pl-6">
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-gray-200/80" />
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-28 bg-[#0E1535] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-blue-300 block mb-4">
                Global Network
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Serving enterprises across six geographies.
              </h2>
              <p className="text-xs text-blue-200/50 leading-relaxed">
                Our distributed delivery model ensures close collaboration with clients at every timezone while maintaining consistent engineering standards.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  className="border border-white/10 p-4 hover:border-white/25 transition-colors"
                >
                  <span className="text-xs font-bold text-white tracking-wide">{loc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Acceleron */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#3B4A9E] block mb-3">
                Value Proposal
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252F61] tracking-tight leading-tight">
                The Acceleron advantage.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#252F61] hover:text-[#3B4A9E] transition-colors group flex-shrink-0"
            >
              Start a Conversation
              <span className="inline-block transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {WHY_ACCELERON.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-gray-100 pt-6"
              >
                <span className="text-[10px] font-bold tracking-wider text-[#3B4A9E] block mb-3">
                  0{i + 1} /
                </span>
                <h3 className="text-sm font-bold text-[#252F61] mb-2">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#F5F7FB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#0E1535] p-12 md:p-16 text-center">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-blue-300 block mb-4">
              Next Steps
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Ready to work with us?
            </h2>
            <p className="text-xs text-blue-200/50 mb-8 max-w-md mx-auto leading-relaxed">
              Join 150+ enterprises that trust Acceleron Solutions to power their digital transformation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#252F61] px-8 py-3.5 text-xs uppercase font-extrabold tracking-widest hover:bg-blue-50 transition-colors border border-white"
            >
              Consult an Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
