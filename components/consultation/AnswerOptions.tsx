import React from "react";
import { Check } from "lucide-react";

interface AnswerOptionsProps {
  options: { label: string; value: number }[];
  selectedValue: number | null;
  onChange: (value: number) => void;
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="mt-10 w-full max-w-3xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`relative p-5 rounded-xl border-2 text-center transition-all duration-200 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400
              ${
                selectedValue === option.value
                  ? "bg-indigo-600 border-indigo-700 text-white shadow-lg scale-105"
                  : "bg-white border-gray-200 text-gray-700 hover:bg-indigo-50 hover:border-indigo-300 hover:-translate-y-1"
              }
            `}
          >
            {selectedValue === option.value && (
              <span className="absolute top-2 right-2 bg-white text-indigo-600 rounded-full p-0.5">
                <Check size={14} />
              </span>
            )}
            <span className="text-md font-semibold">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnswerOptions;
