import React from "react";
import { motion } from "framer-motion";

export interface PredictionDetail {
  final_diagnosis: string;
  confidence: number;
  cf_final: number;
  rule_diagnosis: string;
  rule_weight: number;
  nb_weight: number;
  n_utama: number;
  n_lainnya: number;
  cf_per_gejala: Record<string, number>;
  p_nb: Record<string, number>;
  hybrid_score: Record<string, number>;
}

interface AnalysisDetailCardProps {
  detail: PredictionDetail;
}

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
    <span className="text-sm text-gray-500">{label}</span>
    <span className="text-sm font-semibold text-gray-800">{value}</span>
  </div>
);

const AnalysisDetailCard: React.FC<AnalysisDetailCardProps> = ({ detail }) => {
  const activeSymptoms = Object.entries(detail.cf_per_gejala).filter(
    ([, v]) => v > 0
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="w-full max-w-2xl mx-auto mt-6 rounded-3xl bg-white border border-gray-200/80 shadow-lg p-6"
    >
      <h3 className="text-lg font-bold text-gray-700 mb-4">Detail Analisis Sistem</h3>

      <div className="mb-4">
        <Row label="Tingkat Keyakinan Sistem" value={`${detail.confidence}%`} />
        <Row label="CF Gabungan (CF Final)" value={detail.cf_final.toFixed(4)} />
        <Row label="Diagnosis Rule PPDGJ-III" value={detail.rule_diagnosis} />
        <Row
          label="Bobot Rule Pakar"
          value={`${(detail.rule_weight * 100).toFixed(1)}%`}
        />
        <Row
          label="Bobot Naive Bayes"
          value={`${(detail.nb_weight * 100).toFixed(1)}%`}
        />
        <Row label="Gejala Utama Aktif" value={`${detail.n_utama} dari 3`} />
        <Row label="Gejala Lainnya Aktif" value={`${detail.n_lainnya} dari 10`} />
      </div>

      {activeSymptoms.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-semibold text-gray-600 mb-2">
            Gejala yang terdeteksi:
          </p>
          <div className="flex flex-wrap gap-2">
            {activeSymptoms.map(([code, cf]) => (
              <span
                key={code}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100"
              >
                {code}
                <span className="opacity-60">({cf.toFixed(2)})</span>
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-5">
        <p className="text-sm font-semibold text-gray-600 mb-2">
          Skor Hybrid per Kelas:
        </p>
        <div className="space-y-2">
          {Object.entries(detail.hybrid_score)
            .sort(([, a], [, b]) => b - a)
            .map(([label, score]) => (
              <div key={label}>
                <div className="flex justify-between text-xs text-gray-500 mb-0.5">
                  <span>{label}</span>
                  <span>{(score * 100).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-indigo-500 h-2 rounded-full transition-all"
                    style={{ width: `${score * 100}%` }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AnalysisDetailCard;
