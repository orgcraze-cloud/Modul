import React from 'react';
import { SchoolDocumentConfig } from '../types';
import { kataPengantarFullText } from '../data/phase1_preface';

interface Props {
  config: SchoolDocumentConfig;
}

export const DocumentKataPengantar: React.FC<Props> = ({ config }) => {
  const paragraphs = kataPengantarFullText
    .split('\n\n')
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  return (
    <div className="bg-white p-8 md:p-14 rounded-2xl shadow-xl border border-slate-300 my-8 print:border-none print:shadow-none page-break-after font-sans">
      <div className="text-center pb-6 border-b-4 border-slate-950">
        <span className="text-xs font-black uppercase tracking-widest text-white bg-slate-950 px-3.5 py-1 rounded-md">
          BAGIAN AWAL DOKUMEN
        </span>
        <h2 className="text-2xl md:text-4xl font-black text-slate-950 mt-3 font-display uppercase tracking-tight">
          KATA PENGANTAR
        </h2>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
          Transformasi Pedagogik & Mutu Pembelajaran Kimia Abad Ke-21
        </p>
      </div>

      <div className="my-8 space-y-4 text-slate-800 leading-relaxed text-justify text-sm md:text-base">
        {paragraphs.map((p, idx) => (
          <p key={idx} className="indent-8 font-normal">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-12 flex justify-end">
        <div className="text-center w-72 space-y-16">
          <div>
            <p className="text-sm font-semibold text-slate-700">{config.tempatTanggalPengesahan}</p>
            <p className="text-sm font-black text-slate-950 uppercase tracking-wider font-display">Penyusun,</p>
          </div>
          <div>
            <p className="font-black text-slate-950 underline underline-offset-4 tracking-wide text-sm font-display">
              {config.namaPenyusun}
            </p>
            <p className="text-xs font-mono font-medium text-slate-600">NIP. {config.nipPenyusun}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

