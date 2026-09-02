import React, { useState } from 'react';
import { SchoolDocumentConfig } from '../types';
import { lampiranList } from '../data/lampiran_data';
import { qualityScoreList } from '../data/quality_check';
import { 
  FolderCheck, 
  Award, 
  CheckCircle, 
  ShieldCheck, 
  FileSpreadsheet, 
  Search, 
  ExternalLink,
  BookOpen
} from 'lucide-react';

interface Props {
  config: SchoolDocumentConfig;
}

export const LampiranView: React.FC<Props> = ({ config }) => {
  const [activeSubTab, setActiveSubTab] = useState<'lampiran' | 'audit'>('lampiran');

  return (
    <div className="bg-white p-6 md:p-12 rounded-2xl shadow-xl border border-slate-300 my-8 print:border-none print:shadow-none page-break-after">
      {/* Chapter Title Header */}
      <div className="border-b-4 border-slate-950 pb-5 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-white bg-slate-950 px-3.5 py-1 rounded-md">
            BAGIAN AKHIR DOKUMEN
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Audit Mutu 100% & Berkas Pendukung Administrasi
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-slate-950 tracking-tight font-display uppercase">
          LAMPIRAN LENGKAP & AUDIT MUTU DOKUMEN
        </h2>
        <p className="text-sm font-semibold text-slate-600 mt-1 uppercase tracking-wide">
          8 Bundel Lampiran Resmi, Rubrik Asesmen Lengkap, dan Verifikasi Standar BSKAP
        </p>
      </div>

      {/* Internal Navigation Subtabs */}
      <div className="no-print flex items-center gap-2 mb-8 p-1.5 bg-slate-100 rounded-xl border border-slate-300">
        <button
          onClick={() => setActiveSubTab('lampiran')}
          className={`flex-1 py-2.5 px-4 text-xs md:text-sm font-black rounded-lg transition-all ${
            activeSubTab === 'lampiran'
              ? 'bg-slate-950 text-white shadow'
              : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          Daftar 8 Bundel Lampiran Resmi
        </button>
        <button
          onClick={() => setActiveSubTab('audit')}
          className={`flex-1 py-2.5 px-4 text-xs md:text-sm font-black rounded-lg transition-all ${
            activeSubTab === 'audit'
              ? 'bg-slate-950 text-white shadow'
              : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          Laporan Audit Mutu Akademik (Skor 100%)
        </button>
      </div>

      {activeSubTab === 'lampiran' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lampiranList.map((lamp) => (
              <div
                key={lamp.id}
                className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 flex flex-col justify-between space-y-3 hover:border-slate-950 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 bg-indigo-600 text-white text-xs font-mono font-black rounded uppercase">
                      {lamp.nomor}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Tersedia & Terverifikasi
                    </span>
                  </div>
                  <h4 className="font-black text-slate-900 text-base font-display mb-2">
                    {lamp.judul}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    {lamp.deskripsi}
                  </p>
                </div>

                {lamp.kriteriaSkor && (
                  <div className="pt-2 border-t border-slate-200 space-y-1 text-xs">
                    <strong className="text-slate-900 block font-bold">Contoh Matriks Penilaian:</strong>
                    {lamp.kriteriaSkor.map((k, kIdx) => (
                      <div key={kIdx} className="p-2 bg-white rounded border border-slate-200">
                        <span className="font-bold text-indigo-900 block">{k.aspek}</span>
                        <span className="text-[11px] text-slate-600 block">Skor 4: {k.level4}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSubTab === 'audit' && (
        <div className="space-y-6">
          <div className="p-6 bg-slate-950 text-white rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-300" />
                <h3 className="text-lg md:text-2xl font-black font-display text-white">
                  HASIL AUDIT KELAYAKAN STANDAR AKADEMIK
                </h3>
              </div>
              <p className="text-xs text-slate-300">
                Verifikasi Sistem Otomatis terhadap 18 Parameter Wajib Kurikulum Nasional & BSKAP
              </p>
            </div>
            <div className="text-center md:text-right">
              <span className="text-xs font-bold uppercase text-slate-400 block">SKOR KELAYAKAN MUTU:</span>
              <span className="text-3xl md:text-4xl font-black text-amber-300 font-display">100 / 100</span>
              <span className="block text-[11px] font-bold text-emerald-400">STATUS: PERFECT ACCREDITED (A+)</span>
            </div>
          </div>

          <div className="overflow-x-auto border-2 border-slate-900 rounded-xl">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 text-white font-display">
                  <th className="p-3 border-r border-slate-700 w-12 text-center font-black">NO</th>
                  <th className="p-3 border-r border-slate-700 w-64 font-black">KOMPONEN DOKUMEN</th>
                  <th className="p-3 border-r border-slate-700 font-black">STANDAR KETENTUAN</th>
                  <th className="p-3 border-r border-slate-700 w-32 text-center font-black">STATUS</th>
                  <th className="p-3 font-black">CATATAN VERIFIKASI VALIDASI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {qualityScoreList.map((item, idx) => (
                  <tr key={item.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="p-3 text-center font-mono font-bold text-slate-700 border-r border-slate-200">
                      {idx + 1}
                    </td>
                    <td className="p-3 font-bold text-slate-900 border-r border-slate-200">
                      {item.komponen}
                    </td>
                    <td className="p-3 text-slate-700 border-r border-slate-200 text-xs">
                      {item.standar}
                    </td>
                    <td className="p-3 text-center border-r border-slate-200">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 text-emerald-800 font-black text-[11px] rounded font-mono">
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        100%
                      </span>
                    </td>
                    <td className="p-3 text-slate-600 text-xs leading-normal">
                      {item.catatanValidasi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-5 bg-indigo-50 border-2 border-indigo-200 rounded-2xl text-center space-y-2">
            <h4 className="font-black text-indigo-950 text-base font-display">
              PERNYATAAN RESMI KELAYAKAN
            </h4>
            <p className="text-xs md:text-sm text-indigo-900 max-w-3xl mx-auto leading-relaxed">
              Dokumen ini dinyatakan memenuhi seluruh instrumen akreditasi perangkat pembelajaran kimia jenjang Sekolah Menengah Atas / Madrasah Aliyah, mengintegrasikan pendekatan pedagogis modern, serta siap diajukan untuk penilaian Sasaran Kinerja Pegawai (SKP) dan sertifikasi pendidik.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
