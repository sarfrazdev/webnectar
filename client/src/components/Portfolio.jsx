import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import custom from "/custom.jpeg"
import ecommerce from '/ecommerce.jpeg'
import dashboard from "/d.jpg"
import business from "/business.jpeg"

const portfolioItems = [
  {
    title: "Custom Website",
    img: custom,
    desc: "Fully responsive custom website built with React & TailwindCSS.",
  },
  {
    title: "E-Commerce Store",
    img: ecommerce,
    desc: "Online store with payment gateway & product management.",
  },
  {
    title: "Web App Dashboard",
    img: dashboard,
    desc: "Interactive dashboard for managing business analytics and data.",
  },
  {
    title: "WordPress Business Site",
    img: business,
    desc: "Professional business website powered by WordPress.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16  text-[#FFD700]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Our Work
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          // autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {portfolioItems.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#002B20] rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm mt-2">{item.desc}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
