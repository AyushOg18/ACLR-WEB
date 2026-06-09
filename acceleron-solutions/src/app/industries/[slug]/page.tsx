import { INDUSTRIES } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Building2 } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES.map((industry) => {
    const slug = industry.href.split("/").pop() || "";
    return { slug };
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find(
    (ind) => ind.href.split("/").pop() === slug
  );

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: `${industry.title} Solutions | Industries`,
    description: industry.desc,
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRIES.find(
    (ind) => ind.href.split("/").pop() === slug
  );

  if (!industry) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
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
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.25em] text-blue-300 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={12} /> Back to Industries
            </Link>
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-blue-300 block mb-4">
              {industry.stat || "Industry Vertical"}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              {industry.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 items-start">
            {/* Left Column: Industry Info & Image */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-extrabold text-[#252F61] mb-6">Sector Operations & Technology</h2>
                <p className="text-[#647084] text-base leading-relaxed">{industry.desc}</p>
                <p className="text-[#647084] text-base leading-relaxed mt-4">
                  We design and implement custom digital infrastructure, supply chain models, and analytical tools tailored to the specific regulatory and mechanical environments of the {industry.title} sector.
                </p>
              </div>

              {/* Industry Header Image */}
              <div className="border border-gray-100 rounded-2xl overflow-hidden aspect-[16/9] relative shadow-sm">
                <img
                  src={industry.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"}
                  alt={industry.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="border-t border-gray-100 pt-10">
                <h3 className="text-xl font-bold text-[#252F61] mb-6">Target Operations Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#3B4A9E] w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#252F61]">Process Automation</h4>
                      <p className="text-xs text-gray-500 mt-1">Replacing manual field reports and logging with integrated app inputs and sensor alerts.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#3B4A9E] w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#252F61]">Supply Chain Visibility</h4>
                      <p className="text-xs text-gray-500 mt-1">Consolidating shipping, warehousing, and procurement into centralized dashboards.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#3B4A9E] w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#252F61]">Safety & Risk Compliance</h4>
                      <p className="text-xs text-gray-500 mt-1">Providing field operators with instant SOS triggers and digitizing incident investigation cycles.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#3B4A9E] w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#252F61]">Predictive Asset Maintenance</h4>
                      <p className="text-xs text-gray-500 mt-1">Minimizing downtime of heavy equipment by logging runtime metrics and scheduling audits.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: CTA Card */}
            <div className="bg-[#0E1535] text-white p-8 lg:p-10 rounded-2xl relative overflow-hidden shadow-xl lg:sticky lg:top-32">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#252F61]/20 rounded-full blur-2xl pointer-events-none" />
              <Building2 className="text-blue-300 w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold mb-4">Connect with an Expert</h3>
              <p className="text-blue-200/70 text-xs leading-relaxed mb-8">
                Consult with our domain-specific architects to shape your digital blueprint for the {industry.title} space.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white text-[#0E1535] py-4 px-6 text-xs font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors"
              >
                Discuss with Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
