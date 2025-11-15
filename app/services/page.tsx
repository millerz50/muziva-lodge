// app/services/page.tsx
import Footer from "@/components/Footer"; // server
import Navbar from "@/components/Navbar"; // client
import Image from "next/image";

export const metadata = {
  title: "Services — Muziva Lodge",
  description:
    "Discover Muziva Lodge services in Mount Darwin — luxury rooms, fine dining and guided adventure activities designed for comfort and discovery.",
  openGraph: {
    title: "Services — Muziva Lodge",
    description:
      "Luxury rooms, fine dining and guided adventure activities at Muziva Lodge, Mount Darwin, Zimbabwe.",
    type: "website",
    url: "https://muziva-lodge.vercel.app/services",
    images: [
      {
        url: "https://muziva-lodge.vercel.app/og/services-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Muziva Lodge services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Muziva Lodge",
    description:
      "Luxury rooms, fine dining and guided adventure activities at Muziva Lodge, Mount Darwin.",
    images: ["https://muziva-lodge.vercel.app/og/services-cover.jpg"],
  },
  alternates: { canonical: "https://muziva-lodge.vercel.app/services" },
};

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Muziva Lodge",
  url: "https://muziva-lodge.vercel.app",
  service: [
    {
      "@type": "Service",
      name: "Luxury Rooms",
      description:
        "Spacious, elegant rooms with modern amenities for comfort and relaxation.",
    },
    {
      "@type": "Service",
      name: "Fine Dining",
      description:
        "Exquisite meals blending local flavors with international cuisine.",
    },
    {
      "@type": "Service",
      name: "Adventure Activities",
      description:
        "Guided nature trails, tours and outdoor activities showcasing Zimbabwe's beauty.",
    },
  ],
  sameAs: ["https://muziva-lodge.vercel.app"],
};

export default function ServicesPage() {
  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen flex flex-col">
      <a
        href="#services-list"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-slate-200 focus:text-slate-900 focus:px-3 focus:py-2 rounded">
        Skip to services
      </a>

      <Navbar />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />

      {/* Hero */}
      <section
        className="px-6 py-20 text-center bg-gradient-to-b from-slate-900 to-slate-800"
        aria-labelledby="services-heading">
        <h1
          id="services-heading"
          className="text-4xl md:text-5xl font-bold text-orange-400">
          Our Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-slate-300">
          At Muziva Lodge, we provide a range of services designed to make your
          stay comfortable, memorable and uniquely Zimbabwean.
        </p>
      </section>

      {/* Services Grid */}
      <section
        id="services-list"
        className="px-6 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        aria-labelledby="services-heading-2">
        <h2 id="services-heading-2" className="sr-only">
          List of Muziva Lodge services
        </h2>

        {/* Service 1 */}
        <article
          className="bg-slate-800 rounded-lg shadow-md overflow-hidden"
          aria-labelledby="svc-rooms">
          <div className="relative w-full h-48">
            <Image
              src="/services/rooms.jpg"
              alt="Luxury room at Muziva Lodge"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h3
              id="svc-rooms"
              className="text-xl font-semibold text-orange-400 mb-2">
              Luxury Rooms
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Spacious, elegant rooms equipped with modern amenities and locally
              sourced furnishings for a restful stay.
            </p>
          </div>
        </article>

        {/* Service 2 */}
        <article
          className="bg-slate-800 rounded-lg shadow-md overflow-hidden"
          aria-labelledby="svc-dining">
          <div className="relative w-full h-48">
            <Image
              src="/services/dining.jpg"
              alt="Fine dining at Muziva Lodge"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h3
              id="svc-dining"
              className="text-xl font-semibold text-orange-400 mb-2">
              Fine Dining
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Enjoy seasonal menus crafted by our chefs, pairing local
              ingredients with international techniques.
            </p>
          </div>
        </article>

        {/* Service 3 */}
        <article
          className="bg-slate-800 rounded-lg shadow-md overflow-hidden"
          aria-labelledby="svc-adventure">
          <div className="relative w-full h-48">
            <Image
              src="/services/adventure.jpg"
              alt="Guided adventure activity near Muziva Lodge"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h3
              id="svc-adventure"
              className="text-xl font-semibold text-orange-400 mb-2">
              Adventure Activities
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Guided nature walks, birdwatching, and other curated outdoor
              experiences showcasing the region's biodiversity.
            </p>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
}
