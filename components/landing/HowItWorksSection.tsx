"use client";

import { motion } from "framer-motion";
import {
  FiLogIn,
  FiActivity,
  FiCheckSquare,
  FiBarChart,
  FiGift,
} from "react-icons/fi";

const steps = [
  {
    icon: <FiLogIn />,
    title: "Input Symptoms",
    description:
      "Start by answering a series of questions about your current state.",
  },
  {
    icon: <FiActivity />,
    title: "Expert System Analysis",
    description:
      "Our rule-based system processes your inputs to make an initial assessment.",
  },
  {
    icon: <FiCheckSquare />,
    title: "Machine Learning Validation",
    description:
      "A Naive Bayes model verifies the results for improved reliability.",
  },
  {
    icon: <FiBarChart />,
    title: "Final Analysis",
    description:
      "The system combines insights to determine your stress level with a certainty factor.",
  },
  {
    icon: <FiGift />,
    title: "Recommendations",
    description:
      "Receive personalized suggestions to help you manage your stress.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A simple and transparent process to understand your stress level.
          </p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-2 border-blue-500 rounded-full text-blue-500">
                  {step.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-800">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
