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
<section className="py-3 md:py-20 mb-1 md:mb-20 bg-white">

      <div className="container mx-auto px-4 py-10 ">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-tight">
            Reliable & High-Quality
            <br />
            <span className="text-gray-900">Welding Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="relative flex flex-col mb-8 items-center"
            >
              <div className="hidden md:block w-32 h-32 md:w-48 md:h-40 lg:w-60 lg:h-56 overflow-hidden shadow-lg absolute -top-12 right-1 ">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card */}
              <article className="bg-white border border-gray-200  shadow-md hover:bg-[#ce9233] hover:shadow-xl transition-all duration-500 group p-6 pt-6 md:pt-32 w-full min-h-[420px] flex flex-col text-start">
                <div className="block md:hidden w-full h-48 mb-4   overflow-hidden rounded-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-bold uppercase mb-3 mt-14 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur tellus augue.
                </p>

                <div className="mt-auto">
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#faf9f8] text-black text-sm md:text-base font-semibold uppercase transform transition-all duration-300 hover:scale-x-110 hover:translate-x-2"
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
