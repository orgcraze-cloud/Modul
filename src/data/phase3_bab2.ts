import { AcpItem, TpItem } from '../types';

export const cpFaseFText = {
  elemenPemahaman: `Pada akhir Fase F, peserta didik memiliki kemampuan menganalisis sifat larutan dan kesetimbangan ionik; menerapkan konsep redoks dan elektrokimia dalam pengembangan sumber energi terbarukan dan pencegahan degradasi material; serta menganalisis struktur, tata nama, sifat, sintesis, dan kegunaan senyawa karbon serta biomakromolekul dalam kehidupan sehari-hari dan industri berkelanjutan. Peserta didik mampu mengintegrasikan representasi makroskopik, submikroskopik, dan simbolik dalam memecahkan masalah kompleks berbasis sains dan teknologi.`,
  elemenKeterampilanProses: `Peserta didik mampu: (1) Mengamati fenomena dan merumuskan pertanyaan penyelidikan ilmiah; (2) Membuat hipotesis berdasarkan pemodelan mental sains; (3) Merencanakan dan melaksanakan penyelidikan ilmiah laboratorium maupun virtual dengan memperhatikan keselamatan kerja; (4) Mengumpulkan, memproses, dan menganalisis data kuantitatif serta kualitatif menggunakan instrumen digital; (5) Mengevaluasi dan merefleksikan bukti ilmiah untuk menarik kesimpulan valid; (6) Mengomunikasikan hasil investigasi dan rekayasa inovasi sains dalam berbagai format multimoda secara argumentatif dan etis.`,
};

export const acpData: AcpItem[] = [
  {
    elemen: 'Pemahaman Kimia & Keterampilan Proses',
    cp: 'Menganalisis fenomena sifat koligatif larutan (penurunan tekanan uap, kenaikan titik didih, penurunan titik beku, dan tekanan osmosis) pada larutan elektrolit dan non-elektrolit serta penerapannya.',
    kompetensi: 'Menganalisis, Memodelkan, Menginvestigasi, Merekayasa',
    materi: 'Sifat Koligatif Larutan & Faktor Van \'t Hoff',
    pengetahuan: 'Faktual (fenomena es & infus), Konseptual (hukum Raoult, gaya antarmolekul), Prosedural (eksperimen kalorimetri titik beku), Metakognitif (evaluasi efisiensi zat antibeku).',
    keterampilan: 'Keterampilan preparasi larutan dengan konsentrasi presisi (molalitas, molaritas, fraksi mol), pengukuran termometrik digital, perancangan prototipe pendingin es instan tanpa kulkas.',
    kko: 'Mengidentifikasi (C1), Menjelaskan (C2), Menerapkan (C3), Menganalisis (C4), Mengevaluasi (C5), Merancang (C6)',
    buktiBelajar: 'Laporan penyelidikan eksperimen virtual & fisik, data perhitungan sifat koligatif, dan prototipe produk pendingin ramah lingkungan (Colligative Reality Lab).',
  },
  {
    elemen: 'Pemahaman Kimia & Keterampilan Proses',
    cp: 'Menerapkan konsep reaksi redoks dan elektrokimia dalam menjelaskan prinsip kerja sel Volta, deret Volta, hukum Faraday pada sel elektrolisis, serta menganalisis fenomena korosi dan upaya pencegahannya.',
    kompetensi: 'Menyetarakan, Menghitung, Menganalisis Potensial, Merakit Sel, Mencegah Korosi',
    materi: 'Reaksi Redoks, Sel Volta, Sel Elektrolisis, dan Korosi Logam',
    pengetahuan: 'Faktual (baterai smartphone, pelapisan emas), Konseptual (transfer elektron, potensial elektroda standar E°, jembatan garam, overpotensial), Prosedural (perakitan sel elektrokimia dan elektroplating), Metakognitif (strategi proteksi katodik jembatan baja).',
    keterampilan: 'Penggunaan multimeter digital untuk mengukur tegangan sel, penyetaraan reaksi redoks metode PBO dan setengah reaksi, perakitan bio-baterai berbasis limbah organik.',
    kko: 'Menyetarakan (C3), Menganalisis (C4), Memprediksi (C5), Mengonstruksi (C6)',
    buktiBelajar: 'Prototipe sel elektrokimia hemat biaya (Electrochemistry Energy Challenge), portofolio analisis korosi jembatan pelabuhan lokal, dan kalkulasi stoikiometri Faraday elektroplating.',
  },
  {
    elemen: 'Pemahaman Kimia & Keterampilan Proses',
    cp: 'Menganalisis struktur, tata nama, sifat fisika-kimia, reaksi identifikasi gugus fungsi senyawa karbon (haloalkana, alkohol, eter, aldehida, keton, asam karboksilat, ester), serta pembentukan dan dampak makromolekul (polimer, karbohidrat, protein, lipid).',
    kompetensi: 'Mengidentifikasi Gugus, Menamai IUPAC, Membedakan Isomer, Menganalisis Reaksi Sintesis, Mendesain Bioplastik',
    materi: 'Turunan Alkana (Gugus Fungsi) dan Makromolekul Organik',
    pengetahuan: 'Faktual (aroma buah esens ester, obat aspirin, plastik kemasan), Konseptual (polarisasi ikatan, keelektronegatifan, jenis polimerisasi adisi-kondensasi), Prosedural (uji Fehling/Tollens, uji biuret/iodin), Metakognitif (evaluasi siklus hidup polimer sintetik vs biopolimer).',
    keterampilan: 'Pemodelan 3D molekul organik via MolView, pengujian kualitatif biomolekul, sintesis bioplastik terdegradasi berbahan dasar pati kulit singkong.',
    kko: 'Mengelompokkan (C2), Menamai (C3), Membandingkan (C4), Mendiagnosis (C4), Mensintesis (C6)',
    buktiBelajar: 'Koleksi model 3D senyawa karbon, lembar data reaksi uji identifikasi gugus fungsi, dan sampel prototipe bioplastik biodegradable (Carbon Future Innovation Project).',
  },
];

