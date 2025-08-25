import React from "react";
import { motion } from "framer-motion";
import { FaComments, FaPencilRuler, FaCode, FaRocket, FaTools } from "react-icons/fa";

const steps = [
  {
    title: "Consultation",
    icon: <FaComments size={30} />,
    desc: "We discuss your goals, ideas, and requirements in detail.",
  },
  {
    title: "Planning",
    icon: <FaPencilRuler size={30} />,
    desc: "We create a project roadmap, select technologies, and finalize design approach.",
  },
  {
    title: "Development",
    icon: <FaCode size={30} />,
    desc: "We build your website with clean, responsive, and optimized code.",
  },
  {
    title: "Launch",
    icon: <FaRocket size={30} />,
    desc: "We deploy your website and make it live for the world to see.",
  },
  {
    title: "Maintenance",
    icon: <FaTools size={30} />,
    desc: "We provide ongoing support, updates, and improvements.",
  },
];

const ProcessTimeline = () => {
  return (
    <section id="process" className="py-16 text-[#FFD700]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Our Process
        </motion.h2>

        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex-1 text-center relative"
            >
              <div className="flex justify-center mb-4 text-yellow-400">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm mt-2">{step.desc}</p>

              {/* Connector Line for Desktop */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-1 bg-yellow-400"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
