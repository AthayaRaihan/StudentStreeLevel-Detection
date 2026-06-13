"use client";

import { motion } from "framer-motion";
import { FiTarget } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-100/70 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="shrink-0">
            <div className="bg-blue-600 text-white p-6 rounded-full">
              <FiTarget size={48} />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              About The System
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              This expert system is designed as a preliminary tool to help
              students identify potential stress levels based on common academic
              and personal symptoms. By combining a rule-based approach with
              machine learning validation, we aim to provide a reliable and
              accessible resource for early awareness and self-assessment. Our
              goal is to empower students with insights, encouraging them to
              seek further professional help when needed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
