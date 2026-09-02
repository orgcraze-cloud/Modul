import React from 'react';
import { tocData } from '../data/phase1_preface';
import { Bookmark, ChevronRight } from 'lucide-react';

interface Props {
  onSelectSection?: (sectionId: string) => void;
}

export const DocumentDaftarIsi: React.FC<Props> = ({ onSelectSection }) => {
  return (
    <div className="bg-white p-8 md:p-14 rounded-2xl shadow-xl border border-slate-300 my-8 print:border-none print:shadow-none page-break-after font-sans">
      <div className="text-center pb-6 border-b-4 border-slate-950">
        <span className="text-xs font-black uppercase tracking-widest text-white bg-slate-950 px-3.5 py-1 rounded-md">
          SISTEMATIKA DOKUMEN RESMI
        </span>
        <h2 className="text-2xl md:text-4xl font-black text-slate-950 mt-3 font-display uppercase tracking-tight">
          DAFTAR ISI LENGKAP
        </h2>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
          Struktur Komprehensif Perangkat Pembelajaran Kimia Fase F Kelas XII
        </p>
      </div>

      <div className="my-8 space-y-3">
        {tocData.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectSection && onSelectSection(item.id)}
            className="group p-3 rounded-xl hover:bg-slate-50 border-2 border-transparent hover:border-slate-900 transition-all cursor-pointer"
          >
            <div className="flex items-baseline justify-between gap-2 border-b border-dotted border-slate-400 pb-1">
              <div className="flex items-center gap-2 font-black text-slate-950 text-sm md:text-base group-hover:text-indigo-600 transition-colors font-display">
                <Bookmark className="w-4 h-4 text-slate-950 shrink-0" />
                <span>{item.title}</span>
              </div>
              <span className="text-xs md:text-sm font-mono font-bold text-slate-600 shrink-0">
                Hal. {item.page}
              </span>
            </div>

            {item.subsections && item.subsections.length > 0 && (
              <div className="pl-6 pt-2 space-y-1.5">
                {item.subsections.map((sub) => (
                  <div key={sub.id} className="flex items-center justify-between text-xs md:text-sm text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{sub.title}</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">Hal. {sub.page}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

