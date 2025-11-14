// app/components/home/CallToAction.tsx
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="px-6 py-16 text-center bg-slate-800">
      <h2 className="text-3xl font-bold text-orange-400 mb-4">
        Ready to Book Your Stay?
      </h2>
      <Link
        href="/bookings"
        className="px-8 py-4 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300">
        Book Now
      </Link>
    </section>
  );
}
