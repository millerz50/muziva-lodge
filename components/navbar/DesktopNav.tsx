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
      {navItems.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <Link
            href={href}
            className={`transition-colors flex items-center gap-2 ${
              pathname === href
                ? "text-orange-400 border-b-2 border-orange-400"
                : "hover:text-orange-400"
            }`}>
            {/* ✅ Icon added */}
            <Icon
              className={`h-4 w-4 ${
                pathname === href ? "text-orange-400" : "text-orange-300"
              }`}
            />
            {label}
          </Link>
        </li>
      ))}
      <li>
        <Link
          href="/more"
          className="hover:text-orange-400 transition-colors flex items-center gap-2">
          <MoreHorizontal className="h-4 w-4 text-orange-300" /> More
        </Link>
      </li>
    </ul>
  );
}
