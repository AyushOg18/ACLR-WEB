"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Search, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openDropdown = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const textColor = scrolled ? "text-[#252F61]" : "text-white";

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[#252F61]/10 bg-white/88 py-4 shadow-[0_18px_60px_rgba(37,47,97,0.06)] backdrop-blur-xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="page-container">
          <div className="flex h-12 items-center justify-between gap-8">
            <Link href="/" className="flex items-center gap-3" aria-label="Acceleron Solutions home">
              <span className={`grid h-10 w-10 place-items-center border text-sm font-black ${
                scrolled ? "border-[#252F61] bg-[#252F61] text-white" : "border-white/40 bg-white/10 text-white"
              }`}>
                A
              </span>
              <span className="flex flex-col leading-none">
                <span className={`text-sm font-extrabold tracking-wide ${textColor}`} style={{ color: scrolled ? "#252F61" : "#FFFFFF" }}>Acceleron</span>
                <span className={`mt-1 text-[9px] font-bold uppercase tracking-[0.32em] ${
                  scrolled ? "text-[#252F61]/55" : "text-white/58"
                }`}>
                  Solutions
                </span>
              </span>
            </Link>

            <div className="hidden items-center gap-7 xl:flex">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && openDropdown(link.label)}
                  onMouseLeave={link.children ? closeDropdown : undefined}
                >
                  {link.children ? (
                    <button
                      className={`group flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors ${textColor}`}
                      style={{ color: scrolled ? "#252F61" : "#FFFFFF" }}
                      type="button"
                    >
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-300 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                      <span className={`absolute -bottom-2 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                        scrolled ? "bg-[#252F61]" : "bg-white"
                      }`} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`group relative text-[11px] font-bold uppercase tracking-[0.18em] transition-colors ${textColor}`}
                      style={{ color: scrolled ? "#252F61" : "#FFFFFF" }}
                    >
                      {link.label}
                      <span className={`absolute -bottom-2 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                        scrolled ? "bg-[#252F61]" : "bg-white"
                      }`} />
                    </Link>
                  )}

                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 top-full mt-8 w-[820px] -translate-x-1/2 border border-[#252F61]/10 bg-white shadow-[0_30px_90px_rgba(17,24,39,0.14)]"
                        onMouseEnter={() => openDropdown(link.label)}
                        onMouseLeave={closeDropdown}
                      >
                        <div className="grid grid-cols-[0.9fr_1.4fr]">
                          <div className="bg-[#F5F7FB] p-8">
                            <span className="eyebrow mb-5">Explore</span>
                            <h3 className="text-2xl font-extrabold leading-tight text-[#252F61]">
                              {link.label} for enterprise transformation
                            </h3>
                            <p className="mt-5 text-sm leading-7 text-[#647084]">
                              Structured capabilities, deep domain context and accountable delivery for business-critical programs.
                            </p>
                            <Link
                              href={link.href}
                              className="premium-link mt-10"
                              onClick={() => setActiveDropdown(null)}
                            >
                              Overview <span><ArrowRight size={14} /></span>
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-x-8 gap-y-7 p-8">
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="group border-t border-[#252F61]/10 pt-4"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="block text-sm font-extrabold text-[#252F61] transition-colors group-hover:text-[#252F61]/70">
                                  {child.label}
                                </span>
                                <span className="mt-2 block text-xs leading-5 text-[#647084]">
                                  {child.desc}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="hidden items-center gap-4 xl:flex">
              <button className={`grid h-10 w-10 place-items-center border transition-colors ${
                scrolled ? "border-[#252F61]/12 text-[#252F61] hover:bg-[#F5F7FB]" : "border-white/25 text-white hover:bg-white/10"
              }`} aria-label="Search">
                <Search size={16} />
              </button>
              <Link
                href="/contact"
                className={`border px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.18em] transition-all ${
                  scrolled
                    ? "border-[#252F61] bg-[#252F61] !text-white hover:bg-white hover:!text-[#252F61]"
                    : "border-white bg-white !text-[#252F61] hover:bg-transparent hover:!text-white"
                }`}
              >
                Get in touch
              </Link>
            </div>

            <button
              className={`grid h-11 w-11 place-items-center border xl:hidden ${
                scrolled ? "border-[#252F61]/14 text-[#252F61]" : "border-white/30 text-white"
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-[#111827]/45 backdrop-blur-sm xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-full w-[min(92vw,420px)] flex-col bg-white shadow-2xl xl:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between border-b border-[#252F61]/10 p-6">
                <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#252F61]">
                  Acceleron
                </span>
                <button
                  className="grid h-10 w-10 place-items-center border border-[#252F61]/12 text-[#252F61]"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                {NAV_LINKS.map((link) => (
                  <div key={link.label} className="border-b border-[#252F61]/10 py-3">
                    {link.children ? (
                      <>
                        <button
                          className="flex w-full items-center justify-between py-3 text-left text-sm font-extrabold uppercase tracking-[0.16em] text-[#252F61]"
                          onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        >
                          {link.label}
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-4 bg-[#F5F7FB] p-5">
                                {link.children.map((child) => (
                                  <Link
                                    href={child.href}
                                    key={child.label}
                                    className="block"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    <span className="block text-sm font-bold text-[#252F61]">{child.label}</span>
                                    <span className="mt-1 block text-xs leading-5 text-[#647084]">{child.desc}</span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="block py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-[#252F61]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="border-t border-[#252F61]/10 p-6">
                <Link
                  href="/contact"
                  className="block bg-[#252F61] px-6 py-4 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Consult an expert
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
