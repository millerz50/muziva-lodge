// app/components/footer/FooterLinks.tsx
import Link from "next/link";
import { footerLinks } from "../../app/config/footerLinks";

export default function FooterLinks() {
  return (
    <ul className="flex flex-wrap gap-4 text-sm text-slate-300">
      {footerLinks.map(({ label, href }) => (
        <li key={label}>
          <Link
            href={href}
            className="hover:text-orange-400 transition-colors duration-300">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
