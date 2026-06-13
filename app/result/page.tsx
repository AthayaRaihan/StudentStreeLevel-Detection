"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { resultsData, ResultCategory } from "@/lib/results";
import { FormData } from "@/components/biodata/types";

import ResultHeader from "@/components/result/ResultHeader";
import ResultCard from "@/components/result/ResultCard";
import AnalysisDetailCard, { PredictionDetail } from "@/components/result/AnalysisDetailCard";
import UserBiodataCard from "@/components/result/UserBiodataCard";
import MeaningCard from "@/components/result/MeaningCard";
import RecommendationCard from "@/components/result/RecommendationCard";
import StudentTipsCard from "@/components/result/StudentTipsCard";
import DisclaimerCard from "@/components/result/DisclaimerCard";
import ActionButtons from "@/components/result/ActionButtons";

const ResultPage = () => {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<ResultCategory | null>(null);
  const [detail, setDetail] = useState<PredictionDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const resultKey = searchParams.get("level") || "normal";
    setResult(resultsData[resultKey] ?? resultsData["normal"]);

    const stored = sessionStorage.getItem("predictionResult");
    if (stored) {
      try {
        setDetail(JSON.parse(stored));
      } catch {
        // ignore malformed data
      }
      sessionStorage.removeItem("predictionResult");
  const [biodata, setBiodata] = useState<FormData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Baca hasil konsultasi dari URL param
    const resultKey = searchParams.get("level") || "sedang";
    setResult(resultsData[resultKey] ?? resultsData["normal"]);

    // Baca biodata dari sessionStorage (hanya valid dalam satu session tab)
    try {
      const raw = sessionStorage.getItem("biodata");
      if (raw) {
        setBiodata(JSON.parse(raw) as FormData);
        // Hapus setelah dibaca — data berlaku 1x per session per intent
        sessionStorage.removeItem("biodata");
      }
    } catch {
      // Jika gagal parse, abaikan saja
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
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 70%)" }}
      />
      <div className="container mx-auto px-4">
        <ResultHeader />
        <main className="flex flex-col items-center">
          {/* Tampilkan biodata user jika tersedia */}
          {biodata && <UserBiodataCard biodata={biodata} />}

          <ResultCard result={result} />
          {detail && <AnalysisDetailCard detail={detail} />}
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
