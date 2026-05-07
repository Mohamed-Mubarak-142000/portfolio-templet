export interface Project {
  id: number;
  number: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  category: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Task Manager Dashboard",
    description:
      "A collaborative team task-tracking system with drag-and-drop boards, role-based access, real-time status updates, and a clean productivity-focused UI.",
    tags: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&q=80",
    category: "Productivity",
    featured: true,
  },
  {
    id: 2,
    number: "02",
    title: "Courses Online Platform",
    description:
      "A full-featured e-learning platform built with Next.js 14. Includes course catalog, Stripe payment integration, authentication, and a polished student dashboard.",
    tags: ["Next.js 14", "Tailwind CSS", "Stripe", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80",
    category: "E-Learning",
    featured: true,
  },
  {
    id: 3,
    number: "03",
    title: "Eslami App",
    description:
      "A Quran reading and listening application built with React and Redux Query. Features surah browsing, audio playback, verse highlighting, and bookmarking.",
    tags: ["React", "Redux Query", "REST API", "CSS Modules"],
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=1200&q=80",
    category: "Lifestyle",
    featured: true,
  },
  {
    id: 4,
    number: "04",
    title: "Amazon & Souq Clones",
    description:
      "Full-stack e-commerce clones replicating Amazon and Souq.com with product listings, cart management, order flow, user auth, and an admin dashboard.",
    tags: ["MERN Stack", "Redux Toolkit", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=1200&q=80",
    category: "E-Commerce",
    featured: false,
  },
  {
    id: 5,
    number: "05",
    title: "LinkedIn Clone",
    description:
      "A social networking platform clone with post feed, user profiles, connection requests, and real-time notifications. Full authentication with JWT.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=1200&q=80",
    category: "Social",
    featured: false,
  },
];
