

import React from "react";
import { Helmet } from "react-helmet";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import ProcessTimeline from "./components/ProcessTimeline";
import TechStack from "./components/TechStack";
import PortfolioCarousel from "./components/PortfolioCarousel";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./ScrollTop";
import ContactForm from "./components/ContactForm";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";

export default function App() {
  return (
    <div>
      <Helmet>
  
        <title>Webnectar - Website Development Agency in Your City</title>
        <meta
          name="description"
          content="Webnectar provides professional website development, SEO, and digital solutions for businesses in Your City."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webnectar.co.in" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Webnectar - Website Development Agency" />
        <meta property="og:description" content="Professional website development and SEO services." />
        <meta property="og:image" content="https://webnectar.co.in/logo.png" />
        <meta property="og:url" content="https://webnectar.co.in" />
        <meta property="og:type" content="website" />

        {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/logo.png" />

        {/* LocalBusiness structured data for Google */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Webnectar",
        "image": "https://webnectar.co.in/logo.png",
        "@id": "https://webnectar.co.in",
        "url": "https://webnectar.co.in",
        "telephone": "+91-9526105636",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Patna",
          "addressRegion": "Bihar",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.facebook.com/yourpage",
          "https://www.linkedin.com/company/yourpage"
        ],
        "areaServed": "Patna"
  })}
</script>

      </Helmet>

    
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <ProcessTimeline />
      <TechStack />
      <PortfolioCarousel />
      <WhatsAppButton />
      <ScrollToTop />
      <ContactForm />
      <Faq />
      <Footer />
    </div>
  );
}
