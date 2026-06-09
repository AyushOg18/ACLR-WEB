type IndustryIconProps = {
  slug: string;
  className?: string;
};

const INDUSTRY_ICONS: Record<
  string,
  { label: string; path: string; viewBox: string }
> = {
  mining: {
    label: "Mining",
    viewBox: "0 0 24 24",
    path: "M6 3.5l1.5 1.5L8 7.5 5.5 10 4 8.5 1 11.5 2.5 13 5.5 10 7 11.5 5.5 13 8 15.5 10 13.5l3.5 3.5 2-2-3.5-3.5 2-2 3.5 3.5 1.5-1.5L16.5 9 14 6.5 15.5 5 18.5 8 21 5.5 18.5 3 15.5 6 14 4.5 11.5 7 9 4.5 6 7.5 8.5 10 6 12.5 3.5 10.5 2 12 4.5 14.5",
  },
  manufacturing: {
    label: "Discrete Manufacturing",
    viewBox: "0 0 24 24",
    path: "M3 7.5V20h18V7.5L12 2 3 7.5Zm3 2.5h3v6H6v-6Zm5 0h3v8h-3v-8Zm5 0h3v5h-3v-5Z",
  },
  capitalgoods: {
    label: "Capital Goods",
    viewBox: "0 0 24 24",
    path: "M4 15h16v3H4v-3Zm0-4h16v2H4v-2Zm2-5h12v2H6V6Zm2 6h8v2H8v-2Z",
  },
  logistics: {
    label: "Transportation & Logistics",
    viewBox: "0 0 24 24",
    path: "M3 11h13V8H3v3Zm0 2v5h3v-5H3Zm15-4h3l2 4h-5V9Zm0 6h5v3h-5v-3Zm-2-1h-3v-2h3v2Zm-5 2H8V9h3v9Z",
  },
  transportation: {
    label: "Transportation & Logistics",
    viewBox: "0 0 24 24",
    path: "M3 11h13V8H3v3Zm0 2v5h3v-5H3Zm15-4h3l2 4h-5V9Zm0 6h5v3h-5v-3Zm-2-1h-3v-2h3v2Zm-5 2H8V9h3v9Z",
  },
  utilities: {
    label: "Utilities",
    viewBox: "0 0 24 24",
    path: "M12 2l2.5 7H19l-6 4.5L9 9h4.5L12 2Zm-8 14h16v6H4v-6Zm4-2h8v2H8v-2Z",
  },
  engineering: {
    label: "Engineering & Construction",
    viewBox: "0 0 24 24",
    path: "M4 17h16v2H4v-2Zm2-3h12v3H6v-3Zm1-4h10v3H7V10Zm2-3h6v3H9V7Z",
  },
  default: {
    label: "Industry",
    viewBox: "0 0 24 24",
    path: "M4 4h16v16H4V4Zm3 3v10h10V7H7Zm2 2h6v2H9V9Zm0 4h6v2H9v-2Z",
  },
};

export default function IndustryIcon({ slug, className = "" }: IndustryIconProps) {
  const normalized = slug.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const icon = INDUSTRY_ICONS[normalized] ?? INDUSTRY_ICONS.default;

  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-white shadow-sm shadow-black/10 ${className}`}
      aria-hidden="true"
      title={icon.label}
    >
      <svg viewBox={icon.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <path d={icon.path} fill="currentColor" />
      </svg>
    </span>
  );
}
