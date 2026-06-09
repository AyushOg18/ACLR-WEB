import type { Metadata } from "next";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = {
  title: "Insights & Perspectives | Acceleron Solutions",
  description: "Enterprise technology insights on SAP, Salesforce, digital transformation, cyber security, and the future of enterprise IT.",
};

export default function BlogsPage() {
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
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-blue-300 block mb-4">
              Thought Leadership
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Insights & Perspectives
            </h1>
            <p className="text-sm text-blue-200/50 leading-relaxed max-w-lg">
              Expert analysis on SAP, Salesforce, digital transformation, cyber security, and the evolving enterprise technology landscape from our practice leads.
            </p>
          </div>
        </div>
      </section>

      <BlogsClient />
    </>
  );
}
