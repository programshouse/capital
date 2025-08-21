import React from "react";
import { FiChevronRight } from "react-icons/fi";

const servicesData = [
  {
    id: 1,
    title: "Metal Works",
    image: "assets/service-1.jpg",
    link: "/services/metal-works",
  },
  {
    id: 2,
    title: "Steel Welding",
    image: "assets/service-2.jpg",
    link: "/services/steel-welding",
  },
  {
    id: 3,
    title: "Pipe Welding",
    image: "assets/service-3.jpg",
    link: "/services/pipe-welding",
  },
  {
    id: 4,
    title: "Custom Welding",
    image: "assets/service-4.jpg",
    link: "/services/custom-welding",
  },
  {
    id: 5,
    title: "Steel Welding",
    image: "assets/service-5.jpg",
    link: "/services/steel-welding-2",
  },
  {
    id: 6,
    title: "Metal Work",
    image: "assets/service-6.jpg",
    link: "/services/metal-work",
  },
  {
    id: 7,
    title: "Custom Welding",
    image: "assets/service-7.jpg",
    link: "/services/custom-welding-2",
  },
  {
    id: 8,
    title: "Pipe Welding",
    image: "assets/service-8.jpg",
    link: "/services/pipe-welding-2",
  },
];

const Services = () => {
  return (
    <section className="py-1 md:py-8 bg-white">
      <div className="container mx-auto px-4 py-4 md:py-10 bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 font-extrabold uppercase leading-tight">
            Reliable & High-Quality
            <br />
            <span className="text-gray-900">Welding Services</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="relative flex flex-col mb-2 sm:mb-8 items-center group"
            >
              {/* Top image (desktop) */}
              <div className="hidden md:block w-32 h-32 md:w-48 md:h-40 lg:w-60 lg:h-56 overflow-hidden shadow-lg absolute -top-12 right-1">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card */}
              <article
  className="bg-white border border-gray-200 shadow-md group-hover:bg-[#ce9233] group-hover:shadow-xl 
             transition-all duration-500 p-4 sm:p-6 pt-3 sm:pt-6 md:pt-32 
             w-full min-h-[380px] sm:min-h-[420px] flex flex-col text-start"
>

                {/* Top image (mobile) */}
                <div className="block md:hidden w-full h-40 mb-3 overflow-hidden rounded-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase mb-2 mt-8 sm:mt-14 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur tellus augue.
                </p>

                <div className="mt-auto">
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-[#faf9f8] text-black text-xs sm:text-sm md:text-base font-semibold uppercase transform transition-all duration-300 group-hover:scale-x-110 group-hover:translate-x-2"
                  >
                    Read More
                    <FiChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

