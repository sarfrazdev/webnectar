import React from "react";
import { 
  FaReact, FaWordpress, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaBootstrap, FaDatabase
} from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiMongodb, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const techs = [
  { icon: <FaReact size={40} color="#61DAFB" />, name: "React.js" },
  { icon: <SiTailwindcss size={40} color="#38BDF8" />, name: "Tailwind CSS" },
  { icon: <FaBootstrap size={40} color="#7952B3" />, name: "Bootstrap" },
  { icon: <SiFramer size={40} color="#0055FF" />, name: "Framer Motion" },
  { icon: <FaHtml5 size={40} color="#E34F26" />, name: "HTML5" },
  { icon: <FaCss3Alt size={40} color="#1572B6" />, name: "CSS3" },
  { icon: <FaJsSquare size={40} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <FaNodeJs size={40} color="#339933" />, name: "Node.js" },
  { icon: <SiMongodb size={40} color="#47A248" />, name: "MongoDB" },
  { icon: <SiMysql size={40} color="#4479A1" />, name: "MySQL" },
  { icon: <FaDatabase size={40} color="#F29111" />, name: "Database Management" },
  { icon: <FaWordpress size={40} color="#21759B" />, name: "WordPress" },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-16  text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Our Tech Stack
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center bg-[#003B2A] p-6 rounded-lg shadow hover:shadow-lg hover:bg-[#004C38] transition"
            >
              <div>{tech.icon}</div>
              <p className="mt-3 text-sm font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
