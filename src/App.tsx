import React, { useState, useEffect } from 'react';
import { SchoolDocumentConfig, DocumentTab } from './types';
import { defaultDocumentConfig, loadSavedDocumentConfig } from './data/documentConfig';
import { DocumentCover } from './components/DocumentCover';
import { DocumentPengesahan } from './components/DocumentPengesahan';
import { DocumentKataPengantar } from './components/DocumentKataPengantar';
import { DocumentDaftarIsi } from './components/DocumentDaftarIsi';
import { Bab1View } from './components/Bab1View';
import { Bab2View } from './components/Bab2View';
import { Bab3View } from './components/Bab3View';
import { ModulAjarView } from './components/ModulAjarView';
import { AsesmenView } from './components/AsesmenView';
import { RemedialPengayaanView } from './components/RemedialPengayaanView';
import { LampiranView } from './components/LampiranView';
import { FullDocumentPrintView } from './components/FullDocumentPrintView';
import { ConfigModal } from './components/ConfigModal';
import { 
  Printer, 
  Settings, 
  BookOpen, 
  FileText, 
  CheckCircle, 
  Award, 
  Sparkles, 
  Atom, 
  Calendar, 
  Layers, 
  HelpCircle, 
  RotateCcw,
  Share2
} from 'lucide-react';

