// app/components/Footer.tsx
import FooterBrand from "./footer/Brand";
import FooterLinks from "./footer/FooterLinks";
import SocialLinks from "./footer/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 px-6 py-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <FooterBrand />
        <FooterLinks />
        <SocialLinks />
      </div>
      <div className="mt-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Muziva Lodge. All rights reserved.
      </div>
    </footer>
  );
}
