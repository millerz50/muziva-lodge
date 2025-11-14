// app/contact/page.tsx
"use client"; // form needs client interactivity

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (dummy handler for now)");
  };

  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="px-6 py-20 text-center bg-gradient-to-b from-slate-900 to-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-400">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-slate-300">
          We’d love to hear from you. Reach out for bookings, inquiries, or
          feedback.
        </p>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-16 max-w-3xl mx-auto w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 rounded-lg shadow-md p-8 space-y-6">
          <div>
            <label className="block text-orange-400 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <div>
            <label className="block text-orange-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <div>
            <label className="block text-orange-400 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300 font-semibold">
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
