"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "", once = true }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const directionMap = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionMap[direction] }}
      transition={{ duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({ children, className = "", staggerDelay = 0.1, once = true }: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export const fadeInVariant = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}

export function SectionHeading({ tag, title, subtitle, center = false, dark = false }: SectionHeadingProps) {
  return (
    <FadeIn className={center ? "text-center" : ""}>
      {tag && (
        <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] mb-4 px-3 py-1.5 rounded-full ${
          dark ? "bg-white/10 text-blue-200" : "bg-[#252F61]/10 text-[#252F61]"
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-blue-300" : "bg-[#252F61]"}`} />
          {tag}
        </span>
      )}
      <h2 className={`text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 ${dark ? "text-white" : "text-[#1a1a2e]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base lg:text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""} ${dark ? "text-blue-200/70" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
