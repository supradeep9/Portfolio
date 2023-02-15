import Home from "../home/Home.jsx";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "../common/Header.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Portfolio from "./Portfolio.jsx";
import Testimonial from "./Testimonial.jsx";
import Blog from "./Blog.jsx";
import { Contact } from "./Contact.jsx";
import Footer from "../common/Footer.jsx";

const pages = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/testimonials" component={Testimonial} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/footer" component={Footer} />
      </Switch>
    </BrowserRouter>
  );
};

export default pages;
