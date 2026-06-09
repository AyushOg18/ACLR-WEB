import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products & Solutions | Acceleron Solutions",
  description: "Proprietary software products by Acceleron Solutions — Vanijya, FSM, LMS, WOMS, Suraksha, QMS.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-48 pb-28 bg-[#0E1535] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#252F61]/25 rounded-full blur-[140px]" />
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
              Proprietary Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              In-house software built for industry scale.
            </h1>
            <p className="text-sm text-blue-200/50 leading-relaxed max-w-xl">
              Over a decade of proprietary product development — solving real operational challenges across manufacturing, supply chain, quality management, and field services.
            </p>
          </div>
        </div>
      </section>

      <ProductsClient />
    </>
  );
}
