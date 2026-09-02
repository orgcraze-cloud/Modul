import React from 'react';
import { SchoolDocumentConfig } from '../types';
import { cpFaseFText, acpData, tpData, atpFlowSteps } from '../data/phase3_bab2';
import { kktpSpecification } from '../data/phase4_bab3';
import { Target, Layers, ArrowRightCircle, CheckSquare, BarChart3, Atom, Zap, FlaskConical } from 'lucide-react';

interface Props {
  config: SchoolDocumentConfig;
}

export const Bab2View: React.FC<Props> = ({ config }) => {
  return (
    <div className="bg-white p-6 md:p-12 rounded-2xl shadow-xl border border-slate-300 my-8 print:border-none print:shadow-none page-break-after">
      {/* Chapter Title Header */}
      <div className="border-b-4 border-slate-950 pb-5 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-white bg-slate-950 px-3.5 py-1 rounded-md">
            BAB II
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Fase F • Kelas XII • Semester Ganjil
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-slate-950 tracking-tight font-display uppercase">
          CAPAIAN PEMBELAJARAN, TP, ATP, DAN KKTP
        </h2>
        <p className="text-sm font-semibold text-slate-600 mt-1 uppercase tracking-wide">
          Dekonstruksi Kompetensi, Alur Pembelajaran Spiral, dan Standar Ketuntasan Mutu Kimia
        </p>
      </div>

      {/* Sub-bab A: Capaian Pembelajaran (CP) */}
      <section className="mb-12 space-y-5">
        <div className="flex items-center gap-2 text-lg md:text-xl font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
          <Target className="w-5 h-5 text-indigo-600" />
          <h3>A. Capaian Pembelajaran (CP) Fase F Kimia</h3>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed text-justify">
          Berdasarkan Keputusan Kepala Badan Standar, Kurikulum, dan Asesmen Pendidikan (BSKAP) Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi, Capaian Pembelajaran Kimia Fase F (Kelas XI dan XII) mencakup dua elemen esensial yang saling beririsan:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 rounded-xl bg-slate-50 border-2 border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-black rounded uppercase tracking-wider">
                Elemen 1
              </span>
              <h4 className="text-base font-black text-slate-900 font-display">Pemahaman Kimia</h4>
            </div>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed text-justify">
              {cpFaseFText.elemenPemahaman}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border-2 border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 bg-teal-700 text-white text-xs font-black rounded uppercase tracking-wider">
                Elemen 2
              </span>
              <h4 className="text-base font-black text-slate-900 font-display">Keterampilan Proses Sains</h4>
            </div>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed text-justify">
              {cpFaseFText.elemenKeterampilanProses}
            </p>
          </div>
        </div>
      </section>

      {/* Sub-bab B: Analisis Capaian Pembelajaran (ACP) */}
      <section className="mb-12 space-y-5">
        <div className="flex items-center gap-2 text-lg md:text-xl font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
          <Layers className="w-5 h-5 text-indigo-600" />
          <h3>B. Analisis Capaian Pembelajaran (ACP) Semester Ganjil</h3>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed text-justify">
          Analisis mendalam terhadap CP Fase F untuk menjamin keterpaduan dimensi pengetahuan faktual, konseptual, prosedural, metakognitif, serta keterampilan proses tingkat tinggi:
        </p>

        <div className="space-y-6">
          {acpData.map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white border-2 border-slate-300 shadow-sm space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2 border-b-2 border-slate-200 pb-2">
                <span className="px-3 py-1 bg-slate-900 text-white text-xs font-black rounded uppercase tracking-wider">
                  Unit {idx + 1}: {item.materi}
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  KKO: {item.kko}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm pt-2">
                <div>
                  <strong className="text-slate-900 block mb-1">Capaian Pembelajaran Terkait:</strong>
                  <p className="text-slate-700 leading-relaxed">{item.cp}</p>
                </div>
                <div>
                  <strong className="text-slate-900 block mb-1">Kompetensi Utama:</strong>
                  <p className="text-slate-700 leading-relaxed">{item.kompetensi}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                  <strong className="text-indigo-900 block mb-1">Dimensi Pengetahuan:</strong>
                  <p className="text-slate-600">{item.pengetahuan}</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                  <strong className="text-teal-900 block mb-1">Dimensi Keterampilan:</strong>
                  <p className="text-slate-600">{item.keterampilan}</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                  <strong className="text-amber-900 block mb-1">Bukti Ketercapaian Belajar:</strong>
                  <p className="text-slate-600">{item.buktiBelajar}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-bab C: Tujuan Pembelajaran (TP) */}
      <section className="mb-12 space-y-5">
        <div className="flex items-center gap-2 text-lg md:text-xl font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
          <CheckSquare className="w-5 h-5 text-indigo-600" />
          <h3>C. Rumusan Tujuan Pembelajaran (TP) Komprehensif</h3>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed text-justify">
          Tujuan Pembelajaran disusun dengan memadukan kompetensi HOTS (High Order Thinking Skills) dan rekayasa STEM pada setiap unit pembelajaran:
        </p>

        <div className="overflow-x-auto border-2 border-slate-900 rounded-xl">
          <table className="w-full text-xs md:text-sm text-left border-collapse">
            <thead>
              <tr className="bg-slate-950 text-white font-display">
                <th className="p-3 border-r border-slate-700 w-24 text-center font-black">KODE TP</th>
                <th className="p-3 border-r border-slate-700 w-44 font-black">UNIT & MATERI</th>
                <th className="p-3 border-r border-slate-700 font-black">RUMUSAN TUJUAN PEMBELAJARAN</th>
                <th className="p-3 border-r border-slate-700 w-32 text-center font-black">LEVEL</th>
                <th className="p-3 font-black">BUKTI KETERCAPAIAN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {tpData.map((tp, i) => (
                <tr key={tp.kodeTp} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="p-3 font-mono font-black text-indigo-700 border-r border-slate-200 text-center">
                    {tp.kodeTp}
                  </td>
                  <td className="p-3 font-bold text-slate-800 border-r border-slate-200">
                    <span className="block text-[11px] text-slate-500 uppercase">{tp.unit.split(':')[0]}</span>
                    {tp.materi}
                  </td>
                  <td className="p-3 text-slate-700 leading-relaxed border-r border-slate-200 text-justify">
                    {tp.tujuanPembelajaran}
                  </td>
                  <td className="p-3 text-center border-r border-slate-200">
                    <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-900 font-black text-xs rounded border border-slate-300">
                      {tp.levelKognitif}
                    </span>
                  </td>
                  <td className="p-3 text-slate-600 text-xs leading-normal">
                    {tp.buktiKetercapaian}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sub-bab D: Alur Tujuan Pembelajaran (ATP) */}
      <section className="mb-12 space-y-5">
        <div className="flex items-center gap-2 text-lg md:text-xl font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
          <ArrowRightCircle className="w-5 h-5 text-indigo-600" />
          <h3>D. Alur Tujuan Pembelajaran (ATP) Spiral CFIL</h3>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed text-justify">
          Alur pembelajaran dirancang bertahap secara spiral berkelanjutan dari fondasi prasyarat hingga puncak rekayasa desain teknologi (Learning by Design):
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {atpFlowSteps.map((step, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-50 border-2 border-slate-200 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full bg-slate-950 text-white font-black text-xs flex items-center justify-center font-mono">
                    {idx + 1}
                  </span>
                  <h4 className="font-black text-slate-900 text-xs md:text-sm font-display uppercase tracking-tight">
                    {step.tahap}
                  </h4>
                </div>
                <p className="text-xs font-bold text-indigo-700 mb-2">
                  {step.fokus}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  {step.aktivitas}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-bab E: Kriteria Ketercapaian Tujuan Pembelajaran (KKTP) */}
      <section className="space-y-5">
        <div className="flex items-center gap-2 text-lg md:text-xl font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
          <BarChart3 className="w-5 h-5 text-indigo-600" />
          <h3>E. Kriteria Ketercapaian Tujuan Pembelajaran (KKTP)</h3>
        </div>

        <div className="p-4 bg-slate-950 text-white rounded-xl flex items-center justify-between flex-wrap gap-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">STANDAR KETUNTASAN MINIMAL KIMIA</p>
            <p className="text-lg md:text-xl font-black text-amber-300 font-display">
              KKTP Satuan Pendidikan: {config.targetKKTP} / 100
            </p>
          </div>
          <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-xs font-bold rounded-full">
            Pendekatan Interval Nilai & Deskripsi Kinerja
          </span>
        </div>

        <div className="overflow-x-auto border-2 border-slate-900 rounded-xl">
          <table className="w-full text-xs md:text-sm text-left border-collapse">
            <thead>
              <tr className="bg-slate-950 text-white font-display">
                <th className="p-3 border-r border-slate-700 w-36 font-black">PREDIKAT</th>
                <th className="p-3 border-r border-slate-700 w-28 text-center font-black">RENTANG NILAI</th>
                <th className="p-3 border-r border-slate-700 w-44 font-black">STATUS KETUNTASAN</th>
                <th className="p-3 font-black">DESKRIPSI KUALITATIF PENCAPAIAN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {kktpSpecification.skalaPenilaian.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">
                    {item.predikat}
                  </td>
                  <td className="p-3 font-mono font-bold text-slate-800 text-center border-r border-slate-200">
                    {item.rentang}
                  </td>
                  <td className="p-3 border-r border-slate-200">
                    <span className={`inline-block px-2.5 py-1 text-xs font-bold rounded ${
                      item.status.includes('Tuntas') && !item.status.includes('Belum')
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 text-slate-700 text-xs leading-relaxed text-justify">
                    {item.deskripsi}
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
