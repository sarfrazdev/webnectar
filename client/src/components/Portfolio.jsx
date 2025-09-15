import React from "react";
import { motion } from "framer-motion";

const portfolioItems = [
  { title: "E-Commerce", icon: "🛒", desc: "Streamlined online sales" },
  { title: "Healthcare", icon: "🏥", desc: "Patient-friendly solutions" },
  { title: "Education", icon: "🎓", desc: "Engaging learning platforms" },
  { title: "Travel", icon: "✈️", desc: "Seamless booking experiences" },
  { title: "Finance", icon: "💰", desc: "Secure & efficient transactions" },
  { title: "Real Estate", icon: "🏠", desc: "Modern property management" },
  { title: "Food & Beverage", icon: "🍔", desc: "Interactive menus & ordering" },
  { title: "Fitness & Sports", icon: "🏋️", desc: "Personalized training tools" },
  
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 text-[#FFD700]">
      <div className="max-w-8xl mx-auto px-6">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Work
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl flex flex-col items-center justify-center text-center p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-6xl mb-4 p-6 rounded-full">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
