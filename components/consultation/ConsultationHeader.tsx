import React from "react";

interface ConsultationHeaderProps {
  current: number;
  total: number;
}

const ConsultationHeader: React.FC<ConsultationHeaderProps> = ({
  current,
  total,
}) => {
  return (
    <header className="w-full pt-8 px-10">
      <div className="flex justify-between items-center">
        <div>
          
          <p className="text-sm text-gray-500">
            Jawablah setiap pertanyaan sesuai dengan kondisi yang Anda rasakan
            dalam beberapa waktu terakhir.
          </p>
        </div>
        <div className="text-right">
        </div>
      </div>
    </header>
  );
};

export default ConsultationHeader;
