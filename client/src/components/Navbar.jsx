import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import logo2 from "/logo4.png"  


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const navigate =useNavigate()
  

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Services", link: "#services" },
    { name: "Process", link: "#process" },
    { name: "FAQ", link: "#faq" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#002B20] text-[#FFD700] shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
       <div className="w-45 "> 
         <img
          id="hero"
          src={logo2}
          alt="Logo"
          className=" cursor-pointer hover:scale-110 duration-300"

         
        />
       </div>

        <div className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="hover:text-yellow-400 transition text-[18px]  hover:underline duration-300 "
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-[#013322] overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="hover:text-yellow-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
