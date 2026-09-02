import React from 'react';
import { SchoolDocumentConfig } from '../types';
import { protaData, prosemData } from '../data/phase4_bab3';
import { Calendar, Clock, Table, CheckCircle2, Award } from 'lucide-react';

interface Props {
  config: SchoolDocumentConfig;
}

export const Bab3View: React.FC<Props> = ({ config }) => {
  const totalJpProta = protaData.reduce((acc, curr) => acc + curr.alokasiJp, 0);
  const totalJpProsem = prosemData.reduce((acc, curr) => acc + curr.jp, 0);

  return (
    <div className="bg-white p-6 md:p-12 rounded-2xl shadow-xl border border-slate-300 my-8 print:border-none print:shadow-none page-break-after">
      {/* Chapter Title Header */}
      <div className="border-b-4 border-slate-950 pb-5 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-white bg-slate-950 px-3.5 py-1 rounded-md">
            BAB III
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Fase F • Kelas XII • Semester Ganjil
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-slate-950 tracking-tight font-display uppercase">
          PROGRAM TAHUNAN & PROGRAM SEMESTER
        </h2>
        <p className="text-sm font-semibold text-slate-600 mt-1 uppercase tracking-wide">
          Distribusi Alokasi Waktu Pembelajaran Kimia 90 Jam Pelajaran (18 Minggu Efektif)
        </p>
      </div>

      {/* Sub-bab A: Program Tahunan (PROTA) */}
      <section className="mb-12 space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 text-lg md:text-xl font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <h3>A. Program Tahunan (PROTA) Kimia Fase F</h3>
          </div>
          <span className="px-3 py-1 bg-slate-100 text-slate-900 border border-slate-300 text-xs font-mono font-bold rounded-lg">
            Total Semester Ganjil: {totalJpProta} JP
          </span>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed text-justify">
          Program Tahunan menetapkan proporsi waktu tatap muka, investigasi laboratorium, perakitan prototipe STEM, serta evaluasi komprehensif pada setiap unit materi:
        </p>

        <div className="overflow-x-auto border-2 border-slate-900 rounded-xl">
          <table className="w-full text-xs md:text-sm text-left border-collapse">
            <thead>
              <tr className="bg-slate-950 text-white font-display">
                <th className="p-3 border-r border-slate-700 w-14 text-center font-black">NO</th>
                <th className="p-3 border-r border-slate-700 w-28 font-black">UNIT</th>
                <th className="p-3 border-r border-slate-700 font-black">MATERI POKOK & CAKUPAN INOVASI</th>
                <th className="p-3 border-r border-slate-700 w-28 text-center font-black">ALOKASI JP</th>
                <th className="p-3 border-r border-slate-700 w-32 font-black">SEMESTER</th>
                <th className="p-3 font-black w-40">PERIODE BULAN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {protaData.map((item) => (
                <tr key={item.no} className={item.no % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="p-3 text-center font-black border-r border-slate-200 text-slate-800">
                    {item.no}
                  </td>
                  <td className="p-3 font-bold text-indigo-700 border-r border-slate-200">
                    {item.unit}
                  </td>
                  <td className="p-3 text-slate-800 leading-relaxed border-r border-slate-200">
                    {item.materiPokok}
                  </td>
                  <td className="p-3 text-center font-mono font-black text-slate-950 border-r border-slate-200">
                    {item.alokasiJp} JP
                  </td>
                  <td className="p-3 text-slate-700 border-r border-slate-200">
                    {item.semester}
                  </td>
                  <td className="p-3 text-slate-600 font-medium">
                    {item.bulan}
                  </td>
                </tr>
              ))}
              <tr className="bg-slate-950 text-white font-bold">
                <td colSpan={3} className="p-3 text-right uppercase tracking-wider font-display">
                  Total Alokasi Waktu Efektif Semester Ganjil
                </td>
                <td className="p-3 text-center font-mono font-black text-amber-300">
                  {totalJpProta} JP
                </td>
                <td colSpan={2} className="p-3 text-xs text-slate-300">
                  (18 Minggu x 5 JP/Minggu)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sub-bab B: Program Semester (PROSEM) */}
      <section className="space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 text-lg md:text-xl font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
            <Clock className="w-5 h-5 text-indigo-600" />
            <h3>B. Program Semester (PROSEM) 18 Minggu Terstruktur</h3>
          </div>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold rounded-lg">
            Total Pertemuan: 18 x 5 JP = {totalJpProsem} JP
          </span>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed text-justify">
          Distribusi per pekan memuat rincian materi operasional, kode capaian TP, aktivitas pembelajaran berbasis TPACK & STEM, alokasi jam tatap muka, serta format instrumen asesmen:
        </p>

        <div className="overflow-x-auto border-2 border-slate-900 rounded-xl">
          <table className="w-full text-xs md:text-sm text-left border-collapse">
            <thead>
              <tr className="bg-slate-950 text-white font-display">
                <th className="p-2.5 border-r border-slate-700 w-16 text-center font-black">MG / PT</th>
                <th className="p-2.5 border-r border-slate-700 w-24 text-center font-black">KODE TP</th>
                <th className="p-2.5 border-r border-slate-700 w-52 font-black">MATERI OPERASIONAL</th>
                <th className="p-2.5 border-r border-slate-700 font-black">AKTIVITAS INTI PEMBELAJARAN (DEEP LEARNING / STEM)</th>
                <th className="p-2.5 border-r border-slate-700 w-16 text-center font-black">JP</th>
                <th className="p-2.5 font-black w-44">METODE ASESMEN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {prosemData.map((item) => (
                <tr key={item.mingguKe} className={item.mingguKe % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="p-2.5 text-center font-mono font-bold text-slate-900 border-r border-slate-200">
                    M-{item.mingguKe}
                  </td>
                  <td className="p-2.5 text-center font-mono font-bold text-indigo-700 border-r border-slate-200">
                    {item.kodeTp}
                  </td>
                  <td className="p-2.5 font-bold text-slate-800 border-r border-slate-200">
                    {item.materi}
                  </td>
                  <td className="p-2.5 text-slate-700 leading-normal border-r border-slate-200">
                    {item.aktivitas}
                  </td>
                  <td className="p-2.5 text-center font-mono font-bold text-slate-900 border-r border-slate-200">
                    {item.jp}
                  </td>
                  <td className="p-2.5 text-slate-600 font-medium">
                    <span className="inline-block px-2 py-0.5 bg-indigo-50 text-indigo-800 rounded border border-indigo-100 text-xs">
                      {item.asesmen}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
