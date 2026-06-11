"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0E1535] flex items-center justify-center relative overflow-hidden px-6">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#252F61]/20 rounded-full blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-xl w-full">
        {/* Giant 404 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[9rem] sm:text-[12rem] font-extrabold leading-none text-white/5 select-none mb-0"
        >
          404
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="-mt-8"
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-blue-300 block mb-4">
            Error / Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            This page doesn&apos;t exist.
          </h1>
          <p className="text-xs text-blue-200/40 leading-relaxed mb-10 max-w-sm">
            The page you&apos;re looking for may have been moved, renamed, or is temporarily unavailable.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
            <Link
              href="/"
              className="text-xs font-extrabold uppercase tracking-widest bg-white text-[#252F61] px-8 py-3.5 hover:bg-blue-50 transition-colors border border-white"
            >
              Return Home
            </Link>
            <Link
              href="/contact"
              className="text-xs font-extrabold uppercase tracking-widest text-white px-8 py-3.5 border border-white/20 hover:border-white/50 hover:bg-white/5 transition-colors"
            >
              Contact Support
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-t border-white/10 pt-8">
            <span className="text-[9px] uppercase font-bold tracking-widest text-blue-300/50 block mb-4">
              Navigate to
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Industries", href: "/industries" },
                { label: "Careers", href: "/careers" },
                { label: "Insights", href: "/insights" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-bold text-blue-200/40 hover:text-white transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
