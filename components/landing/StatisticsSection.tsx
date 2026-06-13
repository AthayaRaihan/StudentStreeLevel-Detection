"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiCpu, FiPercent, FiCheckCircle } from "react-icons/fi";

const stats = [
  {
    icon: <FiBarChart2 className="w-8 h-8 text-blue-500" />,
    value: "13 Symptoms",
    label: "Comprehensive analysis based on key stress indicators.",
  },
  {
    icon: <FiCpu className="w-8 h-8 text-cyan-500" />,
    value: "Rule-Based Expert System",
    label: "Core logic built on established psychological knowledge.",
  },
  {
    icon: <FiPercent className="w-8 h-8 text-teal-500" />,
    value: "Certainty Factor",
    label: "Calculates the confidence level of the stress assessment.",
  },
  {
    icon: <FiCheckCircle className="w-8 h-8 text-emerald-500" />,
    value: "Machine Learning Validation",
    label: "Naive Bayes model to validate and enhance accuracy.",
  },
];

const StatCard = ({
  icon,
  value,
  label,
  index,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-slate-800">{value}</h3>
    <p className="text-sm text-slate-500 mt-2">{label}</p>
  </motion.div>
);

const StatisticsSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
