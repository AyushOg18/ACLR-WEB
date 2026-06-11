import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INSIGHTS, INSIGHT_CATEGORIES, INSIGHT_INDUSTRIES } from "@/lib/data";
import SlugClient from "./SlugClient";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Generate metadata dynamically depending on the route type
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // 1. Check if category
  const category = INSIGHT_CATEGORIES.find((item) => item.id === slug);
  if (category) {
    return {
      title: `${category.label} Insights | Acceleron Solutions`,
      description: `Explore Acceleron's perspectives and research reports in ${category.label}.`,
    };
  }

  // 2. Check if industry
  const industry = INSIGHT_INDUSTRIES.find((item) => item.id === slug);
  if (industry) {
    return {
      title: `${industry.label} Perspectives | Acceleron Solutions`,
      description: `Explore Acceleron's insights and whitepapers for the ${industry.label} industry.`,
    };
  }

  // 3. Check if article
  const article = INSIGHTS.find((item) => item.slug === slug);
  if (article) {
    return {
      title: `${article.title} | Acceleron Solutions`,
      description: article.excerpt,
      openGraph: {
        title: article.title,
        description: article.excerpt,
      },
    };
  }

  return {
    title: "Page Not Found | Acceleron Solutions",
    description: "The requested insight or resource could not be found.",
  };
}

// Generate static params for all categories, industries, and articles
export async function generateStaticParams() {
  const categories = INSIGHT_CATEGORIES.map((c) => ({ slug: c.id }));
  const industries = INSIGHT_INDUSTRIES.map((i) => ({ slug: i.id }));
  const articles = INSIGHTS.map((a) => ({ slug: a.slug }));
  return [...categories, ...industries, ...articles];
}

export default async function InsightSlugPage({ params }: Props) {
  const { slug } = await params;

  // 1. Check if category
  const category = INSIGHT_CATEGORIES.find((item) => item.id === slug);
  if (category) {
    return (
      <SlugClient
        slugType="category"
        category={category}
        allInsights={INSIGHTS}
      />
    );
  }

  // 2. Check if industry
  const industry = INSIGHT_INDUSTRIES.find((item) => item.id === slug);
  if (industry) {
    return (
      <SlugClient
        slugType="industry"
        industry={industry}
        allInsights={INSIGHTS}
      />
    );
  }

  // 3. Check if article
  const article = INSIGHTS.find((item) => item.slug === slug);
  if (article) {
    return (
      <SlugClient
        slugType="article"
        article={article}
        allInsights={INSIGHTS}
      />
    );
  }

  // Fallback if none matched
  notFound();
}
