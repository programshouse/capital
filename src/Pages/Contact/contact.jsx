import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

export default function Contact() {
  return (
    <div className="w-full">
      {/* ✅ Hero Section */}
      <section className="bg-[url('/assets/carousel-2.jpg')] bg-cover bg-center py-16 text-center text-white relative">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-3 text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Reach out to us anytime and we'll happily
            answer your questions.
          </p>
        </div>
      </section>

      {/* ✅ Contact Info + Form */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        {/* Left Side - Info */}
        <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-xl rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-100">+1 234 567 890</p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-100">support@example.com</p>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Office Address</h3>
                <p className="text-gray-100">123 Business Street, NY</p>
              </div>
            </div>
            {/* Working Hours */}
            <div className="flex items-center gap-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <MdAccessTime className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Working Hours</h3>
                <p className="text-gray-100">Mon - Fri: 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white font-medium py-3 rounded-lg hover:bg-yellow-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ✅ Map + Office Info */}
      <section className="relative bg-gray-900 text-white py-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/assets/office-bg.jpg')] bg-cover bg-center"
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              className="w-full h-80"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.999730105682!2d-73.99108338459617!3d40.730610079329454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQzJzUwLjIiTiA3M8KwNTknMzMuNyJX!5e0!3m2!1sen!2sus!4v1623754012386!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Office Info */}
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Our Office</h2>
            <p className="text-gray-200 leading-relaxed mb-6">
              Visit our office for inquiries or assistance. We're here to help you
              with any questions you may have about our services.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="bg-yellow-500 p-2 rounded-full">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </span>
                123 Business Street, NY
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-yellow-500 p-2 rounded-full">
                  <FaPhoneAlt className="text-white text-lg" />
                </span>
                +1 234 567 890
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-yellow-500 p-2 rounded-full">
                  <FaEnvelope className="text-white text-lg" />
                </span>
                support@example.com
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}










