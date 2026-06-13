"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const PrivacyNotice = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-cyan-50/70 border border-cyan-100"
    >
      <div className="mt-0.5 w-7 h-7 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
        <Lock className="w-3.5 h-3.5 text-cyan-600" />
      </div>
      <div>
        <p className="text-xs font-semibold text-cyan-700 mb-0.5">
          Privasi Data
        </p>
        <p className="text-xs text-cyan-600 leading-relaxed">
          Data yang Anda masukkan hanya digunakan untuk proses konsultasi dan
          analisis sistem.
        </p>
      </div>
    </motion.div>
  );
};

export default PrivacyNotice;
