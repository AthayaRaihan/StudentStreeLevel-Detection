"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const FloatingNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl z-50"
          >
            <div className="hidden md:flex items-center justify-between px-6 py-3 bg-white/30 backdrop-blur-lg rounded-full shadow-lg border border-white/20">
              <Link href="/" className="text-lg font-bold text-slate-800">
                StressDetect
              </Link>
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/biodata"
                className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              >
                Consultation
              </Link>
            </div>
            <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white/30 backdrop-blur-lg rounded-full shadow-lg border border-white/20">
              <Link href="/" className="text-lg font-bold text-slate-800">
                StressDetect
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-800"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-20 left-0 right-0 mx-auto w-[90%] bg-white p-6 rounded-2xl shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-slate-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/biodata"
                  className="w-full mt-4 px-4 py-3 text-center text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Consultation
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNavbar;
