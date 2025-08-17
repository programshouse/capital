import React from "react";
import { FaUsersCog, FaTachometerAlt, FaCheckSquare } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="pt-6 pb-6 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image with frame */}
          <div className="lg:w-1/2 relative">
            {/* Frame */}
            <div className="absolute -top-4 -left-4 w-ful h-full border-4 border-yellow-600"></div>
            {/* Image */}
            <img
              src="assets/about.jpg"
              alt="About"
              className="relative w-[80] h-auto object-cover z-10"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold uppercase mb-4">
              Ultimate Welding and Quality Metal Solutions
            </h1>
            <p className="mb-6 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue,
              iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor,
              malesuada arcu quis, fringilla risus. Pellentesque eu consequat augue.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-14 h-14 bg-yellow-100 flex items-center justify-center mr-3 rounded">
                  <FaUsersCog className="text-yellow-600 w-7 h-7" />
                </div>
                <h5 className="uppercase font-semibold mb-0">Certified Expert & Team</h5>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-14 h-14 bg-yellow-100 flex items-center justify-center mr-3 rounded">
                  <FaTachometerAlt className="text-yellow-600 w-7 h-7" />
                </div>
                <h5 className="uppercase font-semibold mb-0">Fast & Reliable Services</h5>
              </div>
            </div>

            {/* List */}
            <ul className="mb-6 space-y-2 text-gray-600">
              <li className="flex items-center">
                <FaCheckSquare className="text-yellow-600 mr-3" />
                Many variations of passages of lorem ipsum
              </li>
              <li className="flex items-center">
                <FaCheckSquare className="text-yellow-600 mr-3" />
                Many variations of passages of lorem ipsum
              </li>
              <li className="flex items-center">
                <FaCheckSquare className="text-yellow-600 mr-3" />
                Many variations of passages of lorem ipsum
              </li>
            </ul>

            {/* Highlighted Box */}
            <div className="border-4 border-yellow-600 text-xl font-bold p-6 text-center">
              <h4 className="uppercase font-semibold mb-0">
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



