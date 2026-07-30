import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://embodied-human-intelligence.openai.site"),
  title: { default: "Embodied Human Intelligence", template: "%s · Embodied Human Intelligence" },
  description: "Researching intelligence through bodies, environments, and human–AI interaction.",
  openGraph: {
    title: "Embodied Human Intelligence",
    description: "Understanding and designing intelligence through bodies, environments, and human–AI interaction.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Embodied Human Intelligence — Bodies, Environments, Human–AI Interaction" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
