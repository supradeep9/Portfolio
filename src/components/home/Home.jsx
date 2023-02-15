import React from "react";
import Footer from "../common/Footer";
import About from "../pages/About";
import Blog from "../pages/Blog";
import { Contact } from "../pages/Contact";
import Counter from "../pages/Counter";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import Testimonial from "../pages/Testimonial";
import Hero from "./Hero";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
