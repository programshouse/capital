import React, { useState, useEffect } from "react";

const CarouselWithThumbnails = () => {
  const slides = [
    { id: 1, src: "assets/carousel-1.jpg", title: "Best Metalcraft Solutions" },
    { id: 2, src: "assets/carousel-2.jpg", title: "Best Metalcraft Solutions" },
    { id: 3, src: "assets/carousel-3.jpg", title: "Best Metalcraft Solutions" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]">
      {/* Main Carousel Image */}
      <img
        src={slides[currentIndex].src}
        alt={slides[currentIndex].title}
        className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div
        className="absolute left-4 sm:left-8 md:left-32 top-1/2 -translate-y-1/2 
                   p-2 sm:p-4 md:p-6 rounded-md text-white 
                   w-[92%] sm:w-[80%] md:w-[70%] lg:w-[60%]"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold uppercase mb-3 sm:mb-6 leading-snug sm:leading-tight">
          {slides[currentIndex].title}
        </h2>
        <a
          href="#"
          className="bg-[#ce9233] hover:bg-[#bd9049] 
                     px-3 sm:px-6 md:px-8 py-1.5 sm:py-3 md:py-4 
                     rounded-md text-base sm:text-base md:text-lg font-semibold inline-block"
        >
          Explore More
        </a>
      </div>

      {/* Thumbnails on the left */}
      <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hidden sm:block w-16 h-12 md:w-24 md:h-16 cursor-pointer border-2 rounded-md overflow-hidden ${
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











