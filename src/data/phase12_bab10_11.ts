import { StudentScoreItem } from '../types';

export const bab10AnalisisData: {
  sampleScores: StudentScoreItem[];
  ketercapaianKelas: {
    totalSiswa: number;
    tuntas: number;
    belumTuntas: number;
    persentaseKetuntasan: number;
    rataRataKelas: number;
  };
  miskonsepsiTerdeteksi: { miskonsepsi: string; frekuensi: string; analisisPenyebab: string; intervensi: string }[];
  analisisTp: { kodeTp: string; materi: string; ketercapaian: string; catatan: string }[];
  rekomendasi: string[];
} = {
  sampleScores: [
    { no: 1, nama: 'Ahmad Fauzi Ridwan', tp: 'TP.1.1 - TP.1.5', diagnostik: 65, formatif: 82, sumatif: 88, nilaiAkhir: 85, status: 'Tuntas', tindakLanjut: 'Pengayaan Level 2 (Olimpiade Sifat Koligatif)' },
    { no: 2, nama: 'Annisa Nurul Hidayah', tp: 'TP.1.1 - TP.1.5', diagnostik: 75, formatif: 88, sumatif: 94, nilaiAkhir: 91, status: 'Tuntas', tindakLanjut: 'Pengayaan Level 3 (Inovasi Bio-Cooler)' },
    { no: 3, nama: 'Bagas Aditya Pratama', tp: 'TP.1.1 - TP.1.5', diagnostik: 45, formatif: 68, sumatif: 64, nilaiAkhir: 65, status: 'Belum Tuntas', tindakLanjut: 'Remedial Terstruktur 5 Tahap (Klinik Molalitas & Van \'t Hoff)' },
    { no: 4, nama: 'Cantika Dewi Lestari', tp: 'TP.1.1 - TP.1.5', diagnostik: 80, formatif: 85, sumatif: 86, nilaiAkhir: 86, status: 'Tuntas', tindakLanjut: 'Pengayaan Level 2 (Studi Kasus Desalinasi Osmosis)' },
    { no: 5, nama: 'Dimas Satria Wibowo', tp: 'TP.1.1 - TP.1.5', diagnostik: 50, formatif: 72, sumatif: 70, nilaiAkhir: 71, status: 'Belum Tuntas', tindakLanjut: 'Remedial Terstruktur (Bimbingan Tutor Sebaya & Re-test)' },
    { no: 6, nama: 'Fatimah Az-Zahra', tp: 'TP.1.1 - TP.1.5', diagnostik: 70, formatif: 84, sumatif: 88, nilaiAkhir: 86, status: 'Tuntas', tindakLanjut: 'Pengayaan Level 1 (Advanced Case Analysis)' },
    { no: 7, nama: 'Gilang Ramadhan', tp: 'TP.1.1 - TP.1.5', diagnostik: 60, formatif: 78, sumatif: 80, nilaiAkhir: 79, status: 'Tuntas', tindakLanjut: 'Pemantapan Mandiri & Latihan Soal HOTS' },
    { no: 8, nama: 'Hana Khairunnisa', tp: 'TP.1.1 - TP.1.5', diagnostik: 85, formatif: 92, sumatif: 96, nilaiAkhir: 94, status: 'Sangat Baik', tindakLanjut: 'Pengayaan Level 4 (Mini Research Desalinasi Alami)' },
    { no: 9, nama: 'Irfan Maulana', tp: 'TP.1.1 - TP.1.5', diagnostik: 40, formatif: 65, sumatif: 62, nilaiAkhir: 63, status: 'Belum Tuntas', tindakLanjut: 'Remedial Diagnostik Khusus (Konsep Partikulat PhET)' },
    { no: 10, nama: 'Zahra Aulia Putri', tp: 'TP.1.1 - TP.1.5', diagnostik: 75, formatif: 86, sumatif: 90, nilaiAkhir: 88, status: 'Tuntas', tindakLanjut: 'Pengayaan Level 3 (Desain Proyek Pendingin Medis)' },
  ],
  ketercapaianKelas: {
    totalSiswa: 36,
    tuntas: 31,
    belumTuntas: 5,
    persentaseKetuntasan: 86.11,
    rataRataKelas: 82.4,
  },
  miskonsepsiTerdeteksi: [
    {
      miskonsepsi: 'Mengabaikan faktor Van \'t Hoff (i) pada larutan elektrolit saat menghitung ΔTf dan ΔTb.',
      frekuensi: '28% siswa pada tes diagnostik, berkurang menjadi 6% setelah praktikum Colligative Reality Lab.',
      analisisPenyebab: 'Siswa terbiasa menghafal satu rumus tunggal non-elektrolit tanpa memvisualisasikan disosiasi ion di dalam air.',
      intervensi: 'Pemberian analogi visual "kelereng terikat vs kelereng lepas" dan kartu disosiasi ionik interaktif.',
    },
    {
      miskonsepsi: 'Menyimpulkan bahwa arah aliran elektron pada sel volta melewati jembatan garam.',
      frekuensi: '35% siswa pada tahap awal Unit 2.',
      analisisPenyebab: 'Buku teks konvensional sering menggambar tanda panah sirkuit tertutup melingkar tanpa membedakan jalur kawat logam vs jalur larutan air.',
      intervensi: 'Praktikum pemutusan kawat sirkuit luar (arus langsung mati) vs pemutusan jembatan garam (tegangan drop karena penumpukan muatan).',
    },
  ],
  analisisTp: [
    { kodeTp: 'TP.1.1', materi: 'Tekanan Uap & Hukum Raoult', ketercapaian: '91,6%', catatan: 'Sangat baik. Simulasi visual PhET sangat efektif membantu pemahaman fraksi mol.' },
    { kodeTp: 'TP.1.2', materi: 'Kenaikan Titik Didih & Titik Beku', ketercapaian: '88,9%', catatan: 'Baik. Praktikum es batu garam memberikan pengalaman langsung yang membekas.' },
    { kodeTp: 'TP.1.3', materi: 'Tekanan Osmosis & Membran', ketercapaian: '83,3%', catatan: 'Cukup baik. Perlu penguatan pada konversi satuan suhu Celcius ke Kelvin.' },
    { kodeTp: 'TP.1.4', materi: 'Faktor Van \'t Hoff', ketercapaian: '77,8%', catatan: 'Memerlukan scaffolding tambahan pada perhitungan derajat ionisasi (α) elektrolit lemah.' },
    { kodeTp: 'TP.1.5', materi: 'PjBL STEM Colligative Reality Lab', ketercapaian: '94,4%', catatan: 'Luar biasa. Antusiasme tinggi dalam merekayasa kotak pendingin vaksin portabel.' },
  ],
  rekomendasi: [
    '1. Mempertahankan integrasi praktikum inkuiri hands-on dan simulasi submikroskopik 3D untuk seluruh materi kimia abstrak.',
    '2. Memperbanyak latihan soal terstruktur bertingkat (scaffolding) untuk siswa yang memiliki hambatan dalam keterampilan aljabar matematika.',
    '3. Mengoptimalkan peran tutor sebaya dalam klinik sains sore untuk memberikan pendampingan personal bagi 5 siswa yang belum tuntas.',
    '4. Memfasilitasi 4 siswa berkategori Mahir untuk mengirimkan proposal karya inovasi sains ke ajang lomba karya ilmiah remaja (LKIR/KIRNAS).',
  ],
};

