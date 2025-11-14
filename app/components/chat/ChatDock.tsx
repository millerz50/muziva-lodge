// app/components/chat/ChatDock.tsx
"use client";

import { useState } from "react";
import { FaComments, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";

export default function ChatDock() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Dock Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300">
        <FaComments size={24} />
      </button>

      {/* Dock Panel */}
      {open && (
        <div className="fixed bottom-20 right-6 w-64 bg-slate-800 text-slate-100 rounded-lg shadow-lg p-4 space-y-4">
          <h3 className="text-orange-400 font-semibold mb-2">Chat with us</h3>
          <div className="flex flex-col gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/263771234567" // replace with lodge number
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors duration-300">
              <FaWhatsapp size={20} /> WhatsApp
            </a>

            {/* Facebook Messenger */}
            <a
              href="https://m.me/YOUR_PAGE_ID" // replace with your FB page ID
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">
              <FaFacebookMessenger size={20} /> Messenger
            </a>

            {/* Assistant (internal help) */}
            <a
              href="/contact"
              className="flex items-center gap-3 px-3 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300">
              <FaComments size={20} /> Assistance
            </a>
          </div>
        </div>
      )}
    </>
  );
}
