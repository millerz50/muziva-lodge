// app/components/home/HeroSection.tsx
import AnimatedLogo from "@/components/hero/AnimatedLogo"; // client component
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Client-side animated logo */}
      <AnimatedLogo />

      <h1 className="text-4xl md:text-5xl font-bold text-orange-400 animate-fadeIn">
        Welcome to Muziva Lodge
      </h1>
      <p className="mt-4 max-w-xl text-slate-300">
        Experience comfort, elegance, and modern hospitality in the heart of
        Zimbabwe.
      </p>

      <div className="mt-6 flex gap-4">
        <Link
          href="/services"
          className="px-6 py-3 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300">
          Explore Services
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-md border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition-colors duration-300">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
