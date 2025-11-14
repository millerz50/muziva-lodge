// app/about/page.tsx
import Footer from "@/components/Footer"; // server
import Navbar from "@/components/Navbar"; // client
import MapSection from "@/components/about/MapSection"; // client
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen flex flex-col">
      <Navbar />
      <section className="px-6 py-20 text-center bg-gradient-to-b from-slate-900 to-slate-800">
        <Image
          src="/Muziva-logo.png"
          alt="Muziva Lodge Logo"
          width={128}
          height={128}
          className="mx-auto mb-6 rounded-full object-cover"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-orange-400">
          About Muziva Lodge
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-slate-300">
          Nestled in the heart of Zimbabwe, Muziva Lodge offers a blend of
          modern comfort and traditional hospitality.
        </p>
      </section>
      <section className="px-6 py-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <Image
            src="/interior.jpg"
            alt="Luxury Lodge Interior"
            width={600}
            height={400}
            className="mb-6 rounded-lg shadow-md object-cover"
          />
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">
            Our Story
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Founded with a vision of elegance and sustainability...
          </p>
        </div>
        <div>
          <Image
            src="/exterior.jpg"
            alt="Scenic Lodge Location"
            width={600}
            height={400}
            className="mb-6 rounded-lg shadow-md object-cover"
          />
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">
            Our Location
          </h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Conveniently located near Bindura...
          </p>
          <MapSection />
        </div>
      </section>
      <Footer />
    </main>
  );
}
