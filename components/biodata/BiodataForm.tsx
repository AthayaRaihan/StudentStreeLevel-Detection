"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { LeftFields, RightFields } from "./BiodataFields";
import PrivacyNotice from "./PrivacyNotice";
import { FormData } from "./types";
import { ArrowRight, Loader2 } from "lucide-react";

const BiodataForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    gender: "",
    major: "",
    semester: "",
  });

  const isFormComplete =
    formData.name.trim() !== "" &&
    formData.age.trim() !== "" &&
    formData.gender !== "" &&
    formData.major.trim() !== "" &&
    formData.semester !== "";

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormComplete) return;

    setIsLoading(true);
    // Simpan biodata ke sessionStorage — otomatis hilang saat tab ditutup
    sessionStorage.setItem("biodata", JSON.stringify(formData));
    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push("/consultation");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col gap-4"
    >
      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        {/* Left: Nama, Umur, Jenis Kelamin */}
        <LeftFields formData={formData} onChange={handleChange} />

        {/* Right: Program Studi, Semester + Privacy (desktop) */}
        <div className="flex flex-col gap-4">
          <RightFields formData={formData} onChange={handleChange} />
          <div className="hidden md:block">
            <PrivacyNotice />
          </div>
        </div>
      </div>

      {/* Privacy notice on mobile */}
      <div className="md:hidden">
        <PrivacyNotice />
      </div>

      {/* CTA Button */}
      <motion.button
        type="submit"
        disabled={!isFormComplete || isLoading}
        whileHover={isFormComplete && !isLoading ? { scale: 1.02 } : {}}
        whileTap={isFormComplete && !isLoading ? { scale: 0.98 } : {}}
        className={`
          relative w-full flex items-center justify-center gap-2.5
          py-3.5 px-6 rounded-2xl font-bold text-sm overflow-hidden
          transition-all duration-300
          ${
            isFormComplete && !isLoading
              ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 text-white shadow-xl shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-300 cursor-pointer"
              : "bg-slate-100 text-slate-400 cursor-not-allowed"
          }
        `}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Mempersiapkan...</span>
          </>
        ) : (
          <>
            <span>Lanjut ke Konsultasi</span>
            <motion.div
              animate={isFormComplete ? { x: [0, 4, 0] } : {}}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </>
        )}

        {/* Shimmer when complete */}
        {isFormComplete && !isLoading && (
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            className="absolute inset-y-0 w-1/3 bg-white/20 skew-x-12"
          />
        )}
      </motion.button>
    </motion.form>
  );
};

export default BiodataForm;
