import React from "react";
import { motion } from "framer-motion";
import { studentTips } from "@/lib/results";

const StudentTipsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-md border border-gray-200/80 mt-8"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        Tips Tambahan untuk Mahasiswa
      </h3>
      <ul className="space-y-4">
        {studentTips.map((tip, index) => (
          <li key={index} className="flex items-center">
            <span className="text-2xl mr-4">{tip.icon}</span>
            <span className="text-gray-700">{tip.text}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default StudentTipsCard;
