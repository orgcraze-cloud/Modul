import { TocItem } from '../types';

export const tocData: TocItem[] = [
  { id: 'cover', title: 'Halaman Judul (Cover Profesional)', chapter: 'Front Matter', page: 1 },
  { id: 'pengesahan', title: 'Halaman Pengesahan Perangkat Pembelajaran', chapter: 'Front Matter', page: 2 },
  { id: 'kata-pengantar', title: 'Kata Pengantar', chapter: 'Front Matter', page: 3 },
  { id: 'daftar-isi', title: 'Daftar Isi Dokumen', chapter: 'Front Matter', page: 4 },
  {
    id: 'bab1',
    title: 'BAB I: Landasan dan Identitas Pembelajaran',
    chapter: 'BAB I',
    page: 5,
    subsections: [
      { id: 'bab1-identitas', title: 'A. Identitas Pembelajaran Kimia Fase F', page: 5 },
      { id: 'bab1-rasional', title: 'B. Rasional dan Karakteristik Mata Pelajaran', page: 6 },
      { id: 'bab1-masalah', title: 'C. 6 Analisis Permasalahan Pembelajaran Kimia', page: 7 },
      { id: 'bab1-cfil', title: 'D. Solusi Inovatif: Framework CFIL (Contextual, Future Tech, Investigation, Learning by Design)', page: 8 },
    ],
  },
  {
    id: 'bab2',
    title: 'BAB II: Analisis Kurikulum',
    chapter: 'BAB II',
    page: 9,
    subsections: [
      { id: 'bab2-cp', title: 'A. Capaian Pembelajaran (CP) Fase F', page: 9 },
      { id: 'bab2-acp', title: 'B. Analisis Capaian Pembelajaran (ACP) Matriks Komprehensif', page: 10 },
      { id: 'bab2-tp', title: 'C. Tujuan Pembelajaran (TP) Unit 1, Unit 2, dan Unit 3', page: 11 },
      { id: 'bab2-atp', title: 'D. Alur Tujuan Pembelajaran (ATP) Berjenjang', page: 13 },
    ],
  },
  {
    id: 'bab3',
    title: 'BAB III: Perencanaan Pembelajaran',
    chapter: 'BAB III',
    page: 14,
    subsections: [
      { id: 'bab3-prota', title: 'A. Program Tahunan (PROTA) Kimia Semester Ganjil', page: 14 },
      { id: 'bab3-prosem', title: 'B. Program Semester (PROSEM) Terinci 18 Minggu', page: 15 },
      { id: 'bab3-kktp', title: 'C. Kriteria Ketercapaian Tujuan Pembelajaran (KKTP = 75)', page: 17 },
    ],
  },
  {
    id: 'bab4',
    title: 'BAB IV: Modul Ajar Inovatif',
    chapter: 'BAB IV',
    page: 18,
    subsections: [
      { id: 'bab4-unit1', title: 'Modul Ajar Unit 1: Sifat Koligatif Larutan (Colligative Reality Lab)', page: 18 },
      { id: 'bab4-unit2', title: 'Modul Ajar Unit 2: Reaksi Redoks & Sel Elektrokimia (Electrochemistry Energy Challenge)', page: 24 },
      { id: 'bab4-unit3', title: 'Modul Ajar Unit 3: Senyawa Karbon & Makromolekul (Carbon Future Innovation Project)', page: 30 },
    ],
  },
  {
    id: 'bab5',
    title: 'BAB V: Lembar Kerja Peserta Didik (LKPD Inovatif)',
    chapter: 'BAB V',
    page: 36,
    subsections: [
      { id: 'bab5-lkpd1', title: 'LKPD Unit 1: Colligative Reality Lab 15 Komponen', page: 36 },
      { id: 'bab5-lkpd2', title: 'LKPD Unit 2: Electrochemistry Energy Challenge 15 Komponen', page: 40 },
      { id: 'bab5-lkpd3', title: 'LKPD Unit 3: Carbon Future Innovation 15 Komponen', page: 44 },
    ],
  },
  {
    id: 'bab6',
    title: 'BAB VI: Bahan Ajar Mendalam (Triple Representation)',
    chapter: 'BAB VI',
    page: 48,
    subsections: [
      { id: 'bab6-materi1', title: 'Bahan Ajar Unit 1: Termodinamika Larutan & Sifat Koligatif', page: 48 },
      { id: 'bab6-materi2', title: 'Bahan Ajar Unit 2: Kinetika Redoks, Sel Volta, & Elektrolisis Industri', page: 53 },
      { id: 'bab6-materi3', title: 'Bahan Ajar Unit 3: Senyawa Karbon, Isomerisme, & Biomakromolekul', page: 58 },
    ],
  },
  {
    id: 'bab7',
    title: 'BAB VII: Media Pembelajaran Digital & Non-Digital',
    chapter: 'BAB VII',
    page: 63,
    subsections: [
      { id: 'bab7-digital', title: 'Media Digital (PhET, MolView, VR Lab, Quizizz, Padlet)', page: 63 },
      { id: 'bab7-nondigital', title: 'Media Non-Digital (Molymod 3D, Sensory Chemistry Kit, Infografik)', page: 65 },
      { id: 'bab7-matriks', title: 'Matriks Integrasi TPACK Media Pembelajaran', page: 66 },
    ],
  },
  {
    id: 'bab8',
    title: 'BAB VIII: Instrumen Asesmen Pembelajaran',
    chapter: 'BAB VIII',
    page: 67,
    subsections: [
      { id: 'bab8-diag', title: 'A. Asesmen Diagnostik Kognitif & Non-Kognitif', page: 67 },
      { id: 'bab8-formatif', title: 'B. 9 Instrumen Asesmen Formatif & Rubrik', page: 72 },
      { id: 'bab8-sumatif', title: 'C. Bank Soal Asesmen Sumatif (PG, PGK, HOTS, Analisis Data, Studi Kasus)', page: 76 },
      { id: 'bab8-rubrik', title: 'D. Rubrik Penilaian Proyek STEM & Praktikum Laboratorium', page: 85 },
    ],
  },
  {
    id: 'bab9',
    title: 'BAB IX: Program Remedial dan Pengayaan',
    chapter: 'BAB IX',
    page: 88,
    subsections: [
      { id: 'bab9-remedial', title: 'A. Program Remedial 5 Tahap (< 75: Diagnose - Relearn - Practice - Feedback - Reassess)', page: 88 },
      { id: 'bab9-pengayaan', title: 'B. Program Pengayaan 4 Level (≥ 80: Advanced Case - Challenge - Innovation - Mini Research)', page: 90 },
    ],
  },
  {
    id: 'bab10',
    title: 'BAB X: Analisis Hasil Belajar dan Refleksi',
    chapter: 'BAB X',
    page: 92,
    subsections: [
      { id: 'bab10-analisis', title: 'A. Tabel Matriks Analisis Hasil Belajar & Rekomendasi Tindak Lanjut', page: 92 },
      { id: 'bab10-refleksi-guru', title: 'B. Instrumen dan Catatan Refleksi Diri Guru', page: 94 },
      { id: 'bab10-refleksi-siswa', title: 'C. Instrumen Metakognitif & Refleksi Peserta Didik', page: 95 },
    ],
  },
  {
    id: 'bab11',
    title: 'BAB XI: Novelty dan Inovasi Pembelajaran Kimia',
    chapter: 'BAB XI',
    page: 96,
    subsections: [
      { id: 'bab11-map', title: 'Peta Kebaruan (Novelty Map 1 - 5 CFIL Framework)', page: 96 },
      { id: 'bab11-dampak', title: 'Dampak Edukatif dan Diseminasi Praktik Baik Pembelajaran', page: 98 },
    ],
  },
  {
    id: 'lampiran',
    title: 'LAMPIRAN RESMI DOKUMEN',
    chapter: 'Lampiran',
    page: 99,
    subsections: [
      { id: 'lamp-1', title: 'Lampiran 1: Instrumen Lengkap Asesmen Diagnostik', page: 99 },
      { id: 'lamp-2', title: 'Lampiran 2: Lembar Observasi Formatif & Jurnal Sikap', page: 101 },
      { id: 'lamp-3', title: 'Lampiran 3: Naskah Soal Ujian Sumatif Semester', page: 103 },
      { id: 'lamp-4', title: 'Lampiran 4: Rubrik Holistik Penilaian Kinerja Proyek PjBL', page: 106 },
      { id: 'lamp-5', title: 'Lampiran 5: Panduan Keselamatan Kerja & Rubrik Praktikum', page: 108 },
      { id: 'lamp-6', title: 'Lampiran 6: Kumpulan LKPD Siswa Siap Cetak', page: 110 },
      { id: 'lamp-7', title: 'Lampiran 7: Modul Paket Remedial Mandiri', page: 112 },
      { id: 'lamp-8', title: 'Lampiran 8: Panduan Mini Research & Proyek Pengayaan', page: 114 },
    ],
  },
];

