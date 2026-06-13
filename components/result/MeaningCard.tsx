import React from "react";
import { motion } from "framer-motion";

interface MeaningCardProps {
  meaning: string;
}

const MeaningCard: React.FC<MeaningCardProps> = ({ meaning }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-md border border-gray-200/80 mt-8"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-4">Apa Artinya?</h3>
      <p className="text-gray-600 leading-relaxed">{meaning}</p>
    </motion.div>
  );
};

export default MeaningCard;
