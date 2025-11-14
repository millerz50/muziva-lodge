// app/services/page.tsx
import Footer from "@/components/Footer"; // server
import Navbar from "@/components/Navbar"; // client
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 py-20 text-center bg-gradient-to-b from-slate-900 to-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-400">
          Our Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-slate-300">
          At Muziva Lodge, we provide a range of services designed to make your
          stay comfortable, memorable, and truly unique.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Service 1 */}
        <div className="bg-slate-800 rounded-lg shadow-md overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src="/images/service-room.jpg"
              alt="Luxury Rooms"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-orange-400 mb-2">
              Luxury Rooms
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Spacious, elegant rooms equipped with modern amenities to ensure
              your comfort and relaxation.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="bg-slate-800 rounded-lg shadow-md overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src="/images/service-dining.jpg"
              alt="Fine Dining"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-orange-400 mb-2">
              Fine Dining
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Enjoy exquisite meals prepared by our chefs, blending local
              flavors with international cuisine.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="bg-slate-800 rounded-lg shadow-md overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src="/images/service-adventure.jpg"
              alt="Adventure Activities"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-orange-400 mb-2">
              Adventure Activities
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Explore nature trails, guided tours, and outdoor adventures that
              showcase Zimbabwe’s beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
