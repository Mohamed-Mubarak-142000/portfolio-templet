"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function LoadingScreen() {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const total = 100;
    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      frame = Math.floor(eased * total);
      setCount(frame);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        // Exit animation
        const tl = gsap.timeline({
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.style.display = "none";
            }
          },
        });
        tl.to(curtainRef.current, {
          scaleY: 0,
          duration: 0.8,
          ease: "expo.inOut",
          transformOrigin: "top",
        });
        tl.to(
          containerRef.current,
          {
            opacity: 0,
            duration: 0.3,
          },
          "-=0.1",
        );
      }
    };

    requestAnimationFrame(tick);
  }, []);

  return (
    <div
      ref={containerRef}
      className="loading-screen flex-col gap-8"
      style={{ zIndex: 9999 }}
    >
      <div
        ref={curtainRef}
        className="absolute inset-0 bg-surface"
        style={{ transformOrigin: "top" }}
      />
      <div className="relative z-10 text-center">
        <p className="font-display text-xs tracking-[0.4em] text-text-muted uppercase mb-4">
          Loading Portfolio
        </p>
        <div className="relative w-48 h-[1px] bg-surface-4 mx-auto mb-6">
          <div
            className="absolute inset-y-0 left-0 bg-accent transition-none"
            style={{ width: `${count}%` }}
          />
        </div>
        <span className="font-display text-6xl font-bold text-white tabular-nums">
          {String(count).padStart(2, "0")}
        </span>
      </div>
      <p className="relative z-10 font-display text-sm text-text-muted tracking-widest">
        MOHAMED MUBARAK
      </p>
    </div>
  );
}
