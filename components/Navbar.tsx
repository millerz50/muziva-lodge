// app/components/Navbar.tsx
import Brand from "./navbar/Brand";
import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-slate-100 px-4 py-2 flex items-center justify-between md:px-8">
      <Brand />
      <DesktopNav />
      <MobileNav />
    </nav>
  );
}
