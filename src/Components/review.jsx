import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    title: "Excellent Platform",
    description:
      "This platform helped me improve my skills tremendously. The courses are well structured and easy to follow.",
    image: "assets/testimonial-1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Great Trainers",
    description:
      "Amazing experience! The trainers are very professional and supportive. I learned a lot.",
    image: "assets/testimonial-2.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Ali Hassan",
    title: "Interactive Workshops",
    description:
      "I loved the workshops. They are interactive and practical. Highly recommend to anyone.",
    image: "assets/testimonial-3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Johnson",
    title: "Real-world Value",
    description:
      "Great courses with real-world applications. I feel more confident in my career now.",
    image: "assets/testimonial-4.jpg",
    rating: 5,
  },
];

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-20  mb-28 px-4 md:px-8">
      {/* Slider Container */}
      <div className="flex items-center justify-center relative">
        {reviews.map((review, index) => {
          let position = "hidden";

          if (index === currentIndex) {
            position = "opacity-100 scale-100 blur-0 z-20";
          } else if (
            !isMobile &&
            (
              index === (currentIndex - 1 + reviews.length) % reviews.length ||
              index === (currentIndex + 1) % reviews.length
            )
          ) {
            position = "opacity-70 scale-90 blur-[2px] z-10";
          }

          // Mobile: hide all except current
          if (isMobile && index !== currentIndex) {
            position = "hidden";
          }

          return (
            <div
              key={review.id}
              className={`absolute transition-all duration-500 ease-in-out bg-white shadow-2xl rounded-2xl mb-24 p-8 mx-4 text-center ${position}
                w-[22rem] sm:w-[18rem] md:w-[24rem] lg:w-[30rem]`}
              style={{
                left:
                  index === (currentIndex - 1 + reviews.length) % reviews.length
                    ? "20%"
                    : index === (currentIndex + 1) % reviews.length
                    ? "80%"
                    : "50%",
                transform: `translateX(-50%)`,
              }}
            >
              {/* Image */}
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-gray-200"
              />

              {/* Name & Title */}
              <h3 className="text-2xl font-semibold text-gray-900">
                {review.name}
              </h3>
              <p className="text-base text-gray-500 mb-2">{review.title}</p>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-700 italic text-lg">
                {review.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 
                   bg-gray-800 text-white p-3 sm:p-4 rounded-full 
                   hover:bg-gray-600 transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 lg:right-[-4rem] top-1/2 -translate-y-1/2 
                   bg-gray-800 text-white p-3 sm:p-4 rounded-full 
                   hover:bg-gray-600 transition"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ReviewSlider;


