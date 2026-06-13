import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface RecommendationCardProps {
  advice: string[];
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ advice }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-md border border-gray-200/80 mt-8"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        Rekomendasi untuk Anda
      </h3>
      <ul className="space-y-4">
        {advice.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            className="flex items-start"
          >
            <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default RecommendationCard;
