// app/components/hero/AnimatedLogo.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AnimatedLogo() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const logo = document.getElementById("hero-logo");
    if (!logo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          setTimeout(() => setAnimate(false), 1200); // reset after bounce
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(logo);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="hero-logo"
      className={`relative w-32 h-32 mb-6 ${
        animate ? "animate-bounceOnce" : ""
      }`}>
      <Image
        src="/Muziva-logo.png"
        alt="Muziva Lodge Logo"
        fill
        className="rounded-full object-cover"
      />
    </div>
  );
}
