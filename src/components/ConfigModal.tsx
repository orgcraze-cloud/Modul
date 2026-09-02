import React, { useState } from 'react';
import { SchoolDocumentConfig } from '../types';
import { saveDocumentConfig, defaultDocumentConfig } from '../data/documentConfig';
import { X, Save, RotateCcw, Building, User, Calendar, MapPin, Award } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  config: SchoolDocumentConfig;
  onSave: (newConfig: SchoolDocumentConfig) => void;
}

export const ConfigModal: React.FC<Props> = ({ isOpen, onClose, config, onSave }) => {
  const [formData, setFormData] = useState<SchoolDocumentConfig>(config);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'targetKKTP' ? Number(value) : value,
    }));
  };

  const handleReset = () => {
    setFormData(defaultDocumentConfig);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveDocumentConfig(formData);
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border-2 border-slate-900 overflow-hidden my-8 animate-in fade-in zoom-in duration-200">
        <div className="bg-slate-950 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building className="w-5 h-5 text-amber-300" />
            <h3 className="text-lg font-black font-display uppercase tracking-tight">
              PENGATURAN IDENTITAS SEKOLAH & GURU
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs md:text-sm">
          <p className="text-slate-600">
            Perubahan data di bawah ini akan langsung diperbarui secara otomatis di seluruh lembar Cover, Pengesahan, Kata Pengantar, Modul Ajar, hingga Lampiran:
          </p>

          <div className="space-y-3">
            <div>
              <label className="font-bold text-slate-900 block mb-1">Nama Satuan Pendidikan (Sekolah/Madrasah):</label>
              <input
                type="text"
                name="namaSekolah"
                value={formData.namaSekolah}
                onChange={handleChange}
                className="w-full p-2.5 rounded-lg border-2 border-slate-300 focus:border-slate-950 focus:outline-none font-medium text-slate-900"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-900 block mb-1">Nama Guru Penyusun (Lengkap Gelar):</label>
                <input
                  type="text"
                  name="namaPenyusun"
                  value={formData.namaPenyusun}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg border-2 border-slate-300 focus:border-slate-950 focus:outline-none font-medium text-slate-900"
                  required
                />
              </div>
              <div>
                <label className="font-bold text-slate-900 block mb-1">NIP Guru Penyusun:</label>
                <input
                  type="text"
                  name="nipPenyusun"
                  value={formData.nipPenyusun}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg border-2 border-slate-300 focus:border-slate-950 focus:outline-none font-medium text-slate-900"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-900 block mb-1">Nama Kepala Sekolah / Madrasah:</label>
                <input
                  type="text"
                  name="namaKepalaSekolah"
                  value={formData.namaKepalaSekolah}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg border-2 border-slate-300 focus:border-slate-950 focus:outline-none font-medium text-slate-900"
                  required
                />
              </div>
              <div>
                <label className="font-bold text-slate-900 block mb-1">NIP Kepala Sekolah:</label>
                <input
                  type="text"
                  name="nipKepalaSekolah"
                  value={formData.nipKepalaSekolah}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg border-2 border-slate-300 focus:border-slate-950 focus:outline-none font-medium text-slate-900"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="font-bold text-slate-900 block mb-1">Kota / Kabupaten:</label>
                <input
                  type="text"
                  name="kotaKabupaten"
                  value={formData.kotaKabupaten}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg border-2 border-slate-300 focus:border-slate-950 focus:outline-none font-medium text-slate-900"
                  required
                />
              </div>
              <div>
                <label className="font-bold text-slate-900 block mb-1">Tempat & Tanggal Pengesahan:</label>
                <input
                  type="text"
                  name="tempatTanggalPengesahan"
                  value={formData.tempatTanggalPengesahan}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg border-2 border-slate-300 focus:border-slate-950 focus:outline-none font-medium text-slate-900"
                  required
                />
              </div>
              <div>
                <label className="font-bold text-slate-900 block mb-1">Tahun Pelajaran:</label>
                <input
                  type="text"
                  name="tahunPelajaran"
                  value={formData.tahunPelajaran}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg border-2 border-slate-300 focus:border-slate-950 focus:outline-none font-medium text-slate-900"
                  required
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-900 block mb-1">Kriteria Ketuntasan Minimal (KKTP):</label>
              <input
                type="number"
                name="targetKKTP"
                value={formData.targetKKTP}
                onChange={handleChange}
                min={60}
                max={100}
                className="w-36 p-2.5 rounded-lg border-2 border-slate-300 focus:border-slate-950 focus:outline-none font-medium text-slate-900"
                required
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-rose-700 hover:bg-rose-50 rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Kembalikan Default
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2 text-xs font-black text-white bg-slate-950 hover:bg-slate-800 rounded-lg shadow-md transition-colors"
              >
                <Save className="w-4 h-4 text-emerald-400" />
                Simpan Konfigurasi
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
