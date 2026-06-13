import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full max-w-5xl mb-3 mx-auto bg-white/50 backdrop-blur-sm p-3 rounded-full shadow-sm border border-gray-200/80">
      <div className="flex justify-between items-center px-2 mb-1.5">
        <p className="text-xs font-semibold text-indigo-700">
          Progres Konsultasi
        </p>
        <p className="text-xs font-medium text-gray-600">
          {current} dari {total} gejala terjawab
        </p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-linear-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
