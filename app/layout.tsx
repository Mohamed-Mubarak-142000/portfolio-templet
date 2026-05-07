import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/me.png",
    apple: "/me.png",
  },
  title: "Mohamed Mubarak — Front-End Developer",
  description:
    "Front-End Developer specialised in React JS, TypeScript, and Next.js. Currently at Innovatek building scalable kiosk and dashboard products.",
  keywords: [
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "Mohamed Mubarak",
    "Egypt",
  ],
  authors: [{ name: "Mohamed Mubarak" }],
  openGraph: {
    title: "Mohamed Mubarak — Front-End Developer",
    description:
      "Specialised in React JS, TypeScript & Next.js. Building fast, accessible digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased bg-surface text-text-primary overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
