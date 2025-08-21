import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // <-- use NavLink for active state
import { IoMdClose, IoMdMenu } from "react-icons/io";
import LangToggle from "../Toggle/Toggle";

const Navbar = ({ siteLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState(siteLang || "EN");
  const [scrolled, setScrolled] = useState(false);

  const isRTL = lang === "AR";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // shared link styles
  const baseLink =
    "px-2 py-1 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white/50";
  const hoverLink = "hover:bg-white/10 hover:text-white";
  const inactiveLink = "text-white/90";
  const activeLink = "bg-white/20 text-white font-semibold";

  return (
    <header className={`${isRTL ? "direction-rtl" : "direction-ltr"}`}>
      {/* Spacer to prevent layout shift because nav is fixed */}
      <div className="h-16" />

      {/* Fixed nav (sticky behavior) */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-[#ce9233] transition-shadow ${
          scrolled ? "shadow-lg" : "shadow-md"
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="h-16 flex items-center justify-between ">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 shrink-0 ">
              <img
                src="assets/logo2.png"
                alt="Capital Company"
                className="w-20 h-20"
              />
              {/* <span className="font-extrabold tracking-wide text-white">
                CAPITAL
              </span> */}
            </a>

            {/* Links (desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${baseLink} ${hoverLink} ${
                    isActive ? activeLink : inactiveLink
                  }`
                }
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${baseLink} ${hoverLink} ${
                    isActive ? activeLink : inactiveLink
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${baseLink} ${hoverLink} ${
                    isActive ? activeLink : inactiveLink
                  }`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `${baseLink} ${hoverLink} ${
                    isActive ? activeLink : inactiveLink
                  }`
                }
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${baseLink} ${hoverLink} ${
                    isActive ? activeLink : inactiveLink
                  }`
                }
              >
                Contact
              </NavLink>
            </div>

            {/* Lang toggle (desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <LangToggle lang={lang} setLang={setLang} />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden p-2 rounded bg-white border border-gray-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <IoMdClose className="text-2xl text-gray-700" />
              ) : (
                <IoMdMenu className="text-2xl text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 flex items-center justify-between">
              <LangToggle lang={lang} setLang={setLang} />
            </div>
            <div className="py-2">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 hover:bg-gray-100 ${
                    isActive ? "font-semibold text-[#ce9233]" : "text-gray-800"
                  }`
                }
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 hover:bg-gray-100 ${
                    isActive ? "font-semibold text-[#ce9233]" : "text-gray-800"
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 hover:bg-gray-100 ${
                    isActive ? "font-semibold text-[#ce9233]" : "text-gray-800"
                  }`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/portfolio"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 hover:bg-gray-100 ${
                    isActive ? "font-semibold text-[#ce9233]" : "text-gray-800"
                  }`
                }
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 hover:bg-gray-100 ${
                    isActive ? "font-semibold text-[#ce9233]" : "text-gray-800"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;




























