import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Acceleron Solutions",
  description: "Get in touch with Acceleron Solutions. Reach our enterprise consulting experts at our Kolkata headquarters.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-48 pb-28 bg-[#0E1535] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#252F61]/20 rounded-full blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-6">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-blue-300 block mb-4">
                Get In Touch
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
                Start a conversation with our experts.
              </h1>
              <p className="text-sm text-blue-200/50 leading-relaxed max-w-md">
                We respond within 24 business hours with a tailored consultation plan aligned to your transformation needs.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 gap-4 lg:pl-12">
              {[
                { label: "Headquarters", value: "3rd Floor, STPI IT Park, Salt Lake, Sector V, Kolkata — 700091" },
                { label: "Email", value: "info@acceleronsolutions.io" },
                { label: "Response SLA", value: "Within 24 business hours" },
              ].map((item) => (
                <div key={item.label} className="border-t border-white/10 pt-4">
                  <div className="text-[9px] uppercase font-bold tracking-widest text-blue-300 mb-1">{item.label}</div>
                  <div className="text-xs text-blue-200/60">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactPageClient />
    </>
  );
}
