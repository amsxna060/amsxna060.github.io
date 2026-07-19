import React from "react";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import TrustBar from "./components/TrustBar/TrustBar";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";
import AISystems from "./components/AISystems/AISystems";
import Process from "./components/Process/Process";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

/**
 * Amol Saxena — portfolio.
 * Section order is a conversion funnel: prove capability (Hero demo),
 * state the offer (Services), show proof (Work, AI, Testimonials),
 * then convert (Contact).
 */
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <Work />
      <AISystems />
      <Process />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
