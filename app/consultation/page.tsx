"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

const DIAGNOSIS_TO_LEVEL: Record<string, string> = {
  "Tidak Depresi": "normal",
  Ringan:          "ringan",
  Sedang:          "sedang",
  Berat:           "berat",
};
import { AnimatePresence } from "framer-motion";
import { symptoms, confidenceLevels } from "@/lib/symptoms";
import ConsultationHeader from "@/components/consultation/ConsultationHeader";
import ProgressBar from "@/components/consultation/ProgressBar";
import QuestionCard from "@/components/consultation/QuestionCard";
import AnswerOptions from "@/components/consultation/AnswerOptions";
import QuestionIndicator from "@/components/consultation/QuestionIndicator";
import NavigationButtons from "@/components/consultation/NavigationButtons";

const ConsultationPage = () => {
  const router = useRouter();
  const [currentSymptomIndex, setCurrentSymptomIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalSymptoms = symptoms.length;

  const handleNext = () => {
    if (currentSymptomIndex < totalSymptoms - 1) {
      setDirection(1);
      setCurrentSymptomIndex(currentSymptomIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentSymptomIndex > 0) {
      setDirection(-1);
      setCurrentSymptomIndex(currentSymptomIndex - 1);
    }
  };

  const handleAnswerChange = (symptomCode: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [symptomCode]: value }));
  };

  const handleFinish = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gejala: answers }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? "Terjadi kesalahan pada server.");
      }

      const data = await res.json();
      sessionStorage.setItem("predictionResult", JSON.stringify(data.hasil));
      const level = DIAGNOSIS_TO_LEVEL[data.hasil.final_diagnosis] ?? "normal";
      router.push(`/result?level=${level}`);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Terjadi kesalahan yang tidak diketahui.";
      setError(msg);
      setIsSubmitting(false);
    }
  };

  const currentSymptom = symptoms[currentSymptomIndex];
  const isNextDisabled = useMemo(() => {
    if (!currentSymptom) return true;
    return answers[currentSymptom.code] === undefined;
  }, [answers, currentSymptom]);

  const answeredCount = Object.keys(answers).length;

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
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-gray-50 font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white via-blue-50 to-purple-50 -z-10" />

      <ConsultationHeader
        current={currentSymptomIndex + 1}
        total={totalSymptoms}
      />
      

      <main className="grow flex flex-col items-center justify-center relative px-4">
        <ProgressBar current={answeredCount} total={totalSymptoms} />   
        <div className="w-full max-w-5xl bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-lg p-10 flex flex-col items-center">
          <div className="relative h-32 w-full overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <QuestionCard
                key={currentSymptomIndex}
                current={currentSymptomIndex + 1}
                total={totalSymptoms}
                question={currentSymptom.question}
                description={currentSymptom.description}
                direction={direction}
              />
            </AnimatePresence>
          </div>

          <AnswerOptions
            options={confidenceLevels}
            selectedValue={answers[currentSymptom.code] ?? null}
            onChange={(value) => handleAnswerChange(currentSymptom.code, value)}
          />

          <div className="mt-12 w-full flex flex-col items-center gap-6">
            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 w-full text-center">
                {error}
              </p>
            )}
            <NavigationButtons
              onPrev={handlePrev}
              onNext={handleNext}
              onFinish={handleFinish}
              isFirst={currentSymptomIndex === 0}
              isLast={currentSymptomIndex === totalSymptoms - 1}
              isNextDisabled={isNextDisabled}
              isSubmitting={isSubmitting}
            />
            <QuestionIndicator
              total={totalSymptoms}
              current={currentSymptomIndex + 1}
              answered={(index) => answers[symptoms[index].code] !== undefined}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConsultationPage;
