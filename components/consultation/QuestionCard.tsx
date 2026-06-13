import React from "react";
import { motion } from "framer-motion";

interface QuestionCardProps {
  question: string;
  description: string;
  current: number;
  total: number;
  direction: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  description,
  current,
  total,
  direction,
}) => {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      key={current}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="text-center absolute"
    >
      <p className="text-sm font-semibold text-indigo-600 mb-2">
        Pertanyaan {current} dari {total}
      </p>
      <h2 className="text-3xl font-bold text-gray-800 max-w-3xl mx-auto">
        {question}
      </h2>
      <p className="text-md text-gray-500 mt-2 max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default QuestionCard;
