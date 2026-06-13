export interface ResultCategory {
  title: string;
  color: string;
  icon: string;
  shortDescription: string;
  meaning: string;
  advice: string[];
}

export const resultsData: { [key: string]: ResultCategory } = {
  normal: {
    title: "Tidak Stres",
    color: "text-green-600 bg-green-100/80 border-green-200/80",
    icon: "😊",
    shortDescription:
      "Kondisi Anda saat ini terindikasi stabil dan tidak menunjukkan adanya gejala stres yang signifikan.",
    meaning:
      "Tidak ditemukan indikasi stres atau depresi yang signifikan. Anda tampaknya mampu mengelola tekanan akademik dan kehidupan pribadi dengan baik. Pertahankan kebiasaan positif yang sudah Anda jalani.",
    advice: [
      "Pertahankan pola hidup sehat dan seimbang.",
      "Lanjutkan rutinitas tidur yang cukup setiap hari.",
      "Tetap aktif dengan melakukan aktivitas fisik secara rutin.",
      "Jaga dan rawat hubungan sosial yang positif.",
      "Kelola stres akademik dengan metode yang efektif bagi Anda.",
    ],
  },
  ringan: {
    title: "Stres Ringan",
    color: "text-yellow-600 bg-yellow-100/80 border-yellow-200/80",
    icon: "🙂",
    shortDescription:
      "Terdapat beberapa gejala stres ringan yang terdeteksi. Kondisi ini masih dapat dikelola dengan baik.",
    meaning:
      "Terdapat beberapa gejala yang perlu diperhatikan, namun umumnya masih dapat Anda kelola dengan baik. Gejala ini belum mengganggu aktivitas harian Anda secara signifikan, namun penting untuk tidak diabaikan.",
    advice: [
      "Cobalah untuk menceritakan perasaan Anda kepada orang yang Anda percaya.",
      "Lakukan aktivitas fisik ringan secara rutin seperti berjalan kaki atau yoga.",
      "Luangkan waktu untuk melakukan hobi atau aktivitas yang Anda nikmati.",
      "Jaga pola tidur dan perhatikan asupan nutrisi seimbang.",
      "Pertimbangkan untuk berkonsultasi dengan konselor jika gejala tidak membaik.",
    ],
  },
  sedang: {
    title: "Stres Sedang",
    color: "text-orange-600 bg-orange-100/80 border-orange-200/80",
    icon: "😔",
    shortDescription:
      "Gejala stres yang Anda alami mulai menunjukkan dampak pada aktivitas sehari-hari dan memerlukan perhatian lebih.",
    meaning:
      "Gejala yang Anda rasakan mulai memengaruhi aktivitas sehari-hari, seperti konsentrasi belajar atau interaksi sosial. Kondisi ini menandakan perlunya perhatian lebih lanjut untuk mencegahnya berkembang.",
    advice: [
      "Sangat disarankan untuk mengkonsultasikan kondisi Anda kepada psikolog atau konselor.",
      "Ingatlah bahwa Anda tidak harus menghadapi masalah ini sendirian.",
      "Identifikasi sumber stres utama dan kurangi tekanan yang berlebihan jika memungkinkan.",
      "Meskipun sulit, usahakan untuk tetap aktif secara fisik walau hanya sebentar.",
      "Pantau perkembangan kondisi Anda secara berkala dan jangan ragu mencari bantuan.",
    ],
  },
  berat: {
    title: "Stres Berat",
    color: "text-red-600 bg-red-100/80 border-red-200/80",
    icon: "⚠️",
    shortDescription:
      "Gejala yang Anda alami berpotensi mengganggu aktivitas sehari-hari secara signifikan dan sangat disarankan untuk mencari bantuan profesional.",
    meaning:
      "Gejala yang Anda alami berada pada tingkat yang berpotensi mengganggu fungsi Anda dalam aktivitas sehari-hari secara signifikan. Sangat penting bagi Anda untuk segera mencari bantuan profesional.",
    advice: [
      "Segera berkonsultasi dengan psikolog atau psikiater untuk mendapatkan penanganan yang tepat.",
      "Libatkan keluarga atau orang terdekat yang Anda percaya untuk mendukung Anda.",
      "Hindari mengisolasi diri dari lingkungan sosial.",
      "Jika muncul pikiran untuk menyakiti diri sendiri, segera cari bantuan darurat atau hubungi hotline kesehatan jiwa.",
      "Ikuti rencana penanganan yang diberikan oleh tenaga kesehatan profesional.",
    ],
  },
};

export const studentTips = [
  { icon: "📚", text: "Atur jadwal belajar dan istirahat secara seimbang." },
  {
    icon: "🏃",
    text: "Luangkan waktu untuk olahraga ringan atau sekadar berjalan-jalan.",
  },
  {
    icon: "🤝",
    text: "Manfaatkan layanan konseling yang tersedia di kampus Anda.",
  },
  {
    icon: "👥",
    text: "Jangan ragu berdiskusi dengan teman atau dosen wali jika menghadapi kesulitan.",
  },
  {
    icon: "😴",
    text: "Jaga pola tidur yang teratur dan hindari begadang yang tidak perlu.",
  },
];
