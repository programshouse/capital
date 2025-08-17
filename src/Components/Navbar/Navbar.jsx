import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaFacebookF, FaTwitter, FaLinkedinIn , FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import LangToggle from "../Toggle/Toggle";

const Navbar = ({ siteLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [topHidden, setTopHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [lang, setLang] = useState(siteLang || "EN");

  const pagesRef = useRef(null);
  const mobileRef = useRef(null);

  const controlTopBar = () => {
    if (window.scrollY > lastScrollY) setTopHidden(true);
    else setTopHidden(false);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlTopBar);
    return () => window.removeEventListener("scroll", controlTopBar);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pagesRef.current && !pagesRef.current.contains(e.target)) setPagesOpen(false);
      if (mobileRef.current && !mobileRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isRTL = lang === "AR";

  return (
    <div className={`relative z-50 ${isRTL ? "direction-rtl" : "direction-ltr"}`}>
      {/* Top Info Bar */}
      <div
        className={`w-full bg-[#ce9233] text-white transition-transform duration-300 ${
          topHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h2 className="font-bold text-2xl md:text-3xl">WELDORK</h2>

          {/* Desktop Info */}
<div className="hidden md:flex items-center space-x-4 text-sm">
  <div className="flex items-center space-x-1">
    <FaMapMarkerAlt className="text-white" />
    <span className="text-base text-white">123 Street, New York, USA</span>
  </div>
  <div className="flex items-center space-x-1">
    <FaEnvelope className="text-white" />
    <span className="text-base text-white">info@example.com</span>
  </div>
  <div className="flex items-center space-x-1">
    <FaPhoneAlt className="text-white" />
    <span className="text-base text-white">+012 345 67890</span>
  </div>
</div>

          {/* Language toggle */}
          <div className="flex items-center">
            <LangToggle lang={lang} setLang={setLang} className="px-4 py-2 text-lg" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md mx-auto  text-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 justify-between items-center">
              <div className="flex space-x-6 items-center">
                <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-black">About</Link>
                <Link to="/services" className="text-gray-700 hover:text-black">Services</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-black">Contact</Link>
                <div className="relative" ref={pagesRef}>
                  <button
                    onClick={() => setPagesOpen(!pagesOpen)}
                    className="text-gray-700 hover:text-black flex items-center space-x-1"
                  >
                    <span>Pages</span>
                    <FaChevronDown className="text-sm" />
                  </button>
                  {pagesOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                      <Link to="/features" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Features</Link>
                      <Link to="/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Team</Link>
                      <Link to="/testimonial" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Testimonial</Link>
                      <Link to="/appointment" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Appointment</Link>
                      <Link to="/404" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">404 Page</Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-4">
            
                <Link
                  to="/quote"
                  className="px-4 py-2 bg-[#ce9233] text-white rounded hover:bg-yellow-700"
                >
                  Get A Quote
                </Link>
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 flex flex-col gap-1"
              >
                <span className="block w-6 h-[2px] bg-gray-700"></span>
                <span className="block w-6 h-[2px] bg-gray-700"></span>
                <span className="block w-6 h-[2px] bg-gray-700"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div ref={mobileRef} className="lg:hidden bg-white border-t border-gray-200">
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</Link>
            <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</Link>
            <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</Link>
                <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</Link>
            <button
              onClick={() => setPagesOpen(!pagesOpen)}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center justify-between"
            >
              Pages <FaChevronDown className="text-sm" />
            </button>
            {pagesOpen && (
              <div className="pl-4">
                <Link to="/features" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Features</Link>
                <Link to="/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Team</Link>
                <Link to="/testimonial" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Testimonial</Link>
                <Link to="/appointment" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Appointment</Link>
                <Link to="/404" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">404 Page</Link>

              </div>
            )}

          
            <Link
              to="/quote"
              className="block px-4 py-2 bg-[#ce9233] text-white rounded mx-4 my-2 text-center hover:bg-yellow-700"
            >
              Get A Quote
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;














