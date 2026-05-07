"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section
      id="testimonials"
      className="relative bg-surface-2 section-padding overflow-hidden"
    >
      {/* Decorative */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-10 rounded-full"
        style={{
          background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <ScrollReveal>
              <p className="text-accent text-xs font-semibold tracking-[0.4em] uppercase mb-4">
                Testimonials
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                What clients <span className="text-gradient">say</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-border hover:border-accent text-text-secondary hover:text-white transition-all duration-300 flex items-center justify-center"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-accent hover:bg-accent-light text-white transition-all duration-300 flex items-center justify-center glow-sm"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className={`glass rounded-2xl p-8 flex flex-col gap-6 hover:border-accent/30 transition-all duration-500 ${
                  i === 1 ? "md:-translate-y-4" : ""
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-text-muted text-xs">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-accent"
                  : "w-2 h-2 bg-surface-4 hover:bg-text-muted"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
