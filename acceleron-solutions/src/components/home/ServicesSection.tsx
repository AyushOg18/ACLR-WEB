"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { SERVICES } from "@/lib/data";

// Icon map per service
const SERVICE_ICONS: Record<string, React.ReactNode> = {
  sap: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="2" y="6" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 14h12M8 10h5M8 18h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  salesforce: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 5C10.13 5 7 8.13 7 12c0 1.85.71 3.53 1.87 4.79L7 23l6.21-1.87C14.13 21.69 15.04 22 16 22c3.87 0 7-3.13 7-7s-3.13-7-7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  zoho: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 14h8M14 10v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  "software-dev": (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <polyline points="8,10 4,14 8,18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="20,10 24,14 20,18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="16" y1="7" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  "it-infrastructure": (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="6" width="20" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="4" y="16" width="20" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="8" cy="9" r="1" fill="currentColor"/>
      <circle cx="8" cy="19" r="1" fill="currentColor"/>
    </svg>
  ),
  "cyber-security": (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4L5 8v7c0 5 4.04 9.25 9 10 4.96-.75 9-5 9-10V8L14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M10 14l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "cxo-advisory": (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4v4M20.5 7.5l-2.83 2.83M24 14h-4M20.5 20.5l-2.83-2.83M14 24v-4M7.5 20.5l2.83-2.83M4 14h4M7.5 7.5l2.83 2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  analytics: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M5 21l5-7 4 4 5-8 4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10" cy="14" r="1.5" fill="currentColor"/>
      <circle cx="14" cy="18" r="1.5" fill="currentColor"/>
      <circle cx="19" cy="10" r="1.5" fill="currentColor"/>
    </svg>
  ),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const featuredServices = SERVICES.slice(0, 3);
  const gridServices = SERVICES.slice(3);

  return (
    <section
      ref={sectionRef}
      className="services-section"
      id="services"
      style={{ background: "#FFFFFF" }}
    >
      {/* ── SECTION INTRO ───────────────────────────── */}
      <div className="page-container">
        <motion.div
          className="services-intro"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span className="eyebrow" variants={headingVariants}>
            What we do
          </motion.span>

          <div className="services-intro-grid">
            <motion.h2
              className="services-heading"
              variants={headingVariants}
            >
              Services built for enterprise operating systems.
            </motion.h2>
            <motion.p className="services-lead" variants={headingVariants}>
              A portfolio of consulting, implementation and managed engineering
              capabilities for organizations modernizing core systems without
              losing operational control.
            </motion.p>
          </div>
        </motion.div>

        {/* ── FEATURED SERVICES — horizontal editorial cards ── */}
        <motion.div
          className="services-featured"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {featuredServices.map((service, index) => (
            <motion.div key={service.id} variants={cardVariants}>
              <Link href={service.href} className="service-featured-card">
                {/* number rule */}
                <span className="sfc-index">0{index + 1}</span>

                <div className="sfc-body">
                  <div className="sfc-icon">{SERVICE_ICONS[service.id]}</div>

                  <div className="sfc-meta">
                    <span className="sfc-tagline">{service.tagline}</span>
                    <h3 className="sfc-title">{service.title}</h3>
                    <p className="sfc-desc">{service.desc}</p>

                    <div className="sfc-features">
                      {service.features.map((f) => (
                        <span key={f} className="sfc-badge">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="sfc-cta">
                  Practice profile
                  <ArrowUpRight size={14} className="sfc-arrow" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ── GRID SERVICES — compact 4-up tiles ── */}
        <motion.div
          className="services-grid"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {gridServices.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <Link href={service.href} className="service-grid-card">
                <div className="sgc-icon">{SERVICE_ICONS[service.id]}</div>

                <div>
                  <span className="sgc-tagline">{service.tagline}</span>
                  <h3 className="sgc-title">{service.title}</h3>
                  <p className="sgc-desc">{service.desc}</p>
                </div>

                <div className="sgc-features">
                  {service.features.map((f) => (
                    <span key={f} className="sfc-badge">{f}</span>
                  ))}
                </div>

                <div className="sgc-cta">
                  Practice profile
                  <ArrowUpRight size={12} className="sfc-arrow" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ── CTA STRIP ── */}
        <motion.div
          className="services-cta-strip"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="scs-content">
            <p className="scs-label">All capability practices</p>
            <h3 className="scs-heading">
              Ready to modernize your enterprise operations?
            </h3>
          </div>
          <div className="scs-actions">
            <Link href="/services" className="scs-btn-primary">
              Explore all services
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/contact" className="scs-btn-ghost">
              Talk to an advisor
            </Link>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* ── LAYOUT ──────────────────────────── */
        .services-section {
          padding-block: 120px;
        }
        @media (min-width: 1024px) {
          .services-section {
            padding-block: 160px;
          }
        }

        /* ── INTRO ───────────────────────────── */
        .services-intro {
          margin-bottom: 72px;
        }
        .services-intro .eyebrow {
          margin-bottom: 24px;
        }
        .services-intro-grid {
          display: grid;
          gap: 32px;
        }
        @media (min-width: 1024px) {
          .services-intro-grid {
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: end;
          }
        }
        .services-heading {
          color: #252F61;
          font-size: clamp(2.1rem, 3.5vw, 3.4rem);
          font-weight: 800;
          line-height: 1.07;
          letter-spacing: -0.02em;
          margin: 0;
          text-wrap: balance;
        }
        .services-lead {
          color: #647084;
          font-size: clamp(1rem, 1.3vw, 1.125rem);
          line-height: 1.85;
          margin: 0;
          max-width: 540px;
        }
        @media (min-width: 1024px) {
          .services-lead {
            justify-self: end;
          }
        }

        /* ── FEATURED CARDS ────────────────────── */
        .services-featured {
          display: grid;
          gap: 2px;
          background: rgba(37,47,97,0.07);
          border: 1px solid rgba(37,47,97,0.07);
          margin-bottom: 2px;
        }
        @media (min-width: 1024px) {
          .services-featured {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .service-featured-card {
          display: flex;
          flex-direction: column;
          gap: 0;
          background: #FFFFFF;
          padding: 40px 36px 32px;
          transition: background 0.3s cubic-bezier(0.16,1,0.3,1);
          position: relative;
          height: 100%;
        }
        .service-featured-card:hover {
          background: #F5F7FB;
        }

        .sfc-index {
          display: block;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.22em;
          color: rgba(37,47,97,0.28);
          text-transform: uppercase;
          margin-bottom: 32px;
        }

        .sfc-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .sfc-icon {
          color: #252F61;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(37,47,97,0.06);
          border-radius: 10px;
          flex-shrink: 0;
          transition: background 0.3s ease;
        }
        .service-featured-card:hover .sfc-icon {
          background: rgba(37,47,97,0.1);
        }

        .sfc-meta {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sfc-tagline {
          display: block;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(37,47,97,0.45);
        }

        .sfc-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #252F61;
          line-height: 1.2;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .sfc-desc {
          font-size: 0.875rem;
          color: #647084;
          line-height: 1.75;
          margin: 6px 0 0;
        }

        .sfc-features {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 12px;
        }

        .sfc-badge {
          display: inline-block;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(37,47,97,0.65);
          border: 1px solid rgba(37,47,97,0.12);
          padding: 4px 9px;
          transition: border-color 0.25s ease, color 0.25s ease;
        }
        .service-featured-card:hover .sfc-badge,
        .service-grid-card:hover .sfc-badge {
          border-color: rgba(37,47,97,0.25);
          color: #252F61;
        }

        .sfc-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid rgba(37,47,97,0.1);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #252F61;
        }

        .sfc-arrow {
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
          flex-shrink: 0;
        }
        .service-featured-card:hover .sfc-arrow,
        .service-grid-card:hover .sfc-arrow {
          transform: translate(3px, -3px);
        }

        /* ── GRID CARDS ─────────────────────────── */
        .services-grid {
          display: grid;
          gap: 2px;
          background: rgba(37,47,97,0.07);
          border: 1px solid rgba(37,47,97,0.07);
          border-top: none;
          margin-bottom: 80px;
        }
        @media (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .service-grid-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: #FFFFFF;
          padding: 32px 28px 28px;
          transition: background 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .service-grid-card:hover {
          background: #F5F7FB;
        }

        .sgc-icon {
          color: #252F61;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(37,47,97,0.06);
          border-radius: 8px;
          flex-shrink: 0;
          transition: background 0.3s ease;
        }
        .service-grid-card:hover .sgc-icon {
          background: rgba(37,47,97,0.1);
        }

        .sgc-tagline {
          display: block;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(37,47,97,0.4);
          margin-bottom: 6px;
        }

        .sgc-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #252F61;
          line-height: 1.25;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
        }

        .sgc-desc {
          font-size: 0.8125rem;
          color: #647084;
          line-height: 1.7;
          margin: 0;
        }

        .sgc-features {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .sgc-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid rgba(37,47,97,0.09);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #252F61;
        }

        /* ── CTA STRIP ──────────────────────────── */
        .services-cta-strip {
          display: flex;
          flex-direction: column;
          gap: 32px;
          align-items: flex-start;
          padding: 56px 60px;
          background: #252F61;
          position: relative;
          overflow: hidden;
        }
        @media (min-width: 1024px) {
          .services-cta-strip {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        /* subtle diagonal texture */
        .services-cta-strip::before {
          content: "";
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.025) 40px,
            rgba(255,255,255,0.025) 41px
          );
          pointer-events: none;
        }

        .scs-label {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin: 0 0 10px;
        }

        .scs-heading {
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.2;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .scs-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          align-items: center;
          flex-shrink: 0;
          position: relative;
        }

        .scs-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FFFFFF;
          color: #252F61;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 14px 24px;
          transition: background 0.25s ease, transform 0.25s ease;
          white-space: nowrap;
        }
        .scs-btn-primary:hover {
          background: #F5F7FB;
          transform: translateY(-1px);
        }

        .scs-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.7);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.25);
          transition: color 0.25s ease, border-color 0.25s ease;
          white-space: nowrap;
        }
        .scs-btn-ghost:hover {
          color: #FFFFFF;
          border-color: rgba(255,255,255,0.7);
        }

        /* ── REDUCE MOTION ──────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .sfc-arrow, .sfc-badge, .sfc-icon, .sgc-icon { transition: none; }
        }
      `}</style>
    </section>
  );
}
