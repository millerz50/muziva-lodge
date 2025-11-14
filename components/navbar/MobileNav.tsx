// app/components/navbar/MobileNav.tsx
"use client";

import { navItems } from "@/app/config/navItems";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="h-6 w-6 text-orange-400" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-slate-900 text-slate-100">
          <VisuallyHidden>
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>
              Select a page to explore Muziva Lodge.
            </SheetDescription>
          </VisuallyHidden>

          <ul className="flex flex-col gap-4 mt-6 text-base font-medium">
            {navItems.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2 rounded transition-colors ${
                    pathname === href
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-500 hover:text-white"
                  }`}>
                  <Icon
                    className={`h-5 w-5 ${
                      pathname === href ? "text-white" : "text-orange-400"
                    }`}
                  />
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/more"
                className="flex items-center gap-3 px-3 py-2 rounded hover:bg-orange-500 hover:text-white">
                <MoreHorizontal className="h-5 w-5 text-orange-400" />
                More
              </Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
