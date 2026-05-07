"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/animations/ScrollReveal";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "5+", label: "Projects Delivered" },
  { value: "3", label: "Companies" },
  { value: "ITI", label: "Scholarship Holder" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Animate stat counters
  useEffect(() => {
    statsRef.current.forEach((el, i) => {
      if (!el) return;
      const ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });
      return () => ctx.revert();
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-surface-2 section-padding overflow-hidden"
    >
      {/* Decorative gradient */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[40%] h-full opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at top right, #7C3AED 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <ScrollReveal>
          <p className="text-accent text-xs font-semibold tracking-[0.4em] uppercase mb-4">
            About Me
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — text */}
          <div>
            <ScrollReveal delay={0.05}>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
                Building <span className="text-gradient">reliable</span> and
                performant web interfaces
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
                I&apos;m a Front-End Developer at{" "}
                <span className="text-white font-semibold">Innovatek</span>,
                where I build and maintain a kiosk-based donation system &mdash;
                including a Back Office dashboard and a flexible UI builder
                tool. I specialise in React, TypeScript, and Next.js, with solid
                experience in state management and REST API integration.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10">
                I studied Computer Science at Menoufia University and hold two
                ITI scholarships &mdash; one in Full Stack MERN and one in
                Front-End development &mdash; which gave me a strong foundation
                in modern web engineering practices.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-text-secondary text-sm font-medium">
                  Currently at{" "}
                  <span className="text-white font-semibold">Innovatek</span> ·
                  New Cairo, Egypt
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <a
                href="/Mohamed-Mubarak-omar.pdf"
                download="Mohamed-Mubarak-CV.pdf"
                className="mt-6 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-accent/50 hover:border-accent hover:bg-accent text-accent hover:text-white font-semibold text-sm tracking-wide transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
            </ScrollReveal>
          </div>

          {/* Right — stats */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  ref={(el) => {
                    statsRef.current[i] = el;
                  }}
                  className="glass rounded-2xl p-8 group hover:border-accent/30 transition-all duration-500 cursor-default"
                  style={{ opacity: 0 }}
                >
                  <p className="font-display font-extrabold text-5xl text-white mb-2 group-hover:text-gradient transition-all duration-300">
                    {stat.value}
                  </p>
                  <p className="text-text-muted text-sm font-medium tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Profile photo card */}
            <ScrollReveal delay={0.3} className="mt-4">
              <div className="glass rounded-2xl p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-accent/40 shrink-0">
                  <Image
                    src="/me.png"
                    alt="Mohamed Mubarak"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    Mohamed Mubarak
                  </p>
                  <p className="text-text-muted text-xs mt-0.5">
                    Open to Front-End / React / Next.js roles
                  </p>
                </div>
                <div className="ml-auto text-accent text-xs font-semibold tracking-widest uppercase">
                  Hire
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
