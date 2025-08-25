import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Website",
    img: "https://source.unsplash.com/800x600/?ecommerce,website",
  },
  {
    title: "Portfolio Website",
    img: "https://source.unsplash.com/800x600/?portfolio,webdesign",
  },
  {
    title: "Business Landing Page",
    img: "https://source.unsplash.com/800x600/?landingpage,website",
  },
  {
    title: "Restaurant Website",
    img: "https://source.unsplash.com/800x600/?restaurant,website",
  },
];

const PortfolioCarousel = () => {
  return (
    <section id="portfolio" className="py-16  text-[#FFD700]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Live Portfolio
        </motion.h2>

        <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[300px] bg-[#013322] rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