export const tpData: TpItem[] = [
  // UNIT 1
  {
    kodeTp: 'TP.1.1',
    unit: 'Unit 1: Sifat Koligatif Larutan',
    materi: 'Konsentrasi Larutan & Tekanan Uap Jenuh',
    tujuanPembelajaran: 'Peserta didik mampu menghitung satuan konsentrasi (m, M, X) dan menganalisis hubungan penurunan tekanan uap larutan terhadap fraksi mol zat terlarut berdasarkan Hukum Raoult melalui pemodelan partikulat dinamis.',
    levelKognitif: 'C4 (Menganalisis)',
    buktiKetercapaian: 'Hasil lembar analisis grafik hubungan tekanan uap vs fraksi mol dan kebenaran pemecahan masalah numerik penurunan tekanan uap.',
  },
  {
    kodeTp: 'TP.1.2',
    unit: 'Unit 1: Sifat Koligatif Larutan',
    materi: 'Kenaikan Titik Didih & Penurunan Titik Beku',
    tujuanPembelajaran: 'Peserta didik mampu membandingkan fenomena kenaikan titik didih dan penurunan titik beku antara larutan non-elektrolit dengan larutan elektrolit melalui penyelidikan laboratorium interaktif.',
    levelKognitif: 'C4 (Menganalisis / Membandingkan)',
    buktiKetercapaian: 'Kurva termal hasil eksperimen dan penjelasan disparitas nilai ΔTb dan ΔTf berbasis jumlah ion zat terlarut.',
  },
  {
    kodeTp: 'TP.1.3',
    unit: 'Unit 1: Sifat Koligatif Larutan',
    materi: 'Tekanan Osmosis & Fenomena Membran',
    tujuanPembelajaran: 'Peserta didik mampu menjelaskan prinsip kerja osmosis dan tekanan osmosis larutan serta mengkorelasikannya dengan fenomena biologis (hemodialisis, plasmolisis) dan teknologi desalinasi air laut reverse osmosis.',
    levelKognitif: 'C4 (Menganalisis & Menghubungkan)',
    buktiKetercapaian: 'Esai analisis diagram alir desalinasi membran semipermeabel dan ketepatan perhitungan tekanan osmosis (Π = M R T i).',
  },
  {
    kodeTp: 'TP.1.4',
    unit: 'Unit 1: Sifat Koligatif Larutan',
    materi: 'Faktor Van \'t Hoff & Disosiasi Elektrolit',
    tujuanPembelajaran: 'Peserta didik mampu merumuskan dan menerapkan faktor Van \'t Hoff (i = 1 + (n-1)α) dalam seluruh perhitungan sifat koligatif larutan elektrolit kuat, lemah, dan non-elektrolit.',
    levelKognitif: 'C3 (Menerapkan) & C4 (Menganalisis)',
    buktiKetercapaian: 'Penyelesaian soal kompleks perhitungan derajat ionisasi (α) dari data eksperimental penurunan titik beku.',
  },
  {
    kodeTp: 'TP.1.5',
    unit: 'Unit 1: Sifat Koligatif Larutan',
    materi: 'Rekayasa STEM Colligative Reality Lab',
    tujuanPembelajaran: 'Peserta didik mampu merancang, menguji, dan menyempurnakan prototipe "Instant Eco-Cooler" (kotak pendingin darurat obat/vaksin tanpa listrik) berbasis penurunan titik beku larutan garam dan es.',
    levelKognitif: 'C6 (Mencipta / Merekayasa)',
    buktiKetercapaian: 'Prototipe fisik/desain teknis, grafik penurunan suhu termokopel, lembar optimasi efisiensi biaya, dan video presentasi proyek.',
  },

  // UNIT 2
  {
    kodeTp: 'TP.2.1',
    unit: 'Unit 2: Reaksi Redoks dan Sel Elektrokimia',
    materi: 'Penyetaraan Reaksi Redoks Kompleks',
    tujuanPembelajaran: 'Peserta didik mampu menyetarakan persamaan reaksi redoks dalam suasana asam dan basa menggunakan metode perubahan bilangan oksidasi (PBO) serta metode setengah reaksi (ion elektron) secara sistematis.',
    levelKognitif: 'C3 (Menerapkan)',
    buktiKetercapaian: 'Ketuntasan 100% penyelesaian set soal reaksi redoks kompleks (autoredoks/disproporsionasi dan komproporsionasi).',
  },
  {
    kodeTp: 'TP.2.2',
    unit: 'Unit 2: Reaksi Redoks dan Sel Elektrokimia',
    materi: 'Sel Volta & Potensial Elektroda Standar (E°)',
    tujuanPembelajaran: 'Peserta didik mampu merancang diagram sel Volta, memprediksi kespontanan reaksi redoks berdasarkan deret Volta dan potensial elektroda standar (E°sel = E°katoda - E°anoda), serta menghitung potensial sel pada kondisi non-standar menggunakan Persamaan Nernst.',
    levelKognitif: 'C4 (Menganalisis) & C5 (Mengevaluasi)',
    buktiKetercapaian: 'Ketepatan diagram notasi sel, kalkulasi nilai E°sel, dan justifikasi arah aliran elektron serta ion jembatan garam.',
  },
  {
    kodeTp: 'TP.2.3',
    unit: 'Unit 2: Reaksi Redoks dan Sel Elektrokimia',
    materi: 'Sel Elektrolisis & Hukum Faraday',
    tujuanPembelajaran: 'Peserta didik mampu menganalisis reaksi yang terjadi di anoda dan katoda pada elektrolisis larutan serta lelehan elektrolit dengan elektroda inert maupun aktif, serta menghitung massa endapan logam dan volume gas menggunakan Hukum I dan II Faraday.',
    levelKognitif: 'C4 (Menganalisis) & C3 (Menghitung)',
    buktiKetercapaian: 'Penyusunan tabel prediksi reaksi elektroda dan ketepatan perhitungan kuantitatif stoikiometri elektrokimia.',
  },
  {
    kodeTp: 'TP.2.4',
    unit: 'Unit 2: Reaksi Redoks dan Sel Elektrokimia',
    materi: 'Mekanisme Korosi & Rekayasa Proteksi Katodik',
    tujuanPembelajaran: 'Peserta didik mampu menganalisis faktor-faktor termodinamika dan kinetika pemicu korosi besi serta mengevaluasi metode pencegahan korosi (pelapisan pelindung, paduan logam, dan proteksi katodik sacrificial anode).',
    levelKognitif: 'C5 (Mengevaluasi)',
    buktiKetercapaian: 'Laporan investigasi laju korosi paku besi pada berbagai medium elektrolit dan rekomendasi solusi rekayasa perlindungan struktur baja di daerah pesisir.',
  },
  {
    kodeTp: 'TP.2.5',
    unit: 'Unit 2: Reaksi Redoks dan Sel Elektrokimia',
    materi: 'Rekayasa STEM Bio-Electrochemical Cell',
    tujuanPembelajaran: 'Peserta didik mampu merekayasa sel elektrokimia alternatif berbahan dasar elektrolit limbah buah/organik lokal yang mampu menyalakan lampu indikator LED secara stabil.',
    levelKognitif: 'C6 (Mencipta)',
    buktiKetercapaian: 'Prototipe bio-baterai teruji, tabel voltase vs arus listrik terukur, dan poster ilmiah sintesis energi terbarukan.',
  },

  // UNIT 3
  {
    kodeTp: 'TP.3.1',
    unit: 'Unit 3: Senyawa Karbon dan Makromolekul',
    materi: 'Struktur, Tata Nama IUPAC & Isomerisme Senyawa Karbon',
    tujuanPembelajaran: 'Peserta didik mampu mengidentifikasi gugus fungsi, menentukan tata nama IUPAC dan trivial, serta menganalisis hubungan keisomeran (rantai, posisi, fungsi, optis aktif, dan geometri) pada deret haloalkana, alkohol, eter, aldehida, keton, asam karboksilat, dan ester.',
    levelKognitif: 'C4 (Menganalisis)',
    buktiKetercapaian: 'Portofolio pemodelan struktur 3D molekul organik dan kebenaran analisis hubungan isomer gugus fungsi antar turunan alkana.',
  },
  {
    kodeTp: 'TP.3.2',
    unit: 'Unit 3: Senyawa Karbon dan Makromolekul',
    materi: 'Sifat Kimia & Reaksi Identifikasi Kualitatif Gugus Fungsi',
    tujuanPembelajaran: 'Peserta didik mampu membedakan senyawa segolongan berdasarkan sifat fisika (titik didih, kelarutan) dan sifat kimia melalui analisis reaksi identifikasi (uji Tollens, Fehling, esterifikasi, reaksi dengan logam Na dan PCl5).',
    levelKognitif: 'C4 (Menganalisis / Membedakan)',
    buktiKetercapaian: 'Bagan pohon keputusan (flowchart) identifikasi senyawa karbon misterius dan laporan praktikum kimia organik.',
  },
  {
    kodeTp: 'TP.3.3',
    unit: 'Unit 3: Senyawa Karbon dan Makromolekul',
    materi: 'Polimer: Polimerisasi Adisi, Kondensasi, & Dampak Lingkungan',
    tujuanPembelajaran: 'Peserta didik mampu menganalisis mekanisme reaksi pembentukan polimer (adisi dan kondensasi), mengelompokkan jenis plastik berdasarkan kode daur ulang, serta mengevaluasi dampak mikroplastik bagi biosfer.',
    levelKognitif: 'C4 (Menganalisis) & C5 (Mengevaluasi)',
    buktiKetercapaian: 'Peta konsep polimerisasi, penulisan satuan pengulang monomer, dan lembar evaluasi dampak siklus hidup kemasan polimer.',
  },
  {
    kodeTp: 'TP.3.4',
    unit: 'Unit 3: Senyawa Karbon dan Makromolekul',
    materi: 'Biomakromolekul: Karbohidrat, Protein, dan Lipid',
    tujuanPembelajaran: 'Peserta didik mampu menguraikan struktur, fungsi biologis, dan reaksi uji spesifik (Molisch, Benedict, Biuret, Ninhidrin, Xanthoproteat, Salkowski) pada karbohidrat, protein, dan lipid.',
    levelKognitif: 'C4 (Menganalisis)',
    buktiKetercapaian: 'Tabel komparasi biomakromolekul beserta data pengamatan spektrum warna uji biokimia makanan.',
  },
  {
    kodeTp: 'TP.3.5',
    unit: 'Unit 3: Senyawa Karbon dan Makromolekul',
    materi: 'Rekayasa STEM Bioplastik Ramah Lingkungan',
    tujuanPembelajaran: 'Peserta didik mampu merancang dan memproduksi prototipe material bioplastik biodegradable memanfaatkan pati limbah pangan lokal (kulit pisang / biji alpukat) dengan variasi rasio plastisizer gliserol, serta menguji daya regang dan biodegradabilitasnya.',
    levelKognitif: 'C6 (Mencipta / Merekayasa)',
    buktiKetercapaian: 'Sampel lembaran bioplastik fungsional, data uji tarik beban (tensile strength), laju pembusukan di tanah (soil burial test), dan laporan ilmiah inovasi hijau.',
  },
];

