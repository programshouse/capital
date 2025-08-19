import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const ContactPage = ({ lang = "en" }) => {
  const isAr = lang === "ar";

  const formik = useFormik({
    initialValues: { name: "", email: "", subject: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string()
        .required(isAr ? "الاسم مطلوب" : "Name is required")
        .min(3, isAr ? "الاسم قصير جدًا" : "Name is too short"),
      email: Yup.string()
        .email(isAr ? "بريد غير صالح" : "Invalid email")
        .required(isAr ? "البريد مطلوب" : "Email is required"),
      subject: Yup.string()
        .required(isAr ? "الموضوع مطلوب" : "Subject is required"),
      message: Yup.string()
        .required(isAr ? "الرسالة مطلوبة" : "Message is required")
        .min(10, isAr ? "الرسالة قصيرة جدًا" : "Message is too short"),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  const infoClass =
    "bg-gradient-to-r from-yellow-600 to-yellow-400 text-white p-8 rounded-lg shadow-lg flex flex-col justify-center h-full space-y-6";

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

      {/* Contact Info & Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div className={infoClass}>
            <h2 className="text-3xl font-bold">
              {isAr ? "معلومات الاتصال" : "Contact Information"}
            </h2>
            <p className="text-lg">
              {isAr
                ? "ابدأ محادثة مباشرة معنا!"
                : "Say something to start a live chat!"}
            </p>
            <div className="space-y-4 text-lg ">
              <p className="flex items-center gap-3 bg-white  text-amber-300 p-3 rounded-lg"> 
                <FiPhone size={24} />
                <span>
                  <strong>{isAr ? "الهاتف:" : "Phone:"}</strong> +2012 890 87489
                </span>
              </p>
              <p className="flex items-center gap-3 bg-white text-amber-300 p-3 rounded-lg">
                <FiMail size={24} />
                <span>
                  <strong>{isAr ? "البريد الإلكتروني:" : "Email:"}</strong> research@Dolophin.com
                </span>
              </p>
              <p className="flex items-center gap-3 bg-white text-amber-300 p-3 rounded-lg">
                <FiMapPin size={24} />
                <span>
                  <strong>{isAr ? "العنوان:" : "Address:"}</strong> Tanta, El bahr Street – in front of Tanta Hospital above Almokhtabar Lab
                </span>
              </p>
<p className="flex flex-col  gap-2">
  <span className="font-bold">{isAr ? "تابعنا" : "Follow Us"}</span>
  <div className="flex gap-3">
    <FiFacebook size={24} />
    <FiTwitter size={24} />
    <FiInstagram size={24} />
  </div>
</p>

            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col justify-center text-black">
            <h2 className="text-2xl font-bold mb-6">
              {isAr ? "أرسل رسالة" : "Send a Message"}
            </h2>
            <form onSubmit={formik.handleSubmit} className="space-y-5">
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
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}

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
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}

              <input
                type="text"
                name="subject"
                placeholder={isAr ? "الموضوع" : "Subject"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500"
              />
              {formik.touched.subject && formik.errors.subject && (
                <p className="text-red-500 text-sm">{formik.errors.subject}</p>
              )}

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
                <p className="text-red-500 text-sm">{formik.errors.message}</p>
              )}

              <button
                type="submit"
                className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition"
              >
                {isAr ? "إرسال" : "Send"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map & Office Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
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

          {/* Office Info */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white p-8 rounded-lg shadow-lg flex flex-col justify-center h-[400px] space-y-6">
            <h2 className="text-3xl font-bold">
              {isAr ? "قم بزيارة مكتبنا" : "Visit Our Office"}
            </h2>
            <p>
              {isAr
                ? "نحن هنا لدعمك. لا تتردد في التواصل معنا لأي استفسارات أو طلبات خدمة."
                : "We’re here to support you. Feel free to reach out with any questions or service requests."}
            </p>
            <div className="space-y-4 text-lg">
              <p className="flex items-center gap-3 bg-white text-amber-300 p-3 rounded-lg">
                <FiMapPin size={24} />
                <span>
                  <strong>{isAr ? "العنوان:" : "Address:"}</strong> Tanta, El bahr Street - in front of Tanta Hospital above Almokhtabar Lab
                </span>
              </p>
              <p className="flex items-center gap-3 bg-white text-amber-300 p-3 rounded-lg">
                <FiMail size={24} />
                <span>
                  <strong>{isAr ? "البريد الإلكتروني:" : "E-mail:"}</strong> research@Dolphin.com
                </span>
              </p>
              <p className="flex items-center gap-3 bg-white text-amber-300 p-3 rounded-lg">
                <FiPhone size={24} />
                <span>
                  <strong>{isAr ? "الهاتف:" : "Phone:"}</strong> +2012 890 87489
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;




