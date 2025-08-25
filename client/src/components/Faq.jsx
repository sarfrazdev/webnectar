import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How much do you charge for a website?",
    answer:
      "Our pricing starts at ₹4999 for a basic website and goes up depending on features, complexity, and design requirements.",
  },
  {
    question: "How long will it take to build my website?",
    answer:
      "A standard business website usually takes 1-3 weeks. More complex websites with custom features may take longer.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes! We offer monthly maintenance plans to ensure your website remains secure, up-to-date, and optimized.",
  },
  {
    question: "Can you build WordPress websites?",
    answer:
      "Absolutely! We design and develop custom WordPress websites tailored to your needs.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes, all our websites are fully responsive and look great on any device — desktop, tablet, or smartphone.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16  text-[#FFD700]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Common Client Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-yellow-500 rounded-lg p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <FaMinus className="text-yellow-400" />
                ) : (
                  <FaPlus className="text-yellow-400" />
                )}
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-sm text-yellow-200"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
