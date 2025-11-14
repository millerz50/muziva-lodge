// app/components/footer/Brand.tsx
import Image from "next/image";

export default function FooterBrand() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 animate-pulse">
        <Image
          src="/Muziva-logo.png"
          alt="Muziva Lodge Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <span className="text-lg font-semibold tracking-tight text-slate-100">
        Muziva Lodge
      </span>
    </div>
  );
}
