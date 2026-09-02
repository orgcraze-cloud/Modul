export const lampiranList = [
  {
    id: 'lampiran-1',
    nomor: 'Lampiran 1',
    judul: 'Instrumen Asesmen Diagnostik (Kognitif & Non-Kognitif)',
    deskripsi: 'Memuat paket tes diagnostik kognitif awal kesiapan belajar (10 butir soal per unit) beserta angket non-kognitif profil gaya belajar, minat sains, kemandirian teknologi, dan self-efficacy peserta didik.',
    kontenSpesifik: {
      nonKognitif: [
        { pertanyaan: 'Seberapa tertarik Anda mempelajari fenomena kimia yang berkaitan dengan teknologi masa depan dan energi terbarukan?', skala: '1 (Sangat Tidak Tertarik) s.d 5 (Sangat Tertarik)' },
        { pertanyaan: 'Apakah Anda lebih mudah memahami materi kimia melalui visualisasi gambar/animasi 3D dibanding teks bacaan panjang?', skala: '1 s.d 5' },
        { pertanyaan: 'Seberapa percaya diri Anda dalam merancang eksperimen laboratorium dan mengoperasikan perangkat ukur digital?', skala: '1 s.d 5' },
        { pertanyaan: 'Apakah Anda memiliki akses perangkat digital (laptop/smartphone) dan internet stabil untuk praktikum virtual di rumah?', skala: 'Ya / Kadang-kadang / Tidak' },
      ],
    },
  },
  {
    id: 'lampiran-2',
    nomor: 'Lampiran 2',
    judul: 'Instrumen Asesmen Formatif (9 Teknik Terpadu)',
    deskripsi: 'Instrumen operasional pemantauan belajar harian: (1) Lembar Observasi Keterampilan Ilmiah, (2) Lembar Tanya Jawab Sokratik, (3) Rubrik Kuis Kilat Partikulat, (4) Kartu Exit Ticket Metakognitif, (5) Lembar Penilaian Diskusi Argumen, (6) Ceklis Kinerja Praktikum, (7) Lembar Kerja Analisis Kasus Autentik, (8) Rubrik Presentasi Multimoda, (9) Jurnal Refleksi Diri Siswa.',
  },
  {
    id: 'lampiran-3',
    nomor: 'Lampiran 3',
    judul: 'Instrumen Asesmen Sumatif (Kisi-Kisi, Naskah Soal HOTS, & Kunci Pembahasan)',
    deskripsi: 'Bank soal sumatif terstandar per unit: 15 Pilihan Ganda (C3-C5), 5 Pilihan Ganda Kompleks, 5 Uraian HOTS (C4-C6), 2 Lembar Analisis Data Eksperimen, dan 2 Studi Kasus Sosio-Saintifik industri lengkap dengan rubrik penskoran analitik.',
  },
  {
    id: 'lampiran-4',
    nomor: 'Lampiran 4',
    judul: 'Rubrik Holistik & Analitik Penilaian Proyek PjBL STEM',
    deskripsi: 'Matriks kriteria penilaian proyek rekayasa skala 1 sampai 4 pada 10 aspek: Pemahaman Konsep, Kreativitas Desain, Tingkat Inovasi Solusi, Ketajaman Analisis Data, Kematangan Engineering Design, Efektivitas Kolaborasi Tim, Kecakapan Komunikasi Publik, Pemanfaatan Teknologi Digital, Keberlanjutan Lingkungan & Etika, serta Kedalaman Refleksi Metakognitif.',
    kriteriaSkor: [
      { aspek: '1. Pemahaman Konsep Kimia', level1: 'Konsep dasar keliru / miskonsepsi berat', level2: 'Konsep dipahami parsial, ada kekeliruan perhitungan', level3: 'Konsep tepat, perhitungan benar, hubungan makro-simbolik jelas', level4: 'Konsep mendalam, mengintegrasikan 3 level representasi sempurna' },
      { aspek: '2. Engineering Design Process', level1: 'Tanpa perencanaan teknis / asal jadi', level2: 'Ada sketsa desain namun tidak ada pengujian perbaikan', level3: 'Siklus desain-uji-perbaiki dijalankan secara terstruktur', level4: 'Iterasi rekayasa berbasis data empiris terukur dan sangat optimal' },
      { aspek: '3. Inovasi & Orisinalitas', level1: 'Meniru persis contoh tanpa modifikasi', level2: 'Modifikasi minim pada kemasan luar', level3: 'Solusi memiliki sentuhan ide baru yang fungsional', level4: 'Sangat orisinal, bernilai guna tinggi dan ramah lingkungan' },
      { aspek: '4. Kolaborasi & Komunikasi', level1: 'Didominasi 1 orang, presentasi pasif', level2: 'Kerja tim terbagi namun kurang sinkron', level3: 'Kolaborasi kompak, presentasi jelas dan interaktif', level4: 'Sinergi tim istimewa, argumentasi ilmiah sangat meyakinkan' },
    ],
  },
  {
    id: 'lampiran-5',
    nomor: 'Lampiran 5',
    judul: 'Rubrik Kinerja Praktikum Laboratorium & Keselamatan Kerja',
    deskripsi: 'Pedoman penilaian keterampilan proses sains di laboratorium: (1) Kepatuhan K3 & APD, (2) Kesiapan Alat & Pemahaman Prosedur, (3) Keterampilan Manipulasi Bahan Kimia, (4) Presisi Pengukuran & Pencatatan Data, (5) Kebersihan & Manajemen Pengelolaan Limbah Bahan Kimia.',
  },
  {
    id: 'lampiran-6',
    nomor: 'Lampiran 6',
    judul: 'Kumpulan Lembar Kerja Peserta Didik (LKPD Inovatif)',
    deskripsi: 'Master dokumen LKPD siap cetak: Unit 1 (Colligative Reality Lab), Unit 2 (Electrochemistry Energy Challenge), dan Unit 3 (Carbon Future Innovation Project) yang terstruktur dalam 15 komponen saintifik baku.',
  },
  {
    id: 'lampiran-7',
    nomor: 'Lampiran 7',
    judul: 'Paket Modul Belajar Mandiri & Soal Remedial Terstruktur',
    deskripsi: 'Materi penguatan mandiri disertai panduan langkah demi langkah (scaffolding) dan paket soal remedial paralel untuk memastikan seluruh peserta didik mencapai ketuntasan kompetensi minimal (KKTP 75).',
  },
  {
    id: 'lampiran-8',
    nomor: 'Lampiran 8',
    judul: 'Panduan Program Pengayaan & Template Mini Research',
    deskripsi: 'Panduan pelaksanaan kegiatan pengayaan 4 level (Advanced Case, Chemistry Challenge, Innovation Project, dan Mini Research ilmiah) beserta template format penulisan karya tulis ilmiah remaja.',
  },
];
