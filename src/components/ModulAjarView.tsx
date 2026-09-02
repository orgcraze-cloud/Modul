import React, { useState } from 'react';
import { SchoolDocumentConfig } from '../types';
import { unit1ModulAjar } from '../data/unit1_data';
import { unit2ModulAjar } from '../data/unit2_data';
import { unit3ModulAjar } from '../data/unit3_data';
import { 
  Sparkles, 
  FlaskConical, 
  Layers, 
  Target, 
  AlertCircle, 
  CheckCircle2, 
  Cpu, 
  Lightbulb, 
  HeartHandshake, 
  Dna,
  Zap,
  Atom
} from 'lucide-react';

interface Props {
  config: SchoolDocumentConfig;
  activeUnit?: 1 | 2 | 3;
}

export const ModulAjarView: React.FC<Props> = ({ config, activeUnit = 1 }) => {
  const [selectedUnit, setSelectedUnit] = useState<1 | 2 | 3>(activeUnit);

  const getUnitData = () => {
    switch (selectedUnit) {
      case 1:
        return {
          bab: 'BAB IV',
          title: 'MODUL AJAR UNIT 1: SIFAT KOLIGATIF LARUTAN',
          subtitle: 'Colligative Reality Lab: Rekayasa Kotak Pendingin Darurat Ramah Lingkungan',
          icon: <Atom className="w-6 h-6 text-cyan-600" />,
          data: unit1ModulAjar,
          accentColor: 'border-cyan-600 text-cyan-700',
        };
      case 2:
        return {
          bab: 'BAB V',
          title: 'MODUL AJAR UNIT 2: REDOKS & SEL ELEKTROKIMIA',
          subtitle: 'Electrochemistry Energy Challenge: Bio-Voltaic Cell & Anti-Corrosion Engineering',
          icon: <Zap className="w-6 h-6 text-amber-600" />,
          data: unit2ModulAjar,
          accentColor: 'border-amber-600 text-amber-700',
        };
      case 3:
        return {
          bab: 'BAB VI',
          title: 'MODUL AJAR UNIT 3: SENYAWA KARBON & MAKROMOLEKUL',
          subtitle: 'Carbon Future Innovation: Green Synthesis Bioplastic & Circular Bio-Economy',
          icon: <Dna className="w-6 h-6 text-emerald-600" />,
          data: unit3ModulAjar,
          accentColor: 'border-emerald-600 text-emerald-700',
        };
    }
  };

  const current = getUnitData();
  const m = current.data;

  return (
    <div className="bg-white p-6 md:p-12 rounded-2xl shadow-xl border border-slate-300 my-8 print:border-none print:shadow-none page-break-after">
      {/* Unit Selector Toolbar for on-screen viewing */}
      <div className="no-print flex items-center gap-2 mb-8 p-2 bg-slate-100 rounded-xl border border-slate-300">
        <span className="text-xs font-black uppercase tracking-wider text-slate-600 px-3">PILIH UNIT:</span>
        <button
          onClick={() => setSelectedUnit(1)}
          className={`flex-1 py-2 px-3 text-xs md:text-sm font-black rounded-lg transition-all ${
            selectedUnit === 1
              ? 'bg-slate-950 text-white shadow'
              : 'bg-white text-slate-700 hover:bg-slate-200'
          }`}
        >
          BAB IV: Sifat Koligatif
        </button>
        <button
          onClick={() => setSelectedUnit(2)}
          className={`flex-1 py-2 px-3 text-xs md:text-sm font-black rounded-lg transition-all ${
            selectedUnit === 2
              ? 'bg-slate-950 text-white shadow'
              : 'bg-white text-slate-700 hover:bg-slate-200'
          }`}
        >
          BAB V: Elektrokimia
        </button>
        <button
          onClick={() => setSelectedUnit(3)}
          className={`flex-1 py-2 px-3 text-xs md:text-sm font-black rounded-lg transition-all ${
            selectedUnit === 3
              ? 'bg-slate-950 text-white shadow'
              : 'bg-white text-slate-700 hover:bg-slate-200'
          }`}
        >
          BAB VI: Senyawa Karbon
        </button>
      </div>

      {/* Chapter Title Header */}
      <div className="border-b-4 border-slate-950 pb-5 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-white bg-slate-950 px-3.5 py-1 rounded-md">
            {current.bab}
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {m.identitas.alokasiWaktu}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {current.icon}
          <h2 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight font-display uppercase">
            {current.title}
          </h2>
        </div>
        <p className="text-sm font-bold text-slate-600 mt-2 uppercase tracking-wide">
          {current.subtitle}
        </p>
        <div className="mt-3 p-3 bg-slate-50 border-l-4 border-indigo-600 rounded-r-lg text-xs font-mono font-bold text-indigo-900">
          ALUR INOVASI CFIL: {m.identitas.alurInovasi}
        </div>
      </div>

      {/* Bagian 1: Kesiapan Peserta Didik & Analisis Pedagogis */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 text-lg font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
          <Target className="w-5 h-5 text-indigo-600" />
          <h3>1. Analisis Kesiapan Belajar & Kebutuhan Diferensiasi</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs md:text-sm space-y-2">
            <strong className="text-slate-900 block font-bold">A. Pengetahuan Awal Siswa:</strong>
            <p className="text-slate-700 leading-relaxed text-justify">{m.kesiapanPesertaDidik.pengetahuanAwal}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs md:text-sm space-y-2">
            <strong className="text-slate-900 block font-bold">B. Minat Kontekstual:</strong>
            <p className="text-slate-700 leading-relaxed text-justify">{m.kesiapanPesertaDidik.minat}</p>
          </div>
        </div>

        <div className="p-4 bg-rose-50 rounded-xl border-2 border-rose-200 text-xs md:text-sm space-y-2">
          <div className="flex items-center gap-2 text-rose-900 font-bold">
            <AlertCircle className="w-4 h-4 text-rose-600" />
            <span>Potensi Miskonsepsi Siswa Yang Wajib Didekonstruksi:</span>
          </div>
          <ul className="space-y-1.5 pl-6 list-disc text-rose-900">
            {m.kesiapanPesertaDidik.potensiMiskonsepsi.map((mis, i) => (
              <li key={i}>{mis}</li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-slate-950 text-white rounded-xl space-y-2">
          <strong className="text-amber-300 block text-xs font-black uppercase tracking-wider">
            Strategi Pembelajaran Berdiferensiasi (Differentiated Instruction)
          </strong>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-slate-400 font-bold block mb-1">Diferensiasi Konten:</span>
              <p className="text-slate-200">{m.kesiapanPesertaDidik.kebutuhanDiferensiasi.konten}</p>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-slate-400 font-bold block mb-1">Diferensiasi Proses:</span>
              <p className="text-slate-200">{m.kesiapanPesertaDidik.kebutuhanDiferensiasi.proses}</p>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-slate-400 font-bold block mb-1">Diferensiasi Produk:</span>
              <p className="text-slate-200">{m.kesiapanPesertaDidik.kebutuhanDiferensiasi.produk}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian 2: Tiga Level Representasi Kimia Johnstone */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 text-lg font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
          <Layers className="w-5 h-5 text-indigo-600" />
          <h3>2. Integrasi Tiga Level Representasi Kimia (Johnstone's Triangle)</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-slate-50 border-2 border-slate-300 rounded-xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-blue-600 text-white text-xs font-bold rounded uppercase">
                Level 1
              </span>
              <h4 className="font-bold text-slate-900 text-sm font-display">Makroskopik (Fenomena Nyata)</h4>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed text-justify">
              {m.materiPembelajaran.makroskopik}
            </p>
          </div>

          <div className="p-5 bg-slate-50 border-2 border-slate-300 rounded-xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-purple-600 text-white text-xs font-bold rounded uppercase">
                Level 2
              </span>
              <h4 className="font-bold text-slate-900 text-sm font-display">Submikroskopik (Partikel/Molekul)</h4>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed text-justify">
              {m.materiPembelajaran.submikroskopik}
            </p>
          </div>

          <div className="p-5 bg-slate-50 border-2 border-slate-300 rounded-xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-emerald-600 text-white text-xs font-bold rounded uppercase">
                Level 3
              </span>
              <h4 className="font-bold text-slate-900 text-sm font-display">Simbolik (Rumus & Persamaan)</h4>
            </div>
            <p className="text-xs font-mono font-bold text-indigo-900 bg-white p-2.5 rounded border border-slate-200">
              {m.materiPembelajaran.simbolik}
            </p>
          </div>
        </div>

        <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-xs md:text-sm text-indigo-950">
          <strong className="block mb-1 font-bold">Konteks Kehidupan & Aplikasi Industri Berkelanjutan:</strong>
          <p className="text-justify leading-relaxed">{m.materiPembelajaran.kontekstual}</p>
        </div>
      </section>

      {/* Bagian 3: Profil Lulusan & Insersi Nilai */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-black text-slate-950 border-l-4 border-slate-950 pl-3 uppercase tracking-tight font-display">
          <HeartHandshake className="w-5 h-5 text-indigo-600" />
          <h3>3. Dimensi Profil Pelajar & Insersi Karakter</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <strong className="text-xs font-black uppercase tracking-wider text-slate-900 block mb-2 font-display">
              Dimensi Profil Pelajar Pancasila:
            </strong>
            <ul className="space-y-1.5 text-xs text-slate-700 pl-4 list-disc">
              {m.dimensiProfilLulusan.map((dim, idx) => (
                <li key={idx}>{dim}</li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <strong className="text-xs font-black uppercase tracking-wider text-slate-900 block mb-2 font-display">
              Insersi Nilai Karakter & Kebangsaan:
            </strong>
            <ul className="space-y-2 text-xs text-slate-700">
              {m.materiInsersiNilai.map((val, idx) => (
                <li key={idx} className="p-2 bg-white rounded border border-slate-200">
                  {val}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
