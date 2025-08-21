import React from "react";
import { FaHammer, FaDollarSign, FaMedal, FaTools } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

const FEATURES = [
  {
    title: "Quality Welding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.",
    icon: FaHammer,
  },
  {
    title: "Affordable Pricing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.",
    icon: FaDollarSign,
  },
  {
    title: "Best Welder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.",
    icon: FaMedal,
  },
  {
    title: "Quality Tools",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.",
    icon: FaTools,
  },
];

const FeatureCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="relative bg-white rounded-md shadow-sm p-6 sm:p-8 lg:p-12 mb-6 md:mb-4 group">
      {/* Top SVG icon */}
      <div
        className="absolute -top-6 left-6 sm:left-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
                   bg-[#c99238] text-white grid place-items-center rounded-md 
                   transition-transform duration-300 
                   group-hover:translate-x-3 sm:group-hover:translate-x-5 
                   active:translate-x-3"
      >
        <Icon size={22} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
      </div>

      <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold uppercase tracking-tight mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 sm:mb-10">
          {FEATURES.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>

        {/* Single button under all cards */}
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-[#c99238] shadow-md text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md 
                       flex items-center gap-2 sm:gap-3 hover:bg-[#b18132] transition-colors text-sm sm:text-base"
          >
            Read More
            <HiArrowLongRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;



