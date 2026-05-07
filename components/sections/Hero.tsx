"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import MagneticButton from "@/components/animations/MagneticButton";

/* ─── Animation variants ─────────────────────────────────────────────── */

/** Word-mask reveal — each word slides up from behind a clip */
const nameContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
};
const nameWord = {
  hidden: { y: "105%", opacity: 0, skewY: 4 },
  visible: {
    y: "0%",
    opacity: 1,
    skewY: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

/** Generic fade-up for supporting elements */
const fu = (delay: number) => ({
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    delay,
  },
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* Mouse spotlight */
  useEffect(() => {
    const section = sectionRef.current;
    const spotlight = spotlightRef.current;
    if (!section || !spotlight) return;
    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      gsap.to(spotlight, {
        x: e.clientX - r.left - 300,
        y: e.clientY - r.top - 300,
        duration: 0.9,
        ease: "power2.out",
      });
    };
    section.addEventListener("mousemove", onMove);
    return () => section.removeEventListener("mousemove", onMove);
  }, []);

  /* Make scroll indicator visible after a delay */
  useEffect(() => {
    gsap.fromTo(
      scrollRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, ease: "expo.out", delay: 2.2 },
    );
  }, []);

  /* Scroll indicator bounce */
  useEffect(() => {
    gsap.to(scrollRef.current, {
      y: 8,
      duration: 1.2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      delay: 3.5,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100svh] flex flex-col items-center justify-center bg-surface overflow-x-hidden"
    >
      {/* ── Decorative background layers ─────────────────────────────── */}

      {/* Mouse-follow spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Ambient orbs */}
      <div
        className="pointer-events-none absolute top-[15%] left-[4%] w-48 h-48 sm:w-64 sm:h-64 rounded-full animate-float-1"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[18%] right-[4%] w-56 h-56 sm:w-80 sm:h-80 rounded-full animate-float-2"
        style={{
          background:
            "radial-gradient(circle, rgba(109,40,217,0.18) 0%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />
      <div
        className="pointer-events-none absolute top-[55%] left-[45%] w-40 h-40 sm:w-60 sm:h-60 rounded-full animate-float-1"
        style={{
          background:
            "radial-gradient(circle, rgba(159,95,247,0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "2s",
        }}
      />

      {/* Fine grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Vignette edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(10,10,15,0.7) 100%)",
        }}
      />

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto px-5 sm:px-10 gap-5 py-28 sm:py-20">
        {/* ② Availability badge */}
        <motion.div
          {...fu(0.15)}
          className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-medium text-text-secondary tracking-widest uppercase">
            Available for new roles
          </span>
        </motion.div>

        {/* ③ Eyebrow tagline */}
        <motion.p
          {...fu(0.28)}
          className="font-sans text-[10px] sm:text-xs tracking-[0.32em] text-accent uppercase font-semibold"
        >
          React JS · TypeScript · Next.js Developer
        </motion.p>

        {/* ④ Name + Photo inline */}
        <div className="flex flex-row items-center justify-center gap-6 sm:gap-10">
          {/* Photo with spinning ring */}
          <motion.div {...fu(0.05)} className="relative flex-shrink-0">
            <div className="hero-photo-ring absolute -inset-[3px] rounded-full" />
            <div className="relative w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-full overflow-hidden">
              <Image
                src="/me.png"
                alt="Mohamed Mubarak"
                width={130}
                height={130}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400 border-2 border-surface shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          </motion.div>

          {/* Name — word-mask reveal */}
          <motion.h1
            variants={nameContainer}
            initial="hidden"
            animate="visible"
            aria-label="Mohamed Mubarak"
            className="font-display font-extrabold leading-[1.02] tracking-tight text-left"
            style={{ fontSize: "clamp(2.8rem, 9vw, 7.5rem)" }}
          >
            <span className="block overflow-hidden">
              <motion.span variants={nameWord} className="block text-white">
                Mohamed
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                variants={nameWord}
                className="hero-name-gradient block"
              >
                Mubarak
              </motion.span>
            </span>
          </motion.h1>
        </div>

        {/* ⑤ Divider rule */}
        <motion.div
          {...fu(0.72)}
          className="w-16 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
        />

        {/* ⑥ Description */}
        <motion.p
          {...fu(0.8)}
          className="max-w-[38rem] text-text-secondary text-sm sm:text-base leading-relaxed"
        >
          Building scalable front-end systems at{" "}
          <span className="text-white font-semibold">Innovatek</span>.{" "}
          Specialised in React, TypeScript &amp; Next.js — turning complex
          requirements into{" "}
          <span className="text-accent font-medium">
            fast, accessible digital products
          </span>
          .
        </motion.p>

        {/* ⑦ CTA buttons */}
        <motion.div
          {...fu(0.95)}
          className="flex flex-wrap items-center justify-center gap-3 mt-1"
        >
          <MagneticButton
            as="a"
            href="#projects"
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3.5 rounded-full bg-accent hover:bg-accent-light text-white font-semibold text-sm tracking-wide transition-all duration-300 glow-sm hover:glow-md"
          >
            View My Work
          </MagneticButton>

          <MagneticButton
            as="a"
            href="#contact"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3.5 rounded-full border border-border hover:border-accent/60 text-text-secondary hover:text-white font-semibold text-sm tracking-wide transition-all duration-300"
          >
            Let&apos;s Talk
          </MagneticButton>

          {/* Download CV — plain <a> (MagneticButton doesn't accept download prop) */}
          <a
            href="/Mohamed-Mubarak-omar.pdf"
            download="Mohamed-Mubarak-CV.pdf"
            className="magnetic-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-accent/40 hover:border-accent hover:bg-accent text-accent hover:text-white font-semibold text-sm tracking-wide transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </motion.div>

        {/* ⑧ Social links */}
        <motion.div {...fu(1.1)} className="flex items-center gap-5 mt-1">
          <a
            href="https://github.com/MohamedMubarak14M"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted hover:text-white transition-colors duration-300"
          >
            <GithubIcon width={17} height={17} />
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href="https://linkedin.com/in/mohamedmubarak"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted hover:text-white transition-colors duration-300"
          >
            <LinkedinIcon width={17} height={17} />
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────── */}
      <div
        ref={scrollRef}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-muted cursor-pointer group"
        style={{ opacity: 0 }}
        onClick={() =>
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-[9px] tracking-[0.35em] uppercase group-hover:text-white transition-colors duration-300">
          Scroll
        </span>
        <ArrowDown size={13} className="text-accent" />
      </div>
    </section>
  );
}
