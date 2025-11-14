// app/page.tsx
import CallToAction from "@/app/components/home/CallToAction"; // server
import FeaturesSection from "@/app/components/home/FeaturesSection"; // server
import HeroSection from "@/app/components/home/HeroSection"; // server
import Footer from "@/components/Footer"; // server
import Navbar from "@/components/Navbar"; // client

export default function HomePage() {
  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
      <Footer />
    </main>
  );
}
