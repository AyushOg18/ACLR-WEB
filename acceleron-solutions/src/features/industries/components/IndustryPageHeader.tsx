import Link from "next/link";
import type { Industry } from "@/features/industries/data/industries";
import IndustryIcon from "@/features/industries/components/IndustryIcon";
import LazyImage from "@/components/ui/LazyImage";
import styles from "@/features/industries/styles/industryStyles.module.css";

type Props = {
  industry: Industry;
};

export default function IndustryPageHeader({ industry }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0E1535] text-white">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `linear-gradient(180deg, rgba(14,21,53,0.95), rgba(14,21,53,0.7))` }} />
      <div className={`absolute top-0 right-0 h-full w-full ${styles.industryHeroGlow}`} />
      <div className="page-container relative py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_0.95fr] xl:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-100">
              <IndustryIcon slug={industry.slug} className="h-10 w-10 rounded-3xl bg-white/10 text-[#7AB8FF]" />
              <span className="font-semibold uppercase tracking-[0.2em] text-blue-100/90">{industry.title}</span>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-blue-300 mb-4 inline-block">
              Industry focus
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              {industry.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-blue-100/90">
              {industry.heroSubtitle}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.18em] text-[#0E1535] transition duration-300 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Talk to our sector team
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore services
              </Link>
            </div>
          </div>
          <div className="rounded-[32px] bg-[#192B5D]/80 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.14)]">
            <div className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-[#0A1640] relative h-72">
              <LazyImage
                src={industry.image}
                alt={`${industry.title} illustration`}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl bg-white/5 p-6">
                <span className="block text-[10px] uppercase tracking-[0.28em] text-blue-200/80">Overview</span>
                <p className="mt-4 text-sm leading-7 text-blue-100/85">{industry.overview}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {industry.stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-white/5 p-5">
                    <span className="block text-3xl font-extrabold text-white">{stat.value}</span>
                    <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-blue-200/70">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
