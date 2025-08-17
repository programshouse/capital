// LangToggle.jsx
import React from "react";

const LangToggle = ({ lang, setLang }) => {
  const toggle = () => setLang(lang === "EN" ? "AR" : "EN");

  return (
    <div
      onClick={toggle}
      className="relative cursor-pointer w-16 h-8 flex items-center bg-white rounded-full p-1   shadow-inner transition-colors duration-300"
    >
      {/* الدائرة المتحركة */}
      <div
        className={`w-6 h-6 bg-[#ce9233] rounded-full shadow-md transform transition-transform duration-300 ${
          lang === "EN" ? "translate-x-0" : "translate-x-9"
        }`}
      ></div>

      {/* النصوص EN / AR */}
      <div className="absolute w-full flex justify-between px-1 text-sm font-bold text-[#ce9233]">
        <span>EN</span>
        <span>AR</span>
      </div>
    </div>
  );
};

export default LangToggle;


