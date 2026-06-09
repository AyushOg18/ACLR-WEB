"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
};

export default function EnhancedButton({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-lg transition overflow-hidden";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantStyles = {
    primary:
      "bg-[#3B4A9E] text-white border border-[#3B4A9E] hover:bg-[#252F61] shadow-lg hover:shadow-xl hover:shadow-[#3B4A9E]/40",
    secondary:
      "bg-white text-[#3B4A9E] border border-[#D5DBE6] hover:border-[#3B4A9E] hover:bg-[#F5F7FB]",
    ghost: "text-[#3B4A9E] border border-[#3B4A9E] hover:bg-[#F5F7FB]",
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={combinedClassName}>
          <motion.span className="relative flex items-center gap-2">
            {children}
            {icon && (
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="inline-block"
              >
                {icon}
              </motion.span>
            )}
          </motion.span>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      type="button"
      className={combinedClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.span className="relative flex items-center gap-2">
        {children}
        {icon && (
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="inline-block"
          >
            {icon}
          </motion.span>
        )}
      </motion.span>
    </motion.button>
  );
}
