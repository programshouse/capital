// Footer.jsx
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top: columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Our Office */}
          <div>
            <h5 className="uppercase text-white mb-4 font-semibold">Our Office</h5>
            <p className="mb-2 flex items-center gap-2 text-white hover:text-yellow-600">
              <FaMapMarkerAlt className="text-yellow-600" />
              123 Street, New York, USA
            </p>
            <p className="mb-2 flex items-center gap-2 text-white hover:text-yellow-600">
              <FaPhoneAlt className="text-yellow-600" />
              +012 345 67890
            </p>
            <p className="mb-2 flex items-center gap-2 text-white hover:text-yellow-600">
              <FaEnvelope className="text-yellow-600" />
              info@example.com
            </p>
            <div className="flex pt-3 space-x-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white text-yellow-600 p-2 rounded" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white text-yellow-600 p-2 rounded" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white text-yellow-600 p-2 rounded" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white text-yellow-600 p-2 rounded" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="uppercase text-white mb-4 font-semibold">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="/about" className="text-white hover:text-yellow-600">About Us</a></li>
              <li><a href="/contact" className="text-white hover:text-yellow-600">Contact Us</a></li>
              <li><a href="/services" className="text-white hover:text-yellow-600">Our Services</a></li>
              <li><a href="/terms" className="text-white hover:text-yellow-600">Terms &amp; Conditions</a></li>
              <li><a href="/support" className="text-white hover:text-yellow-600">Support</a></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h5 className="uppercase text-white mb-4 font-semibold">Business Hours</h5>
            <p className="uppercase mb-0">Monday - Friday</p>
            <p>09:00 am - 07:00 pm</p>
            <p className="uppercase mb-0">Saturday</p>
            <p>09:00 am - 12:00 pm</p>
            <p className="uppercase mb-0">Sunday</p>
            <p>Closed</p>
          </div>

          {/* Gallery */}
          <div>
            <h5 className="uppercase text-white mb-4 font-semibold">Gallery</h5>
            <div className="grid grid-cols-3 gap-1">
              <a href="/gallery">
                <img className="w-full h-full object-cover" src="assets/service-2.jpg" alt="Service 2" />
              </a>
              <a href="/gallery">
                <img className="w-full h-full object-cover" src="assets/service-3.jpg" alt="Service 3" />
              </a>
              <a href="/gallery">
                <img className="w-full h-full object-cover" src="assets/service-4.jpg" alt="Service 4" />
              </a>
              <a href="/gallery">
                <img className="w-full h-full object-cover" src="assets/service-5.jpg" alt="Service 5" />
              </a>
              <a href="/gallery">
                <img className="w-full h-full object-cover" src="assets/service-6.jpg" alt="Service 6" />
              </a>
            </div>
          </div>
        </div>

<div className="mt-10 border-t border-gray-800/80 pt-6">
  <p className="text-sm text-gray-400  text-center">
    <p>© {new Date().getFullYear()} ProgramsHouse. All Rights Reserved.</p>
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;



