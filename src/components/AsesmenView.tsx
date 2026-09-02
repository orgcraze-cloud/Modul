import React, { useState } from 'react';
import { SchoolDocumentConfig, SoalItem } from '../types';
import { unit1SoalDiagnostik } from '../data/unit1_data';
import { 
  CheckCircle2, 
  HelpCircle, 
  FileText, 
  Award, 
  Sparkles, 
  AlertTriangle,
  Flame,
  Atom,
  Dna,
  Search
} from 'lucide-react';

interface Props {
  config: SchoolDocumentConfig;
}

export const AsesmenView: React.FC<Props> = ({ config }) => {
  const [activeTab, setActiveTab] = useState<'bank-soal' | 'rubrik-stem' | 'kisi-kisi'>('bank-soal');
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [showKunci, setShowKunci] = useState<Record<number, boolean>>({});

  const toggleKunci = (no: number) => {
    setShowKunci((prev) => ({ ...prev, [no]: !prev[no] }));
  };

  const filteredSoal = unit1SoalDiagnostik.filter((s) => {
    if (filterLevel === 'all') return true;
    return s.levelKognitif === filterLevel;
  });

  return (
    <div className="bg-white p-6 md:p-12 rounded-2xl shadow-xl border border-slate-300 my-8 print:border-none print:shadow-none page-break-after">
      {/* Chapter Title Header */}
      <div className="border-b-4 border-slate-950 pb-5 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-white bg-slate-950 px-3.5 py-1 rounded-md">
            BAB VII & VIII
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Instrumen Asesmen Berbasis HOTS & Rubrik PjBL STEM
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-slate-950 tracking-tight font-display uppercase">
          ASESMEN PEMBELAJARAN, BANK SOAL HOTS & RUBRIK STEM
        </h2>
        <p className="text-sm font-semibold text-slate-600 mt-1 uppercase tracking-wide">
          Kisi-Kisi Terstandar, Butir Soal Dilengkapi Pembahasan & Rubrik Rekayasa Inovasi
        </p>
      </div>

      {/* Internal Navigation Subtabs */}
      <div className="no-print flex items-center gap-2 mb-8 p-1.5 bg-slate-100 rounded-xl border border-slate-300">
        <button
          onClick={() => setActiveTab('bank-soal')}
          className={`flex-1 py-2.5 px-4 text-xs md:text-sm font-black rounded-lg transition-all ${
            activeTab === 'bank-soal'
              ? 'bg-slate-950 text-white shadow'
              : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          Bank Soal HOTS & Kunci
        </button>
        <button
          onClick={() => setActiveTab('rubrik-stem')}
          className={`flex-1 py-2.5 px-4 text-xs md:text-sm font-black rounded-lg transition-all ${
            activeTab === 'rubrik-stem'
              ? 'bg-slate-950 text-white shadow'
              : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          Rubrik Proyek STEM (PjBL)
        </button>
        <button
          onClick={() => setActiveTab('kisi-kisi')}
          className={`flex-1 py-2.5 px-4 text-xs md:text-sm font-black rounded-lg transition-all ${
            activeTab === 'kisi-kisi'
              ? 'bg-slate-950 text-white shadow'
              : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          Matriks Kisi-Kisi Asesmen
        </button>
      </div>

      {activeTab === 'bank-soal' && (
        <div className="space-y-6">
          <div className="no-print flex items-center justify-between flex-wrap gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase text-slate-700">Filter Level Kognitif:</span>
              <div className="flex gap-1">
                {['all', 'C2', 'C3', 'C4'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setFilterLevel(lvl)}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                      filterLevel === lvl
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {lvl === 'all' ? 'Semua' : lvl}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Menampilkan {filteredSoal.length} butir instrumen evaluasi
            </p>
          </div>

          <div className="space-y-5">
            {filteredSoal.map((soal) => (
              <div
                key={soal.no}
                className="p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-sm space-y-4 hover:border-slate-950 transition-all"
              >
                <div className="flex items-center justify-between flex-wrap gap-2 border-b-2 border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-slate-950 text-white font-mono font-black text-sm flex items-center justify-center">
                      {soal.no}
                    </span>
                    <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-900 text-xs font-black rounded border border-indigo-200 font-mono">
                      {soal.tp}
                    </span>
                    <span className="px-2.5 py-0.5 bg-slate-100 text-slate-800 text-xs font-bold rounded border border-slate-300">
                      Level: {soal.levelKognitif}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    Bobot: {soal.skor} Poin
                  </span>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Indikator: {soal.indikator}
                  </p>
                  <p className="text-sm md:text-base font-medium text-slate-900 leading-relaxed text-justify">
                    {soal.soal}
                  </p>
                </div>

                {soal.pilihan && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2">
                    {soal.pilihan.map((pil, pIdx) => (
                      <div
                        key={pIdx}
                        className={`p-2.5 rounded-lg border text-xs md:text-sm font-medium ${
                          showKunci[soal.no] && pil.startsWith(soal.kunci)
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-800'
                        }`}
                      >
                        {pil}
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between flex-wrap gap-2">
                  <button
                    onClick={() => toggleKunci(soal.no)}
                    className="no-print px-3 py-1.5 bg-slate-900 text-white text-xs font-black rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    {showKunci[soal.no] ? 'Sembunyikan Kunci & Pembahasan' : 'Lihat Kunci & Pembahasan'}
                  </button>

                  {soal.miskonsepsiTerkait && (
                    <span className="text-xs text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 flex items-center gap-1.5 font-medium">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                      {soal.miskonsepsiTerkait}
                    </span>
                  )}
                </div>

                {/* Kunci & Pembahasan View (Always visible in print) */}
                <div className={`p-4 bg-slate-900 text-white rounded-xl space-y-2 text-xs md:text-sm ${
                  showKunci[soal.no] ? 'block' : 'hidden print:block'
                }`}>
                  <div className="flex items-center gap-2 text-emerald-300 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Kunci Jawaban: Pilihan {soal.kunci}</span>
                  </div>
                  <div>
                    <strong className="text-slate-300 block mb-1">Pembahasan Logis & Analisis Solusi:</strong>
                    <p className="text-slate-100 leading-relaxed text-justify whitespace-pre-line font-mono text-xs">
                      {soal.pembahasan}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'rubrik-stem' && (
        <div className="space-y-6">
          <div className="p-4 bg-slate-950 text-white rounded-xl flex items-center justify-between flex-wrap gap-3">
            <div>
              <h3 className="text-base md:text-lg font-black font-display uppercase tracking-tight text-amber-300">
                RUBRIK ASESMEN PROYEK REKAYASA STEM (ENGINEERING DESIGN PROCESS)
              </h3>
              <p className="text-xs text-slate-400">
                Format Penilaian Otentik Produk Inovasi (Instant Eco-Cooler, Bio-Battery, & Bioplastic)
              </p>
            </div>
            <span className="px-3 py-1 bg-indigo-500/30 border border-indigo-400 text-indigo-200 text-xs font-bold rounded-full">
              Skala Penilaian 4 Kategori (1 - 4)
            </span>
          </div>

          <div className="overflow-x-auto border-2 border-slate-900 rounded-xl">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 text-white font-display">
                  <th className="p-3 border-r border-slate-700 w-44 font-black">TAHAP REKAYASA STEM</th>
                  <th className="p-3 border-r border-slate-700 font-black">SKOR 4 (SANGAT MAHIR)</th>
                  <th className="p-3 border-r border-slate-700 font-black">SKOR 3 (MAHIR)</th>
                  <th className="p-3 border-r border-slate-700 font-black">SKOR 2 (BERKEMBANG)</th>
                  <th className="p-3 font-black">SKOR 1 (PERLU BIMBINGAN)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">
                    1. Problem Definition (Identifikasi Masalah & Batasan)
                  </td>
                  <td className="p-3 text-slate-700 text-xs border-r border-slate-200 leading-relaxed">
                    Merumuskan kriteria keberhasilan dan batasan masalah teknik secara komprehensif, terukur, dan berbasis data ilmiah nyata.
                  </td>
                  <td className="p-3 text-slate-700 text-xs border-r border-slate-200 leading-relaxed">
                    Merumuskan kriteria dan batasan masalah teknik dengan jelas dan sebagian besar terukur.
                  </td>
                  <td className="p-3 text-slate-700 text-xs border-r border-slate-200 leading-relaxed">
                    Merumuskan batasan masalah secara umum, namun belum terukur secara kuantitatif.
                  </td>
                  <td className="p-3 text-slate-700 text-xs leading-relaxed">
                    Belum mampu mendefinisikan batasan masalah teknik rekayasa.
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">
                    2. Scientific Design & Blueprint (Desain Ilmiah & Gambar Teknik)
                  </td>
                  <td className="p-3 text-slate-700 text-xs border-r border-slate-200 leading-relaxed">
                    Gambar sketsa blueprint sangat presisi dengan skala dimensi, spesifikasi material, dan integrasi rumus kimia akurat.
                  </td>
                  <td className="p-3 text-slate-700 text-xs border-r border-slate-200 leading-relaxed">
                    Gambar desain jelas dan mencantumkan spesifikasi material serta perhitungan kimia pendukung.
                  </td>
                  <td className="p-3 text-slate-700 text-xs border-r border-slate-200 leading-relaxed">
                    Gambar sketsa ada namun belum memuat dimensi ukuran dan perhitungan kimia belum lengkap.
                  </td>
                  <td className="p-3 text-slate-700 text-xs leading-relaxed">
                    Sketsa tidak ada atau tidak sesuai dengan prinsip ilmiah materi.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">
                    3. Fabrication & Prototyping (Perakitan Prototipe Fisik)
                  </td>
                  <td className="p-3 text-slate-700 text-xs border-r border-slate-200 leading-relaxed">
                    Prototipe berfungsi sempurna, kokoh, rapi, aman, serta menerapkan efisiensi biaya dan material ramah lingkungan.
                  </td>
                  <td className="p-3 text-slate-700 text-xs border-r border-slate-200 leading-relaxed">
                    Prototipe berfungsi dengan baik, rapi, dan mematuhi protokol keselamatan kerja (K3).
                  </td>
                  <td className="p-3 text-slate-700 text-xs border-r border-slate-200 leading-relaxed">
                    Prototipe berfungsi sebagian namun masih terdapat kebocoran sistem atau kurang stabil.
                  </td>
                  <td className="p-3 text-slate-700 text-xs leading-relaxed">
                    Prototipe gagal berfungsi atau tidak selesai dalam tenggat waktu.
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">
                    4. Testing & Data Analysis (Pengujian & Analisis Data)
                  </td>
                  <td className="p-3 text-slate-700 text-xs border-r border-slate-200 leading-relaxed">
                    Melakukan uji coba multi-variasi, merekam data berkala dengan sensor digital, dan menganalisis grafik deviasi secara kritis.
                  </td>
                  <td className="p-3 text-slate-700 text-xs border-r border-slate-200 leading-relaxed">
                    Melakukan pengujian teratur dan menyajikan grafik data hasil pengukuran dengan tepat.
                  </td>
                  <td className="p-3 text-slate-700 text-xs border-r border-slate-200 leading-relaxed">
                    Pengujian dilakukan namun data pencatatan kurang teratur dan analisis grafik minim.
                  </td>
                  <td className="p-3 text-slate-700 text-xs leading-relaxed">
                    Tidak melakukan pengujian sistematis atau memanipulasi data uji.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">
                    5. Iterative Redesign (Perbaikan & Refleksi Desain)
                  </td>
                  <td className="p-3 text-slate-700 text-xs border-r border-slate-200 leading-relaxed">
                    Menganalisis kegagalan desain awal secara mendalam, melakukan iterasi modifikasi, dan membuktikan peningkatan kinerja produk.
                  </td>
                  <td className="p-3 text-slate-700 text-xs border-r border-slate-200 leading-relaxed">
                    Melakukan modifikasi berdasarkan hasil uji dan mampu meningkatkan fungsi produk.
                  </td>
                  <td className="p-3 text-slate-700 text-xs border-r border-slate-200 leading-relaxed">
                    Mengetahui kelemahan prototipe namun belum melakukan upaya perbaikan yang signifikan.
                  </td>
                  <td className="p-3 text-slate-700 text-xs leading-relaxed">
                    Tidak menunjukkan kesadaran reflektif untuk memperbaiki kekurangan desain.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'kisi-kisi' && (
        <div className="space-y-6">
          <div className="p-4 bg-slate-50 border-2 border-slate-200 rounded-xl space-y-2">
            <h3 className="text-base font-black text-slate-900 font-display uppercase">
              MATRIKS KISI-KISI ASESMEN SUMATIF KIMIA SEMESTER GANJIL
            </h3>
            <p className="text-xs text-slate-600">
              Distribusi proporsi butir asesmen berdasarkan level kognitif Taksonomi Bloom Revisi:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              <div className="p-3 bg-white border border-slate-200 rounded-lg text-center">
                <span className="block text-xs font-bold text-slate-500">C2: Pemahaman</span>
                <span className="text-lg font-black text-slate-900">20%</span>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-lg text-center">
                <span className="block text-xs font-bold text-slate-500">C3: Aplikasi</span>
                <span className="text-lg font-black text-indigo-700">30%</span>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-lg text-center">
                <span className="block text-xs font-bold text-slate-500">C4: Analisis (HOTS)</span>
                <span className="text-lg font-black text-teal-700">30%</span>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-lg text-center">
                <span className="block text-xs font-bold text-slate-500">C5/C6: Kreasi & Rekayasa</span>
                <span className="text-lg font-black text-amber-600">20%</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
