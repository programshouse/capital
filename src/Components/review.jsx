import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const reviews = [
  { id: 1, name: "John Doe", title: "Excellent Platform", description: "This platform helped me improve my skills tremendously. The courses are well structured and easy to follow.", image: "assets/testimonial-1.jpg", rating: 5 },
  { id: 2, name: "Jane Smith", title: "Great Trainers", description: "Amazing experience! The trainers are very professional and supportive. I learned a lot.", image: "assets/testimonial-2.jpg", rating: 4 },
  { id: 3, name: "Ali Hassan", title: "Interactive Workshops", description: "I loved the workshops. They are interactive and practical. Highly recommend to anyone.", image: "assets/testimonial-3.jpg", rating: 5 },
  { id: 4, name: "Emily Johnson", title: "Real-world Value", description: "Great courses with real-world applications. I feel more confident in my career now.", image: "assets/testimonial-4.jpg", rating: 5 },
];

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 640 : true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => setCurrentIndex((p) => (p === 0 ? reviews.length - 1 : p - 1));
  const nextSlide = () => setCurrentIndex((p) => (p === reviews.length - 1 ? 0 : p + 1));

  return (
    <section className="w-full bg-white pt-4 md:pt-6">
      <div className="relative w-full max-w-7xl bg-white mx-auto px-4 md:px-8 pb-16 md:pb-20 min-h-[430px]">
        {/* Slider */}
        <div className="flex items-center justify-center relative">
          {reviews.map((review, index) => {
            let position = "hidden";
            if (index === currentIndex) {
              position = "opacity-100 scale-100 blur-0 z-20";
            } else if (
              !isMobile &&
              (index === (currentIndex - 1 + reviews.length) % reviews.length ||
                index === (currentIndex + 1) % reviews.length)
            ) {
              position = "opacity-70 scale-90 blur-[2px] z-10";
            }
            if (isMobile && index !== currentIndex) position = "hidden";

            return (
              <div
                key={review.id}
                className={`${
                  isMobile ? "relative mx-auto py-1 mb-0" : "absolute py-2 top-8 md:top-10"
                } transition-all duration-500 ease-in-out bg-white shadow-2xl rounded-2xl px-8 text-center ${position}
                  w-[22rem] sm:w-[18rem] md:w-[24rem] lg:w-[30rem]`}
                style={
                  isMobile
                    ? {}
                    : {
                        left:
                          index === (currentIndex - 1 + reviews.length) % reviews.length
                            ? "20%"
                            : index === (currentIndex + 1) % reviews.length
                            ? "80%"
                            : "50%",
                        transform: "translateX(-50%)",
                      }
                }
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
                />
                <h3 className="text-2xl font-semibold text-gray-900">{review.name}</h3>
                <p className="text-base text-gray-500 mb-2">{review.title}</p>

                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
                  ))}
                </div>
                <p className="text-gray-700 italic text-lg">{review.description}</p>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
{/* Prev Button */}
<button
  onClick={prevSlide}
  aria-label="Previous review"
  className={`absolute bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 transition
    flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14
    ${isMobile ? "bottom-6 left-1/3 -translate-y-0" : "left-0 -ml-20 top-1/2 -translate-y-1/2"}`}
>
  <FaChevronLeft className="text-lg sm:text-xl" />
</button>

{/* Next Button */}
<button
  onClick={nextSlide}
  aria-label="Next review"
  className={`absolute bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 transition
    flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14
    ${isMobile ? "bottom-6 right-1/3 -translate-y-0" : "right-0 -mr-20 top-1/2 -translate-y-1/2"}`}
>
  <FaChevronRight className="text-lg sm:text-xl" />
</button>

      </div>
    </section>
  );
};

export default ReviewSlider;








