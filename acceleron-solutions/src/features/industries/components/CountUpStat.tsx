"use client";

import { useEffect, useState } from "react";

type Props = {
  value: string;
  label: string;
};

export default function CountUpStat({ value, label }: Props) {
  const isPercent = value.endsWith("%");
  const isMultiple = value.endsWith("x") || value.endsWith("X");
  const numeric = parseFloat(value.replace(/[%xX]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (Number.isNaN(numeric)) {
      setDisplayValue(value);
      return;
    }

    let start = 0;
    const duration = 900;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = numeric * progress;
      setDisplayValue(
        `${Math.round(current * 10) / 10}${suffix}`,
      );

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [value, numeric, suffix]);

  return (
    <div className="rounded-[28px] bg-[#0E1535] p-8 text-white">
      <span className="block text-4xl font-extrabold tracking-tight">{displayValue}</span>
      <p className="mt-3 text-sm uppercase tracking-[0.24em] text-blue-200/80">{label}</p>
    </div>
  );
}
