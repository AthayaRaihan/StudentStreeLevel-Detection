"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ConsultationCTA = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative bg-linear-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Understand Your Stress?
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
              Take the first step towards managing your well-being. Our
              confidential consultation is quick, easy, and insightful.
            </p>
            <div className="mt-8">
              <Link
                href="/biodata"
                className="inline-block px-10 py-5 text-xl font-bold text-blue-600 bg-white rounded-full shadow-2xl transform hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                Start Your Free Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
