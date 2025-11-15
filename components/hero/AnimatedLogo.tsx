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
          setTimeout(() => setAnimate(false), 1200);
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
      className={`mb-6 flex justify-center transition-transform duration-700 ease-out ${
        animate ? "scale-105" : "scale-100"
      }`}>
      <div className="relative w-[300px] h-[120px] sm:w-[360px] sm:h-[140px]">
        <Image
          src="/Muziva-logo.png"
          alt="Muziva Lodge Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
