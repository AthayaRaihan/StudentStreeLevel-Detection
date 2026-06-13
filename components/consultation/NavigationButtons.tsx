import React from "react";

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  onFinish: () => void;
  isNextDisabled: boolean;
  isFirst: boolean;
  isLast: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrev,
  onNext,
  onFinish,
  isNextDisabled,
  isFirst,
  isLast,
}) => {
  return (
    <div className="flex w-full justify-between items-center">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className="px-8 py-3 rounded-lg font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        Kembali
      </button>

      {isLast ? (
        <button
          onClick={onFinish}
          disabled={isNextDisabled}
          className="px-8 py-3 rounded-lg font-semibold text-white bg-linear-to-r from-green-500 to-cyan-500 hover:opacity-90 shadow-lg transform hover:scale-105 transition-all disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed"
        >
          Selesai Konsultasi
        </button>
      ) : (
        <button
          onClick={onNext}
          disabled={isNextDisabled}
          className="px-8 py-3 rounded-lg font-semibold text-white bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-md transition-all"
        >
          Selanjutnya
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
