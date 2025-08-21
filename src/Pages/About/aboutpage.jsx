import React, { useEffect, useRef, useState } from "react";
import { FaEye, FaBullseye } from "react-icons/fa";

const sections = {
  en: [
    {
      id: "vision",
      title: "Our Vision",
      text:
        "To be a leading force in delivering innovative and sustainable solutions that make a positive impact on communities worldwide.",
      icon: FaEye,
      image: "/assets/service-1.jpg",
      reverse: false,
    },
    {
      id: "mission",
      title: "Our Mission",
      text:
        "To empower individuals and organizations by providing exceptional services, fostering innovation, and promoting sustainable growth for a better future.",
      icon: FaBullseye,
      image: "/assets/service-2.jpg",
      reverse: true,
    },
  ],
  ar: [
    {
      id: "vision",
      title: "رؤيتنا",
      text:
        "أن نكون قوة رائدة في تقديم حلول مبتكرة ومستدامة تُحدث تأثيرًا إيجابيًا على المجتمعات حول العالم.",
      icon: FaEye,
      image: "/assets/service-1.jpg",
      reverse: false,
    },
    {
      id: "mission",
      title: "مهمتنا",
      text:
        "تمكين الأفراد والمنظمات من خلال تقديم خدمات استثنائية، وتعزيز الابتكار، ودعم النمو المستدام من أجل مستقبل أفضل.",
      icon: FaBullseye,
      image: "/assets/service-2.jpg",
      reverse: true,
    },
  ],
};

const Reveal = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const AboutPage = ({ lang = "en" }) => {
  const data = sections[lang] || sections.en;

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="w-full">
      {/* Hero */}
<section
  className="relative w-full h-[60vh] bg-cover bg-center bg-fixed flex items-center justify-start"
  style={{ backgroundImage: "url('/assets/carousel-1.jpg')" }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
  <Reveal className="relative z-10 text-start text-white px-14 max-w-3xl">
    <h1 className="text-4xl md:text-6xl font-bold mb-3">
      {lang === "ar" ? "من نحن" : "About Us"}
    </h1>
    <p className="text-base md:text-xl">
      {lang === "ar"
        ? "تعرّف أكثر على من نحن ورؤيتنا ومهمتنا."
        : "Learn more about who we are, our vision, and our mission."}
    </p>
  </Reveal>
</section>


      {/* Sections */}
      {data.map((item, idx) => {
        const Icon = item.icon;
        return (
<section
  key={item.id}
  className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"} py-16`}
>
  <div
    className={`max-w-6xl mx-auto px-6 flex flex-col ${
      item.reverse ? "md:flex-row-reverse" : "md:flex-row"
    } items-center gap-10`}
  >
    <Reveal className="flex-1">
      <div className={`${lang === "ar" ? "text-right" : "text-left"}`}>
        <div
          className={`flex items-center gap-3 ${
            lang === "ar" ? "justify-end" : "justify-start"
          }`}
        >
          <Icon className="text-yellow-500 text-4xl shrink-0" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
              {item.title}
            </h2>
            <div
              className={`h-1 w-20 bg-yellow-500 rounded ${
                lang === "ar" ? "ml-auto" : ""
              }`}
            />
          </div>
        </div>

        {/* النص */}
        <p className="text-gray-600 leading-relaxed mt-4">{item.text}</p>
      </div>
    </Reveal>

    <Reveal delay={120} className="flex-1">
      <div className="group overflow-hidden rounded-2xl shadow-xl">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    </Reveal>
  </div>
</section>


        );
      })}
    </div>
  );
};

export default AboutPage;



