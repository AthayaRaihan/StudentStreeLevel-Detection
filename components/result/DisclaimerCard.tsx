import React from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

const DisclaimerCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="w-full max-w-2xl mx-auto bg-blue-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-md border border-blue-200/80 mt-8"
    >
      <div className="flex items-start">
        <Info className="w-6 h-6 text-blue-600 mr-4 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-2">
            Penting untuk Diketahui
          </h3>
          <p className="text-blue-700 leading-relaxed">
            Hasil konsultasi ini merupakan alat skrining awal berbasis sistem
            pakar dan machine learning. Hasil yang diberikan bukan merupakan
            diagnosis medis dan tidak menggantikan konsultasi dengan tenaga
            kesehatan profesional.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default DisclaimerCard;
