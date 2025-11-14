// app/gallery/page.tsx
import Footer from "@/components/Footer"; // server
import Navbar from "@/components/Navbar"; // client
import Image from "next/image";

export default function GalleryPage() {
  const images = [
    { src: "/images/gallery1.jpg", alt: "Lodge Exterior" },
    { src: "/images/gallery2.jpg", alt: "Luxury Room" },
    { src: "/images/gallery3.jpg", alt: "Dining Area" },
    { src: "/images/gallery4.jpg", alt: "Scenic View" },
    { src: "/images/gallery5.jpg", alt: "Poolside" },
    { src: "/images/gallery6.jpg", alt: "Garden Path" },
  ];

  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="px-6 py-20 text-center bg-gradient-to-b from-slate-900 to-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-400">
          Gallery
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-slate-300">
          Explore the beauty of Muziva Lodge through our curated collection of
          images.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative w-full h-64 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
