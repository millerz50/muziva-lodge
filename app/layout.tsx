// app/layout.tsx
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
    url: "https://muziva-lodge.com", // replace with your domain
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
        {children}
      </body>
    </html>
  );
}