export const instrumenRefleksiGuru = {
  judul: 'INSTRUMEN REFLEKSI DIRI GURU PROFESIONAL (CFIL PEDAGOGICAL AUDIT)',
  aspekRefleksi: [
    { no: 1, pertanyaan: 'Apakah fenomena autentik yang disajikan pada awal pembelajaran berhasil memantik rasa ingin tahu (curiosity) dan pertanyaan kritis siswa?', jawabanReflektif: 'Ya, penayangan video rantai dingin vaksin di pegunungan terbukti membangkitkan empati dan memicu puluhan pertanyaan spontan dari siswa.' },
    { no: 2, pertanyaan: 'Sejauh mana teknologi digital yang digunakan (PhET, MolView, Data Logger) benar-benar berfungsi sebagai alat eksplorasi berpikir, bukan sekadar pajangan proyektor?', jawabanReflektif: 'Siswa aktif memanipulasi variabel konsentrasi di PhET dan melihat langsung dampaknya pada grafik tekanan uap, membuktikan teknologi berfungsi sebagai cognitive tool.' },
    { no: 3, pertanyaan: 'Bagaimana efektivitas manajemen waktu pembelajaran selama siklus PjBL Engineering Design?', jawabanReflektif: 'Pada sesi awal pembuatan prototipe sempat terjadi keterlambatan 15 menit karena siswa kesulitan memotong styrofoam rapi; solusinya pada pertemuan berikutnya disiapkan template cetakan siap pakai.' },
    { no: 4, pertanyaan: 'Apakah diferensiasi pembelajaran telah berhasil melayani kebutuhan siswa yang lambat belajar (slow learners) dan siswa berbakat (gifted)?', jawabanReflektif: 'Diferensiasi proses berjalan baik; kelompok heterogen memungkinkan tutor sebaya aktif membantu, sementara siswa mahir diberikan tantangan optimasi efisiensi termal.' },
    { no: 5, pertanyaan: 'Bagaimana suasana emosional kelas selama pembelajaran berlangsung (Mindful, Meaningful, Joyful)?', jawabanReflektif: 'Suasana kelas sangat dinamis dan ceria saat lampu LED menyala pada bio-baterai limbah jeruk, menghapus stigma bahwa pelajaran kimia itu menegangkan dan membosankan.' },
  ],
};

