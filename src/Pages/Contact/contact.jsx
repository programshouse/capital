import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactPage = ({ lang = "en" }) => {
  const isAr = lang === "ar";

  // Formik + Yup validation
  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string()
        .required(isAr ? "الاسم مطلوب" : "Name is required")
        .min(3, isAr ? "الاسم قصير جدًا" : "Name is too short"),
      email: Yup.string()
        .email(isAr ? "بريد غير صالح" : "Invalid email")
        .required(isAr ? "البريد مطلوب" : "Email is required"),
      message: Yup.string()
        .required(isAr ? "الرسالة مطلوبة" : "Message is required")
        .min(10, isAr ? "الرسالة قصيرة جدًا" : "Message is too short"),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <div dir={isAr ? "rtl" : "ltr"} className="w-full">
      {/* Hero Section */}
      <section
        className="relative w-full h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/carousel-2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {isAr ? "اتصل بنا" : "Contact Us"}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {isAr
              ? "نحن هنا للإجابة على استفساراتك."
              : "We are here to answer your questions."}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {isAr ? "أرسل رسالة" : "Send a Message"}
            </h2>
            <form onSubmit={formik.handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={isAr ? "الاسم" : "Name"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={isAr ? "البريد الإلكتروني" : "Email"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder={isAr ? "اكتب رسالتك..." : "Your message..."}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500"
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition"
              >
                {isAr ? "إرسال" : "Send"}
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.048042329076!2d31.235711!3d30.044420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c9b8e49f6d%3A0x123456789abcdef!2sCairo!5e0!3m2!1sen!2seg!4v1672485000000!5m2!1sen!2seg"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
