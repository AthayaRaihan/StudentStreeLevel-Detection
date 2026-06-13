import React from "react";
import { BrainCircuit } from "lucide-react";

const ResultHeader = () => {
  return (
    <div className="text-center pt-16 pb-12">
      <div className="inline-block p-4 bg-indigo-100/80 rounded-2xl mb-4">
        <BrainCircuit className="w-12 h-12 text-indigo-600" strokeWidth={1.5} />
      </div>
      <p className="text-indigo-600 font-semibold mb-2">Hasil Konsultasi</p>
      <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
        Hasil Deteksi Tingkat Stres
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
        Berdasarkan jawaban yang Anda berikan, sistem telah melakukan analisis
        dan menghasilkan tingkat kondisi yang sesuai.
      </p>
    </div>
  );
};

export default ResultHeader;
