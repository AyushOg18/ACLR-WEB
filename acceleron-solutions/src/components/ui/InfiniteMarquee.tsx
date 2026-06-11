"use client";

import { useEffect, useRef, useState } from "react";

type LogoItem = {
  name: string;
  path: string;
};

type Props = {
  items: LogoItem[];
  speed?: number;
};

export default function InfiniteMarquee({ items, speed = 35 }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Measure the width of one complete set of items
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const firstSet = track.querySelector("[data-set='0']") as HTMLElement;
      if (firstSet) {
        setTrackWidth(firstSet.scrollWidth);
        setIsReady(true);
      }
    };

    // Wait for images to load before measuring
    const images = track.querySelectorAll("img");
    let loaded = 0;
    const total = images.length;

    if (total === 0) {
      measure();
      return;
    }

    const onLoad = () => {
      loaded++;
      if (loaded >= total) measure();
    };

    images.forEach((img) => {
      if (img.complete) {
        loaded++;
      } else {
        img.addEventListener("load", onLoad);
        img.addEventListener("error", onLoad);
      }
    });

    if (loaded >= total) measure();

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", onLoad);
        img.removeEventListener("error", onLoad);
      });
    };
  }, [items]);

  const renderCards = () =>
    items.map((item, index) => (
      <div
        key={index}
        className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl border border-[#D5DBE6]/60 bg-white p-5 shadow-[0_2px_8px_rgba(37,47,97,0.04)] transition-all duration-300 ease-out hover:scale-[1.04] hover:border-[#252F61]/20 hover:shadow-[0_12px_30px_rgba(37,47,97,0.08)] hover:z-20 cursor-pointer"
      >
        <img
          src={item.path}
          alt={item.name}
          className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
          draggable={false}
        />
      </div>
    ));

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <div
        ref={trackRef}
        className="flex w-max hover:[animation-play-state:paused]"
        style={{
          animation: isReady
            ? `marquee-scroll ${speed}s linear infinite`
            : "none",
          willChange: "transform",
        }}
      >
        {/* Set 1 */}
        <div data-set="0" className="flex shrink-0 gap-8">
          {renderCards()}
        </div>
        {/* Set 2 — exact duplicate for seamless loop */}
        <div data-set="1" className="flex shrink-0 gap-8 ml-8">
          {renderCards()}
        </div>
      </div>

      {/* Inline keyframes — uses measured pixel width for pixel-perfect loop */}
      <style jsx>{`
        @keyframes marquee-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-${trackWidth}px, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
