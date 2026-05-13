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
      { name: "Angular", icon: "🅰" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind CSS", icon: "✦" },
      { name: "shadcn/ui", icon: "◼" },
      { name: "Material UI", icon: "◈" },
      { name: "Mantine UI", icon: "◇" },
      { name: "Styled Components", icon: "💅" },
      { name: "Framer Motion", icon: "◉" },
    ],
  },
  {
    label: "State & Backend",
    skills: [
      { name: "Redux Toolkit", icon: "⬡" },
      { name: "TanStack Query", icon: "⇄" },
      { name: "Zustand", icon: "⊕" },
      { name: "Context API", icon: "◆" },
      { name: "Node.js", icon: "⬡" },
      { name: "NestJS", icon: "N" },
      { name: "Express", icon: "Ex" },
      { name: "Strapi", icon: "S" },
    ],
  },
  {
    label: "Tools & DB",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "TanStack Table", icon: "⊞" },
      { name: "Azure", icon: "☁" },
      { name: "Design Patterns", icon: "⬡" },
      { name: "Git & GitHub", icon: "⎇" },
      { name: "REST APIs", icon: "⇄" },
      { name: "Figma", icon: "◉" },
      { name: "Postman", icon: "✦" },
    ],
  },
];

export const marqueeRow1 = [
  "React JS",
  "Next.js",
  "Angular",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Material UI",
  "Mantine UI",
  "Redux Toolkit",
  "TanStack Query",
  "Node.js",
  "NestJS",
  "MongoDB",
];

export const marqueeRow2 = [
  "Framer Motion",
  "Styled Components",
  "Zustand",
  "Context API",
  "Express",
  "Strapi",
  "TanStack Table",
  "Azure",
  "Design Patterns",
  "Git & GitHub",
  "REST APIs",
  "Figma",
  "Postman",
];

export const marqueeRow3 = [
  "NestJS",
  "Azure",
  "TanStack Table",
  "Design Patterns",
  "Strapi",
  "NestJS",
  "Bootstrap",
  "Redux Query",
  "Framer Motion",
  "TypeScript",
];
