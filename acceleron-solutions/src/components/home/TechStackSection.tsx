"use client";

import { motion } from "framer-motion";
import EnhancedCard from "@/components/ui/EnhancedCard";
import { TECH_PARTNERS } from "@/lib/data";

export default function TechStackSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-[#F5F7FB] py-20" id="tech-stack">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-center mb-12"
        >
          <div>
            <span className="eyebrow mb-5">Technology ecosystem</span>
            <h2 className="heading-md text-balance">Certified breadth across enterprise platforms.</h2>
          </div>
          <p className="text-sm leading-7 text-[#647084]">
            We maintain active partnerships and certifications across leading enterprise platforms, ensuring your technology stack is optimized, supported and future-ready.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {TECH_PARTNERS.map((name) => (
            <motion.div key={name} variants={itemVariants}>
              <EnhancedCard className="p-6 text-center h-full flex flex-col items-center justify-center">
                <motion.div whileHover={{ scale: 1.1 }} className="text-lg font-extrabold text-[#252F61]">
                  {name}
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-3 h-1 bg-gradient-to-r from-[#3B4A9E] to-[#252F61]"
                />
              </EnhancedCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
