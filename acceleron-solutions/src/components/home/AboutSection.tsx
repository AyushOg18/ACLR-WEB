"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="section-y bg-white" id="about">
      <div className="page-container">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow mb-5">Who we are</span>
            <h2 className="heading-lg text-balance">
              The technology arm of a trusted industrial group.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-[#252F61]/12 pt-9"
          >
            <p className="body-lead max-w-3xl">
              Acceleron Solutions is part of the 80-year-old Gainwell Group, headquartered in Kolkata with operations across India, USA, Australia, Singapore, Nepal and Bhutan. We combine industrial context with packaged software implementation, custom software development, cloud infrastructure and cyber security expertise.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {[
                ["Enterprise platforms", "SAP, Salesforce, Zoho and analytics programs aligned to business operations."],
                ["Custom engineering", "Modern web, mobile and integration systems designed for scale and maintainability."],
                ["Cloud and infrastructure", "Network, cloud, email, monitoring and managed support for resilient operations."],
                ["Security posture", "Cyber security programs that help protect critical systems and enterprise data."],
              ].map(([title, desc]) => (
                <div key={title} className="border-t border-[#252F61]/10 pt-5">
                  <h3 className="text-base font-extrabold text-[#252F61]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#647084]">{desc}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="premium-link mt-12">
              Know more <span aria-hidden="true">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
