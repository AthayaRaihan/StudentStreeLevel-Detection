"use client";

import { motion } from "framer-motion";
import { User, Hash, BookOpen, Calendar } from "lucide-react";
import { FormData } from "./types";

// ── Types ─────────────────────────────────────────────────────────────────────

interface InputFieldProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  min?: number;
  max?: number;
}

interface GenderCardProps {
  value: "Laki-laki" | "Perempuan";
  label: string;
  emoji: string;
  selected: boolean;
  onSelect: () => void;
}

interface SemesterChipProps {
  value: string;
  selected: boolean;
  onSelect: () => void;
}

export interface BiodataFieldsProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: string) => void;
}

// ── Sub-components ─────────────────────────────────────────────────────────────

const InputField = ({
  id,
  label,
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  min,
  max,
}: InputFieldProps) => (
  <div className="flex flex-col gap-1.5">
    <label
      htmlFor={id}
      className="text-sm font-semibold text-slate-600 flex items-center gap-1.5"
    >
      <span className="text-indigo-400">{icon}</span>
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      min={min}
      max={max}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full px-4 py-2.5 rounded-2xl border-2 border-slate-100 bg-slate-50
        text-slate-800 placeholder-slate-300 text-sm font-medium
        outline-none transition-all duration-200
        focus:border-indigo-400 focus:bg-white focus:shadow-lg focus:shadow-indigo-100/60
        hover:border-slate-200 hover:bg-white
      "
    />
  </div>
);

const GenderCard = ({
  value,
  label,
  emoji,
  selected,
  onSelect,
}: GenderCardProps) => (
  <motion.button
    type="button"
    onClick={onSelect}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    aria-pressed={selected}
    className={`
      relative flex-1 flex flex-col items-center justify-center gap-1.5
      py-3 px-4 rounded-2xl border-2 cursor-pointer
      transition-all duration-200 font-medium text-sm
      ${
        selected
          ? "border-indigo-400 bg-indigo-50 text-indigo-700 shadow-lg shadow-indigo-100"
          : "border-slate-100 bg-slate-50 text-slate-500 hover:border-indigo-200 hover:bg-indigo-50/40"
      }
    `}
  >
    {selected && (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center"
      >
        <svg
          className="w-3 h-3 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>
    )}
    <span className="text-2xl">{emoji}</span>
    <span>{label}</span>
  </motion.button>
);

const SEMESTERS = ["1", "2", "3", "4", "5", "6", "7", "8"];

const SemesterChip = ({ value, selected, onSelect }: SemesterChipProps) => (
  <motion.button
    type="button"
    onClick={onSelect}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.94 }}
    aria-pressed={selected}
    className={`
      w-10 h-10 rounded-xl font-bold text-sm
      transition-all duration-200
      ${
        selected
          ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
          : "bg-slate-100 text-slate-500 hover:bg-indigo-100 hover:text-indigo-600"
      }
    `}
  >
    {value}
  </motion.button>
);

// ── Left Column ────────────────────────────────────────────────────────────────

export const LeftFields = ({ formData, onChange }: BiodataFieldsProps) => (
  <div className="flex flex-col gap-3.5">
    {/* Nama Lengkap */}
    <InputField
      id="nama-lengkap"
      label="Nama Lengkap"
      icon={<User className="w-3.5 h-3.5" />}
      placeholder="Masukkan nama lengkap Anda"
      value={formData.name}
      onChange={(v) => onChange("name", v)}
    />

    {/* Umur */}
    <InputField
      id="umur"
      label="Umur"
      icon={<Hash className="w-3.5 h-3.5" />}
      type="number"
      placeholder="Contoh: 20"
      value={formData.age}
      min={15}
      max={60}
      onChange={(v) => onChange("age", v)}
    />

    {/* Jenis Kelamin */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-slate-600 flex items-center gap-1.5">
        <span className="text-indigo-400">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="8" r="4" />
            <path strokeLinecap="round" d="M12 12v8m-4-4h8" />
          </svg>
        </span>
        Jenis Kelamin
      </label>
      <div className="flex gap-3">
        <GenderCard
          value="Laki-laki"
          label="Laki-laki"
          emoji="👨‍🎓"
          selected={formData.gender === "Laki-laki"}
          onSelect={() => onChange("gender", "Laki-laki")}
        />
        <GenderCard
          value="Perempuan"
          label="Perempuan"
          emoji="👩‍🎓"
          selected={formData.gender === "Perempuan"}
          onSelect={() => onChange("gender", "Perempuan")}
        />
      </div>
    </div>
  </div>
);

// ── Right Column ───────────────────────────────────────────────────────────────

export const RightFields = ({ formData, onChange }: BiodataFieldsProps) => (
  <div className="flex flex-col gap-3.5">
    {/* Program Studi */}
    <InputField
      id="program-studi"
      label="Program Studi"
      icon={<BookOpen className="w-3.5 h-3.5" />}
      placeholder="Contoh: Informatika"
      value={formData.major}
      onChange={(v) => onChange("major", v)}
    />

    {/* Semester */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-slate-600 flex items-center gap-1.5">
        <span className="text-indigo-400">
          <Calendar className="w-3.5 h-3.5" />
        </span>
        Semester
      </label>
      <div className="flex flex-wrap gap-2">
        {SEMESTERS.map((sem) => (
          <SemesterChip
            key={sem}
            value={sem}
            selected={formData.semester === sem}
            onSelect={() => onChange("semester", sem)}
          />
        ))}
      </div>
    </div>
  </div>
);
