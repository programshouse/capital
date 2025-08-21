import React from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: "url('assets/carousel-2.jpg')" }}
    >
      <div className="bg-black/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start p-8 md:p-16 gap-8">
          {/* Left Content */}
          <div className="md:w-1/2 flex items-center justify-center text-white ">
            <div className="pt-24 px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We Complete Welding & Metal Projects in Time
              </h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                tellus augue, iaculis id elit eget, ultrices pulvinar tortor.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-3 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-black text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Office Address</h3>
                    <p>123 Street, New York, USA</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-3 rounded-full flex items-center justify-center">
                    <FaClock className="text-black text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Office Time</h3>
                    <p>Mon-Sat 09am-5pm, Sun Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-white rounded-lg p-6 md:p-10 shadow-lg">
            <h3 className="text-2xl text-black  font-semibold mb-6">Contact Us</h3>

            {/* Formik Form */}
            <Formik
              initialValues={{ name: "", email: "", subject: "", message: "" }}
              validationSchema={Yup.object({
                name: Yup.string().trim().min(2, "Too short").required("Required"),
                email: Yup.string().email("Invalid email").required("Required"),
                subject: Yup.string().trim().min(2, "Too short").required("Required"),
                message: Yup.string().trim().min(10, "At least 10 characters").required("Required"),
              })}
              onSubmit={async (values, { resetForm, setSubmitting }) => {

                resetForm();
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-4 text-black">
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Your Name "
                      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  <div>
                    <Field
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  <div>
                    <Field
                      as="textarea"
                      rows="5"
                      name="message"
                      placeholder="Message"
                      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-yellow-600 text-white font-semibold py-3 rounded hover:bg-yellow-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


