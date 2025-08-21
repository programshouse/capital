import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Contact() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="relative w-full h-[40vh] md:h-[60vh] bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed flex items-center justify-start"
        style={{ backgroundImage: "url('/assets/carousel-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
        <div className="relative z-10 text-white px-16 text-start max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-3 text-base md:text-xl max-w-2xl">
            We&apos;d love to hear from you! Reach out to us anytime and we&apos;ll happily
            answer your questions.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <div className="bg-white">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-white">
          <div className="bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 shadow-xl rounded-2xl p-6 sm:p-8 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-4">
                <div className=" bg-white p-3 rounded-full shrink-0">
                  <FaPhoneAlt className="text-yellow-700 sm:text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  {/* link to phone */}
                  <p className="text-gray-100 text-sm sm:text-base">
                    <a href="tel:+1234567890" className="  decoration-transparent hover:decoration-current">
                      +1 234 567 890
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3  bg-white rounded-full shrink-0">
                  <FaEnvelope className="text-yellow-700  sm:text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  {/* link to email */}
                  <p className="text-gray-100 text-sm sm:text-base">
                    <a href="mailto:support@example.com" className="  decoration-transparent hover:decoration-current">
                      support@example.com
                    </a>
                  </p>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shrink-0">
                  <FaMapMarkerAlt className="text-yellow-700 sm:text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Office Address</h3>
                  {/* link to maps */}
                  <p className="text-gray-100 text-sm sm:text-base">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=123+Business+Street,+NY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="  decoration-transparent hover:decoration-current"
                    >
                      123 Business Street, NY
                    </a>
                  </p>
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

          {/* Right: Form (Formik + Yup) */}
          <div className="bg-white text-black shadow-lg rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">Send Us a Message</h2>

            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={Yup.object({
                name: Yup.string().trim().min(2, "Too short").required("Required"),
                email: Yup.string().email("Invalid email").required("Required"),
                message: Yup.string().trim().min(10, "At least 10 characters").required("Required"),
              })}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                // no side effects requested; just reset
                resetForm();
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4 sm:space-y-5">
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none text-sm sm:text-base"
                    />
                    <ErrorMessage name="name" component="div" className="mt-1 text-sm text-red-600" />
                  </div>
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none text-sm sm:text-base"
                    />
                    <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
                  </div>
                  <div>
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none text-sm sm:text-base"
                    />
                    <ErrorMessage name="message" component="div" className="mt-1 text-sm text-red-600" />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-600 text-white font-medium py-3 rounded-lg hover:bg-yellow-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </Form>
              )}
            </Formik>
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
                <a
                  href="https://www.google.com/maps/search/?api=1&query=123+Business+Street,+NY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="  decoration-transparent hover:decoration-current"
                >
                  123 Business Street, NY
                </a>
              </li>
              <li className="flex items-center gap-3 text-white text-sm sm:text-base">
                <span className="bg-yellow-500 p-2 rounded-full">
                  <FaPhoneAlt className="text-white text-lg" />
                </span>
                <a href="tel:+1234567890" className="  decoration-transparent hover:decoration-current">
                  +1 234 567 890
                </a>
              </li>
              <li className="flex items-center gap-3 text-white text-sm sm:text-base">
                <span className="bg-yellow-500 p-2 rounded-full">
                  <FaEnvelope className="text-white text-lg" />
                </span>
                <a href="mailto:support@example.com" className="  decoration-transparent hover:decoration-current">
                  support@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

