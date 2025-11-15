// app/about/page.tsx
"use server";

import Footer from "@/components/Footer"; // server
import Navbar from "@/components/Navbar"; // client
import MapSection from "@/components/about/MapSection"; // client
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Muziva Lodge — Escape to Tranquility",
  description:
    "Muziva Lodge — modern comfort and traditional hospitality in Mount Darwin, Zimbabwe. Learn about our story, location, amenities, and sustainable practices.",
  openGraph: {
    title: "About Muziva Lodge — Escape to Tranquility",
    description:
      "Muziva Lodge — modern comfort and traditional hospitality in Mount Darwin, Zimbabwe.",
    type: "website",
    url: "https://muziva-lodge.vercel.app/about",
    images: [
      {
        url: "https://muziva-lodge.vercel.app/Muziva-logo.png",
        width: 1200,
        height: 630,
        alt: "Muziva Lodge logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Muziva Lodge — Escape to Tranquility",
    description:
      "Muziva Lodge — modern comfort and traditional hospitality in Mount Darwin, Zimbabwe.",
    images: ["https://muziva-lodge.vercel.app/Muziva-logo.png"],
  },
  alternates: { canonical: "https://muziva-lodge.vercel.app/about" },
};

const orgStructuredData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Muziva Lodge",
  url: "https://muziva-lodge.vercel.app",
  logo: "https://muziva-lodge.vercel.app/Muziva-logo.png",
  description:
    "Muziva Lodge offers modern comfort and traditional hospitality in Mount Darwin, Zimbabwe. Book luxury stays with local charm.",
  telephone: "+263-xxxx-xxxx",
  address: {
    "@type": "PostalAddress",
    streetAddress: "576, Mupfure Heights",
    addressLocality: "Mount Darwin",
    addressRegion: "Mashonaland Central",
    postalCode: "00000",
    addressCountry: "ZW",
  },
  potentialAction: {
    "@type": "ViewAction",
    target: "https://maps.app.goo.gl/fmEnt2sH4Db5i5Sq5",
    name: "View Muziva Lodge on Google Maps",
  },
  sameAs: [
    "https://muziva-lodge.vercel.app",
    "https://maps.app.goo.gl/fmEnt2sH4Db5i5Sq5",
  ],
};

const AboutPage: React.FC = () => {
  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-slate-200 focus:text-slate-900 focus:px-3 focus:py-2 rounded">
        Skip to content
      </a>

      <Navbar />

      {/* JSON-LD for structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgStructuredData) }}
      />

      <section
        id="hero"
        className="px-6 py-20 text-center bg-gradient-to-b from-slate-900 to-slate-800"
        aria-labelledby="about-heading">
        <Image
          src="/Muziva-logo.png"
          alt="Muziva Lodge logo: stylised letter M with palm trees and warm desert gradient"
          width={128}
          height={128}
          className="mx-auto mb-6 rounded-full object-cover"
          priority
        />

        <h1
          id="about-heading"
          className="text-4xl md:text-5xl font-bold text-orange-400">
          About Muziva Lodge
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-slate-300">
          Nestled in Mount Darwin, Zimbabwe, Muziva Lodge blends modern comfort
          with local hospitality and sustainable practices.
        </p>
      </section>

      <section
        id="content"
        className="px-6 py-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-12"
        aria-labelledby="our-story-heading">
        <div>
          <Image
            src="/interior.jpg"
            alt="Muziva Lodge luxury interior with wooden finishes and warm lighting"
            width={1200}
            height={800}
            className="mb-6 rounded-lg shadow-md object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="/images/placeholder-interior.jpg"
            priority={false}
          />
          <h2
            id="our-story-heading"
            className="text-2xl font-semibold text-orange-400 mb-4">
            Our Story
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Founded with a commitment to comfort and conservation, Muziva Lodge
            is a place to relax, reconnect and explore the natural beauty of
            Zimbabwe.
          </p>
        </div>

        <div>
          <Image
            src="/exterior.jpg"
            alt="Exterior view of Muziva Lodge at sunset"
            width={1200}
            height={800}
            className="mb-6 rounded-lg shadow-md object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="/images/placeholder-exterior.jpg"
            priority={false}
          />
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">
            Our Location
          </h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Conveniently located at 576, Mupfure Heights, Mount Darwin — Muziva
            Lodge provides easy access to local sights and nature experiences
            while offering a peaceful retreat.
          </p>

          <div aria-label="Map showing Muziva Lodge location">
            <MapSection />
            <p className="mt-4 text-sm text-slate-400">
              Map link:{" "}
              <a
                href="https://maps.app.goo.gl/fmEnt2sH4Db5i5Sq5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 underline">
                Open in Google Maps
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
