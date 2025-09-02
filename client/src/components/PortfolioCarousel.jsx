import React from "react";
import { motion } from "framer-motion";
import p1 from "/p1.png";
import p2 from "/p2.png";
import p3 from "/p3.png";
import p4 from "/p4.png";
import p5 from "/p5.png";
import p6 from "/p6.png";

const projects = [
  {
    title: "E-commerce Website",
    img: p2,
    link: "https://dataline.co.in/",
  },
  {
    title: "Travel Website",
    img: p3,
    link: "https://travltoor.netlify.app/",
  },
  {
    title: "Excel to Graph Converter",
    img: p4,
    link: "https://excel-to-graph-converter.netlify.app/login",
  },
  {
    title: "Restaurant Website",
    img: p1,
    link: "https://burger-bite-page.netlify.app/", 
  },
  {
    title: "Shopping Website",
    img: p5,
    link: "https://tablegem.netlify.app/",
  },
  {
    title: "Expense Tracker",
    img: p6,
    link: "https://expneseetracker.netlify.app/login",
  },
];

const PortfolioCarousel = () => {
  return (
    <section id="portfolio" className="py-16 text-[#FFD700]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Live Portfolio
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block bg-[#013322] rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
