import React from "react";
import { FaUsersCog, FaTachometerAlt, FaCheckSquare } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="py-16 bg-white">
<div className="container mx-auto px-4">
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
    {/* Image with frame */}
    <div className="lg:w-1/2 relative lg:pr-8">
      <div className="absolute -top-6 -left-6 w-full h-full border-4 border-yellow-600"></div>
      <img
        src="assets/about.jpg"
        alt="About"
        className="relative w-full max-w-lg lg:max-w-full rounded-md object-cover z-10 shadow-md"
      />
    </div>

    {/* Content */}
    <div className="lg:w-1/2 flex flex-col space-y-8 lg:pl-8">
      {/* Title */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl text-black font-bold uppercase leading-snug">
        Ultimate Welding and Quality Metal Solutions
      </h1>

      {/* Paragraph */}
      <p className="text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue,
        iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor,
        malesuada arcu quis, fringilla risus. Pellentesque eu consequat augue.
      </p>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 flex items-center justify-center mr-5 rounded-lg shadow-sm">
            <FaUsersCog className="text-yellow-600 w-8 h-8" />
          </div>
          <h5 className="uppercase font-semibold text-gray-800">
            Certified Expert & Team
          </h5>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 flex items-center justify-center mr-5 rounded-lg shadow-sm">
            <FaTachometerAlt className="text-yellow-600 w-8 h-8" />
          </div>
          <h5 className="uppercase font-semibold text-gray-800">
            Fast & Reliable Services
          </h5>
        </div>
      </div>

      {/* List */}
      <ul className="space-y-4 text-gray-600">
        <li className="flex items-center">
          <FaCheckSquare className="text-yellow-600 mr-3 w-5 h-5" />
          Many variations of passages of lorem ipsum
        </li>
        <li className="flex items-center">
          <FaCheckSquare className="text-yellow-600 mr-3 w-5 h-5" />
          Many variations of passages of lorem ipsum
        </li>
        <li className="flex items-center">
          <FaCheckSquare className="text-yellow-600 mr-3 w-5 h-5" />
          Many variations of passages of lorem ipsum
        </li>
      </ul>

      {/* Highlighted Box */}
      <div className="border-4 border-yellow-600 text-lg md:text-xl font-bold p-6 text-center rounded-md shadow-md">
        <h4 className="uppercase font-semibold">
          We’re Good in All Metal Works Using Quality Welding Tools
        </h4>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default AboutSection;





