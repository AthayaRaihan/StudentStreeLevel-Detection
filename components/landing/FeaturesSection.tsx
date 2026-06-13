"use client";

import { motion } from "framer-motion";
import { FiCpu, FiPercent, FiZap, FiGift } from "react-icons/fi";

const features = [
  {
    icon: <FiCpu size={28} className="text-blue-500" />,
    title: "Expert System",
    description:
      "Utilizes a sophisticated rule-based engine to analyze your symptoms against a knowledge base.",
  },
  {
    icon: <FiPercent size={28} className="text-cyan-500" />,
    title: "Certainty Factor",
    description:
      "Quantifies the certainty of the stress level diagnosis, providing a more nuanced result.",
  },
  {
    icon: <FiZap size={28} className="text-teal-500" />,
    title: "Machine Learning",
    description:
      "A Naive Bayes model cross-validates the expert system's findings for enhanced accuracy.",
  },
  {
    icon: <FiGift size={28} className="text-emerald-500" />,
    title: "Personalized Recommendations",
    description:
      "Receive tailored advice and resources based on your assessed stress level.",
  },
];

const FeatureCard = ({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative p-8 bg-white rounded-2xl shadow-lg overflow-hidden group"
  >
    <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="mb-4 inline-block p-3 bg-slate-100 rounded-full group-hover:bg-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Core Features
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Our system integrates multiple advanced techniques to provide a
            comprehensive analysis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
