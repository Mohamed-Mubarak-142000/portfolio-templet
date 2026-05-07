export interface Experience {
  id: number;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Front-End Developer",
    company: "Innovatek",
    type: "Full-Time",
    period: "April 2024 — Present",
    location: "Remote",
    description:
      "Working remotely on a kiosk-based donation system. Responsible for both the end-user kiosk interface and a full Back Office dashboard that empowers content managers to control kiosk UI in real time.",
    highlights: [
      "Built a Back Office dashboard to manage and configure kiosk content dynamically",
      "Designed and implemented a flexible drag-and-drop UI builder tool for non-technical staff",
      "Developed a library of reusable React + TypeScript components used across the platform",
      "Built interactive charts and advanced sortable/filterable data tables for reporting",
    ],
    current: true,
  },
  {
    id: 2,
    role: "Front-End Intern",
    company: "CodeAlpha",
    type: "Internship",
    period: "May 2024 — Present",
    location: "Remote",
    description:
      "Contributed to real-world frontend projects as part of the CodeAlpha internship program, sharpening skills in React, component architecture, and collaborative development workflows.",
    highlights: [
      "Built and delivered assigned frontend tasks using React and Tailwind CSS",
      "Collaborated with the team through Git-based version control workflows",
      "Participated in code reviews and integrated feedback to improve code quality",
    ],
    current: true,
  },
  {
    id: 3,
    role: "Front-End Intern",
    company: "GamifierSA",
    type: "Internship",
    period: "May 2024",
    location: "Remote — Riyadh, Saudi Arabia",
    description:
      "Short-term remote internship with a Saudi-based gamification startup. Contributed to frontend tasks and gained exposure to product-oriented development in an international remote environment.",
    highlights: [
      "Implemented UI components aligned with the product's gamification design language",
      "Worked in a fully remote cross-cultural team environment",
    ],
    current: false,
  },
  {
    id: 4,
    role: "Full Stack MERN — Evening Track",
    company: "ITI Scholarship",
    type: "Education",
    period: "May 2024 (3 months)",
    location: "Egypt",
    description:
      "Intensive 3-month scholarship programme by the Information Technology Institute (ITI) covering the complete MERN stack under professional guidance.",
    highlights: [
      "Covered Node.js, Express, MongoDB, and React in a structured curriculum",
      "Delivered a full-stack capstone project within the programme",
    ],
    current: false,
  },
  {
    id: 5,
    role: "Front-End Development Track",
    company: "ITI Scholarship",
    type: "Education",
    period: "2020 — 2021",
    location: "Egypt",
    description:
      "Foundational front-end scholarship programme by ITI covering HTML, CSS, JavaScript, and modern UI development workflows.",
    highlights: [
      "Gained strong foundational skills in semantic HTML, CSS layouts, and vanilla JS",
      "Built and presented a front-end graduation project to ITI instructors",
    ],
    current: false,
  },
  {
    id: 6,
    role: "B.Sc. Computers & Information",
    company: "Menoufia University",
    type: "Education",
    period: "2022 — 2023",
    location: "Menoufia, Egypt",
    description:
      "Bachelor's degree in Computers and Information from Menoufia University, providing a solid grounding in computer science principles, algorithms, and software engineering.",
    highlights: [
      "Studied data structures, algorithms, databases, and software engineering",
      "Applied academic knowledge to practical web development projects",
    ],
    current: false,
  },
];
