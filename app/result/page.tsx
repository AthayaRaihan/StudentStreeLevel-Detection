"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { resultsData, ResultCategory } from "@/lib/results";

import ResultHeader from "@/components/result/ResultHeader";
import ResultCard from "@/components/result/ResultCard";
import MeaningCard from "@/components/result/MeaningCard";
import RecommendationCard from "@/components/result/RecommendationCard";
import StudentTipsCard from "@/components/result/StudentTipsCard";
import DisclaimerCard from "@/components/result/DisclaimerCard";
import ActionButtons from "@/components/result/ActionButtons";

const ResultPage = () => {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<ResultCategory | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi pengambilan hasil dari URL parameter atau state management
    // Dalam aplikasi nyata, ini bisa datang dari query param, context, atau local storage
    const resultKey = searchParams.get("level") || "sedang"; // Default ke 'sedang' untuk demo

    if (resultsData[resultKey]) {
      setResult(resultsData[resultKey]);
    } else {
      setResult(resultsData["normal"]); // Fallback
    }
    setIsLoading(false);
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Menganalisis hasil...</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-600">Gagal memuat hasil. Silakan coba lagi.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50/80 min-h-screen font-sans">
      <div
        className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white via-blue-50 to-indigo-100 -z-10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 70%)",
        }}
      ></div>
      <div className="container mx-auto px-4">
        <ResultHeader />
        <main className="flex flex-col items-center">
          <ResultCard result={result} />
          <MeaningCard meaning={result.meaning} />
          <RecommendationCard advice={result.advice} />
          <StudentTipsCard />
          <DisclaimerCard />
          <ActionButtons />
        </main>
      </div>
    </div>
  );
};

export default ResultPage;
