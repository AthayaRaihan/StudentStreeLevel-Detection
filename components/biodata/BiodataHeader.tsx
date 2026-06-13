"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";

const BiodataHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-center mb-4"
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-3"
      >
        <Brain className="w-4 h-4 text-indigo-500" />
        <span className="text-sm font-semibold text-indigo-600 tracking-wide">
          Konsultasi Sistem Pakar
        </span>
      </motion.div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 leading-tight tracking-tight">
        Lengkapi{" "}
        <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
          Data Diri Anda
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
        Sebelum memulai konsultasi, silakan isi beberapa informasi dasar
        mengenai diri Anda.
      </p>
    </motion.div>
  );
};

export default BiodataHeader;
