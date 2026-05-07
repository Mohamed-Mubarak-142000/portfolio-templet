"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { experiences } from "@/data/experience";

export default function Experience() {
  const lineRef = useRef<SVGLineElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const length = line.getTotalLength?.() ?? 400;
    gsap.set(line, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const ctx = gsap.context(() => {
      gsap.to(line, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-surface section-padding overflow-hidden"
    >
      {/* Decorative */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-accent text-xs font-semibold tracking-[0.4em] uppercase mb-4">
            Career
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-20">
            Experience &amp; <span className="text-gradient">Education</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* SVG timeline spine */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-px overflow-hidden">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 2 400"
            >
              {/* Background line */}
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="400"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
              />
              {/* Animated line */}
              <line
                ref={lineRef}
                x1="1"
                y1="0"
                x2="1"
                y2="400"
                stroke="#7C3AED"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.id} delay={i * 0.1} fromY={50}>
                <div
                  className={`relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12 items-start
                    ${i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"}
                  `}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-3 md:left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-accent bg-surface z-10"
                    style={{
                      boxShadow: "0 0 0 4px rgba(124,58,237,0.15)",
                    }}
                  />

                  {/* Card */}
                  <div
                    className={
                      i % 2 === 0
                        ? "md:pr-8 md:text-right"
                        : "md:col-start-2 md:pl-8"
                    }
                  >
                    <div className="glass rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 group">
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          i % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <span
                          className={`text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border ${
                            exp.type === "Education"
                              ? "border-blue-400/40 text-blue-400 bg-blue-400/10"
                              : exp.current
                                ? "border-accent/40 text-accent bg-accent/10"
                                : "border-border text-text-muted"
                          }`}
                        >
                          {exp.type}
                        </span>
                        {exp.current && (
                          <span className="flex items-center gap-1 text-xs text-green-400 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="font-display font-bold text-2xl text-white mb-1 group-hover:text-accent transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-accent-light font-semibold text-base mb-4">
                        {exp.company}
                      </p>

                      <div
                        className={`flex flex-wrap gap-4 mb-6 text-text-muted text-sm ${
                          i % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={13} />
                          {exp.type}
                        </span>
                      </div>

                      <p
                        className={`text-text-secondary text-sm leading-relaxed mb-6 ${
                          i % 2 === 0 ? "md:text-right" : ""
                        }`}
                      >
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.highlights.map((h, hi) => (
                          <li
                            key={hi}
                            className={`flex items-start gap-3 text-text-secondary text-sm ${
                              i % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                          >
                            <span className="text-accent shrink-0 mt-0.5">
                              ✦
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
