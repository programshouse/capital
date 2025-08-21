import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

export default function Contact() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="relative w-full h-[40vh] md:h-[60vh] bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/carousel-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
        <div className="relative z-10 text-white px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            We&apos;d love to hear from you! Reach out to us anytime and we&apos;ll happily
            answer your questions.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
<div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-white">
        <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-xl rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-start gap-4">
              <div className=" bg-white p-3 rounded-full shrink-0">
                <FaPhoneAlt className="text-yellow-700 sm:text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-100 text-sm sm:text-base">+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3  bg-white rounded-full shrink-0">
                <FaEnvelope className="text-yellow-700  sm:text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-100 text-sm sm:text-base">support@example.com</p>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full shrink-0">
                <FaMapMarkerAlt className="text-yellow-700 sm:text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Office Address</h3>
                <p className="text-gray-100 text-sm sm:text-base">123 Business Street, NY</p>
              </div>
            </div>
            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full shrink-0">
                <MdAccessTime className="text-yellow-700 sm:text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Working Hours</h3>
                <p className="text-gray-100 text-sm sm:text-base">Mon - Fri: 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white text-black shadow-lg rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-4 sm:space-y-5">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none text-sm sm:text-base"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none text-sm sm:text-base"
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
</div>
      {/* Map + Office Info */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
        style={{ backgroundImage: "url('/assets/carousel-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white/5 backdrop-blur">
            <iframe
              title="Google Map"
              className="w-full h-64 sm:h-80 md:h-[360px] lg:h-[420px] border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.048042329076!2d31.235711!3d30.044420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c9b8e49f6d%3A0x123456789abcdef!2sCairo!5e0!3m2!1sen!2seg!4v1672485000000!5m2!1sen!2seg"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* Office Info */}
          <div className="relative z-10 pt-10">
            <h2 className="text-2xl sm:text-3xl text-white font-bold mb-4">Our Office</h2>
            <p className="text-gray-100 leading-relaxed mb-6 text-sm sm:text-base">
              Visit our office for inquiries or assistance. We&apos;re here to help you with
              any questions you may have about our services.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white text-sm sm:text-base">
                <span className="bg-yellow-500 p-2 rounded-full">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </span>
                123 Business Street, NY
              </li>
              <li className="flex items-center gap-3 text-white text-sm sm:text-base">
                <span className="bg-yellow-500 p-2 rounded-full">
                  <FaPhoneAlt className="text-white text-lg" />
                </span>
                +1 234 567 890
              </li>
              <li className="flex items-center gap-3 text-white text-sm sm:text-base">
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
