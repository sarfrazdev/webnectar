import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-gradient-to-br from-[#002B20] via-[#013322] to-[#002B20] text-[#FFD700]">      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold z-10"
      >
        We Build Websites That Build Businesses
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg md:text-xl max-w-2xl z-10"
      >
        Premium Website Development Agency – Turning Ideas Into Profitable Websites
      </motion.p>

      <div className="mt-6 flex gap-4 z-10">
        <a
          href="#contact"
          className="px-6 py-3 bg-[#FFD700] text-[#002B20] font-semibold rounded-lg flex items-center gap-2 hover:bg-yellow-400 transition"
        >
          Get Started <FaArrowRight />
        </a>
        <a
          href="#portfolio"
          className="px-6 py-3 border border-[#FFD700] text-[#FFD700] font-semibold rounded-lg hover:bg-[#FFD700] hover:text-[#002B20] transition"
        >
          View Our Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
