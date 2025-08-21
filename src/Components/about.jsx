import React from "react";
import { FaUsersCog, FaTachometerAlt, FaCheckSquare } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
<div className="lg:w-1/2 relative flex items-center justify-center lg:pr-8">
  <div
    className="
      absolute -top-3 -left-3 w-[90%] h-[90%] border-2 md:border-4 border-yellow-600
      lg:top-[-6] lg:left-4 lg:w-[80%] lg:h-[100%] 
    "
  ></div>
<img
  src="assets/about.jpg"
  alt="about"
  className="
    relative w-full max-w-xs sm:max-w-sm md:max-w-md
    lg:max-w-[600px] lg:h-[550px]  
    object-cover z-10 shadow-md
  "
/>

</div>



          {/* Content */}
          <div className="lg:w-1/2 flex flex-col space-y-8 lg:pl-8 px-5">
            {/* Title */}
  <h2 className="text-lg sm:text-xl md:text-4xl text-black font-bold uppercase leading-snug">
  Ultimate Welding and Quality Metal Solutions
</h2>


            {/* Paragraph */}
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus
              augue, iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem
              porttitor, malesuada arcu quis, fringilla risus. Pellentesque eu consequat
              augue.
            </p>

            {/* Features */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
  <div className="group flex items-center cursor-pointer">
    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 flex items-center justify-center mr-5 rounded-lg shadow-sm transition duration-300 group-hover:bg-yellow-600">
      <FaUsersCog className="text-yellow-600 w-6 h-6 sm:w-8 sm:h-8 transition duration-300 group-hover:text-yellow-100" />
    </div>
    <h5 className="uppercase font-semibold text-gray-800">
      Certified Expert & Team
    </h5>
  </div>

  <div className="group flex items-center cursor-pointer">
    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 flex items-center justify-center mr-5 rounded-lg shadow-sm transition duration-300 group-hover:bg-yellow-600">
      <FaTachometerAlt className="text-yellow-600 w-6 h-6 sm:w-8 sm:h-8 transition duration-300 group-hover:text-yellow-100" />
    </div>
    <h5 className="uppercase font-semibold text-gray-800">
      Fast & Reliable Services
    </h5>
  </div>
</div>



            {/* List */}
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <FaCheckSquare className="text-yellow-600 00 mr-3 w-5 h-5" />
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
<div className="border-4 border-yellow-600 text-base sm:text-lg md:text-xl font-bold p-4 sm:p-6 text-center rounded-md shadow-md">
  <h4 className="uppercase font-semibold text-black">
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





