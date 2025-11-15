import AnimatedMuzivaLogo from "@/components/logo/AnimatedMuzivaLogo";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muziva Lodge",
  description:
    "Experience comfort, elegance, and modern hospitality in the heart of Zimbabwe at Muziva Lodge.",
  keywords: [
    "Muziva Lodge",
    "Zimbabwe",
    "Luxury Rooms",
    "Fine Dining",
    "Hospitality",
  ],
  authors: [{ name: "Muziva Lodge Team" }],
  openGraph: {
    title: "Muziva Lodge",
    description:
      "Discover luxury rooms, fine dining, and breathtaking views at Muziva Lodge in Zimbabwe.",
    url: "https://muziva-lodge.com",
    siteName: "Muziva Lodge",
    images: [
      {
        url: "/Muziva-logo.png",
        width: 800,
        height: 600,
        alt: "Muziva Lodge Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muziva Lodge",
    description:
      "Luxury hospitality in Zimbabwe — Muziva Lodge offers comfort, elegance, and scenic beauty.",
    images: ["/Muziva-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-100`}>
        {/* ✅ Global loader */}
        <div className="fixed inset-0 flex items-center justify-center bg-slate-900 z-50 animate-fadeOut delay-10000">
          <AnimatedMuzivaLogo />
        </div>

        {/* ✅ Main app content */}
        <div className="relative z-0">{children}</div>
      </body>
    </html>
  );
}
