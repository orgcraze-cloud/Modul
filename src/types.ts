export interface SchoolDocumentConfig {
  namaSekolah: string;
  namaPenyusun: string;
  nipPenyusun: string;
  namaKepalaSekolah: string;
  nipKepalaSekolah: string;
  mataPelajaran: string;
  fase: string;
  kelas: string;
  semester: string;
  tahunPelajaran: string;
  tempatTanggalPengesahan: string;
  kotaKabupaten: string;
  targetKKTP: number;
}

export type DocumentTab =
  | 'cover'
  | 'pengesahan'
  | 'kata-pengantar'
  | 'daftar-isi'
  | 'bab1'
  | 'bab2'
  | 'bab3'
  | 'bab4'
  | 'bab5'
  | 'bab6'
  | 'bab7'
  | 'bab8'
  | 'bab9'
  | 'bab10'
  | 'bab11'
  | 'lampiran'
  | 'all-print'
  | 'quality-audit';

export interface TocItem {
  id: string;
  title: string;
  chapter: string;
  page: number;
  subsections?: { id: string; title: string; page: number }[];
}

export interface AcpItem {
  elemen: string;
  cp: string;
  kompetensi: string;
  materi: string;
  pengetahuan: string;
  keterampilan: string;
  kko: string;
  buktiBelajar: string;
}

export interface TpItem {
  kodeTp: string;
  unit: string;
  materi: string;
  tujuanPembelajaran: string;
  levelKognitif: string;
  buktiKetercapaian: string;
}

export interface ProtaItem {
  no: number;
  unit: string;
  materiPokok: string;
  alokasiJp: number;
  semester: string;
  bulan: string;
}

export interface ProsemItem {
  mingguKe: number;
  pertemuanKe: number;
  materi: string;
  kodeTp: string;
  aktivitas: string;
  jp: number;
  asesmen: string;
}

export interface SoalItem {
  no: number;
  tp: string;
  indikator: string;
  materi: string;
  levelKognitif: string;
  soal: string;
  pilihan?: string[];
  kunci: string;
  pembahasan: string;
  skor: number;
  miskonsepsiTerkait?: string;
}

export interface StudentScoreItem {
  no: number;
  nama: string;
  tp: string;
  diagnostik: number;
  formatif: number;
  sumatif: number;
  nilaiAkhir: number;
  status: 'Tuntas' | 'Belum Tuntas' | 'Sangat Baik';
  tindakLanjut: string;
}
