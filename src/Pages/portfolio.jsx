

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const categories = ["All", "Metal Works", "Custom Welding", "Pipe Welding", "Product"];

const projects = [
  { id: 1, title: "Corporate Website", category: "Metal Works", img: "assets/service-1.jpg", desc: "High-quality metal structure for a corporate project." },
  { id: 2, title: "E-commerce App", category: "Custom Welding", img: "assets/service-2.jpg", desc: "Custom welding solutions for a large-scale e-commerce platform." },
  { id: 3, title: "Logo Design", category: "Pipe Welding", img: "assets/service-3.jpg", desc: "Precision pipe welding with durable results." },
  { id: 4, title: "Product Photography", category: "Product", img: "assets/service-4.jpg", desc: "Professional product finishing and photography." },
  { id: 5, title: "Landing Page", category: "Metal Works", img: "assets/service-5.jpg", desc: "Metal works for modern infrastructure." },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hovered, setHovered] = useState(null);
  const {t} = useTranslation();


  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section>
      {/* Header */}
      <div className=" bg-white">
      <section
        className="relative w-full h-[40vh] md:h-[60vh] bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed flex items-center justify-start"
        style={{ backgroundImage: "url('/assets/carousel-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
        <div className="relative z-10 text-white px-16 text-start max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">    {t("portfolio.hero.title")}</h2>
          <p className="mt-3 text-base md:text-xl max-w-2xl">
           {t("portfolio.hero.subtitle")}
          </p>
        </div>
      </section>

        <div className="bg-white ">
          <div className="flex justify-center gap-1 mt-10 flex-wrap bg-white">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-yellow-500 text-white border-yellow-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-yellow-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="container mx-auto px-4 py-12 grid bg-white gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`relative group overflow-hidden rounded-2xl shadow-lg transition duration-500 ${
                  hovered && hovered !== project.id ? "opacity-40" : "opacity-100"
                }`}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                onTouchStart={() => setHovered(project.id)}   
                onTouchEnd={() => setHovered(null)}         
                onClick={() =>
                  setHovered((prev) => (prev === project.id ? null : project.id))
                }                                         
              >
                {/* Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className={`w-full h-64 object-cover transform transition-transform duration-500 ${
                    hovered === project.id ? "scale-150" : ""
                  } group-hover:scale-150`}
                />

                {/* Overlay Info */}
                <div
                  className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-end text-center text-white transition-transform duration-500 p-4 ${
                    hovered === project.id ? "translate-y-0" : "translate-y-full"
                  } group-hover:translate-y-0`}
                >
                  <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-lg opacity-90">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