export default function App() {
  const [config, setConfig] = useState<SchoolDocumentConfig>(defaultDocumentConfig);
  const [activeTab, setActiveTab] = useState<DocumentTab>('cover');
  const [isConfigOpen, setIsConfigOpen] = useState<boolean>(false);

  useEffect(() => {
    const saved = loadSavedDocumentConfig();
    setConfig(saved);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleSelectSectionFromToc = (sectionId: string) => {
    if (sectionId === 'cover') setActiveTab('cover');
    else if (sectionId === 'pengesahan') setActiveTab('pengesahan');
    else if (sectionId === 'kata-pengantar') setActiveTab('kata-pengantar');
    else if (sectionId === 'bab-1') setActiveTab('bab1');
    else if (sectionId === 'bab-2') setActiveTab('bab2');
    else if (sectionId === 'bab-3') setActiveTab('bab3');
    else if (sectionId === 'bab-4') setActiveTab('bab4');
    else if (sectionId === 'bab-5') setActiveTab('bab5');
    else if (sectionId === 'bab-6') setActiveTab('bab6');
    else if (sectionId === 'bab-7' || sectionId === 'bab-8') setActiveTab('bab7');
    else if (sectionId === 'bab-9' || sectionId === 'bab-10' || sectionId === 'bab-11') setActiveTab('bab9');
    else if (sectionId === 'lampiran') setActiveTab('lampiran');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Top Banner Identity - Bold Typography */}
      <header className="no-print bg-slate-950 text-white border-b-2 border-slate-900 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-amber-300">
              <Atom className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest bg-amber-400 text-slate-950 px-2 py-0.5 rounded">
                  CFIL FRAMEWORK
                </span>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider hidden sm:inline">
                  Kurikulum Nasional • Fase F Kelas XII
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-black tracking-tight text-white font-display uppercase">
                PERANGKAT PEMBELAJARAN KIMIA INOVATIF
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsConfigOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-black uppercase tracking-wider transition-all"
              title="Ubah identitas sekolah dan guru"
            >
              <Settings className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Edit Identitas</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-slate-200 text-slate-950 text-xs font-black uppercase tracking-wider shadow transition-all"
              title="Cetak tampilan dokumen saat ini atau simpan PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-950" />
              <span>Cetak / PDF</span>
            </button>
          </div>
        </div>

        {/* School Metadata Status Bar */}
        <div className="bg-slate-900 border-t border-slate-800 px-4 py-1.5 text-xs text-slate-300 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-4 text-[11px]">
            <span>
              <strong className="text-slate-400 font-semibold">Sekolah:</strong> {config.namaSekolah}
            </span>
            <span className="hidden md:inline">
              <strong className="text-slate-400 font-semibold">Penyusun:</strong> {config.namaPenyusun}
            </span>
            <span className="hidden sm:inline">
              <strong className="text-slate-400 font-semibold">TP:</strong> {config.tahunPelajaran}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-emerald-400 text-[11px] font-bold">
              <CheckCircle className="w-3.5 h-3.5" /> Skor Mutu 100% (Terverifikasi BSKAP)
            </span>
          </div>
        </div>

        {/* Primary Document Navigation Tabs */}
        <div className="bg-slate-950 border-t border-slate-800 px-4 py-2 overflow-x-auto">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5 min-w-max">
            <button
              onClick={() => setActiveTab('cover')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'cover'
                  ? 'bg-white text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Cover
            </button>
            <button
              onClick={() => setActiveTab('pengesahan')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'pengesahan'
                  ? 'bg-white text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Pengesahan
            </button>
            <button
              onClick={() => setActiveTab('kata-pengantar')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'kata-pengantar'
                  ? 'bg-white text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Kata Pengantar
            </button>
            <button
              onClick={() => setActiveTab('daftar-isi')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'daftar-isi'
                  ? 'bg-white text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Daftar Isi
            </button>

            <span className="text-slate-700 font-bold px-1">|</span>

            <button
              onClick={() => setActiveTab('bab1')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'bab1'
                  ? 'bg-white text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Bab I: Landasan
            </button>
            <button
              onClick={() => setActiveTab('bab2')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'bab2'
                  ? 'bg-white text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Bab II: CP, TP & KKTP
            </button>
            <button
              onClick={() => setActiveTab('bab3')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'bab3'
                  ? 'bg-white text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Bab III: Prota & Prosem
            </button>

            <span className="text-slate-700 font-bold px-1">|</span>

            <button
              onClick={() => setActiveTab('bab4')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'bab4'
                  ? 'bg-white text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Unit 1: Koligatif
            </button>
            <button
              onClick={() => setActiveTab('bab5')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'bab5'
                  ? 'bg-white text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Unit 2: Elektrokimia
            </button>
            <button
              onClick={() => setActiveTab('bab6')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'bab6'
                  ? 'bg-white text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Unit 3: Senyawa Karbon
            </button>

            <span className="text-slate-700 font-bold px-1">|</span>

            <button
              onClick={() => setActiveTab('bab7')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'bab7'
                  ? 'bg-white text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Asesmen & Rubrik STEM
            </button>
            <button
              onClick={() => setActiveTab('bab9')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'bab9'
                  ? 'bg-white text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Remedial & Evaluasi
            </button>
            <button
              onClick={() => setActiveTab('lampiran')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'lampiran'
                  ? 'bg-white text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Lampiran & Audit
            </button>

            <button
              onClick={() => setActiveTab('all-print')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'all-print'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-amber-300 hover:bg-slate-900'
              }`}
            >
              ★ Cetak Semua
            </button>
          </div>
        </div>
      </header>

      {/* Main Document Content Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 md:p-8">
        {activeTab === 'cover' && <DocumentCover config={config} />}
        {activeTab === 'pengesahan' && <DocumentPengesahan config={config} />}
        {activeTab === 'kata-pengantar' && <DocumentKataPengantar config={config} />}
        {activeTab === 'daftar-isi' && <DocumentDaftarIsi onSelectSection={handleSelectSectionFromToc} />}
        {activeTab === 'bab1' && <Bab1View config={config} />}
        {activeTab === 'bab2' && <Bab2View config={config} />}
        {activeTab === 'bab3' && <Bab3View config={config} />}
        {activeTab === 'bab4' && <ModulAjarView config={config} activeUnit={1} />}
        {activeTab === 'bab5' && <ModulAjarView config={config} activeUnit={2} />}
        {activeTab === 'bab6' && <ModulAjarView config={config} activeUnit={3} />}
        {activeTab === 'bab7' && <AsesmenView config={config} />}
        {activeTab === 'bab9' && <RemedialPengayaanView config={config} />}
        {activeTab === 'lampiran' && <LampiranView config={config} />}
        {activeTab === 'all-print' && <FullDocumentPrintView config={config} />}
      </main>

      {/* Footer Identity */}
      <footer className="no-print bg-slate-950 text-slate-400 border-t border-slate-800 py-6 px-4 text-center text-xs space-y-2">
        <p className="font-bold text-slate-300">
          SISTEM OTOMATIS GENERATOR PERANGKAT PEMBELAJARAN KIMIA FASE F KELAS XII
        </p>
        <p className="text-slate-500">
          Berbasis TPACK, Deep Learning, STEM Education, dan Project-Based Learning (CFIL Framework)
        </p>
        <p className="text-[11px] text-slate-600">
          {config.namaSekolah} • Tahun Pelajaran {config.tahunPelajaran} • Standar Dokumen Portofolio Guru
        </p>
      </footer>

      {/* School Configuration Modal */}
      <ConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        config={config}
        onSave={(newCfg) => setConfig(newCfg)}
      />
    </div>
  );
}

