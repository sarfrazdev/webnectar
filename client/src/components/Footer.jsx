import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#001F16] text-[#FFD700] py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold">Web Nectar</h2>
          <p className="mt-3 text-sm text-[#FFD700]/80">
            Crafting modern websites that convert visitors into clients.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="#process" className="hover:underline">Our Process</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
          <p className="text-sm">📧 support@webnectar.com</p>
          <p className="text-sm">📍 Bihar Patna, India</p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="p-2 bg-[#FFD700] text-[#002B20] rounded-full hover:bg-yellow-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-[#FFD700] text-[#002B20] rounded-full hover:bg-yellow-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-[#FFD700] text-[#002B20] rounded-full hover:bg-yellow-400 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-[#FFD700] text-[#002B20] rounded-full hover:bg-yellow-400 transition">
              <FaTwitter />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-[#FFD700]/20 pt-5 text-center text-sm text-[#FFD700]/70">
        © {new Date().getFullYear()} Web Nectar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
