"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  loadMore: () => Promise<void>;
  isLoading?: boolean;
  hasMore?: boolean;
};

export default function InfiniteScroll({ children, loadMore, isLoading = false, hasMore = true }: Props) {
  const observerTarget = useRef<HTMLDivElement>(null);
  const [isObserving, setIsObserving] = useState(false);

  useEffect(() => {
    if (!observerTarget.current || !hasMore || isLoading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isObserving) {
          setIsObserving(true);
          loadMore().finally(() => setIsObserving(false));
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(observerTarget.current);

    return () => observer.disconnect();
  }, [loadMore, hasMore, isLoading, isObserving]);

  return (
    <>
      {children}
      {hasMore && (
        <motion.div
          ref={observerTarget}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center py-12"
        >
          {isLoading && (
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, delay: i * 0.1, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-[#3B4A9E]"
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </>
  );
}
