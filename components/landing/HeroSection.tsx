"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            x: ["-20%", "20%", "-20%"],
            y: ["-20%", "20%", "-20%"],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/30 rounded-full filter blur-3xl opacity-70"
        />
        <motion.div
          animate={{
            x: ["20%", "-20%", "20%"],
            y: ["20%", "-20%", "20%"],
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full filter blur-3xl opacity-70"
        />
        <motion.div
          animate={{
            x: ["-20%", "20%", "-20%"],
            y: ["20%", "-20%", "20%"],
          }}
          transition={{
            duration: 30,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-1/2 right-1/2 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl opacity-70"
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight"
        >
          Student Stress Level
          <br />
          <span className="text-blue-600">Detection Expert System</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-slate-600"
        >
          An intelligent system to help you understand and manage your academic
          stress using a rule-based expert system and machine learning
          validation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/consultation"
            className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
          >
            Start Consultation
          </Link>
          <Link
            href="#how-it-works"
            className="px-8 py-4 text-lg font-semibold text-slate-700 bg-white rounded-full shadow-lg hover:bg-slate-100 transition-colors transform hover:scale-105"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
