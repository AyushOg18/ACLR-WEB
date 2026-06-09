import type { Industry } from "@/features/industries/data/industries";

type Props = {
  industry: Pick<Industry, "title" | "menuDesc" | "image" | "href">;
};

export default function IndustryMegaPreview({ industry }: Props) {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-[#F5F7FB] p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,74,158,0.08),transparent_35%)]" />
      <div className="relative z-10 grid gap-6">
        <span className="text-[10px] uppercase tracking-[0.24em] text-[#3B4A9E]">Live preview</span>
        <div className="rounded-[28px] overflow-hidden border border-[#D5DBE6] bg-white">
          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${industry.image})` }} />
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#252F61]">{industry.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#475569]">{industry.menuDesc}</p>
          </div>
        </div>
        <a
          href={industry.href}
          className="inline-flex items-center justify-center rounded-full border border-[#3B4A9E] bg-[#3B4A9E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#25316f]"
        >
          Visit sector page
        </a>
      </div>
    </div>
  );
}
