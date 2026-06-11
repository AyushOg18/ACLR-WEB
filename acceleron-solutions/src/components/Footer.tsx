"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const columns = [
  {
    title: "Services",
    links: [
      ["SAP", "/services/sap"],
      ["Salesforce", "/services/salesforce"],
      ["Zoho Suite", "/services/zoho"],
      ["Software Development", "/services/software-development"],
      ["IT Infrastructure", "/services/it-infrastructure"],
      ["Cyber Security", "/services/cyber-security"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Products", "/products"],
      ["Industries", "/industries"],
      ["Insights", "/insights"],
      ["Careers", "/careers"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Products",
    links: [
      ["Vanijya", "/products/vanijya"],
      ["FSM", "/products/fsm"],
      ["LMS", "/products/lms"],
      ["WOMS", "/products/woms"],
      ["Suraksha", "/products/suraksha"],
      ["QMS", "/products/qms"],
    ],
  },
];

const LinkedinMark = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="currentColor">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.3 8.1h4.4V23H.3V8.1Zm7.2 0h4.2v2.04h.06c.58-1.1 2-2.26 4.12-2.26 4.42 0 5.24 2.9 5.24 6.68V23h-4.4v-7.48c0-1.78-.04-4.08-2.5-4.08-2.5 0-2.88 1.94-2.88 3.94V23h-4.4V8.1h.56Z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#252F61] text-white">
      <div className="page-container">
        <div className="grid gap-12 border-b border-white/14 py-16 lg:grid-cols-[0.85fr_1fr] lg:py-20">
          <div>
            <img src="/logo.png" alt="Acceleron Solutions" className="h-10 w-auto object-contain brightness-0 invert" />
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/62">
              Enterprise technology consulting, packaged software implementation, custom engineering, infrastructure and cyber security. Part of the Gainwell Group.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <span className="block text-[10px] font-extrabold uppercase tracking-[0.24em] text-white/56">
              Subscribe to insights
            </span>
            <form onSubmit={handleNewsletter} className="mt-6 w-full max-w-xl">
              {submitted ? (
                <p className="text-sm font-bold text-white">Subscribed successfully.</p>
              ) : (
                <div className="flex flex-col gap-4 border-b border-white/24 pb-4 sm:flex-row sm:items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Business email"
                    required
                    className="min-h-12 flex-1 border-0 bg-transparent text-white outline-none placeholder:text-white/38"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-white"
                  >
                    Subscribe <ArrowRight size={15} />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="grid gap-12 border-b border-white/14 py-14 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.2fr]">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-white/48">{column.title}</h3>
              <ul className="mt-7 space-y-4">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-white/68 transition-colors hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-white/48">Headquarters</h3>
            <p className="mt-7 text-sm leading-7 text-white/68">
              3rd Floor, STPI IT Park, Salt Lake, Sector V, Kolkata - 700091
            </p>
            <a href="mailto:info@acceleronsolutions.io" className="mt-5 block text-sm font-bold text-white">
              info@acceleronsolutions.io
            </a>
            <div className="mt-8 flex flex-wrap gap-2">
              {["India", "USA", "Australia", "Singapore", "Nepal", "Bhutan"].map((country) => (
                <span key={country} className="border border-white/14 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/62">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 py-8 text-[11px] font-bold uppercase tracking-[0.16em] text-white/46 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Acceleron Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/acceleron-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <LinkedinMark /> LinkedIn
            </a>
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
