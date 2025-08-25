// Switcher7.jsx
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Switcher7 = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");

  const toggleLanguage = () => {
    i18n.changeLanguage(isArabic ? "en" : "ar");
  };
  useEffect(() => {
    const dir = i18n.dir();
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language, i18n]);

  return (
    <div className="flex items-center gap-2">
      {/* Arabic Label */}
      <span
        className={`text-sm font-bold transition-colors ${
          isArabic ? "text-[#ce9233] md:text-white" : "text-white"
        }`}
      >
        AR
      </span>

      {/* Toggle Switch */}
      <label className="relative inline-flex items-center cursor-pointer" aria-label="Toggle language">
        <input
          type="checkbox"
          className="sr-only"
          checked={!isArabic}          // EN = checked, AR = unchecked (matches your original)
          onChange={toggleLanguage}
        />
        <div className="w-14 h-8 rounded-full border-2 border-[#ce9233] md:border-white relative">
          <div
            className={`absolute top-0.5 h-6 w-6 rounded-full bg-[#ce9233] md:bg-white transition-all duration-300 ${
              isArabic ? "right-7" : "right-1"
            }`}
            aria-hidden="true"
          />
        </div>
      </label>

      {/* English Label */}
      <span
        className={`text-sm font-bold transition-colors ${
          !isArabic ? "text-[#ce9233] md:text-white" : "text-white"
        }`}
      >
        EN
      </span>
    </div>
  );
};

export default Switcher7;






