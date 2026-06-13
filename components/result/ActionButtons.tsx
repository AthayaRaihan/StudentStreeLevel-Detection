import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, RotateCw, Save } from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);

const ActionButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.0 }}
      className="w-full max-w-2xl mx-auto mt-12 mb-16 flex flex-col sm:flex-row justify-center items-center gap-4"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300"
      >
        <RotateCw className="w-5 h-5 mr-2" />
        Konsultasi Ulang
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto flex items-center justify-center px-8 py-3 bg-white text-gray-700 font-semibold rounded-full shadow-md border border-gray-200/80 hover:bg-gray-50 transition-colors duration-300"
      >
        <Save className="w-5 h-5 mr-2" />
        Simpan Hasil
      </motion.button>
      <MotionLink
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto flex items-center justify-center px-8 py-3 text-gray-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Kembali ke Beranda
      </MotionLink>
    </motion.div>
  );
};

export default ActionButtons;
