// app/components/footer/SocialLinks.tsx
"use client";

import { socialLinks } from "@/app/config/footerLinks";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 hover:bg-orange-500 transition-colors duration-300 animate-fadeIn">
          <Icon className="h-5 w-5 text-slate-300 hover:text-white transition-colors duration-300" />
        </Link>
      ))}
    </div>
  );
}
