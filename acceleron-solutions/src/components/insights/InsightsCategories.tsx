import Link from "next/link";
import { motion } from "framer-motion";
import type { InsightCategory } from "@/lib/data";

type Props = {
  categories: InsightCategory[];
};

export default function InsightsCategories({ categories }: Props) {
  return (
    <section className="page-container py-16">
      <div className="mb-10">
        <span className="eyebrow mb-3 text-[#3B4A9E] block">Insights categories</span>
        <h2 className="heading-lg text-[#152143]">Premium themes for enterprise leaders.</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
            className="h-full"
          >
            <Link
              href={`/insights/${category.id}`}
              className="group flex flex-col h-full overflow-hidden rounded-[28px] border border-[#D9E0F7] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#3B4A9E]/30 hover:shadow-[0_20px_40px_rgba(37,47,97,0.08)]"
            >
              <div className="mb-6 h-12 w-12 rounded-2xl bg-gradient-to-br from-[#3B4A9E] to-[#7AB8FF] flex items-center justify-center text-white font-bold select-none text-sm group-hover:scale-105 transition-transform duration-300">
                {category.label.split(" ").map(w => w[0]).join("")}
              </div>
              <h3 className="text-lg font-bold tracking-tight text-[#152143] group-hover:text-[#3B4A9E] transition">{category.label}</h3>
              <p className="mt-3 text-xs leading-relaxed text-[#647084] flex-1">
                Executive insight in {category.label} for platforms, operations and transformation.
              </p>
              <div className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#3B4A9E] flex items-center gap-1.5">
                Explore Theme <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
