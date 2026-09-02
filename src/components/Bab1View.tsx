import React from 'react';
import { SchoolDocumentConfig } from '../types';
import { bab1Data } from '../data/phase2_bab1';
import { BookOpen, ShieldCheck, AlertTriangle, Lightbulb, Compass, Award, Target, CheckCircle2 } from 'lucide-react';

interface Props {
  config: SchoolDocumentConfig;
}

export const Bab1View: React.FC<Props> = ({ config }) => {
  return (
    <div className="bg-white p-6 md:p-12 rounded-2xl shadow-xl border border-slate-300 my-8 print:border-none print:shadow-none page-break-after font-sans">
      {/* Chapter Title Header */}
      <div className="border-b-4 border-slate-950 pb-5 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-white bg-slate-950 px-3.5 py-1 rounded-md">
            BAB I
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Fase F • Kelas XII • Semester Ganjil
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-slate-950 tracking-tight font-display uppercase">
          LANDASAN DAN IDENTITAS PEMBELAJARAN
        </h2>
        <p className="text-sm font-semibold text-slate-600 mt-1 uppercase tracking-wide">
          Rasional Pedagogis, Analisis Kebutuhan Nyata, dan Konstruksi CFIL Framework
        </p>
      </div>

      {/* Sub-bab A: Identitas Dokumen */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 text-lg font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          <h3>A. Identitas Pembelajaran Kimia Fase F</h3>
        </div>

        <div className="overflow-x-auto border-2 border-slate-900 rounded-xl">
          <table className="w-full text-xs md:text-sm text-left border-collapse">
            <tbody>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-bold text-slate-700 w-1/3 border-r border-slate-200 font-display uppercase tracking-wider text-xs">
                  Satuan Pendidikan / Madrasah
                </td>
                <td className="p-3 font-black text-slate-950">{config.namaSekolah}</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-bold text-slate-700 border-r border-slate-200 font-display uppercase tracking-wider text-xs">
                  Mata Pelajaran
                </td>
                <td className="p-3 font-bold text-slate-900">{config.mataPelajaran}</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-bold text-slate-700 border-r border-slate-200 font-display uppercase tracking-wider text-xs">
                  Fase / Kelas / Semester
                </td>
                <td className="p-3 font-bold text-indigo-950">Fase F / Kelas XII / Semester Ganjil</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-bold text-slate-700 border-r border-slate-200 font-display uppercase tracking-wider text-xs">
                  Alokasi Waktu Efektif
                </td>
                <td className="p-3 font-bold text-slate-900">18 Minggu Efektif (5 JP per Minggu = Total 90 JP)</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-bold text-slate-700 border-r border-slate-200 font-display uppercase tracking-wider text-xs">
                  Guru Pengampu / Penyusun
                </td>
                <td className="p-3 font-black text-slate-950">{config.namaPenyusun} (NIP. {config.nipPenyusun})</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-bold text-slate-700 border-r border-slate-200 font-display uppercase tracking-wider text-xs">
                  Tahun Pelajaran & KKTP
                </td>
                <td className="p-3 font-bold text-slate-900">Tahun Pelajaran {config.tahunPelajaran} • Standar Minimal KKTP: {config.targetKKTP}</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 font-bold text-slate-700 border-r border-slate-200 font-display uppercase tracking-wider text-xs">
                  Fokus Pendekatan Terpadu
                </td>
                <td className="p-3 text-slate-800 font-medium">Deep Learning, TPACK, STEM Education, PjBL, CFIL Framework</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sub-bab B: Rasional Pembelajaran */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 text-lg font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
          <ShieldCheck className="w-5 h-5 text-indigo-600" />
          <h3>B. Rasional dan Karakteristik Mata Pelajaran</h3>
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border-2 border-slate-200 space-y-3">
          <p className="text-xs md:text-sm text-slate-800 leading-relaxed text-justify whitespace-pre-line">
            {bab1Data.rasional}
          </p>
        </div>
      </section>

      {/* Sub-bab C: Analisis Masalah Nyata */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 text-lg font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <h3>C. 6 Analisis Masalah Pembelajaran Kimia & Akar Penyebab</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bab1Data.masalah.map((m) => (
            <div key={m.nomor} className="p-5 rounded-xl bg-slate-50 border-2 border-slate-200 space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-slate-950 text-white font-mono font-black text-xs flex items-center justify-center">
                    {m.nomor}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm md:text-base font-display">
                    {m.judul}
                  </h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed text-justify mb-2">
                  {m.deskripsi}
                </p>
              </div>
              <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-900">
                <strong className="block mb-0.5">Akar Masalah:</strong>
                {m.akarMasalah}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-bab D: CFIL Framework */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
          <Compass className="w-5 h-5 text-indigo-600" />
          <h3>D. Solusi Inovatif: CFIL Framework</h3>
        </div>

        <div className="bg-slate-950 text-white p-6 rounded-2xl space-y-2 border-2 border-slate-900">
          <div className="flex items-center gap-3">
            <Award className="w-7 h-7 text-amber-300 shrink-0" />
            <div>
              <h4 className="text-base md:text-xl font-black text-amber-300 font-display uppercase tracking-tight">
                {bab1Data.cfilFramework.nama}
              </h4>
              <p className="text-xs text-slate-300 font-mono">
                {bab1Data.cfilFramework.tagline}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bab1Data.cfilFramework.pilar.map((p) => (
            <div key={p.kode} className="p-5 rounded-xl bg-slate-50 border-2 border-slate-200 space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-mono font-black text-sm flex items-center justify-center">
                  {p.kode}
                </span>
                <div>
                  <h4 className="font-bold text-slate-950 text-sm font-display">{p.nama}</h4>
                  <span className="text-[11px] font-semibold text-indigo-800">{p.prinsip}</span>
                </div>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed text-justify">
                {p.deskripsi}
              </p>
              <div className="pt-2 border-t border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Aksi Nyata Pembelajaran:
                </span>
                <ul className="space-y-1 text-xs text-slate-800">
                  {p.tindakan.map((t, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
