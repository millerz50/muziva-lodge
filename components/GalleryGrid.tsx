// components/GalleryGrid.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function GalleryGrid() {
  const images: { src: string; alt: string }[] = Array.from(
    { length: 7 },
    (_, i) => ({
      src: `/assets/slide/slide-${i + 1}.jpg`,
      alt: `Slide ${i + 1}`,
    })
  );

  const [zoomed, setZoomed] = useState<number | null>(null);

  const nextImage = () => {
    if (zoomed !== null) setZoomed((zoomed + 1) % images.length);
  };
  const prevImage = () => {
    if (zoomed !== null)
      setZoomed((zoomed - 1 + images.length) % images.length);
  };

  // Close modal + keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomed(null);
      if (zoomed !== null && e.key === "ArrowRight") nextImage();
      if (zoomed !== null && e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [zoomed]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = zoomed !== null ? "hidden" : "";
  }, [zoomed]);

  return (
    <section className="w-full px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {images.map((img, i) => (
        <div
          key={i}
          className="relative w-full h-56 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
          onClick={() => setZoomed(i)}>
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={i < 3}
          />
          {/* Overlay gradient for sleek look */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      ))}

      {/* Zoom Modal */}
      {zoomed !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          onClick={() => setZoomed(null)}>
          <div
            className="relative w-11/12 md:w-3/4 lg:w-2/3 h-[80vh] flex items-center animate-scaleIn"
            onClick={(e) => e.stopPropagation()}>
            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-colors">
              ‹
            </button>

            {/* Zoomed image */}
            <Image
              src={images[zoomed].src}
              alt={images[zoomed].alt}
              width={1600}
              height={1067}
              quality={90}
              className="object-contain mx-auto rounded-lg shadow-2xl"
              sizes="100vw"
            />

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-colors">
              ›
            </button>

            {/* Close Button */}
            <button
              onClick={() => setZoomed(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-colors">
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
