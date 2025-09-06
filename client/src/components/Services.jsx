// import React from "react";
// import { motion } from "framer-motion";
// import { FaCode, FaWordpress, FaMobileAlt } from "react-icons/fa";
// import customWebsiteImg from "/customWebsite.jpeg";
// import wordpressImg from "/wordpress.jpeg";
// import maintenanceImg from "/maintenance.jpeg";
// import mobileImg from "/mobile.jpeg";

// const services = [
//   {
//     title: "Custom Website Development",
//     icon: <FaCode size={40} />,
//     img: customWebsiteImg,
//     desc: "Responsive, fast, and SEO-friendly websites built with React, TailwindCSS, and modern tools.",
//   },
//   {
//     title: "WordPress Design & Development",
//     icon: <FaWordpress size={40} />,
//     img: wordpressImg,
//     desc: "Custom WordPress themes, plugins, and complete business websites.",
//   },
//   {
//     title: "Website Maintenance & Support",
//     icon: <FaCode size={40} />,
//     img: maintenanceImg,
//     desc: "Ongoing website updates, security monitoring, and technical support to keep your site running smoothly.",
//   },
//   {
//     title: "Mobile-Friendly Web Apps",
//     icon: <FaMobileAlt size={40} />,
//     img: mobileImg,
//     desc: "Progressive web apps that feel like native mobile apps.",
//   },
// ];

// const Services = () => {
//   return (
//     <section id="services" className="py-16  text-[#FFD700]">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.h2
//           initial={{ y: -20, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl font-bold text-center mb-10"
//         >
//           Our Services
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="bg-[#013322] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
//             >
//               <img
//                 src={service.img}
//                 alt={service.title}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-5 text-center">
//                 <div className="flex justify-center mb-3 text-yellow-400">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                 <p className="text-sm mb-3">{service.desc}</p>
//                 {/* <p className="font-bold">{service.price}</p> */}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaWordpress, FaTools, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    title: "Custom Website Development",
    icon: <FaCode size={50} />,
    desc: "Responsive, fast, and SEO-friendly websites built with React, TailwindCSS, and modern tools.",
  },
  {
    title: "WordPress Design & Development",
    icon: <FaWordpress size={50} />,
    desc: "Custom WordPress themes, plugins, and complete business websites.",
  },
  {
    title: "Website Maintenance & Support",
    icon: <FaTools size={50} />,
    desc: "Ongoing updates, security monitoring, and technical support to keep your site running smoothly.",
  },
  {
    title: "Mobile-Friendly Web Apps",
    icon: <FaMobileAlt size={50} />,
    desc: "Progressive web apps that feel like native mobile apps.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20  text-[#FFD700] relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-14"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-[#013322]  shadow-lg p-6 text-center overflow-hidden border border-transparent hover:border-yellow-400 transition-all duration-300"
            >
          
              <div className="flex justify-center mb-6 relative">
                <div className="relative text-yellow-400 group-hover:text-white transition duration-300">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">{service.desc}</p>

    
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-green-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
