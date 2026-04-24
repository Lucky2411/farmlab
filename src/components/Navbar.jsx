import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo2.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 px-4 md:px-16 py-3 flex justify-between items-center backdrop-blur-xl bg-black/40 border-b border-white/10">

      {/* LOGO + BRAND */}
      <div className="flex items-center gap-3 cursor-pointer">

        {/* BIG LOGO */}
        <img
          src={logo}
          alt="Farmlab Logo"
          className="h-14 md:h-16
           w-auto object-contain"
        />

        {/* GREEN BRAND TEXT */}
        <span className="text-green-400 text-xl md:text-2xl font-bold tracking-wide">
          Farmlab
        </span>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex space-x-10 text-gray-300 text-sm font-medium">
        <a className="hover:text-green-400 transition cursor-pointer">Solutions</a>
        <a className="hover:text-green-400 transition cursor-pointer">Impact</a>
        <a className="hover:text-green-400 transition cursor-pointer">Contact</a>
      </div>

      {/* MOBILE BUTTON */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl flex flex-col items-center py-8 space-y-6 text-gray-300 md:hidden border-t border-white/10"
          >
            <a className="hover:text-green-400 transition text-lg cursor-pointer">
              Solutions
            </a>
            <a className="hover:text-green-400 transition text-lg cursor-pointer">
              Impact
            </a>
            <a className="hover:text-green-400 transition text-lg cursor-pointer">
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}