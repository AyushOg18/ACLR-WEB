"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useLazyImage } from "@/hooks/useLoadingOptimizations";
import SkeletonLoader from "./SkeletonLoader";

type Props = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

export default function LazyImage({ src, alt, fill, width, height, className, priority }: Props) {
  const { imageSrc, isLoading } = useLazyImage(src);
  const [showImage, setShowImage] = useState(false);

  if (priority) {
    return (
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={className}
        priority
      />
    );
  }

  return (
    <>
      {isLoading && !showImage && (
        <div className={`absolute inset-0 ${className}`}>
          <div className="bg-gradient-to-r from-[#f0f0f0] via-[#e0e0e0] to-[#f0f0f0] animate-pulse h-full w-full" />
        </div>
      )}
      {imageSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onAnimationComplete={() => setShowImage(true)}
        >
          <Image
            src={imageSrc}
            alt={alt}
            fill={fill}
            width={width}
            height={height}
            className={className}
          />
        </motion.div>
      )}
    </>
  );
}
