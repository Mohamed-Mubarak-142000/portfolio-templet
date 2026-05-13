export interface Project {
  id: number;
  number: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  backendUrl?: string;
  image: string;
  category: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Tabeebak",
    description:
      "A healthcare platform connecting patients with doctors. Features appointment booking, doctor search by specialty, patient profiles, and a clean medical-grade UI.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "REST API"],
    liveUrl: "https://tabeebak-frontend.vercel.app/",
    githubUrl: "https://github.com/Mohamed-Mubarak-142000/tabeebak-frontend",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    category: "Healthcare",
    featured: true,
  },
  {
    id: 2,
    number: "02",
    title: "Educational Platform",
    description:
      "Full-stack e-learning platform with course catalog, student dashboard, and admin controls. React frontend powered by a Node.js & Express REST API with MongoDB.",
    tags: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "JWT"],
    liveUrl: "#",
    githubUrl: "https://github.com/Mohamed-Mubarak-142000/educational-platform",
    backendUrl:
      "https://github.com/Mohamed-Mubarak-142000/educational-platform-BE",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80",
    category: "E-Learning",
    featured: true,
  },
  {
    id: 3,
    number: "03",
    title: "Electronic Shop",
    description:
      "Full-featured e-commerce store for electronics with product listings, shopping cart, user authentication, order tracking, and an admin dashboard.",
    tags: ["React", "Redux Toolkit", "Node.js", "MongoDB", "TypeScript"],
    liveUrl:
      "https://electronic-shop-client-ihu8akc17-142000s-projects.vercel.app/",
    githubUrl:
      "https://github.com/Mohamed-Mubarak-142000/electronic-shop-client",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    category: "E-Commerce",
    featured: true,
  },
  {
    id: 4,
    number: "04",
    title: "Chill Scoop",
    description:
      "Delightful ice cream shop website with a vibrant UI, product showcase, flavor catalog, and smooth animations for an engaging customer experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://chill-scoop.vercel.app/",
    githubUrl: "https://github.com/Mohamed-Mubarak-142000/chill-scoop",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1200&q=80",
    category: "Food & Beverage",
    featured: false,
  },
  {
    id: 5,
    number: "05",
    title: "Underground Gym",
    description:
      "Multilingual gym website with membership plans, training schedules, and trainer profiles. Fully internationalized with next-intl for AR/EN locales.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "next-intl", "i18n"],
    liveUrl: "https://under-ground-gym.vercel.app/en",
    githubUrl: "https://github.com/Mohamed-Mubarak-142000/UnderGround-Gym-",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    category: "Health & Fitness",
    featured: false,
  },
  {
    id: 6,
    number: "06",
    title: "Kahuitak",
    description:
      "Modern multilingual platform with a polished, accessible UI. Built with Next.js and next-intl for seamless internationalization across multiple locales.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "next-intl", "i18n"],
    liveUrl: "https://kahuitak.vercel.app/en",
    githubUrl: "https://github.com/Mohamed-Mubarak-142000/kahuitak",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    category: "Platform",
    featured: false,
  },
  {
    id: 7,
    number: "07",
    title: "Twister Restaurant",
    description:
      "Appetizing restaurant website with an interactive menu, food gallery, and a smooth modern layout. Optimized for all devices with clean responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://twister-resturane.vercel.app/",
    githubUrl: "https://github.com/Mohamed-Mubarak-142000/Twister-resturane-",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    category: "Food & Beverage",
    featured: false,
  },
  {
    id: 8,
    number: "08",
    title: "Portfolio Template",
    description:
      "High-performance developer portfolio with GSAP animations, smooth Lenis scroll, magnetic buttons, and a custom cursor — built entirely with Next.js 14.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "GSAP", "Lenis"],
    liveUrl:
      "https://portfolio-templet-1o47-4h9yqzepp-142000s-projects.vercel.app/",
    githubUrl: "https://github.com/Mohamed-Mubarak-142000/portfolio-templet",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
    category: "Portfolio",
    featured: false,
  },
  {
    id: 9,
    number: "09",
    title: "Feature React Architecture",
    description:
      "Showcase of feature-based React architecture patterns — scalable folder structures, co-located logic, and best practices for building large-scale applications.",
    tags: ["React", "TypeScript", "Feature Architecture", "Redux Toolkit"],
    liveUrl: "#",
    githubUrl:
      "https://github.com/Mohamed-Mubarak-142000/feature-react-architectures-showcase",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80",
    category: "Dev Tools",
    featured: false,
  },
  {
    id: 10,
    number: "10",
    title: "Stepper Form Package",
    description:
      "Open-source NPM package providing a customizable multi-step form stepper built with React Hook Form & Mantine UI. Reusable, validated, and developer-friendly.",
    tags: ["React", "React Hook Form", "Mantine UI", "TypeScript", "NPM"],
    liveUrl: "https://www.npmjs.com/package/react-multi-form-step",
    githubUrl: "https://github.com/Mohamed-Mubarak-142000/stepper-form-package",
    image:
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&q=80",
    category: "Open Source",
    featured: false,
  },
];
