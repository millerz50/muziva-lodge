// app/components/navbar/Brand.tsx
import Image from "next/image";

export default function Brand() {
  return (
    <div className="flex items-center gap-3">
      {/* Increased circle size */}
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 animate-pulse">
        <Image
          src="/Muziva-logo.png"
          alt="Muziva Lodge Logo"
          width={56} // ✅ larger logo size
          height={56}
          className="rounded-full object-contain"
          priority
        />
      </div>
      <span className="text-lg md:text-xl font-semibold tracking-tight text-slate-100">
        Muziva Lodge
      </span>
    </div>
  );
}
