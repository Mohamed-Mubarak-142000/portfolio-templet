"use client";

import { cn } from "@/lib/utils";

interface MarqueeStripProps {
  items: string[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  separator?: string;
  className?: string;
  itemClassName?: string;
}

const speedMap = {
  slow: "40s",
  normal: "28s",
  fast: "16s",
};

export default function MarqueeStrip({
  items,
  direction = "left",
  speed = "normal",
  separator = "✦",
  className,
  itemClassName,
}: MarqueeStripProps) {
  const doubled = [...items, ...items];
  const animName = direction === "left" ? "marquee-left" : "marquee-right";
  const dur = speedMap[speed];

  return (
    <div
      className={cn(
        "marquee-track overflow-hidden whitespace-nowrap",
        className,
      )}
    >
      <div
        className="marquee-inner inline-flex"
        style={{ animation: `${animName} ${dur} linear infinite` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={cn(
              "inline-flex items-center gap-4 px-4 font-display font-semibold text-sm tracking-widest uppercase",
              itemClassName,
            )}
          >
            {item}
            <span className="text-accent text-xs">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
