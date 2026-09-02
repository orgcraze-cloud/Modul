import { ProtaItem, ProsemItem } from '../types';

export const protaData: ProtaItem[] = [
  { no: 1, unit: 'Unit 1', materiPokok: 'Sifat Koligatif Larutan (Penurunan Tekanan Uap, Titik Didih, Titik Beku, Tekanan Osmosis, Faktor Van \'t Hoff, & Rekayasa Pendingin)', alokasiJp: 30, semester: 'Ganjil', bulan: 'Juli - Agustus' },
  { no: 2, unit: 'Unit 2', materiPokok: 'Reaksi Redoks dan Sel Elektrokimia (Penyetaraan Redoks, Sel Volta, Potensial Sel, Sel Elektrolisis, Hukum Faraday, Korosi & Bio-Baterai)', alokasiJp: 35, semester: 'Ganjil', bulan: 'September - Oktober' },
  { no: 3, unit: 'Unit 3', materiPokok: 'Senyawa Karbon dan Makromolekul (Gugus Fungsi Karbon, Tata Nama IUPAC, Isomer, Reaksi Identifikasi, Polimerisasi & Sintesis Bioplastik)', alokasiJp: 25, semester: 'Ganjil', bulan: 'November - Desember' },
];

export const prosemData: ProsemItem[] = [
  // UNIT 1 (Minggu 1 - 6)
  { mingguKe: 1, pertemuanKe: 1, materi: 'Satuan Konsentrasi (m, M, X) & Fenomena Penurunan Tekanan Uap', kodeTp: 'TP.1.1', aktivitas: 'Orientasi fenomena laut mati & simulasi PhET evaporasi larutan, perhitungan fraksi mol', jp: 5, asesmen: 'Diagnostik & Kuis Cepat' },
  { mingguKe: 2, pertemuanKe: 2, materi: 'Hukum Raoult & Penurunan Tekanan Uap Larutan Non-Elektrolit & Elektrolit', kodeTp: 'TP.1.1', aktivitas: 'Investigasi grafik Raoult interaktif, analisis gaya tarik antar partikel pelarut-terlarut', jp: 5, asesmen: 'Formatif Analisis Kasus' },
  { mingguKe: 3, pertemuanKe: 3, materi: 'Kenaikan Titik Didih (ΔTb) & Penurunan Titik Beku (ΔTf)', kodeTp: 'TP.1.2', aktivitas: 'Eksperimen laboratorium penentuan titik beku larutan glukosa vs garam dapur', jp: 5, asesmen: 'Laporan Praktikum & Rubrik' },
  { mingguKe: 4, pertemuanKe: 4, materi: 'Tekanan Osmosis (Π) & Fenomena Membran Sel', kodeTp: 'TP.1.3', aktivitas: 'Investigasi osmosis wortel dalam larutan hipertonik & studi teknologi desalinasi membran', jp: 5, asesmen: 'Exit Ticket & Diskusi' },
  { mingguKe: 5, pertemuanKe: 5, materi: 'Faktor Van \'t Hoff (i) & Derajat Ionisasi Larutan Elektrolit', kodeTp: 'TP.1.4', aktivitas: 'Pemecahan masalah matematis terpadu komparasi larutan elektrolit kuat, lemah, non-elektrolit', jp: 5, asesmen: 'Kuis Formatif Numerik' },
  { mingguKe: 6, pertemuanKe: 6, materi: 'PjBL STEM: Colligative Reality Lab (Instant Eco-Cooler Vaccine Box)', kodeTp: 'TP.1.5', aktivitas: 'Perancangan prototipe pendingin es garam tanpa listrik, uji penurunan suhu, pameran karya', jp: 5, asesmen: 'Sumatif Unit 1 & Rubrik Proyek' },

  // UNIT 2 (Minggu 7 - 13)
  { mingguKe: 7, pertemuanKe: 7, materi: 'Penyetaraan Reaksi Redoks: Metode PBO & Setengah Reaksi (Asam & Basa)', kodeTp: 'TP.2.1', aktivitas: 'Workshop interaktif penyetaraan reaksi redoks bertahap dengan bimbingan papan kerja interaktif', jp: 5, asesmen: 'Diagnostik Redoks & Lembar Kerja' },
  { mingguKe: 8, pertemuanKe: 8, materi: 'Prinsip Kerja Sel Volta & Deret Volta', kodeTp: 'TP.2.2', aktivitas: 'Perakitan sel Daniell Zn-Cu di lab, pengukuran potensial sel voltmeter, pengamatan jembatan garam', jp: 5, asesmen: 'Observasi Kinerja Praktik' },
  { mingguKe: 9, pertemuanKe: 9, materi: 'Potensial Sel Standar (E°sel) & Persamaan Nernst Non-Standar', kodeTp: 'TP.2.2', aktivitas: 'Analisis kespontanan reaksi kimia redoks industri dan komputasi nilai potensial sel', jp: 5, asesmen: 'Formatif Studi Kasus Energi' },
  { mingguKe: 10, pertemuanKe: 10, materi: 'Prinsip Kerja Sel Elektrolisis & Reaksi di Elektroda', kodeTp: 'TP.2.3', aktivitas: 'Elektrolisis larutan KI dan larutan CuSO4 dengan elektroda karbon, uji fenolftalein dan amilum', jp: 5, asesmen: 'Laporan Investigasi Lab' },
  { mingguKe: 11, pertemuanKe: 11, materi: 'Hukum I dan II Faraday pada Stoikiometri Elektrokimia', kodeTp: 'TP.2.3', aktivitas: 'Perhitungan massa endapan logam pelapisan (elektroplating) sendok tembaga dengan nikel', jp: 5, asesmen: 'Formatif Problem Solving Numerik' },
  { mingguKe: 12, pertemuanKe: 12, materi: 'Mekanisme Korosi Besi & Metode Proteksi Katodik', kodeTp: 'TP.2.4', aktivitas: 'Analisis studi kasus korosi kapal laut, evaluasi sacrificial anode (Mg/Zn)', jp: 5, asesmen: 'Esai Evaluasi Solusi Teknik' },
  { mingguKe: 13, pertemuanKe: 13, materi: 'PjBL STEM: Bio-Electrochemical Cell Energy Challenge', kodeTp: 'TP.2.5', aktivitas: 'Penyusunan sel volta berbasis pasta limbah kulit jeruk/tomat, presentasi daya LED', jp: 5, asesmen: 'Sumatif Unit 2 & Rubrik Inovasi' },

  // UNIT 3 (Minggu 14 - 18)
  { mingguKe: 14, pertemuanKe: 14, materi: 'Kekhasan Atom Karbon & Deret Gugus Fungsi Haloalkana, Alkohol, Eter', kodeTp: 'TP.3.1', aktivitas: 'Pemodelan molekul 3D dengan MolView, identifikasi isomer posisi dan isomer fungsi', jp: 5, asesmen: 'Tugas Portofolio 3D & Kuis' },
  { mingguKe: 15, pertemuanKe: 15, materi: 'Gugus Fungsi Aldehida, Keton, Asam Karboksilat, Ester', kodeTp: 'TP.3.1', aktivitas: 'Tata nama IUPAC, analisis isomer optis karbon kiral, sintesis ester minyak pisang di lab', jp: 5, asesmen: 'Formatif Uji Keterampilan' },
  { mingguKe: 16, pertemuanKe: 16, materi: 'Reaksi Identifikasi Spesifik Senyawa Karbon (Fehling, Tollens, Reagen Khusus)', kodeTp: 'TP.3.2', aktivitas: 'Uji identifikasi senyawa misterius pembeda aldehida-keton dan alkohol primer-sekunder-tersier', jp: 5, asesmen: 'Laporan Diagnostik Kualitatif' },
  { mingguKe: 17, pertemuanKe: 17, materi: 'Makromolekul: Polimer Sintetis, Karbohidrat, Protein, & Lemak', kodeTp: 'TP.3.3 & TP.3.4', aktivitas: 'Analisis jenis reaksi polimerisasi adisi-kondensasi dan uji biokimia nutrisi bahan makanan', jp: 5, asesmen: 'Lembar Analisis Polimer & Uji Makanan' },
  { mingguKe: 18, pertemuanKe: 18, materi: 'PjBL STEM: Green Synthesis Bioplastic & Ujian Akhir Semester', kodeTp: 'TP.3.5', aktivitas: 'Fabrikasi lembaran bioplastik pati singkong terdegradasi, uji mekanik, refleksi akhir', jp: 5, asesmen: 'Sumatif Unit 3 & Evaluasi Akhir' },
];