export const kataPengantarFullText = `Puji dan syukur senantiasa kita panjatkan ke hadirat Tuhan Yang Maha Esa atas limpahan rahmat, taufik, dan hidayah-Nya, sehingga dokumen "Perangkat Pembelajaran Kimia Inovatif Fase F Kelas XII Semester Ganjil" ini dapat diselesaikan secara komprehensif, akademis, dan aplikatif. Dokumen ini disusun sebagai pedoman instruksional mutakhir sekaligus wujud nyata transformasi pedagogik dalam menjawab tuntutan pembelajaran sains abad ke-21 yang sarat dengan dinamika revolusi industri 4.0 dan era kecerdasan artifisial (Society 5.0).

Ilmu kimia pada jenjang pendidikan menengah atas, khususnya pada Fase F Kelas XII, memegang peranan strategis dalam membangun kerangka berpikir analitis, matematis, dan fenomenologis peserta didik. Kimia bukan sekadar kumpulan rumus stoikiometri atau abstraksi simbolik belaka, melainkan ilmu sentral (central science) yang menjembatani fenomena alam kasat mata (makroskopik) dengan dinamika interaksi partikel renik tak kasat mata (submikroskopik), yang diekspresikan secara presisi lewat bahasa lambang (simbolik). Namun, tantangan riil yang kerap dihadapi di ruang kelas adalah timbulnya sindrom "rote learning" atau hafalan mekanis, di mana peserta didik mampu menghitung angka-angka rumus sifat koligatif atau potensial sel tanpa menginternalisasi esensi fisis dan aplikasinya dalam kehidupan nyata.

Menyadari urgensi tersebut, perangkat pembelajaran ini didesain secara revolusioner dengan mengintegrasikan empat pilar utama: Technological Pedagogical and Content Knowledge (TPACK), Deep Learning (Pembelajaran Mendalam yang Mindful, Meaningful, dan Joyful), Science, Technology, Engineering, and Mathematics (STEM Education), serta Project-Based Learning (PjBL). Seluruh komponen kurikuler dalam dokumen ini dirajut ke dalam satu kerangka kerja orisinal yang dinamakan Chemistry Future Innovation Learning Framework (CFIL). Melalui sintaks Contextual, Future Technology, Investigation, dan Learning by Design, peserta didik tidak lagi diposisikan sebagai penerima pasif informasi, melainkan sebagai peneliti muda, perancang rekayasa teknologi, dan pemecah masalah saintifik autentik.

Kehadiran dokumen ini mencakup seluruh rantai administrasi dan pedagogik guru secara utuh tanpa celah: mulai dari analisis Capaian Pembelajaran (CP) dan Alur Tujuan Pembelajaran (ATP), Program Tahunan (PROTA), Program Semester (PROSEM), Kriteria Ketercapaian Tujuan Pembelajaran (KKTP standar ketuntasan 75), Modul Ajar terintegrasi, Lembar Kerja Peserta Didik (LKPD) berbasis inkuiri-rekayasa, Bahan Ajar triple representation, strategi media digital interaktif, hingga instrumen asesmen komprehensif (diagnostik, formatif 9 dimensi, dan sumatif berorientasi Higher Order Thinking Skills/HOTS). Selain itu, sistem diferensiasi belajar melalui alur remedial sistematis dan program pengayaan berjenjang empat level turut dikonstruksi guna memastikan tidak ada peserta didik yang tertinggal (inclusive education).

Penyusun menyampaikan apresiasi dan penghargaan setinggi-tingginya kepada pimpinan madrasah/sekolah, rekan sejawat Musyawarah Guru Mata Pelajaran (MGMP) Kimia, serta para akademisi pendidikan kimia yang telah memberikan saran, telaah kritis, dan inspirasi konstruktif selama proses penyusunan berlangsung. Diharapkan perangkat pembelajaran ini tidak hanya berfungsi sebagai pemenuhan instrumen supervisi manajerial dan portofolio guru profesional, namun sungguh-sungguh menjadi pedoman hidup (living document) yang mampu menghidupkan ruang-ruang kelas kimia menjadi laboratorium penemuan yang memantik daya kritis, kreativitas inovatif, serta kecintaan mendalam peserta didik terhadap sains demi kemajuan peradaban bangsa.`;
