// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaChevronDown,
} from "react-icons/fa";

// استدعاء الكومبوننت الجديد
import LangToggle from "../Toggle/Toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);      
  const [pagesOpen, setPagesOpen] = useState(false); 
  const [topHidden, setTopHidden] = useState(false); 
  const [lastScrollY, setLastScrollY] = useState(0);
  const [lang, setLang] = useState("EN");

  const controlTopBar = () => {
    if (window.scrollY > lastScrollY) setTopHidden(true);
    else setTopHidden(false);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlTopBar);
    return () => window.removeEventListener("scroll", controlTopBar);
  }, [lastScrollY]);

  return (
    <div className="relative z-50">

      {/* Top Info Bar */}
      <div
        className={`w-full bg-[#ce9233] text-white transition-transform duration-300 ${
          topHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center text-sm">
          <h2 className="font-bold text-3xl">WELDORK</h2>

          <div className="ml-auto flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FaMapMarkerAlt /> <span className="text-base">123 Street, New York, USA</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaEnvelope /> <span className="text-base">info@example.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaPhoneAlt /> <span className="text-base">+012 345 67890</span>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" className="bg-white text-lg text-[#ce9233] p-2 "><FaFacebookF /></a>
              <a href="#" className="bg-white text-lg text-[#ce9233] p-2"><FaTwitter /></a>
              <a href="#" className="bg-white  text-lg  text-[#ce9233] p-2"><FaLinkedinIn /></a>
            </div>

            {/* Language Toggle */}
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Brand */}
            {/* <div className="flex-shrink-0">
              <Link to="/" className="font-bold text-2xl text-gray-900">WELDORK</Link>
            </div> */}

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6 items-center">
              <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-black">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-black">Services</Link>

              {/* Dropdown */}
              <div className="relative">
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

              <Link to="/contact" className="text-gray-700 hover:text-black">Contact</Link>
            </div>

            {/* Get A Quote */}
            <div className="hidden lg:block">
              <Link
                to="/quote"
                className="px-4 py-2 bg-[#ce9233] text-white rounded hover:bg-yellow-700"
              >
                Get A Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded border border-gray-400 text-gray-700 hover:text-black hover:border-black"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</Link>
            <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</Link>
            <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</Link>
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
            <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</Link>
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