export const kktpSpecification = {
  nilaiKetuntasanMinimal: 75,
  skalaPenilaian: [
    {
      predikat: 'Sangat Baik',
      rentang: '90 – 100',
      status: 'Tuntas (Pengayaan Mahir)',
      deskripsi: 'Peserta didik menguasai konsep secara komprehensif pada ketiga level representasi (makroskopik, submikroskopik, simbolik), mampu menyelesaikan persoalan HOTS (C4–C6) secara mandiri, mengintegrasikan pengetahuan lintas disiplin sains, serta menunjukkan orisinalitas tinggi dalam rekayasa proyek inovasi sains.',
    },
    {
      predikat: 'Baik',
      rentang: '80 – 89',
      status: 'Tuntas (Pengayaan Standar)',
      deskripsi: 'Peserta didik memahami konsep kunci dan terampil menghubungkan fenomena fisik dengan rumus simbolik, mampu menganalisis persoalan sains kompleks dengan sedikit panduan, serta aktif dan teliti dalam kegiatan eksperimen laboratorium dan proyek tim.',
    },
    {
      predikat: 'Cukup',
      rentang: '75 – 79',
      status: 'Tuntas (Pemantapan Mandiri)',
      deskripsi: 'Peserta didik telah memenuhi standar kompetensi minimal, mampu menjelaskan fenomena dasar dan melakukan perhitungan matematis standar, namun masih memerlukan penguatan dalam pemodelan submikroskopik dan analisis variasi data eksperimen.',
    },
    {
      predikat: 'Perlu Bimbingan',
      rentang: '< 75',
      status: 'Belum Tuntas (Wajib Remedial)',
      deskripsi: 'Peserta didik belum mencapai kriteria ketuntasan minimal, mengalami miskonsepsi fundamental pada konsep dasar kimia atau mengalami hambatan dalam kalkulasi stoikiometri, sehingga diwajibkan mengikuti program remedial diagnostik terstruktur.',
    },
  ],
};
