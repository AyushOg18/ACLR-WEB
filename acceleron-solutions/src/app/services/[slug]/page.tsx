import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ChevronRight, HelpCircle, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import servicesData from "@/lib/services.json";

interface ServiceData {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
  original_url: string;
}

const typedServices = servicesData as Record<string, ServiceData>;

const CATEGORY_MAP: Record<string, string> = {
  "sap": "SAP",
  "salesforce": "Salesforce",
  "zoho": "Zoho Suite",
  "software-development": "Software Development",
  "it-infrastructure": "IT Infrastructure",
  "cyber-security": "Cyber Security",
  "cxo-advisory": "CXO Advisory",
  "analytics": "Analytics",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const serviceSlugs = Object.keys(typedServices).map((slug) => ({ slug }));
  const categorySlugs = Object.keys(CATEGORY_MAP).map((slug) => ({ slug }));
  return [...serviceSlugs, ...categorySlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  if (CATEGORY_MAP[slug]) {
    const categoryName = CATEGORY_MAP[slug];
    return {
      title: `${categoryName} Services | Acceleron Solutions`,
      description: `Explore our specialized enterprise capabilities in ${categoryName}.`,
    };
  }

  const service = typedServices[slug];
  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | Acceleron Solutions`,
    description: service.tagline || service.description,
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;

  // Case 1: Category Landing Page (e.g. /services/sap)
  if (CATEGORY_MAP[slug]) {
    const categoryName = CATEGORY_MAP[slug];
    const categoryServices = Object.values(typedServices).filter(
      (s) => s.category === categoryName
    );

    return (
      <div className="bg-[#F5F7FB] min-h-screen pt-40 pb-24">
        <div className="page-container">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-[#252F61]/50 mb-10">
            <Link href="/" className="hover:text-[#252F61] transition-colors">Home</Link>
            <ChevronRight size={10} />
            <Link href="/services" className="hover:text-[#252F61] transition-colors">Services</Link>
            <ChevronRight size={10} />
            <span className="text-[#252F61]/80">{categoryName}</span>
          </div>

          <div className="max-w-4xl mb-16">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#252F61]/60 mb-6 border-b border-[#252F61]/20 pb-2">
              Practice Area
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#252F61] tracking-tight leading-[1.1] mb-6">
              {categoryName} Capabilities
            </h1>
            <p className="text-[#647084] text-lg sm:text-xl leading-relaxed max-w-3xl">
              Acceleron Solutions provides robust, end-to-end consulting, implementation, and support services for your {categoryName} ecosystem.
            </p>
          </div>

          {/* Grid of specific capabilities */}
          <div className="grid gap-px bg-[#252F61]/7 border border-[#252F61]/7 sm:grid-cols-2 lg:grid-cols-3">
            {categoryServices.map((service, i) => (
              <div key={service.slug} className="group flex flex-col h-full bg-white p-8 hover:bg-[#F5F7FB] transition-colors">
                <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#252F61]/40 mb-3">
                  {service.category}
                </span>
                <h3 className="text-[1.05rem] font-extrabold text-[#252F61] leading-snug mb-3">
                  {service.title}
                </h3>
                <p className="text-[13px] text-[#647084] leading-[1.75] line-clamp-3 mb-6 flex-1">
                  {service.tagline || service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#252F61]/8 mt-auto">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#252F61] flex items-center gap-2"
                  >
                    View capability <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Case 2: Specific Service Page (e.g. /services/sap-hxm-cx)
  const service = typedServices[slug];
  if (!service) {
    notFound();
  }

  const similarServices = Object.values(typedServices)
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-44 pb-24 bg-[#0E1535] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
             style={{
               backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
               backgroundSize: "60px 60px"
             }} 
        />
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-[#252F61]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="page-container relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/50 mb-10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={10} />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight size={10} />
            <Link href={`/services/${slug.split("-")[0]}`} className="hover:text-white transition-colors uppercase">{service.category}</Link>
            <ChevronRight size={10} />
            <span className="text-white/80">{service.title}</span>
          </div>

          <div className="max-w-4xl">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.28em] text-white/60 mb-6 border-b border-white/20 pb-2">
              {service.category} PRACTICE AREA
            </span>
            <h1 className="heading-xl text-white tracking-tight leading-[1.05]">
              {service.title}
            </h1>
            {service.tagline && (
              <p className="mt-8 text-lg sm:text-xl font-normal text-white/72 leading-relaxed max-w-3xl">
                {service.tagline}
              </p>
            )}
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#0E1535] px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-[#F5F7FB]"
              >
                Talk to an Expert
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border border-white/20 text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-white/5"
              >
                All Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW & BENEFITS */}
      <section className="section-y bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-start">
            <div>
              <span className="eyebrow mb-6">Overview</span>
              <h2 className="text-3xl font-extrabold text-[#252F61] tracking-tight leading-tight mb-8">
                Disciplined delivery aligned with business objectives.
              </h2>
              <div className="space-y-6 text-[#647084] text-[16px] sm:text-[17px] leading-[1.85]">
                {service.description.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {service.benefits && service.benefits.length > 0 && (
              <div className="border border-[#252F61]/8 bg-[#F5F7FB] p-8 lg:p-10">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#252F61]/60 block mb-6">
                  Key Capabilities
                </span>
                <h3 className="text-xl font-extrabold text-[#252F61] mb-6">Competencies & Value</h3>
                <ul className="space-y-5">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 size={18} className="text-[#252F61] mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-6 text-[#647084] font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section-y bg-[#F5F7FB] border-y border-[#252F61]/8">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <span className="eyebrow mb-4">FAQ</span>
                <h2 className="text-3xl font-extrabold text-[#252F61]">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-6">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-[#252F61]/8 p-6 sm:p-8">
                    <h3 className="text-base sm:text-lg font-extrabold text-[#252F61] flex gap-3 items-start">
                      <HelpCircle size={18} className="text-[#252F61]/50 mt-1 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm sm:text-base text-[#647084] leading-relaxed pl-7 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SIMILAR SERVICES */}
      {similarServices.length > 0 && (
        <section className="section-y bg-white">
          <div className="page-container">
            <div className="mb-14">
              <span className="eyebrow mb-4">Ecosystem</span>
              <h2 className="text-3xl font-extrabold text-[#252F61]">Other {service.category} Capabilities</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {similarServices.map((item) => (
                <div key={item.slug} className="border border-[#252F61]/8 p-8 flex flex-col justify-between hover:bg-[#F5F7FB] transition-colors">
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#252F61]/50 block mb-4">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-extrabold text-[#252F61] mb-4">{item.title}</h3>
                    <p className="text-sm leading-6 text-[#647084] line-clamp-3 mb-6">{item.tagline || item.description}</p>
                  </div>
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#252F61] hover:text-[#252F61]/75"
                  >
                    View capability <ArrowUpRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA STRIP */}
      <section className="bg-[#0E1535] text-white py-20 relative overflow-hidden">
        <div className="page-container relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/50 block mb-3">
              Next Steps
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
              Ready to explore our solutions for your enterprise?
            </h2>
            <p className="mt-3 text-white/60 text-sm max-w-xl">
              Discuss your implementation, integration, or custom development requirements with our practice directors.
            </p>
          </div>
          <div className="flex flex-shrink-0 gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#0E1535] px-7 py-4 text-xs font-bold uppercase tracking-wider hover:bg-[#F5F7FB] transition-colors"
            >
              Consult our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
