import React from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import  Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import ProcessTimeline from "./components/ProcessTimeline";
import "./App.css"; 
import './index.css'
import PortfolioCarousel from "./components/PortfolioCarousel";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./ScrollTop";
import ContactForm from "./components/ContactForm";
import Faq from "./components/Faq"
import Footer from "./components/Footer";
import TechStack from "./components/TechStack";
export default function App() {
  return (
    <div >
      <Navbar/>
      <Hero />
      <Portfolio/>
      <Services/>
      <ProcessTimeline/>
      <TechStack/>
      <PortfolioCarousel/>
      <WhatsAppButton/>
      <ScrollToTop/>
      <ContactForm/>
      <Faq/>
      <Footer/>
    </div>
  );
}
