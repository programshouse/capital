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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Our Office */}
          <div>
            <h5 className="uppercase text-white mb-4 font-semibold">Our Office</h5>
            <p className="mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              123 Street, New York, USA
            </p>
            <p className="mb-2 flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500" />
              +012 345 67890
            </p>
            <p className="mb-2 flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              info@example.com
            </p>
            <div className="flex pt-3 space-x-2">
              <a href="#" className="bg-white text-gray-900 p-2 rounded">
                <FaTwitter />
              </a>
              <a href="#" className="bg-white text-gray-900 p-2 rounded">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-white text-gray-900 p-2 rounded">
                <FaYoutube />
              </a>
              <a href="#" className="bg-white text-gray-900 p-2 rounded">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="uppercase text-white mb-4 font-semibold">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Our Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Support</a>
              </li>
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
              <img className="w-full h-full object-cover" src="assets/service-1.jpg" alt="Service 1" />
              <img className="w-full h-full object-cover" src="assets/service-2.jpg" alt="Service 2" />
              <img className="w-full h-full object-cover" src="assets/service-3.jpg" alt="Service 3" />
              <img className="w-full h-full object-cover" src="assets/service-4.jpg" alt="Service 4" />
              <img className="w-full h-full object-cover" src="assets/service-5.jpg" alt="Service 5" />
              <img className="w-full h-full object-cover" src="assets/service-6.jpg" alt="Service 6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

