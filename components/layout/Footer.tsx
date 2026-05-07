import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import MagneticButton from "@/components/animations/MagneticButton";

const socialLinks = [
  {
    icon: GithubIcon,
    href: "https://github.com/MohamedMubarak14M",
    label: "GitHub",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/mohamedmubarak",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:mohamedmubarak14m@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface-2">
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left */}
        <div>
          <p className="font-display font-bold text-2xl mb-1">
            Mohamed Mubarak<span className="text-accent">.</span>
          </p>
          <p className="text-text-muted text-sm">
            Front-End Developer · React · TypeScript · Next.js
          </p>
        </div>

        {/* Center — socials */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-accent hover:text-accent hover:glow-sm transition-all duration-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Right — back to top */}
        <MagneticButton
          as="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-accent hover:text-accent transition-all duration-300"
          strength={0.5}
        >
          <ArrowUp size={18} />
        </MagneticButton>
      </div>

      <div className="border-t border-border py-4 text-center">
        <p className="text-text-muted text-xs tracking-widest">
          © 2026 MOHAMED MUBARAK · ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