export const atpFlowSteps = [
  {
    tahap: '1. PRASYARAT (Prerequisite Foundations)',
    fokus: 'Penguatan Konsep Ikatan Kimia, Stoikiometri, dan Termokimia',
    aktivitas: 'Review gaya antarmolekul (London, dipol-dipol, ikatan hidrogen), tata nama alkana, stoikiometri mol, dan konsep larutan elektrolit melalui tes diagnostik adaptif.',
  },
  {
    tahap: '2. KONSEP DASAR (Core Conceptual Building)',
    fokus: 'Pembangunan Model Mental Submikroskopik & Simbolik',
    aktivitas: 'Visualisasi dinamika partikel larutan, hukum Raoult, deret kereaktifan logam, struktur isomer gugus fungsi karbon via simulasi 3D dan kalkulasi matematis fundamental.',
  },
  {
    tahap: '3. APLIKASI (Practical & Industrial Applications)',
    fokus: 'Eksperimen Laboratorium & Pemodelan Data Nyata',
    aktivitas: 'Penyelidikan penurunan titik beku larutan, perakitan sel volta buah, elektrolisis tembaga, sintesis aroma ester, dan pengujian makromolekul nutrisi makanan.',
  },
  {
    tahap: '4. ANALISIS (Analytical Reasoning & Problem Solving)',
    fokus: 'Komparasi, Investigasi Miskonsepsi, & Studi Kasus Kompleks',
    aktivitas: 'Analisis anomali sifat larutan elektrolit abnormal (faktor Van \'t Hoff), perhitungan sel elektrokimia non-standar (Persamaan Nernst), dan diferensiasi isomer optis aktif.',
  },
  {
    tahap: '5. PROBLEM SOLVING (Authentic Contextual Solving)',
    fokus: 'Penanganan Krisis Nyata (Lingkungan, Energi, Material)',
    aktivitas: 'Penyelidikan laju korosi jembatan pelabuhan industri, evaluasi efisiensi baterai lithium vs sodium, mitigasi akumulasi mikroplastik perkotaan.',
  },
  {
    tahap: '6. INNOVATION (STEM Engineering Design & Product Creation)',
    fokus: 'Kreasi Produk Inovatif Nyata (Learning by Design)',
    aktivitas: 'Colligative Instant Eco-Cooler (Unit 1), Bio-Electrochemical Cell Prototype (Unit 2), dan Biodegradable Bioplastic Sheet Formulation (Unit 3).',
  },
];
