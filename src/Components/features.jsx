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
<div className="relative bg-white rounded-md shadow-sm p-12 pt-12 mb-6 md:mb-4 group">

      {/* Top SVG icon */}
      <div className="absolute -top-6 left-8 w-16 h-16 bg-[#c99238] text-white grid place-items-center transition-transform duration-300 group-hover:translate-x-5">
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-extrabold uppercase tracking-tight mb-3">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {FEATURES.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>

        {/* Single button under all cards */}
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-[#c99238] shadow-md text-white font-semibold px-8 py-3 rounded-md flex items-center gap-3 hover:bg-[#b18132] transition-colors"
          >
            Read More
            <HiArrowLongRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;

