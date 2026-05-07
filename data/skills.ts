export interface SkillCategory {
  label: string;
  skills: { name: string; icon: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name: "React JS", icon: "⚛" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind CSS", icon: "✦" },
      { name: "Styled Components", icon: "💅" },
      { name: "Framer Motion", icon: "◈" },
    ],
  },
  {
    label: "State & Backend",
    skills: [
      { name: "Redux Toolkit", icon: "⬡" },
      { name: "Redux Query", icon: "⇄" },
      { name: "Context API", icon: "◆" },
      { name: "Node.js", icon: "⬡" },
      { name: "Express", icon: "Ex" },
      { name: "Strapi", icon: "S" },
    ],
  },
  {
    label: "Tools & DB",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "Git & GitHub", icon: "⎇" },
      { name: "REST APIs", icon: "⇄" },
      { name: "Bootstrap", icon: "B" },
      { name: "Figma", icon: "◉" },
      { name: "Postman", icon: "✦" },
    ],
  },
];

export const marqueeRow1 = [
  "React JS",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "Framer Motion",
  "Node.js",
  "Express",
  "MongoDB",
];

export const marqueeRow2 = [
  "Strapi",
  "Redux Query",
  "Context API",
  "Styled Components",
  "Bootstrap",
  "REST APIs",
  "Git",
  "Figma",
  "Postman",
];
