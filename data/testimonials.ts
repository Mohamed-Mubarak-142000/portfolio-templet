export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO",
    company: "BrewLux Coffee",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    quote:
      "Mohamed delivered an absolutely stunning website. The animations are cinematic and our conversion rate increased by 60% in the first month. Truly exceptional work.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Harrington",
    role: "Founder",
    company: "Apex Fitness",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    quote:
      "The gym website Mohamed built for us is beyond anything we imagined. Every interaction feels premium. Our members compliment the site constantly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Layla Fontaine",
    role: "Creative Director",
    company: "Velour Agency",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    quote:
      "Working with Mohamed was seamless. He translated our complex Figma designs into a flawless, animated React application. His attention to detail is unmatched.",
    rating: 5,
  },
  {
    id: 4,
    name: "Arjun Sharma",
    role: "Product Manager",
    company: "Dataflow SaaS",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    quote:
      "Mohamed built our dashboard from scratch and the performance is incredible. TypeScript, clean architecture, and beautiful UI. We'll definitely work together again.",
    rating: 5,
  },
  {
    id: 5,
    name: "Chloe Beaumont",
    role: "Owner",
    company: "Maison Dolce",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    quote:
      "The restaurant website is gorgeous. Customers always ask who built it. Mohamed's work gives us a luxury feel that perfectly matches our brand identity.",
    rating: 5,
  },
];
