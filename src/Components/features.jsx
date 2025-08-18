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
    <div className="relative bg-white rounded-md shadow-sm p-8 pt-12 group">
      {/* Top SVG icon */}
      <div className="absolute -top-6 left-8 w-16 h-16 bg-[#c99238] text-white grid place-items-center transition-transform duration-300 group-hover:translate-x-5">
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-extrabold uppercase tracking-tight mb-3">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">{description}</p>

      <button
        type="button"
        className="group/btn inline-flex items-center text-sm font-semibold text-gray-900 hover:text-[#c99238] transition-colors"
      >
        Read More
        <span className="mx-3 h-px w-24 bg-gray-300 transition-all group-hover/btn:w-28" />
        <HiArrowLongRight className="size-4 text-gray-400 transition-colors group-hover/btn:text-[#c99238]" />
      </button>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {FEATURES.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
