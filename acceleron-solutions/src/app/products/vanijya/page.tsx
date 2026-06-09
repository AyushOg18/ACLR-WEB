"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Check, Plus, Minus } from "lucide-react";

export default function VanijyaPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Vanijya?",
      answer: "Vanijya is a specialized enterprise e-commerce platform designed specifically for industrial sectors. It enables distributors, suppliers, and clients to discover, buy, and manage heavy engineering equipment, spare parts, and associated logistics workflows seamlessly.",
    },
    {
      question: "How does Vanijya simplify the purchasing process?",
      answer: "Vanijya replaces legacy catalog systems with a modern search engine, automated compatibility checks, instant quote generation, and simple order workflows that ensure procurement takes minutes instead of days.",
    },
    {
      question: "Can I track my orders in Vanijya?",
      answer: "Yes. Vanijya comes equipped with a comprehensive tracking dashboard that monitors parts from dispatch to shipping and final warehouse delivery, keeping you informed at every operational stage.",
    },
    {
      question: "Are there any special discounts available?",
      answer: "The platform supports custom B2B pricing rules, bulk discount frameworks, contracts, and seasonal promotional coupons that automatically calculate best pricing models for return customers.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const partners = [
    "Client Alpha", "Client Beta", "Client Gamma", "Client Delta",
    "Client Epsilon", "Client Zeta", "Client Eta", "Client Theta",
    "Client Iota", "Client Kappa", "Client Lambda", "Client Mu"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Inline Styles for infinite carousel & mask */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }
        .fade-edges {
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
      `}</style>

      {/* HERO SECTION WITH INTEGRATED BREADCRUMBS */}
      <section className="bg-gradient-to-r from-[#0B1C3F] to-[#1A365D] text-white pt-44 pb-20 lg:pt-48 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs font-semibold text-blue-200/60 uppercase tracking-wider mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-blue-200/40" />
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <ChevronRight size={12} className="text-blue-200/40" />
            <span className="text-white font-bold">Vanijya (E-Commerce)</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8 max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                Vanijya (E-Commerce)
              </h1>
              <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed font-light">
                The next-generation B2B marketplace engineered for heavy machinery, spare parts, and complex industrial supply chains.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-block bg-[#F97316] text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm shadow-lg hover:bg-[#EA580C] hover:shadow-xl transition-all"
                >
                  Schedule a Free Demo
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-[3/4] rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 border border-white/10 p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
                {/* Mockup Top Bar */}
                <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40" />
                  <div className="h-4 flex-1 bg-white/5 rounded-sm ml-2" />
                </div>
                {/* Mockup Content Placeholders */}
                <div className="space-y-4">
                  <div className="h-32 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                    <span className="text-xs uppercase font-bold tracking-widest text-white/40">Product Catalog</span>
                  </div>
                  <div className="h-8 w-2/3 bg-white/10 rounded-sm" />
                  <div className="h-4 w-full bg-white/5 rounded-sm" />
                  <div className="h-4 w-5/6 bg-white/5 rounded-sm" />
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-10 bg-white/10 rounded-sm" />
                    <div className="h-10 bg-[#F97316]/80 rounded-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "DID YOU KNOW?" HIGHLIGHT STRIP */}
      <section className="bg-[#F0F4F8] py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left side: decorative placeholder */}
            <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-tr from-[#0B1C3F] to-indigo-600 shadow-lg flex items-center justify-center p-6">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:16px_16px]" />
              <div className="text-center relative z-10">
                <span className="text-xs uppercase font-bold tracking-[0.3em] text-blue-200">Acceleron Solutions</span>
                <h3 className="text-xl font-extrabold text-white mt-2">Enterprise Technology</h3>
              </div>
            </div>

            {/* Right side: copy content */}
            <div className="space-y-4">
              <span className="text-sm font-extrabold text-[#F97316] tracking-widest block uppercase">
                Did You Know!
              </span>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                Vanijya cuts average B2B industrial procurement cycles by up to 70% by automating compatibility mapping and contract pricing in real-time.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                By integrating directly with your enterprise resource systems, it eliminates manual processing bottlenecks and ensures instant quotes are matched with current live inventories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT OVERVIEW SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1C3F] tracking-tight">
              Vanijya: Streamlining E-Commerce for Industry
            </h2>
            <div className="h-1 w-20 bg-[#F97316] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side: Product Image Placeholder */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-xl flex items-center justify-center p-12">
              <div className="absolute inset-0 bg-[linear-gradient(to_br,rgba(0,0,0,0.02),transparent)]" />
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col justify-between p-6">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-gray-400">Order Dashboard</span>
                  <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-widest bg-green-100 text-green-800 rounded-sm">Live</span>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-300 w-1/3 rounded-sm" />
                  <div className="h-3 bg-gray-300 w-2/3 rounded-sm" />
                  <div className="h-8 bg-gray-300 w-full rounded-sm" />
                </div>
                <div className="flex justify-between items-center border-t border-gray-300/40 pt-4">
                  <span className="text-xs font-bold text-gray-500">Total Transactions</span>
                  <span className="text-sm font-black text-gray-700">$1.4M</span>
                </div>
              </div>
            </div>

            {/* Right Side: Description */}
            <div className="space-y-6">
              <p className="text-base text-gray-600 leading-relaxed">
                Vanijya is engineered to handle the complexities of B2B commerce. With support for modular part browsing, customizable shipping and delivery options, customized contract discount frameworks, and real-time order tracking from dispatch to site delivery, it powers smooth transactions.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Give your buyers the experience of consumer retail with the scale, security, rules, and integration required for industrial enterprise buyers.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block border-2 border-[#0B1C3F] text-[#0B1C3F] font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-[#0B1C3F] hover:text-white transition-all"
                >
                  Request a Free Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "WHY CHOOSE US?" FEATURE CARDS SECTION */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1C3F] tracking-tight">
                Why Choose Acceleron Solutions Products?
              </h2>
              <div className="h-1 w-20 bg-[#F97316]" />
            </div>
            <div>
              <Link
                href="/contact"
                className="inline-block bg-[#0B1C3F] text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm shadow-md hover:bg-[#1A365D] transition-colors"
              >
                Hire Our Experts
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-[#0B1C3F] hover:shadow-md transition-shadow flex gap-5">
              <div className="w-10 h-10 rounded-full bg-green-50 border border-green-200 flex-shrink-0 flex items-center justify-center">
                <Check className="text-green-600 w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1C3F] mb-2">End-to-End Support</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We stand by your side from initial deployment, data integration, through custom training and ongoing support.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-[#0B1C3F] hover:shadow-md transition-shadow flex gap-5">
              <div className="w-10 h-10 rounded-full bg-green-50 border border-green-200 flex-shrink-0 flex items-center justify-center">
                <Check className="text-green-600 w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1C3F] mb-2">Customer-Centric Innovation</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Engineered with an intuitive UX-first mindset, supporting real-time tracking dashboards and predictive analytics insights.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-[#0B1C3F] hover:shadow-md transition-shadow flex gap-5">
              <div className="w-10 h-10 rounded-full bg-green-50 border border-green-200 flex-shrink-0 flex items-center justify-center">
                <Check className="text-green-600 w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1C3F] mb-2">Cost-Effective Solutions</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Competitive pricing schemas designed to scale gracefully alongside your sales volume without compromises.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-[#0B1C3F] hover:shadow-md transition-shadow flex gap-5">
              <div className="w-10 h-10 rounded-full bg-green-50 border border-green-200 flex-shrink-0 flex items-center justify-center">
                <Check className="text-green-600 w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1C3F] mb-2">Reliable 24/7 Assistance</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Always-on technical operations team prepared to resolve critical system queries whenever they arise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PARTNERS / CLIENTS LOGO CAROUSEL */}
      <section className="py-20 bg-white overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1C3F] tracking-tight">
              Our Partners
            </h2>
            <div className="h-1 w-12 bg-[#F97316] mx-auto mt-3" />
          </div>
        </div>

        {/* Carousel Ticker */}
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 overflow-hidden fade-edges">
          <div className="animate-marquee gap-8 py-2">
            {/* First Set of Logos */}
            {partners.map((partner, i) => (
              <div
                key={`p1-${i}`}
                className="w-40 h-16 border border-gray-200/80 rounded-lg flex items-center justify-center bg-gray-50/50 hover:bg-white transition-colors select-none font-bold text-gray-400 text-xs tracking-wider"
              >
                {partner}
              </div>
            ))}
            {/* Duplicated Set for Infinite Scroll */}
            {partners.map((partner, i) => (
              <div
                key={`p2-${i}`}
                className="w-40 h-16 border border-gray-200/80 rounded-lg flex items-center justify-center bg-gray-50/50 hover:bg-white transition-colors select-none font-bold text-gray-400 text-xs tracking-wider"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION SECTION */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1C3F] tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 bg-[#F97316] mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFAQ === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200/60 rounded-xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-[#0B1C3F] text-base hover:bg-gray-50/50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 border-t border-gray-50 text-sm text-gray-500 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
