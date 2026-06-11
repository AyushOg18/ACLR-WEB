"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ResearchReport } from "@/lib/data";

type Props = {
  reports: ResearchReport[];
};

export default function ResearchReports({ reports }: Props) {
  return (
    <section className="page-container py-16 bg-[#F8FBFF] rounded-[40px] border border-[#D9E0F7]">
      <div className="mb-10">
        <span className="eyebrow mb-3 text-[#3B4A9E] block">Featured research</span>
        <h2 className="heading-lg text-[#152143]">Premium research and executive reports.</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {reports.map((report, index) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.06 }}
            className="rounded-[28px] border border-[#D9E0F7] bg-white p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-[#152143]">{report.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[#647084]">{report.description}</p>
            <Link
              href={report.href}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3B4A9E] transition hover:text-[#252F61]"
            >
              {report.cta}
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
