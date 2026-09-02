export interface QualityCheckItem {
  id: string;
  komponen: string;
  standar: string;
  status: 'VERIFIED_100%' | 'VALID';
  catatanValidasi: string;
}

export const qualityScoreList: QualityCheckItem[] = [
  { id: 'cp', komponen: 'Capaian Pembelajaran (CP)', standar: 'Fase F Elemen Pemahaman & Keterampilan', status: 'VERIFIED_100%', catatanValidasi: 'Mencakup pemahaman konsep mikroskopis-makroskopis dan keterampilan inkuiri saintifik terpadu.' },
  { id: 'acp', komponen: 'Analisis CP (ACP)', standar: 'Matriks CP, Kompetensi, Materi, Pengetahuan, Keterampilan, KKO, Bukti', status: 'VERIFIED_100%', catatanValidasi: 'Tersusun lengkap dengan taksonomi Bloom C1–C6 dan bukti belajar autentik.' },
  { id: 'tp', komponen: 'Tujuan Pembelajaran (TP)', standar: 'Unit 1, Unit 2, Unit 3 terukur & terstruktur', status: 'VERIFIED_100%', catatanValidasi: '15 TP spesifik dengan indikator bukti ketercapaian operasional.' },
  { id: 'atp', komponen: 'Alur Tujuan Pembelajaran (ATP)', standar: 'Prasyarat -> Konsep -> Aplikasi -> Analisis -> Problem Solving -> Innovation', status: 'VERIFIED_100%', catatanValidasi: 'Alur pedagogis berjenjang menjamin kesiapan fondasi sebelum rekayasa produk.' },
  { id: 'prota', komponen: 'Program Tahunan (PROTA)', standar: 'Distribusi JP Semester Ganjil (72 JP)', status: 'VERIFIED_100%', catatanValidasi: 'Unit 1 (24 JP), Unit 2 (28 JP), Unit 3 (20 JP) terdistribusi merata.' },
  { id: 'prosem', komponen: 'Program Semester (PROSEM)', standar: '18 Minggu Efektif terinci per pertemuan', status: 'VERIFIED_100%', catatanValidasi: 'Memetakan setiap minggu dengan aktivitas, materi, JP, dan tagihan asesmen.' },
  { id: 'kktp', komponen: 'Kriteria Ketuntasan (KKTP)', standar: 'Standar Nilai = 75 dengan 4 Predikat Deskriptif', status: 'VERIFIED_100%', catatanValidasi: 'Deskripsi predikat Sangat Baik, Baik, Cukup, dan Perlu Bimbingan jelas dan terukur.' },
  { id: 'modul', komponen: 'Modul Ajar Inovatif', standar: 'Colligative Reality Lab, Electrochemistry Energy, Carbon Future', status: 'VERIFIED_100%', catatanValidasi: 'Format lengkap: Kesiapan, Materi Triple Representation, Profil, Nilai, Lintas Disiplin, TPACK.' },
  { id: 'lkpd', komponen: 'LKPD Inovatif (15 Komponen)', standar: 'Chemistry Investigation Worksheet 15 Komponen', status: 'VERIFIED_100%', catatanValidasi: 'Memuat fenomena, prediksi, hipotesis, data, representasi submikro, simbolik, STEM challenge.' },
  { id: 'bahan', komponen: 'Bahan Ajar Mendalam', standar: 'Alur Fenomena -> Konsep -> Visual -> Rumus -> Soal -> Refleksi', status: 'VERIFIED_100%', catatanValidasi: 'Membongkar miskonsepsi dan menyajikan pemodelan Johnstone Triangle secara tuntas.' },
  { id: 'media', komponen: 'Media Pembelajaran', standar: 'Digital (PhET, MolView, Virtual Lab) & Non-Digital (Molymod)', status: 'VERIFIED_100%', catatanValidasi: 'Dilengkapi matriks analisis TPACK (CK, PK, TK, PCK, TCK, TPK, TPACK).' },
  { id: 'diag', komponen: 'Asesmen Diagnostik', standar: 'Kognitif (10-15 Soal + Miskonsepsi) & Non-Kognitif', status: 'VERIFIED_100%', catatanValidasi: 'Mendeteksi kesiapan materi prasyarat dan memetakan gaya belajar peserta didik.' },
  { id: 'formatif', komponen: 'Asesmen Formatif', standar: '9 Teknik Formatif Terpadu & Rubrik', status: 'VERIFIED_100%', catatanValidasi: 'Observasi, tanya jawab, kuis, exit ticket, diskusi, praktikum, studi kasus, presentasi, refleksi.' },
  { id: 'sumatif', komponen: 'Asesmen Sumatif HOTS', standar: '15 PG, 5 PGK, 5 Uraian HOTS, 2 Analisis Data, 2 Studi Kasus', status: 'VERIFIED_100%', catatanValidasi: 'Dilengkapi stimulus grafik/tabel, kunci jawaban, dan pembahasan ilmiah mendalam.' },
  { id: 'rubrik', komponen: 'Rubrik Penilaian Terstandar', standar: 'Rubrik Proyek Skala 1-4 & Rubrik Kinerja Praktikum K3', status: 'VERIFIED_100%', catatanValidasi: 'Deskriptor level 1 s.d 4 eksplisit pada seluruh aspek penilaian rekayasa.' },
  { id: 'remedial', komponen: 'Program Remedial', standar: '5 Tahap: Diagnose -> Relearn -> Practice -> Feedback -> Reassessment', status: 'VERIFIED_100%', catatanValidasi: 'Diferensiasi pendekatan belajar untuk memastikan semua siswa mencapai KKTP 75.' },
  { id: 'pengayaan', komponen: 'Program Pengayaan', standar: '4 Level: Advanced Case, Challenge, Innovation, Mini Research', status: 'VERIFIED_100%', catatanValidasi: 'Memfasilitasi siswa mahir berkembang optimal menuju kompetisi ilmiah sains.' },
  { id: 'novelty', komponen: 'Novelty & Inovasi Pembelajaran', standar: 'Novelty Map 1 s.d 5 CFIL Framework', status: 'VERIFIED_100%', catatanValidasi: 'Kebaruan nyata: Phenomenon-First, Triple Representation, TPACK, STEM, AI-Supported Reflection.' },
];
