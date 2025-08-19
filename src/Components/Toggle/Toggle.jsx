import React, { useState } from "react";

const Switcher7 = () => {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setIsArabic((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Arabic Label */}
      <span
        className={`text-sm font-bold transition-colors ${
          isArabic ?  "text-[#ce9233] md:text-white" : "text-gray-500"
        }`}
      >
        AR
      </span>

      {/* Toggle Switch */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={!isArabic}
          onChange={toggleLanguage}
        />
        <div className="w-14 h-8 rounded-full border-2 border-[#ce9233] md:border-white relative">
          <div
            className={`absolute top-0.5 h-6 w-6 rounded-full bg-[#ce9233]  md:bg-white transition-all duration-300 ${
              isArabic ? "right-7" : "right-1"
            }`}
          />
        </div>
      </label>

      {/* English Label */}
      <span
        className={`text-sm font-bold transition-colors ${
          !isArabic ? "text-[#ce9233] md:text-white" : "text-gray-500"
        }`}
      >
        EN
      </span>
    </div>
  );
};

export default Switcher7;





