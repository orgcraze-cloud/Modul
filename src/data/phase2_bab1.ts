export const bab1Data = {
  identitas: [
    { label: 'Satuan Pendidikan / Madrasah', valueKey: 'namaSekolah' },
    { label: 'Mata Pelajaran', valueKey: 'mataPelajaran' },
    { label: 'Fase / Kelas', value: 'Fase F / Kelas XII (Dua Belas)' },
    { label: 'Semester / Tahun Pelajaran', value: 'Ganjil (Semester 1) / [Tahun Pelajaran]' },
    { label: 'Penyusun Perangkat', valueKey: 'namaPenyusun' },
    { label: 'NIP Penyusun', valueKey: 'nipPenyusun' },
    { label: 'Alokasi Waktu Efektif', value: '18 Minggu Efektif (5 JP per Minggu = Total 90 JP Semester Ganjil)' },
    { label: 'Fokus Pendekatan', value: 'Deep Learning, TPACK, STEM Education, Project-Based Learning (PjBL), CFIL Framework' },
  ],
  rasional: `Mata pelajaran Kimia pada Fase F (Kelas XII) merupakan puncak pembelajaran sains kimia di jenjang sekolah menengah atas. Pada fase ini, peserta didik tidak hanya dituntut menguasai fakta dan prinsip sains, melainkan harus mampu menghubungkan penalaran mikroskopis partikulat dengan fenomena makroskopis yang teramati serta mengekspresikannya secara matematis dan simbolis. 

Karakteristik fundamental ilmu kimia terangkum dalam "Chemistry Triplet" (Johnstone's Triangle), yaitu:
1. Level Makroskopik: Fenomena kasat mata dan pengalaman empiris di alam nyata (misal: titik didih larutan garam yang lebih tinggi, korosi logam pada jembatan, sifat plastik dan polimer).
2. Level Submikroskopik: Dinamika interaksi partikel, pergerakan ion, orientasi molekul pelarut dan zat terlarut, transfer elektron dalam orbital, serta penataan ikatan kovalen.
3. Level Simbolik: Representasi formal menggunakan lambang unsur, persamaan reaksi redoks seimbang, grafik termodinamika, hukum gas ideal, dan rumus stoikiometrik.

Kegagalan proses pembelajaran kimia selama ini berakar pada ketidakmampuan menjembatani ketiga level representasi tersebut. Peserta didik sering kali dipaksa meloncat langsung dari fenomena kasat mata ke perhitungan simbolik tanpa pernah membangun model mental (mental models) yang kokoh di level submikroskopik. Akibatnya, pemahaman yang terbangun rapuh, mudah luntur, dan melahirkan miskonsepsi kronis. Oleh karena itu, hadir kebutuhan mendesak akan paradigma pembelajaran transformatif yang memadukan pemanfaatan teknologi digital imersif, pedagogi inkuiri mendalam, dan rekayasa STEM kontekstual.`,
  masalah: [
    {
      nomor: 1,
      judul: 'Kimia Dianggap Abstrak dan Menakutkan',
      deskripsi: 'Peserta didik mempersepsikan kimia sebagai mata pelajaran elitis dan abstrak karena entitas yang dipelajari (elektron, molekul, ion) tidak dapat dilihat langsung dengan mata telanjang, sehingga memicu kecemasan kognitif (science anxiety).',
      akarMasalah: 'Minimnya visualisasi spasial tiga dimensi dan model analogi konkret pada proses awal pembelajaran.',
    },
    {
      nomor: 2,
      judul: 'Sindrom Rote Learning & Algoritmik Mekanis',
      deskripsi: 'Peserta didik terbiasa menghafal rumus secara mekanis (misal rumus kenaikan titik didih atau hukum Faraday) demi lulus ujian numerik tanpa memahami landasan fisis dan termodinamika di baliknya.',
      akarMasalah: 'Instruksi kelas yang berorientasi "teaching to the test" dan didominasi latihan soal repetitif tanpa refleksi konseptual.',
    },
    {
      nomor: 3,
      judul: 'Diskoneksi Tiga Level Representasi Kimia',
      deskripsi: 'Ketidakmampuan peserta didik mengaitkan apa yang mereka amati di tabung reaksi (makro), apa yang sebenarnya terjadi antar atom/molekul (submikro), dengan bagaimana reaksi tersebut dituliskan secara rumus (simbolik).',
      akarMasalah: 'Guru kerap mengajarkan rumus simbolik tanpa menyajikan visualisasi submikroskopik berbasis pemodelan dinamis.',
    },
    {
      nomor: 4,
      judul: 'Rendahnya Kemampuan Problem Solving Tingkat Tinggi',
      deskripsi: 'Peserta didik bingung saat dihadapkan pada konteks soal baru, studi kasus industri, atau anomali data eksperimen yang menuntut penalaran kritis C4–C6.',
      akarMasalah: 'Praktikum di sekolah masih bersifat resep masak (cookbook lab) yang membatasi rasa ingin tahu dan nalar mandiri.',
    },
    {
      nomor: 5,
      judul: 'Pemanfaatan Teknologi Belum Bermakna (Substitusi Pasif)',
      deskripsi: 'Penggunaan perangkat digital sebatas menampilkan slide proyektor teks atau video YouTube pasif, tanpa interaktivitas komputasional, manipulasi variabel, atau investigasi virtual.',
      akarMasalah: 'Rendahnya kompetensi TPACK guru dalam merancang skenario pembelajaran di mana teknologi menjadi alat investigasi sains.',
    },
    {
      nomor: 6,
      judul: 'Pembelajaran Belum Menghasilkan Solusi Nyata & Inovasi',
      deskripsi: 'Kimia terisolasi di dalam dinding kelas dan laboratorium sekolah, tidak pernah dikaitkan dengan tantangan transisi energi, krisis iklim, polusi plastik, atau inovasi material lokal.',
      akarMasalah: 'Absennya pembelajaran berbasis proyek rekayasa (STEM PjBL) yang menantang peserta didik menjadi "solution maker".',
    },
  ],
  cfilFramework: {
    nama: 'CHEMISTRY FUTURE INNOVATION LEARNING FRAMEWORK (CFIL)',
    tagline: 'Understand Chemistry • Investigate Phenomena • Create Solutions • Shape the Future',
    pilar: [
      {
        kode: 'C',
        nama: 'Contextual Chemistry',
        prinsip: 'Kimia Dimulai dari Fenomena Nyata',
        deskripsi: 'Setiap unit pembelajaran selalu diawali dengan stimulus peristiwa autentik (dilema es mencair di jalan raya kutub, baterai kendaraan listrik terbakar, mikroplastik di rantai makanan). Peserta didik membedah sains dari pengalaman dunia nyata, bukan dari definisi buku teks.',
        tindakan: ['Pengamatan video/artefak autentik', 'Eksplorasi pertanyaan pemantik', 'Koneksi ke isu sosio-saintifik (SSI)'],
      },
      {
        kode: 'F',
        nama: 'Future Technology',
        prinsip: 'Teknologi sebagai Wahana Investigasi Sains',
        deskripsi: 'Pemanfaatan teknologi mutakhir (Virtual Reality, Molecular Mechanics Modeling, Interactive PhET, Data Logger sensor, AI Research Assistant) bukan sekadar presentasi, melainkan instrumen untuk memanipulasi variabel partikulat yang tak kasat mata.',
        tindakan: ['Eksplorasi laboratorium virtual 3D', 'Simulasi dinamika partikulat molekuler', 'Analisis regresi data sensor otomatis'],
      },
      {
        kode: 'I',
        nama: 'Investigation',
        prinsip: 'Inkuiri Saintifik Berbasis Siklus Berpikir',
        deskripsi: 'Peserta didik menjalankan siklus saintifik utuh: Observe -> Question -> Predict -> Investigate -> Analyze -> Conclude. Keterampilan proses sains dikembangkan secara terukur melalui hands-on dan minds-on inquiry.',
        tindakan: ['Perumusan hipotesis teruji', 'Perancangan eksperimen terukur', 'Analisis data berbasis bukti empiris'],
      },
      {
        kode: 'L',
        nama: 'Learning by Design',
        prinsip: 'Rekayasa Produk & Solusi Nyata (STEM PjBL)',
        deskripsi: 'Puncak dari penguasaan konsep kimia adalah mendesain prototipe solusi nyata melalui siklus Engineering Design: Design -> Create -> Test -> Improve -> Present. Peserta didik menghasilkan inovasi terapan yang bermakna bagi lingkungan.',
        tindakan: ['Pembuatan prototipe fungsional', 'Uji coba performa dan efisiensi', 'Komunikasi dan diseminasi publik'],
      },
    ],
  },
};
