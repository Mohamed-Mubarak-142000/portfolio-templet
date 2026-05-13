"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { projects } from "@/data/projects";

export default function Projects() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const ctx = gsap.context(() => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: (i % 3) * 0.12,
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top 87%",
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
      id="projects"
      className="relative bg-surface-2 section-padding overflow-hidden"
    >
      {/* Decorative top line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <ScrollReveal>
              <p className="text-accent text-xs font-semibold tracking-[0.4em] uppercase mb-4">
                Selected Work
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                Projects that <span className="text-gradient">speak</span>
                <br />
                for themselves
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-base max-w-xs md:text-right">
              Each project is a full case study — from wireframe to production.
            </p>
          </ScrollReveal>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className={`project-card group relative glass rounded-2xl overflow-hidden cursor-pointer
                ${project.featured && i === 0 ? "md:col-span-2 lg:col-span-2" : ""}
              `}
              style={{ opacity: 0 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="project-card-img object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Hover content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <div className="flex items-center flex-wrap gap-2">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-xs font-semibold hover:bg-accent-light transition-colors duration-300"
                      >
                        <ExternalLink size={12} />
                        Live
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white text-xs font-semibold hover:border-white/50 transition-colors duration-300"
                    >
                      <GithubIcon width={12} height={12} />
                      GitHub
                    </a>
                    {project.backendUrl && (
                      <a
                        href={project.backendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white text-xs font-semibold hover:border-white/50 transition-colors duration-300"
                      >
                        <GithubIcon width={12} height={12} />
                        Backend
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Card info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-text-muted text-xs font-semibold tracking-widest uppercase">
                      {project.number} · {project.category}
                    </span>
                    <h3 className="font-display font-bold text-xl text-white mt-1 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-text-muted group-hover:text-accent shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-text-muted border border-border rounded-full px-3 py-1 font-medium hover:border-accent/40 hover:text-text-secondary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
