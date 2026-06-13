import React from "react";
import { motion } from "framer-motion";

interface QuestionIndicatorProps {
  total: number;
  current: number;
  answered: (index: number) => boolean;
}

const QuestionIndicator: React.FC<QuestionIndicatorProps> = ({
  total,
  current,
  answered,
}) => {
  return (
    <div className="flex justify-center items-center gap-3">
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === current - 1;
        const isAnswered = answered(index);
        return (
          <motion.div
            key={index}
            animate={{
              scale: isActive ? 1.5 : 1,
              backgroundColor: isAnswered ? "#4f46e5" : "#e5e7eb",
              opacity: isActive || isAnswered ? 1 : 0.5,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={`w-3 h-3 rounded-full ${isActive ? "ring-2 ring-indigo-300" : ""}`}
          />
        );
      })}
    </div>
  );
};

export default QuestionIndicator;
