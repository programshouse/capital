import React, { useState } from "react";

const CarouselWithThumbnails = () => {
  const slides = [
    { id: 1, src: "assets/carousel-1.jpg", title: "Best Metalcraft Solutions" },
    { id: 2, src: "assets/carousel-2.jpg", title: "Best Metalcraft Solutions" },
    { id: 3, src: "assets/carousel-3.jpg", title: "Best Metalcraft Solutions" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative w-full h-[80vh]">
      {/* Main Carousel Image */}
      <img
        src={slides[currentIndex].src}
        alt={slides[currentIndex].title}
        className="w-full h-full object-cover"
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text and Button */}
      <div className="absolute left-4 md:left-24 top-1/2 -translate-y-1/2 p-4 md:p-6 rounded-md text-white ">
        <h1 className="text-6xl md:text-8xl font-bold uppercase mb-6 leading-tight">
          {slides[currentIndex].title}
        </h1>
        <a
          href="#"
          className="bg-[#ce9233] hover:bg-[#bd9049] px-8 py-4 rounded-md text-xl font-semibold"
        >
          Explore More
        </a>
      </div>

      {/* Thumbnails on the left */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-24 h-16 cursor-pointer border-2 rounded-md overflow-hidden ${
              currentIndex === index ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselWithThumbnails;








