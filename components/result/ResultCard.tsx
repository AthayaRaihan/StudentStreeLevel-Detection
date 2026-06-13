import React from "react";
import { motion } from "framer-motion";
import { ResultCategory } from "@/lib/results";

interface ResultCardProps {
  result: ResultCategory;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full max-w-2xl mx-auto rounded-3xl p-8 shadow-lg border ${result.color} bg-white`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-6xl mb-4">{result.icon}</div>
        <h2 className="text-3xl font-bold">{result.title}</h2>
        <p className="mt-4 text-base max-w-md">{result.shortDescription}</p>
      </div>
    </motion.div>
  );
};

export default ResultCard;