export const instrumenRefleksiSiswa = {
  judul: 'LEMBAR REFLEKSI METAKOGNITIF PESERTA DIDIK (STUDENT SELF-ASSESSMENT)',
  pertanyaanPanduan: [
    '1. Tiga konsep kimia terpenting apa yang berhasil saya pahami secara mendalam pada unit pembelajaran ini?',
    '2. Bagian mana yang paling menantang bagi saya? Mengapa bagian tersebut terasa sulit dan strategi apa yang saya gunakan untuk mengatasinya?',
    '3. Bagaimana kontribusi saya dalam kerja kelompok rekayasa prototipe STEM? Apakah saya telah mendengarkan pendapat rekan tim dengan terbuka?',
    '4. Keterampilan baru apa (penggunaan alat ukur digital, berpikir analitis, pemecahan masalah) yang berhasil saya tingkatkan?',
    '5. Bagaimana pengetahuan kimia ini mengubah cara pandang saya terhadap benda-benda dan tantangan lingkungan di sekitar kehidupan saya?',
  ],
};

export const bab11NoveltyData = {
  judul: 'NOVELTY DAN INOVASI PEMBELAJARAN: CFIL FRAMEWORK',
  petaKebaruan: [
    {
      nomor: 1,
      nama: 'PHENOMENON-FIRST CHEMISTRY',
      esensi: 'Mendobrak tradisi lama pengajaran kimia yang kaku (diawali definisi teks dan rumus abstrak). Pada kerangka CFIL, 100% materi selalu diawali dari anomali fenomena empiris kasat mata atau krisis nyata dunia nyata yang menuntut penjelasan ilmiah.',
      dampakEdukatif: 'Membangun rasa kepemilikan belajar (sense of urgency) pada diri peserta didik, mengaitkan sains dengan realitas kehidupan sehari-hari, dan mengeliminasi pertanyaan klasik siswa: "Untuk apa saya belajar rumus ini?".',
    },
    {
      nomor: 2,
      nama: 'TRIPLE REPRESENTATION CHEMISTRY ENGINE',
      esensi: 'Mengintegrasikan secara simultan dan eksplisit segitiga representasi Johnstone: Makroskopik (gejala teramati), Submikroskopik (partikel ion/molekul/elektron), dan Simbolik (rumus/persamaan reaksi) pada setiap kegiatan pembelajaran dan instrumen evaluasi.',
      dampakEdukatif: 'Mencegah terjadinya pemahaman semu (pseudo-understanding) di mana siswa hanya mahir berhitung angka tetapi buta terhadap perilaku partikel mikrokosmos di balik rumus tersebut.',
    },
    {
      nomor: 3,
      nama: 'TPACK-DRIVEN TECHNOLOGY INTEGRATION',
      esensi: 'Teknologi bukan sekadar alat presentasi slide Powerpoint, melainkan dioperasikan sebagai laboratorium virtual interaktif, instrumen visualisasi molekuler 3D (MolView/PhET), sensor akuisisi data real-time, dan media kolaborasi pemecahan masalah ilmiah.',
      dampakEdukatif: 'Mengembangkan literasi digital tingkat tinggi, mempercepat pembentukan model mental spasial molekul, dan memungkinkan eksperimen variabel kimia berbahaya dilakukan dengan aman secara virtual.',
    },
    {
      nomor: 4,
      nama: 'STEM CHEMISTRY INNOVATION & LEARNING BY DESIGN',
      esensi: 'Mentransformasikan kelas kimia menjadi bengkel rekayasa penemuan. Pembelajaran tidak berakhir pada ujian tertulis, melainkan berpuncak pada rekayasa produk nyata: Instant Eco-Cooler (Unit 1), Bio-Electrochemical Cell (Unit 2), dan Green Bioplastic Film (Unit 3).',
      dampakEdukatif: 'Melatih keterampilan abad ke-21 (kreativitas, daya cipta rekayasa, berpikir komputasi, kolaborasi tim, dan keberanian mencoba-memperbaiki kegagalan desain / growth mindset).',
    },
    {
      nomor: 5,
      nama: 'AI-SUPPORTED SCIENTIFIC REFLECTION',
      esensi: 'Pemanfaatan kecerdasan artifisial (AI) generatif secara etis dan terarah: bukan untuk menyalin tugas atau menggantikan nalar berpikir, melainkan bertindak sebagai mitra dialog ilmiah (Socratic dialogue partner), pemberi umpan balik formatif instan, dan asisten penelusuran referensi ilmiah.',
      dampakEdukatif: 'Membimbing peserta didik melakukan refleksi metakognitif mandiri, menguji validitas argumen ilmiah mereka, serta membiasakan etika dan literasi AI di era kecerdasan digital masa depan.',
    },
  ],
};
