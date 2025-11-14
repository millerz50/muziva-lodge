// app/components/about/MapSection.tsx
"use client";

import { useEffect, useRef } from "react";

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Embed Google Maps iframe for Mount Darwin, Zimbabwe (dummy location)
    mapRef.current.innerHTML = `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.02123456789!2d32.6667!3d-16.7667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1930abcd123456%3A0xabcdef1234567890!2sMount%20Darwin%2C%20Zimbabwe!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
        width="100%"
        height="100%"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `;
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-96 rounded-lg shadow-md overflow-hidden"
    />
  );
}
