import React from 'react';
import { SchoolDocumentConfig } from '../types';
import { Atom, Flame, Dna, Sparkles } from 'lucide-react';

interface Props {
  config: SchoolDocumentConfig;
}

export const DocumentCover: React.FC<Props> = ({ config }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 text-white min-h-[960px] p-8 md:p-14 flex flex-col justify-between rounded-xl shadow-2xl border border-indigo-900/60 page-break-after">
      {/* Background Subtle Chemical Geometries */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hex-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20 0 L40 11.5 L40 34.5 L20 46 L0 34.5 L0 11.5 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hex-grid)" />
        </svg>
      </div>

      {/* Top Header Identity */}
      <div className="relative z-10 text-center space-y-3 border-b border-indigo-500/30 pb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-200 text-xs md:text-sm font-semibold tracking-wider uppercase">
          <Sparkles className="w-4 h-4 text-amber-300" />
          Kurikulum Nasional • Fase F • Jenjang Menengah Atas
        </div>
        <p className="text-slate-300 text-sm md:text-base font-medium uppercase tracking-widest">
          {config.namaSekolah}
        </p>
      </div>

      {/* Main Title Hero Section */}
      <div className="relative z-10 text-center my-6 space-y-5">
        <div className="flex justify-center items-center gap-3">
          <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-indigo-400" />
          <span className="text-indigo-300 tracking-[0.3em] text-xs md:text-sm font-bold uppercase">
            Dokumen Resmi Portofolio & Administrasi Guru
          </span>
          <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-indigo-400" />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
          PERANGKAT PEMBELAJARAN
        </h1>

        <div className="inline-block relative">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 tracking-wider">
            ⚗️ KIMIA
          </h2>
          <div className="h-1 w-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-2" />
        </div>

        <div className="space-y-1">
          <p className="text-lg md:text-2xl font-bold text-slate-200">
            FASE F — KELAS XII (DUA BELAS)
          </p>
          <p className="text-base md:text-xl font-semibold text-indigo-300">
            SEMESTER GANJIL (SEMESTER 1)
          </p>
        </div>

        {/* Pedagogical Approach Badge */}
        <div className="py-3 px-6 rounded-2xl bg-slate-900/80 border border-indigo-500/40 inline-block backdrop-blur-md max-w-2xl mx-auto shadow-inner">
          <p className="text-xs uppercase text-indigo-300 font-semibold tracking-widest mb-1">
            PENDEKATAN UTAMA PEMBELAJARAN MENDALAM
          </p>
          <p className="text-sm md:text-base font-bold text-white tracking-wide">
            TPACK • DEEP LEARNING • STEM EDUCATION • PROJECT-BASED LEARNING (PjBL)
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Framework: Contextual Chemistry • Future Technology • Investigation • Learning by Design (CFIL)
          </p>
        </div>
      </div>

      {/* 3 Main Materials Banner */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
        <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/40 flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-300">
            <Atom className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider">UNIT 01</p>
            <p className="text-sm md:text-base font-bold text-slate-100">Sifat Koligatif Larutan</p>
            <p className="text-xs text-slate-400">Colligative Reality Lab</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/40 flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-300">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">UNIT 02</p>
            <p className="text-sm md:text-base font-bold text-slate-100">Redoks & Elektrokimia</p>
            <p className="text-xs text-slate-400">Electrochemistry Energy</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/40 flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-300">
            <Dna className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider">UNIT 03</p>
            <p className="text-sm md:text-base font-bold text-slate-100">Senyawa Karbon & Makromolekul</p>
            <p className="text-xs text-slate-400">Carbon Future Innovation</p>
          </div>
        </div>
      </div>

      {/* Footer Author & Institutional Identity */}
      <div className="relative z-10 pt-6 border-t border-indigo-500/30 text-center space-y-2">
        <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">
          Disusun Oleh Pendidik Profesional:
        </p>
        <p className="text-xl md:text-2xl font-black text-amber-300 tracking-wide">
          {config.namaPenyusun}
        </p>
        <p className="text-xs md:text-sm text-slate-300">
          NIP. {config.nipPenyusun}
        </p>
        <div className="pt-2 text-xs md:text-sm text-indigo-300 font-semibold tracking-wider">
          {config.namaSekolah} • TAHUN PELAJARAN {config.tahunPelajaran}
        </div>
      </div>
    </div>
  );
};
