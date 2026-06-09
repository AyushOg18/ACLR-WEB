import { SERVICES } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => {
    const slug = service.href.split("/").pop() || "";
    return { slug };
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find(
    (s) => s.href.split("/").pop() === slug
  );

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Services`,
    description: service.desc,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find(
    (s) => s.href.split("/").pop() === slug
  );

  if (!service) {
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
              href="/services"
              className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.25em] text-blue-300 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={12} /> Back to Services
            </Link>
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-blue-300 block mb-4">
              {service.tagline || "Practice Area"}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 items-start">
            {/* Left Column: Description & Details */}
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-extrabold text-[#252F61] mb-6">Practice Profile Overview</h2>
                <p className="text-[#647084] text-base leading-relaxed">{service.desc}</p>
                <p className="text-[#647084] text-base leading-relaxed mt-4">
                  Acceleron Solutions brings deep expertise, robust project frameworks, and skilled capability consultants to implement, transform, and manage your critical software environments.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-10">
                <h3 className="text-xl font-bold text-[#252F61] mb-6">Core Competencies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-[#F5F7FB] border border-gray-100 rounded-lg">
                      <CheckCircle2 className="text-[#3B4A9E] w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-bold text-[#252F61]">{feature}</h4>
                        <p className="text-xs text-gray-500 mt-1">High-performance engineering capability aligned with enterprise needs.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: CTA Card */}
            <div className="bg-[#0E1535] text-white p-8 lg:p-10 rounded-2xl relative overflow-hidden shadow-xl lg:sticky lg:top-32">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#252F61]/20 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-xl font-bold mb-4">Request a consultation</h3>
              <p className="text-blue-200/70 text-xs leading-relaxed mb-8">
                Connect with our technology specialists to discuss your custom project requirements, integration roadmaps, or capability augmentation needs.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white text-[#0E1535] py-4 px-6 text-xs font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors"
              >
                Consult an expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
