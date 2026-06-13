export interface Symptom {
  id: number;
  code: string;
  category: "Gejala Utama" | "Gejala Lainnya";
  question: string;
  description: string;
}

export const symptoms: Symptom[] = [
  {
    id: 1,
    code: "G01",
    category: "Gejala Utama",
    question: "Suasana Hati Tertekan",
    description: "Apakah Anda merasa sedih, murung, atau mudah menangis?",
  },
  {
    id: 2,
    code: "G02",
    category: "Gejala Utama",
    question: "Kehilangan Minat dan Kegembiraan",
    description:
      "Apakah Anda kehilangan minat atau kesenangan dalam melakukan aktivitas yang biasanya Anda nikmati?",
  },
  {
    id: 3,
    code: "G03",
    category: "Gejala Utama",
    question: "Kelelahan dan Penurunan Aktivitas",
    description:
      "Apakah Anda merasa mudah lelah atau aktivitas Anda secara umum menurun?",
  },
  {
    id: 4,
    code: "G04",
    category: "Gejala Lainnya",
    question: "Penurunan Konsentrasi",
    description: "Apakah Anda merasa konsentrasi dan perhatian Anda berkurang?",
  },
  {
    id: 5,
    code: "G05",
    category: "Gejala Lainnya",
    question: "Iritabilitas dan Emosi Tidak Stabil",
    description:
      "Apakah Anda menjadi lebih mudah tersinggung atau emosi Anda tidak stabil?",
  },
  {
    id: 6,
    code: "G06",
    category: "Gejala Lainnya",
    question: "Penurunan Harga Diri",
    description:
      "Apakah Anda merasa harga diri dan kepercayaan diri Anda berkurang?",
  },
  {
    id: 7,
    code: "G07",
    category: "Gejala Lainnya",
    question: "Rasa Bersalah dan Tidak Berguna",
    description:
      "Apakah Anda memiliki perasaan bersalah atau merasa tidak berguna tanpa alasan yang jelas?",
  },
  {
    id: 8,
    code: "G08",
    category: "Gejala Lainnya",
    question: "Pesimisme Terhadap Masa Depan",
    description:
      "Apakah Anda memiliki pandangan yang suram dan pesimistis terhadap masa depan?",
  },
  {
    id: 9,
    code: "G09",
    category: "Gejala Lainnya",
    question: "Kesulitan dalam Aktivitas",
    description:
      "Apakah Anda mengalami kesulitan dalam melakukan pekerjaan atau aktivitas sosial sehari-hari?",
  },
  {
    id: 10,
    code: "G10",
    category: "Gejala Lainnya",
    question: "Penarikan Diri dari Lingkungan Sosial",
    description:
      "Apakah Anda cenderung menarik diri atau kesulitan untuk melanjutkan aktivitas sosial?",
  },
  {
    id: 11,
    code: "G11",
    category: "Gejala Lainnya",
    question: "Pikiran atau Tindakan Menyakiti Diri",
    description:
      "Apakah Anda pernah memiliki gagasan atau melakukan perbuatan yang membahayakan diri sendiri?",
  },
  {
    id: 12,
    code: "G12",
    category: "Gejala Lainnya",
    question: "Gangguan Tidur",
    description:
      "Apakah pola tidur Anda terganggu (misalnya sulit tidur, sering terbangun, atau tidur berlebihan)?",
  },
  {
    id: 13,
    code: "G13",
    category: "Gejala Lainnya",
    question: "Perubahan Nafsu Makan",
    description:
      "Apakah nafsu makan Anda berubah secara signifikan (berkurang atau bertambah)?",
  },
];

export const confidenceLevels = [
  { label: "Tidak", value: 0 },
  { label: "Mungkin", value: 0.4 },
  { label: "Kemungkinan Besar", value: 0.6 },
  { label: "Hampir Pasti", value: 0.8 },
  { label: "Pasti", value: 1 },
];
