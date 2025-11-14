// app/config/navItems.ts
import { Briefcase, Home, Image as ImageIcon, Info, Phone } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Services", href: "/services", icon: Briefcase },
  { label: "Gallery", href: "/gallery", icon: ImageIcon },
  { label: "Contact", href: "/contact", icon: Phone },
];
