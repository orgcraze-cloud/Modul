import React, { useState } from 'react';
import { SchoolDocumentConfig } from '../types';
import { bab9RemedialData } from '../data/phase11_bab9';
import { bab10AnalisisData, instrumenRefleksiGuru, instrumenRefleksiSiswa, bab11NoveltyData } from '../data/phase12_bab10_11';
import { 
  RotateCcw, 
  TrendingUp, 
  PieChart, 
  Sparkles, 
  Lightbulb, 
  CheckCircle2, 
  UserCheck, 
  FileCheck,
  AlertCircle
} from 'lucide-react';

interface Props {
  config: SchoolDocumentConfig;
}

export const RemedialPengayaanView: React.FC<Props> = ({ config }) => {
  const [activeTab, setActiveTab] = useState<'remedial' | 'analisis' | 'refleksi' | 'novelty'>('remedial');

  const { sampleScores, ketercapaianKelas, miskonsepsiTerdeteksi } = bab10AnalisisData;

  return (
    <div className="bg-white p-6 md:p-12 rounded-2xl shadow-xl border border-slate-300 my-8 print:border-none print:shadow-none page-break-after">
      {/* Chapter Title Header */}
      <div className="border-b-4 border-slate-950 pb-5 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-white bg-slate-950 px-3.5 py-1 rounded-md">
            BAB IX, X, & XI
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Diferensiasi Tindak Lanjut, Analisis Ketuntasan & Refleksi Pedagogis
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-slate-950 tracking-tight font-display uppercase">
          PROGRAM REMEDIAL, EVALUASI KELAS & REFLEKSI GURU
        </h2>
        <p className="text-sm font-semibold text-slate-600 mt-1 uppercase tracking-wide">
          Siklus Diferensiasi Tuntas, Diagnosis Miskonsepsi & Peta Kebaruan CFIL Framework
        </p>
      </div>

      {/* Navigation Subtabs */}
      <div className="no-print flex items-center gap-2 mb-8 p-1.5 bg-slate-100 rounded-xl border border-slate-300">
        <button
          onClick={() => setActiveTab('remedial')}
          className={`flex-1 py-2.5 px-3 text-xs md:text-sm font-black rounded-lg transition-all ${
            activeTab === 'remedial'
              ? 'bg-slate-950 text-white shadow'
              : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          BAB IX: Remedial & Pengayaan
        </button>
        <button
          onClick={() => setActiveTab('analisis')}
          className={`flex-1 py-2.5 px-3 text-xs md:text-sm font-black rounded-lg transition-all ${
            activeTab === 'analisis'
              ? 'bg-slate-950 text-white shadow'
              : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          BAB X: Analisis Evaluasi Siswa
        </button>
        <button
          onClick={() => setActiveTab('refleksi')}
          className={`flex-1 py-2.5 px-3 text-xs md:text-sm font-black rounded-lg transition-all ${
            activeTab === 'refleksi'
              ? 'bg-slate-950 text-white shadow'
              : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          BAB XI: Refleksi Diri Guru
        </button>
        <button
          onClick={() => setActiveTab('novelty')}
          className={`flex-1 py-2.5 px-3 text-xs md:text-sm font-black rounded-lg transition-all ${
            activeTab === 'novelty'
              ? 'bg-slate-950 text-white shadow'
              : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          Peta Kebaruan (Novelty)
        </button>
      </div>

      {activeTab === 'remedial' && (
        <div className="space-y-8">
          {/* Sub-bab A: Alur 5 Tahap Remedial Terstruktur */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
              <RotateCcw className="w-5 h-5 text-indigo-600" />
              <h3>A. Alur Program Remedial 5 Tahap Terstruktur</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed text-justify">
              {bab9RemedialData.kriteriaRemedial} Pembelajaran remedial bukan sekadar pengulangan ujian, melainkan intervensi pedagogis berbasis diagnosis kesulitan:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bab9RemedialData.tahap5.map((step, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-50 border-2 border-slate-200 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="w-7 h-7 rounded-full bg-slate-950 text-white font-mono font-black text-xs flex items-center justify-center mb-2">
                      {idx + 1}
                    </span>
                    <h4 className="font-black text-slate-900 text-xs md:text-sm font-display uppercase tracking-tight mb-2">
                      {step.tahap}
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed text-justify mb-3">
                      {step.aktivitas}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-[11px] font-mono font-semibold text-indigo-700">
                    Instrumen: {step.instrumen}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sub-bab B: Program Remedial Spesifik per Unit */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              <h3>B. Fokus Remedial Spesifik per Unit Pembelajaran</h3>
            </div>

            <div className="space-y-3">
              {bab9RemedialData.programSpesifikPerUnit.map((p, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border-2 border-slate-300 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1 md:w-1/3">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-600">Unit {idx + 1}</span>
                    <h4 className="font-bold text-slate-900 text-sm">{p.unit}</h4>
                  </div>
                  <div className="text-xs text-slate-700 md:w-1/3">
                    <strong className="text-slate-900 block mb-1">Fokus Miskonsepsi:</strong>
                    <p>{p.fokusRemedial}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs md:w-1/3">
                    <strong className="text-teal-900 block mb-1">Strategi Intervensi:</strong>
                    <p className="text-slate-700">{p.strategi}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {activeTab === 'analisis' && (
        <div className="space-y-8">
          {/* Summary Stats Header */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-slate-950 text-white">
              <span className="text-xs font-bold uppercase text-slate-400 block mb-1">Total Peserta Didik</span>
              <p className="text-2xl md:text-3xl font-black font-display text-white">{ketercapaianKelas.totalSiswa} Siswa</p>
            </div>
            <div className="p-5 rounded-xl bg-emerald-900 text-white">
              <span className="text-xs font-bold uppercase text-emerald-200 block mb-1">Tuntas KKTP (&ge; 75)</span>
              <p className="text-2xl md:text-3xl font-black font-display text-emerald-300">
                {ketercapaianKelas.tuntas} Siswa ({ketercapaianKelas.persentaseKetuntasan}%)
              </p>
            </div>
            <div className="p-5 rounded-xl bg-rose-900 text-white">
              <span className="text-xs font-bold uppercase text-rose-200 block mb-1">Belum Tuntas (Remedial)</span>
              <p className="text-2xl md:text-3xl font-black font-display text-rose-300">{ketercapaianKelas.belumTuntas} Siswa</p>
            </div>
            <div className="p-5 rounded-xl bg-indigo-900 text-white">
              <span className="text-xs font-bold uppercase text-indigo-200 block mb-1">Rata-Rata Kelas</span>
              <p className="text-2xl md:text-3xl font-black font-display text-indigo-200">{ketercapaianKelas.rataRataKelas} / 100</p>
            </div>
          </div>

          {/* Student Score Sample Table */}
          <section className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-lg font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
                <UserCheck className="w-5 h-5 text-indigo-600" />
                <h3>Sampel Data Penilaian Autentik Peserta Didik</h3>
              </div>
              <span className="text-xs font-mono font-bold text-slate-500">Standar KKTP: {config.targetKKTP}</span>
            </div>

            <div className="overflow-x-auto border-2 border-slate-900 rounded-xl">
              <table className="w-full text-xs md:text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950 text-white font-display">
                    <th className="p-3 border-r border-slate-700 w-12 text-center font-black">NO</th>
                    <th className="p-3 border-r border-slate-700 font-black">NAMA PESERTA DIDIK</th>
                    <th className="p-3 border-r border-slate-700 w-24 text-center font-black">DIAG</th>
                    <th className="p-3 border-r border-slate-700 w-24 text-center font-black">FORMATIF</th>
                    <th className="p-3 border-r border-slate-700 w-24 text-center font-black">SUMATIF</th>
                    <th className="p-3 border-r border-slate-700 w-28 text-center font-black">NILAI AKHIR</th>
                    <th className="p-3 border-r border-slate-700 w-32 text-center font-black">STATUS</th>
                    <th className="p-3 font-black">RENCANA TINDAK LANJUT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {sampleScores.map((s) => (
                    <tr key={s.no} className={s.no % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="p-3 text-center font-mono font-bold text-slate-700 border-r border-slate-200">{s.no}</td>
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">{s.nama}</td>
                      <td className="p-3 text-center font-mono border-r border-slate-200 text-slate-600">{s.diagnostik}</td>
                      <td className="p-3 text-center font-mono border-r border-slate-200 text-slate-600">{s.formatif}</td>
                      <td className="p-3 text-center font-mono border-r border-slate-200 text-slate-600">{s.sumatif}</td>
                      <td className="p-3 text-center font-mono font-black border-r border-slate-200 text-slate-950">{s.nilaiAkhir}</td>
                      <td className="p-3 text-center border-r border-slate-200">
                        <span className={`inline-block px-2.5 py-0.5 text-xs font-bold rounded ${
                          s.status === 'Tuntas' || s.status === 'Sangat Baik'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}>
                          {s.status}
                        </span>
                      </td>
                      <td className="p-3 text-slate-700 text-xs">{s.tindakLanjut}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Miskonsepsi Terdeteksi */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <h3>Analisis Miskonsepsi Terdeteksi & Evaluasi Penanganan</h3>
            </div>

            <div className="space-y-3">
              {miskonsepsiTerdeteksi.map((m, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs md:text-sm">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-slate-900">{idx + 1}. {m.miskonsepsi}</span>
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs font-bold rounded shrink-0">
                      {m.frekuensi}
                    </span>
                  </div>
                  <p className="text-slate-600"><strong>Penyebab:</strong> {m.analisisPenyebab}</p>
                  <p className="text-teal-900 bg-teal-50 p-2 rounded border border-teal-100">
                    <strong>Intervensi Berhasil:</strong> {m.intervensi}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {activeTab === 'refleksi' && (
        <div className="space-y-8">
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
              <FileCheck className="w-5 h-5 text-indigo-600" />
              <h3>{instrumenRefleksiGuru.judul}</h3>
            </div>

            <div className="space-y-3">
              {instrumenRefleksiGuru.aspekRefleksi.map((item) => (
                <div key={item.no} className="p-4 bg-slate-50 border-2 border-slate-200 rounded-xl space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {item.no}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">
                      {item.pertanyaan}
                    </h4>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs md:text-sm text-slate-700 pl-8 leading-relaxed text-justify">
                    <strong className="text-indigo-900 block mb-1">Catatan Refleksi & Bukti Kinerja Guru:</strong>
                    {item.jawabanReflektif}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {activeTab === 'novelty' && (
        <div className="space-y-6">
          <div className="p-4 bg-slate-950 text-white rounded-xl">
            <h3 className="text-base md:text-xl font-black font-display text-amber-300 uppercase">
              {bab11NoveltyData.judul}
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Lima Dimensi Kebaruan Pedagogis & Rekayasa Dokumen Perangkat Kimia Modern
            </p>
          </div>

          <div className="space-y-4">
            {bab11NoveltyData.petaKebaruan.map((nov) => (
              <div key={nov.nomor} className="p-6 rounded-xl bg-slate-50 border-2 border-slate-300 shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-mono font-black text-sm flex items-center justify-center">
                    {nov.nomor}
                  </span>
                  <h4 className="text-base md:text-lg font-black text-slate-950 font-display uppercase tracking-tight">
                    {nov.nama}
                  </h4>
                </div>
                <div className="text-xs md:text-sm text-slate-800 leading-relaxed text-justify pl-10">
                  <strong className="text-slate-950 block mb-1">Esensi Konseptual Kebaruan:</strong>
                  {nov.esensi}
                </div>
                <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-xs md:text-sm text-indigo-950 pl-10 leading-relaxed text-justify">
                  <strong className="text-indigo-900 block mb-1">Dampak Edukatif terhadap Siswa:</strong>
                  {nov.dampakEdukatif}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
