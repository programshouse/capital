import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import LangToggle from "../Toggle/Toggle";

const Navbar = ({ siteLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [lang, setLang] = useState(siteLang || "EN");

  const pagesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pagesRef.current && !pagesRef.current.contains(e.target)) {
        setPagesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isRTL = lang === "AR";

  return (
    <div className={`${isRTL ? "direction-rtl" : "direction-ltr"}`}>
      {/* ================= Top Info Bar (YELLOW) ================= */}
      <div className="bg-[#ce9233] text-white">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <h2 className="font-bold text-2xl md:text-3xl">CAPITAL</h2>

          {/* Desktop info + Lang toggle */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span className="text-base">123 Street, New York, USA</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span className="text-base">info@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span className="text-base">+012 345 67890</span>
            </div>

            {/* Language toggle — desktop */}
            <div className="ml-4">
              <LangToggle lang={lang} setLang={setLang} />
            </div>
          </div>

          {/* Mobile menu toggle ONLY */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="p-2 rounded bg-white"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <IoMdClose className="text-2xl text-gray-700" />
              ) : (
                <IoMdMenu className="text-2xl text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ================= Main NAV (WHITE) — desktop only ================= */}
      <nav className="bg-white shadow-md sticky top-0 z-50 hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to="/" className="text-gray-700 hover:text-[#ce9233]">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-[#ce9233]">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-[#ce9233]">Services</Link>
                        <Link to="/portfolio" className="text-gray-700 hover:text-[#ce9233]">portfolio</Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#ce9233]">Contact</Link>

              {/* Pages dropdown desktop */}
              <div className="relative" ref={pagesRef}>
                <button
                  onClick={() => setPagesOpen((v) => !v)}
                  className="text-gray-700 hover:text-[#ce9233] flex items-center gap-1"
                >
                  <span>Pages</span>
                  <span className="text-sm">▼</span>
                </button>
                {pagesOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                    <Link to="/features" className="block px-4 py-2 hover:bg-gray-100">Features</Link>
                    <Link to="/team" className="block px-4 py-2 hover:bg-gray-100">Our Team</Link>
                    <Link to="/testimonial" className="block px-4 py-2 hover:bg-gray-100">Testimonial</Link>
                    <Link to="/appointment" className="block px-4 py-2 hover:bg-gray-100">Appointment</Link>
                    <Link to="/404" className="block px-4 py-2 hover:bg-gray-100">404 Page</Link>
                  </div>
                )}
              </div>
            </div>

            <Link
              to="/quote"
              className="px-4 py-2 bg-[#ce9233] text-white rounded hover:bg-yellow-700"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= Mobile menu ================= */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 hover:bg-gray-100">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-3 hover:bg-gray-100">About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block px-4 py-3 hover:bg-gray-100">Services</Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)} className="block px-4 py-3 hover:bg-gray-100">portfolio</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 hover:bg-gray-100">Contact</Link>

          <button
            onClick={() => setPagesOpen((v) => !v)}
            className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center justify-between"
          >
            Pages <span className="text-sm">▼</span>
          </button>
          {pagesOpen && (
            <div className="pb-2">
              <Link to="/features" onClick={() => setIsOpen(false)} className="block px-8 py-2 hover:bg-gray-100">Features</Link>
              <Link to="/team" onClick={() => setIsOpen(false)} className="block px-8 py-2 hover:bg-gray-100">Our Team</Link>
              <Link to="/testimonial" onClick={() => setIsOpen(false)} className="block px-8 py-2 hover:bg-gray-100">Testimonial</Link>
              <Link to="/appointment" onClick={() => setIsOpen(false)} className="block px-8 py-2 hover:bg-gray-100">Appointment</Link>
              <Link to="/404" onClick={() => setIsOpen(false)} className="block px-8 py-2 hover:bg-gray-100">404 Page</Link>
            </div>
          )}


          <div className="px-4 py-3 border-t text-[#ce9233] border-gray-200">
            <LangToggle lang={lang} setLang={setLang} />
          </div>

          <Link
            to="/quote"
            onClick={() => setIsOpen(false)}
            className="block mx-4 my-3 text-center px-4 py-2 bg-[#ce9233] text-white rounded hover:bg-yellow-700"
          >
            Get A Quote
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;


























