"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const testimonial = TESTIMONIALS[current];

  return (
    <section className="section-y bg-white" id="testimonials">
      <div className="page-container">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:gap-20">
          <div>
            <span className="eyebrow mb-5">Client outcomes</span>
            <h2 className="heading-md text-balance">Proof from programs that matter.</h2>
            <p className="body-lead mt-7">
              Enterprise trust is earned through implementation discipline, business understanding and close collaboration.
            </p>
            <div className="mt-10 flex items-center gap-3">
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="grid h-12 w-12 place-items-center border border-[#252F61]/14 text-[#252F61] transition-colors hover:bg-[#F5F7FB]"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)}
                className="grid h-12 w-12 place-items-center border border-[#252F61]/14 text-[#252F61] transition-colors hover:bg-[#F5F7FB]"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>
              <span className="ml-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[#252F61]/48">
                0{current + 1} / 0{TESTIMONIALS.length}
              </span>
            </div>
          </div>

          <div className="border border-[#252F61]/10 bg-[#F5F7FB] p-8 sm:p-12 lg:p-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote className="text-2xl font-extrabold leading-snug text-[#252F61] sm:text-3xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-12 border-t border-[#252F61]/12 pt-8">
                  <div className="text-base font-extrabold text-[#252F61]">{testimonial.name}</div>
                  <div className="mt-2 text-sm leading-6 text-[#647084]">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
