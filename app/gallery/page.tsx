// app/gallery/page.tsx
import Footer from "@/components/Footer"; // server
import GalleryGrid from "@/components/GalleryGrid"; // client
import Navbar from "@/components/Navbar"; // client
import React from "react";

export const metadata = {
  title: "Gallery — Muziva Lodge",
  description:
    "Browse the Muziva Lodge gallery — curated photos of rooms, grounds, and local experiences in Mount Darwin, Zimbabwe.",
  openGraph: {
    title: "Gallery — Muziva Lodge",
    description:
      "Browse the Muziva Lodge gallery — curated photos of rooms, grounds, and local experiences in Mount Darwin, Zimbabwe.",
    type: "website",
    url: "https://muziva-lodge.vercel.app/gallery",
    images: [
      {
        url: "https://muziva-lodge.vercel.app/og/gallery-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Muziva Lodge gallery preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery — Muziva Lodge",
    description:
      "Browse the Muziva Lodge gallery — curated photos of rooms, grounds, and local experiences in Mount Darwin, Zimbabwe.",
    images: ["https://muziva-lodge.vercel.app/og/gallery-cover.jpg"],
  },
  alternates: { canonical: "https://muziva-lodge.vercel.app/gallery" },
};

const imageGalleryStructuredData = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Muziva Lodge Photo Gallery",
  description:
    "High-quality images showcasing Muziva Lodge rooms, exterior, interior and local experiences in Mount Darwin, Zimbabwe.",
  url: "https://muziva-lodge.vercel.app/gallery",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://muziva-lodge.vercel.app/gallery",
  },
  image: [
    {
      "@type": "ImageObject",
      contentUrl: "https://muziva-lodge.vercel.app/gallery/interior-1.jpg",
      thumbnail: "https://muziva-lodge.vercel.app/gallery/interior-1-thumb.jpg",
      description: "Luxury interior at Muziva Lodge",
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://muziva-lodge.vercel.app/gallery/exterior-1.jpg",
      thumbnail: "https://muziva-lodge.vercel.app/gallery/exterior-1-thumb.jpg",
      description: "Exterior view of Muziva Lodge at sunset",
    },
  ],
};

const GalleryPage: React.FC = () => {
  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen flex flex-col">
      <a
        href="#gallery"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-slate-200 focus:text-slate-900 focus:px-3 focus:py-2 rounded">
        Skip to gallery
      </a>

      <Navbar />

      {/* JSON-LD for image gallery */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(imageGalleryStructuredData),
        }}
      />

      <section
        id="hero"
        className="px-6 py-20 text-center bg-gradient-to-b from-slate-900 to-slate-800"
        aria-labelledby="gallery-heading">
        <h1
          id="gallery-heading"
          className="text-4xl md:text-5xl font-bold text-orange-400 tracking-tight">
          Gallery
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed">
          Explore curated photos of Muziva Lodge — rooms, grounds, dining and
          local experiences.
        </p>
      </section>

      <section id="gallery" className="px-6 py-12 max-w-6xl mx-auto w-full">
        <GalleryGrid />
      </section>

      <Footer />
    </main>
  );
};

export default GalleryPage;
