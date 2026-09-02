import { SchoolDocumentConfig } from '../types';

export const defaultDocumentConfig: SchoolDocumentConfig = {
  namaSekolah: 'SMA Negeri 1 Prestasi Mandiri / MA Unggulan Sains',
  namaPenyusun: 'Alan Sariadi Suhadi, S.Pd.',
  nipPenyusun: '19880715 201201 1 004',
  namaKepalaSekolah: 'Dr. H. Muhammad Arifin, M.Pd.',
  nipKepalaSekolah: '19750312 199903 1 002',
  mataPelajaran: 'Kimia',
  fase: 'F',
  kelas: 'XII',
  semester: 'Ganjil / Semester 1',
  tahunPelajaran: '2026/2027',
  tempatTanggalPengesahan: 'Jakarta, 14 Juli 2026',
  kotaKabupaten: 'Jakarta',
  targetKKTP: 75,
};

const STORAGE_KEY = 'cfil_chemistry_doc_config_v2';

export function loadSavedDocumentConfig(): SchoolDocumentConfig {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...defaultDocumentConfig, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error('Failed to load document config from localStorage', e);
  }
  return defaultDocumentConfig;
}

export function saveDocumentConfig(config: SchoolDocumentConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error('Failed to save document config to localStorage', e);
  }
}
