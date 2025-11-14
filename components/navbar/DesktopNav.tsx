// app/components/navbar/DesktopNav.tsx
"use client"; // needs client for pathname highlighting

import { navItems } from "@/app/config/navItems";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <ul className="hidden md:flex gap-6 text-sm font-medium items-center">
      {navItems.map(({ label, href }) => (
        <li key={label}>
          <Link
            href={href}
            className={`transition-colors flex items-center gap-1 ${
              pathname === href
                ? "text-orange-400 border-b-2 border-orange-400"
                : "hover:text-orange-400"
            }`}>
            {label}
          </Link>
        </li>
      ))}
      <li>
        <Link
          href="/more"
          className="hover:text-orange-400 transition-colors flex items-center gap-1">
          <MoreHorizontal className="h-4 w-4" /> More
        </Link>
      </li>
    </ul>
  );
}
