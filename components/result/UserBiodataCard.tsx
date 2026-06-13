"use client";

import { motion } from "framer-motion";
import { User, Hash, GraduationCap, BookOpen, Calendar } from "lucide-react";
import { FormData } from "@/components/biodata/types";

interface UserBiodataCardProps {
  biodata: FormData;
}

const InfoChip = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-indigo-50/60 border border-indigo-100/60">
    <span className="text-indigo-400 flex-shrink-0">{icon}</span>
    <div className="min-w-0">
      <p className="text-[10px] font-semibold text-indigo-400 uppercase tracking-wider leading-none mb-0.5">
        {label}
      </p>
      <p className="text-sm font-semibold text-slate-700 truncate">{value}</p>
    </div>
  </div>
);

const UserBiodataCard = ({ biodata }: UserBiodataCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="w-full max-w-2xl mx-auto mb-6"
    >
      {/* Header strip */}
      <div className="flex items-center gap-2 mb-3 px-1">
        <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
          <User className="w-3 h-3 text-indigo-500" />
        </div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
          Data Konsultan
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-md shadow-slate-100/60 px-5 py-4">
        {/* Name row */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-base">
              {biodata.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <p className="font-bold text-slate-800 text-base leading-tight">
              {biodata.name}
            </p>
            <p className="text-xs text-slate-400 mt-0.5">{biodata.gender}</p>
          </div>
        </div>

        {/* Info chips grid */}
        <div className="grid grid-cols-3 gap-2.5">
          <InfoChip
            icon={<Hash className="w-3.5 h-3.5" />}
            label="Umur"
            value={`${biodata.age} tahun`}
          />
          <InfoChip
            icon={<BookOpen className="w-3.5 h-3.5" />}
            label="Program Studi"
            value={biodata.major}
          />
          <InfoChip
            icon={<Calendar className="w-3.5 h-3.5" />}
            label="Semester"
            value={`Semester ${biodata.semester}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default UserBiodataCard;
