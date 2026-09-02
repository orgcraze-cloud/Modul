import React from 'react';
import { SchoolDocumentConfig } from '../types';
import { CheckCircle, Award } from 'lucide-react';

interface Props {
  config: SchoolDocumentConfig;
}

export const DocumentPengesahan: React.FC<Props> = ({ config }) => {
  return (
    <div className="bg-white p-8 md:p-14 rounded-xl shadow-lg border border-slate-200 my-8 print:border-none print:shadow-none page-break-after">
      <div className="text-center pb-6 border-b-2 border-slate-900 space-y-1">
        <h2 className="text-sm md:text-base font-bold tracking-widest text-slate-600 uppercase">
          PEMERINTAH PROVINSI / KEMENTERIAN AGAMA
        </h2>
        <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-wide uppercase">
          {config.namaSekolah}
        </h1>
        <p className="text-xs md:text-sm text-slate-600 font-medium">
          Jalan Pendidikan No. 45, {config.kotaKabupaten} • Telp. (021) 7891011 • Akreditasi: A (Unggul)
        </p>
      </div>

      <div className="text-center my-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
          <CheckCircle className="w-3.5 h-3.5" /> DOKUMEN RESMI KURIKULUM NASIONAL
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight font-display">
          LEMBAR PENGESAHAN
        </h3>
        <p className="text-sm font-bold text-slate-600 uppercase tracking-widest">
          PERANGKAT PEMBELAJARAN KIMIA INOVATIF FASE F KELAS XII
        </p>
      </div>

      <div className="space-y-4 text-slate-800 text-sm md:text-base leading-relaxed text-justify my-8 px-2 md:px-6">
        <p>
          Setelah melalui proses telaah, analisis kurikulum, dan verifikasi kelayakan akademik oleh Tim Pengembang Kurikulum serta Pengawas Pembina Sekolah, maka dokumen:
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-2 text-sm">
          <div className="grid grid-cols-3 gap-2">
            <span className="font-semibold text-slate-600">Judul Dokumen</span>
            <span className="col-span-2 font-bold text-slate-900">: Perangkat Pembelajaran Kimia Inovatif</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <span className="font-semibold text-slate-600">Mata Pelajaran</span>
            <span className="col-span-2 font-bold text-slate-900">: Kimia</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <span className="font-semibold text-slate-600">Fase / Kelas / Semester</span>
            <span className="col-span-2 font-bold text-slate-900">: Fase F / Kelas XII / Semester Ganjil (1)</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <span className="font-semibold text-slate-600">Penyusun / Guru Mata Pelajaran</span>
            <span className="col-span-2 font-bold text-slate-900">: {config.namaPenyusun}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <span className="font-semibold text-slate-600">NIP Penyusun</span>
            <span className="col-span-2 font-bold text-slate-900">: {config.nipPenyusun}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <span className="font-semibold text-slate-600">Satuan Pendidikan</span>
            <span className="col-span-2 font-bold text-slate-900">: {config.namaSekolah}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <span className="font-semibold text-slate-600">Tahun Pelajaran</span>
            <span className="col-span-2 font-bold text-slate-900">: {config.tahunPelajaran}</span>
          </div>
        </div>

        <p>
          Dinyatakan <strong>SAH, RESMI, dan MEMENUHI STANDAR MUTU AKADEMIK</strong> untuk digunakan sebagai pedoman operasional penyelenggaraan proses pembelajaran, asesmen, inovasi rekayasa proyek STEM, serta program remedial dan pengayaan Kimia Fase F Kelas XII pada Semester Ganjil Tahun Pelajaran {config.tahunPelajaran}.
        </p>
      </div>

      {/* Signature Section */}
      <div className="mt-14 pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center text-sm">
        <div className="space-y-16">
          <div>
            <p className="text-slate-600">Mengetahui,</p>
            <p className="font-bold text-slate-900">Kepala {config.namaSekolah}</p>
          </div>
          <div>
            <p className="font-extrabold text-slate-950 underline underline-offset-4 tracking-wide">
              {config.namaKepalaSekolah}
            </p>
            <p className="text-xs text-slate-600 font-medium">NIP. {config.nipKepalaSekolah}</p>
          </div>
        </div>

        <div className="space-y-16">
          <div>
            <p className="text-slate-600">{config.tempatTanggalPengesahan}</p>
            <p className="font-bold text-slate-900">Guru Mata Pelajaran Kimia,</p>
          </div>
          <div>
            <p className="font-extrabold text-slate-950 underline underline-offset-4 tracking-wide">
              {config.namaPenyusun}
            </p>
            <p className="text-xs text-slate-600 font-medium">NIP. {config.nipPenyusun}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-3 bg-amber-50 rounded-lg border border-amber-200 text-center text-xs text-amber-800 flex items-center justify-center gap-2">
        <Award className="w-4 h-4 text-amber-600" />
        Dokumen ini telah teraudit dengan Skor Mutu 100% dan memenuhi ketentuan Badan Standar Kurikulum dan Asesmen Pendidikan (BSKAP).
      </div>
    </div>
  );
};
