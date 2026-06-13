"use client";

import { motion } from "framer-motion";
import BiodataHeader from "@/components/biodata/BiodataHeader";
import BiodataForm from "@/components/biodata/BiodataForm";

export default function BiodataPage() {
  return (
    <main className="relative h-screen w-screen overflow-hidden flex items-center justify-center px-4">
      {/* ── Animated background blobs ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: ["-15%", "15%", "-15%"], y: ["-10%", "20%", "-10%"] }}
          transition={{ duration: 22, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: ["15%", "-15%", "15%"], y: ["15%", "-15%", "15%"] }}
          transition={{ duration: 28, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-violet-200/35 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: ["-10%", "10%", "-10%"], y: ["10%", "-20%", "10%"] }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #4f46e5 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* ── Main card ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="
          w-full max-w-3xl
          bg-white/80 backdrop-blur-xl rounded-3xl
          border border-white/60
          shadow-2xl shadow-indigo-100/50
          px-6 py-6 sm:px-10 sm:py-8
        "
      >
        <BiodataHeader />
        <BiodataForm />
      </motion.div>
    </main>
  );
}
