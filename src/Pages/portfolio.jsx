import React, { useState } from "react";

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

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section>
      {/* Header */}
      <div className=" bg-white">
      <div className="bg-white">
      <div
        className="relative w-full h-[60vh] bg-cover bg-center bg-fixed flex items-center justify-center text-center  text-white"
        style={{ backgroundImage: "url('/assets/carousel-1.jpg')" }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

        {/* Content */}
        <div className="relative z-10 px-4  ">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Explore our latest projects across different services.
          </p>
        </div>
      </div>
      </div>
<div className="bg-white ">
      <div className="flex justify-center gap-4 mt-10 flex-wrap bg-white">
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
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover transform group-hover:scale-150  transition-transform duration-500"
            />

            {/* Overlay Info */}
            <div
              className="absolute inset-0 bg-black/60 flex flex-col items-center justify-end text-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4"
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

