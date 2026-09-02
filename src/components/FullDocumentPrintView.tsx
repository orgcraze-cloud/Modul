import React from 'react';
import { SchoolDocumentConfig } from '../types';
import { DocumentCover } from './DocumentCover';
import { DocumentPengesahan } from './DocumentPengesahan';
import { DocumentKataPengantar } from './DocumentKataPengantar';
import { DocumentDaftarIsi } from './DocumentDaftarIsi';
import { Bab1View } from './Bab1View';
import { Bab2View } from './Bab2View';
import { Bab3View } from './Bab3View';
import { ModulAjarView } from './ModulAjarView';
import { AsesmenView } from './AsesmenView';
import { RemedialPengayaanView } from './RemedialPengayaanView';
import { LampiranView } from './LampiranView';

interface Props {
  config: SchoolDocumentConfig;
}

export const FullDocumentPrintView: React.FC<Props> = ({ config }) => {
  return (
    <div className="space-y-12">
      <div className="page-break-after">
        <DocumentCover config={config} />
      </div>

      <div className="page-break-after">
        <DocumentPengesahan config={config} />
      </div>

      <div className="page-break-after">
        <DocumentKataPengantar config={config} />
      </div>

      <div className="page-break-after">
        <DocumentDaftarIsi />
      </div>

      <div className="page-break-after">
        <Bab1View config={config} />
      </div>

      <div className="page-break-after">
        <Bab2View config={config} />
      </div>

      <div className="page-break-after">
        <Bab3View config={config} />
      </div>

      <div className="page-break-after">
        <ModulAjarView config={config} activeUnit={1} />
      </div>

      <div className="page-break-after">
        <ModulAjarView config={config} activeUnit={2} />
      </div>

      <div className="page-break-after">
        <ModulAjarView config={config} activeUnit={3} />
      </div>

      <div className="page-break-after">
        <AsesmenView config={config} />
      </div>

      <div className="page-break-after">
        <RemedialPengayaanView config={config} />
      </div>

      <div className="page-break-after">
        <LampiranView config={config} />
      </div>
    </div>
  );
};
