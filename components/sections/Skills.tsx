"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import MarqueeStrip from "@/components/animations/MarqueeStrip";
import { marqueeRow1, marqueeRow2, skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
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
            Tech Stack
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Tools I <span className="text-gradient">master</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-text-secondary text-lg max-w-xl mb-20">
            A curated stack of modern technologies I use daily to build fast,
            accessible, and visually stunning web experiences.
          </p>
        </ScrollReveal>
      </div>

      {/* Marquee rows */}
      <div className="mb-6">
        <MarqueeStrip
          items={marqueeRow1}
          direction="left"
          speed="normal"
          className="py-3 border-y border-border"
          itemClassName="text-text-secondary hover:text-white text-base transition-colors duration-300"
        />
      </div>
      <div className="mb-20">
        <MarqueeStrip
          items={marqueeRow2}
          direction="right"
          speed="normal"
          className="py-3 border-b border-border"
          itemClassName="text-text-secondary hover:text-white text-base transition-colors duration-300"
        />
      </div>

      {/* Category cards */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <ScrollReveal key={cat.label} delay={catIdx * 0.1}>
              <div className="glass rounded-2xl p-8 h-full group hover:border-accent/30 transition-all duration-500">
                <h3 className="font-display font-bold text-xl text-white mb-6 group-hover:text-accent transition-colors duration-300">
                  {cat.label}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 glass rounded-xl px-4 py-3 hover:border-accent/20 transition-all duration-300 cursor-default group/skill"
                    >
                      <span className="text-accent text-sm font-bold w-6 text-center select-none">
                        {skill.icon}
                      </span>
                      <span className="text-text-secondary text-sm font-medium group-hover/skill:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
