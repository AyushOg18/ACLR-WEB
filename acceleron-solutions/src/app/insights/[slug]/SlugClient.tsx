"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  User, 
  CalendarDays, 
  Clock, 
  Share2, 
  Send, 
  CheckCircle2, 
  ArrowUpRight, 
  Search, 
  SlidersHorizontal 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { InsightArticle } from "@/lib/data";
import { INSIGHT_CATEGORIES, INSIGHT_INDUSTRIES } from "@/lib/data";
import InsightArticleHero from "@/components/insights/InsightArticleHero";
import RelatedInsights from "@/components/insights/RelatedInsights";
import NewsletterCTA from "@/components/insights/NewsletterCTA";
import InsightCard from "@/components/insights/InsightCard";

type Props = {
  slugType: "article" | "category" | "industry";
  article?: InsightArticle;
  category?: { id: string; label: string };
  industry?: { id: string; label: string };
  allInsights: InsightArticle[];
};

export default function SlugClient({ slugType, article, category, industry, allInsights }: Props) {
  // Share link copy state
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  // Consultation form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  // Filtering states for category/industry views
  const [query, setQuery] = useState("");
  const [subFilter, setSubFilter] = useState("All"); // maps to industry in category view, category in industry view
  const [sort, setSort] = useState("newest");

  // Get current URL for sharing
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  // ----------------------------------------------------
  // FILTERING LOGIC (For Category & Industry Views)
  // ----------------------------------------------------
  const filteredInsights = useMemo(() => {
    if (slugType === "article") return [];

    return allInsights.filter((item) => {
      // 1. Matches dynamic parent category or industry
      const matchesParent = 
        slugType === "category" 
          ? item.category === category?.label
          : item.industry === industry?.label;

      // 2. Matches search query
      const matchesQuery =
        query.length === 0 ||
        [item.title, item.excerpt, item.tags.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase());

      // 3. Matches sub-filter (e.g. filter by category on an industry page)
      const matchesSub = 
        subFilter === "All" ||
        (slugType === "category" ? item.industry === subFilter : item.category === subFilter);

      return matchesParent && matchesQuery && matchesSub;
    }).sort((a, b) => {
      if (sort === "popular") {
        return b.popularity - a.popularity;
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [slugType, category, industry, allInsights, query, subFilter, sort]);

  // ----------------------------------------------------
  // 1. ARTICLE VIEW RENDER
  // ----------------------------------------------------
  if (slugType === "article" && article) {
    const related = allInsights.filter(
      (item) => item.slug !== article.slug && article.related.includes(item.slug)
    ).slice(0, 3);

    const recommended = allInsights.filter(
      (item) => item.slug !== article.slug && item.industry === article.industry
    ).slice(0, 3);

    // Dynamic breadcrumb category object
    const matchedCategory = INSIGHT_CATEGORIES.find(c => c.label === article.category);

    return (
      <div className="bg-[#F5F7FB] text-[#152143] min-h-screen pt-20">
        {/* Dynamic nested breadcrumbs inside dark theme container */}
        <div className="bg-[#06113A] pt-8">
          <div className="page-container">
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/50">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={10} />
              <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
              <ChevronRight size={10} />
              {matchedCategory ? (
                <>
                  <Link href={`/insights/${matchedCategory.id}`} className="hover:text-white transition-colors">
                    {article.category}
                  </Link>
                  <ChevronRight size={10} />
                </>
              ) : null}
              <span className="text-white/80 line-clamp-1 max-w-[200px] sm:max-w-xs">{article.title}</span>
            </div>
          </div>
        </div>

        {/* Premium article hero section */}
        <InsightArticleHero article={article} />

        <section className="page-container py-16">
          <div className="grid gap-12 lg:grid-cols-[1.75fr_0.85fr] items-start">
            
            {/* Left Column: Content */}
            <article className="space-y-12 rounded-[32px] border border-[#D9E0F7] bg-white p-6 sm:p-10 shadow-sm">
              <div className="space-y-8">
                {article.sections.map((section) => (
                  <div key={section.title} className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#152143] tracking-tight">{section.title}</h2>
                    <p className="text-base leading-8 text-[#5F698D] whitespace-pre-line">{section.description}</p>
                    {section.bullets ? (
                      <ul className="space-y-3 pl-6 text-[#647084] list-disc leading-7">
                        {section.bullets.map((item) => (
                          <li key={item} className="pl-1">{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>

              {/* Pull quote */}
              <div className="rounded-[28px] border border-[#D9E0F7] bg-[#F8FBFF] p-6 sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#3B4A9E]">Executive perspective</p>
                <blockquote className="mt-5 border-l-4 border-[#3B4A9E] pl-6 text-lg sm:text-xl font-medium leading-relaxed text-[#152143] italic">
                  &ldquo;{article.pullQuote}&rdquo;
                </blockquote>
              </div>

              {/* Takeaways */}
              <div className="rounded-[28px] border border-[#D9E0F7] bg-white p-6 sm:p-8">
                <h3 className="text-xl font-bold text-[#152143] tracking-tight">Key Takeaways</h3>
                <ul className="mt-6 space-y-4 text-[#647084]">
                  {article.keyTakeaways.map((takeaway) => (
                    <li key={takeaway} className="flex items-start gap-4 rounded-2xl border border-[#E3E9F8] bg-[#F8FBFF] p-4 text-sm leading-6">
                      <CheckCircle2 size={18} className="text-[#3B4A9E] mt-0.5 flex-shrink-0" />
                      <span className="text-[#5F698D] font-medium">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Right Column: Sticky Sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-28">
              
              {/* Author details */}
              <div className="rounded-[28px] border border-[#D9E0F7] bg-white p-8 shadow-sm">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#3B4A9E] mb-6">Author Profile</p>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#3B4A9E] to-[#7AB8FF] text-white flex items-center justify-center font-bold text-lg select-none">
                    {article.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#152143]">{article.author}</h4>
                    <p className="text-xs text-[#647084] mt-1">{article.authorRole}</p>
                  </div>
                </div>
                <div className="mt-6 border-t border-[#D9E0F7]/50 pt-5 text-xs text-[#647084] space-y-2">
                  <p><span className="font-semibold text-[#152143]">Published:</span> {article.date}</p>
                  <p><span className="font-semibold text-[#152143]">Read time:</span> {article.readTime}</p>
                  <p><span className="font-semibold text-[#152143]">Ecosystem:</span> {article.industry}</p>
                </div>
              </div>

              {/* Sharing */}
              <div className="rounded-[28px] border border-[#D9E0F7] bg-white p-8 shadow-sm">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#3B4A9E] mb-5">Share Article</p>
                <div className="grid gap-3">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-[#D9E0F7] bg-white px-4 py-3 text-xs font-semibold text-[#152143] transition hover:bg-[#F5F7FB]"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-[#D9E0F7] bg-white px-4 py-3 text-xs font-semibold text-[#152143] transition hover:bg-[#F5F7FB]"
                  >
                    Twitter
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-[#3B4A9E] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#252F61]"
                  >
                    {copied ? "Copied!" : "Copy Link"}
                  </button>
                </div>
              </div>

              {/* Consultation form */}
              <div className="rounded-[28px] border border-[#D9E0F7] bg-white p-8 shadow-sm">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#3B4A9E] mb-3">Discuss Strategy</p>
                <h4 className="text-lg font-bold text-[#152143] tracking-tight leading-snug">
                  Apply this perspective to your organization.
                </h4>
                <p className="mt-3 text-xs leading-relaxed text-[#647084]">
                  Schedule a private executive briefing with our industry directors and technology practice leads.
                </p>

                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 p-5 bg-[#F6F9FF] border border-[#D9E0F7] rounded-2xl text-center"
                  >
                    <CheckCircle2 className="mx-auto text-[#3B4A9E] mb-3" size={28} />
                    <p className="text-sm font-bold text-[#152143]">Briefing requested</p>
                    <p className="text-xs text-[#647084] mt-2">
                      Thank you. A representative will contact you to coordinate a date.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-[#D9E0F7] px-4 py-3 text-xs text-[#152143] outline-none placeholder:text-[#647084]/60 bg-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Business email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-[#D9E0F7] px-4 py-3 text-xs text-[#152143] outline-none placeholder:text-[#647084]/60 bg-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl border border-[#D9E0F7] px-4 py-3 text-xs text-[#152143] outline-none placeholder:text-[#647084]/60 bg-transparent"
                    />
                    <textarea
                      placeholder="Key area of interest"
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-[#D9E0F7] px-4 py-3 text-xs text-[#152143] outline-none placeholder:text-[#647084]/60 bg-transparent resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#3B4A9E] py-3 text-xs font-bold text-white transition hover:bg-[#252F61]"
                    >
                      Request Consultation <Send size={12} />
                    </button>
                  </form>
                )}
              </div>

            </aside>
          </div>
        </section>

        {related.length > 0 ? <RelatedInsights items={related} /> : <RelatedInsights items={recommended} />}
        <NewsletterCTA />
      </div>
    );
  }

  // ----------------------------------------------------
  // 2. CATEGORY VIEW RENDER
  // ----------------------------------------------------
  if (slugType === "category" && category) {
    return (
      <div className="bg-[#F5F7FB] text-[#152143] min-h-screen pt-20">
        
        {/* Header Section */}
        <section className="bg-gradient-to-br from-[#06113A] via-[#0D1B4D] to-[#0A1640] text-white py-16 relative overflow-hidden border-b border-[#252F61]/10">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_rgba(77,159,255,0.38),_transparent_35%)]" />
          <div className="page-container relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/50 mb-10">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={10} />
              <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
              <ChevronRight size={10} />
              <span className="text-white/80">{category.label}</span>
            </div>

            <div className="max-w-4xl">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.28em] text-blue-200/80 mb-4">
                Knowledge Theme
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
                {category.label}
              </h1>
              <p className="text-blue-100/80 text-base leading-relaxed max-w-2xl">
                Explore Acceleron&apos;s latest industry perspectives, research reports, and custom strategies regarding {category.label.toLowerCase()} implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Filter controls specifically for this category */}
        <section className="page-container py-12">
          <div className="rounded-[28px] border border-[#D9E0F7] bg-white p-6 shadow-sm mb-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
              <div className="rounded-2xl border border-[#D9E0F7] px-4 py-3 flex items-center gap-3 bg-white">
                <Search size={16} className="text-[#3B4A9E]" />
                <input
                  type="search"
                  placeholder="Search articles..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  className="w-full bg-transparent text-xs text-[#152143] outline-none placeholder:text-[#647084]/60"
                />
              </div>

              <label className="block">
                <select
                  value={subFilter}
                  onChange={e => setSubFilter(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-[#D9E0F7] bg-white px-4 text-xs text-[#152143] outline-none"
                >
                  <option value="All">All Industries</option>
                  {INSIGHT_INDUSTRIES.map(item => (
                    <option key={item.id} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <select
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-[#D9E0F7] bg-white px-4 text-xs text-[#152143] outline-none"
                >
                  <option value="newest">Sort: Newest</option>
                  <option value="popular">Sort: Popular</option>
                </select>
              </label>
            </div>
          </div>

          {/* Results Grid */}
          {filteredInsights.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {filteredInsights.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <InsightCard article={item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[32px] border border-[#D9E0F7]">
              <p className="text-[#647084] text-base">No articles found in this category.</p>
              <button
                onClick={() => { setQuery(""); setSubFilter("All"); }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#3B4A9E] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#252F61]"
              >
                Reset Search
              </button>
            </div>
          )}
        </section>

        <NewsletterCTA />
      </div>
    );
  }

  // ----------------------------------------------------
  // 3. INDUSTRY VIEW RENDER
  // ----------------------------------------------------
  if (slugType === "industry" && industry) {
    return (
      <div className="bg-[#F5F7FB] text-[#152143] min-h-screen pt-20">
        
        {/* Header Section */}
        <section className="bg-gradient-to-br from-[#06113A] via-[#0D1B4D] to-[#0A1640] text-white py-16 relative overflow-hidden border-b border-[#252F61]/10">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_rgba(77,159,255,0.38),_transparent_35%)]" />
          <div className="page-container relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/50 mb-10">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={10} />
              <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
              <ChevronRight size={10} />
              <span className="text-white/80">{industry.label}</span>
            </div>

            <div className="max-w-4xl">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.28em] text-blue-200/80 mb-4">
                Industry Perspectives
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
                {industry.label} Perspectives
              </h1>
              <p className="text-blue-100/80 text-base leading-relaxed max-w-2xl">
                Explore case studies, whitepapers, and reports showcasing digital modernization and technology strategy specifically for {industry.label.toLowerCase()} operators.
              </p>
            </div>
          </div>
        </section>

        {/* Filter controls specifically for this industry */}
        <section className="page-container py-12">
          <div className="rounded-[28px] border border-[#D9E0F7] bg-white p-6 shadow-sm mb-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
              <div className="rounded-2xl border border-[#D9E0F7] px-4 py-3 flex items-center gap-3 bg-white">
                <Search size={16} className="text-[#3B4A9E]" />
                <input
                  type="search"
                  placeholder="Search articles..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  className="w-full bg-transparent text-xs text-[#152143] outline-none placeholder:text-[#647084]/60"
                />
              </div>

              <label className="block">
                <select
                  value={subFilter}
                  onChange={e => setSubFilter(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-[#D9E0F7] bg-white px-4 text-xs text-[#152143] outline-none"
                >
                  <option value="All">All Categories</option>
                  {INSIGHT_CATEGORIES.map(item => (
                    <option key={item.id} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <select
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-[#D9E0F7] bg-white px-4 text-xs text-[#152143] outline-none"
                >
                  <option value="newest">Sort: Newest</option>
                  <option value="popular">Sort: Popular</option>
                </select>
              </label>
            </div>
          </div>

          {/* Results Grid */}
          {filteredInsights.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {filteredInsights.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <InsightCard article={item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[32px] border border-[#D9E0F7]">
              <p className="text-[#647084] text-base">No articles found in this industry.</p>
              <button
                onClick={() => { setQuery(""); setSubFilter("All"); }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#3B4A9E] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#252F61]"
              >
                Reset Search
              </button>
            </div>
          )}
        </section>

        <NewsletterCTA />
      </div>
    );
  }

  return null;
}
