"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const isHovering = useRef(false);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const ringSpring = { damping: 22, stiffness: 200, mass: 0.8 };

  const dotX = useSpring(cursorX, springConfig);
  const dotY = useSpring(cursorY, springConfig);
  const ringSpringX = useSpring(ringX, ringSpring);
  const ringSpringY = useSpring(ringY, ringSpring);

  const ringScale = useSpring(1, { damping: 20, stiffness: 300 });
  const dotScale = useSpring(1, { damping: 20, stiffness: 300 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleMouseEnter = () => {
      isHovering.current = true;
      ringScale.set(1.8);
      dotScale.set(0.5);
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
      ringScale.set(1);
      dotScale.set(1);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const interactables = document.querySelectorAll(
      "a, button, [data-cursor-hover]",
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, ringX, ringY, ringScale, dotScale]);

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      {/* Dot */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        style={{
          left: dotX,
          top: dotY,
          width: 6,
          height: 6,
          scale: dotScale,
        }}
      />
      {/* Ring */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent"
        style={{
          left: ringSpringX,
          top: ringSpringY,
          width: 32,
          height: 32,
          scale: ringScale,
        }}
      />
    </div>
  );
}
