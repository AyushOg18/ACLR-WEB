type Props = {
  title: string;
  items: string[];
};

export default function IndustryDetailSection({ title, items }: Props) {
  return (
    <section className="rounded-[32px] border border-[#D5DBE6] bg-white p-8 shadow-[0_24px_60px_rgba(37,47,97,0.06)]">
      <h3 className="text-xl font-extrabold text-[#252F61] tracking-tight mb-6">{title}</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item} className="flex gap-4">
            <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E8EEFF] text-xs font-bold uppercase tracking-[0.2em] text-[#3B4A9E]">•</span>
            <p className="text-sm leading-7 text-[#475569]">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
