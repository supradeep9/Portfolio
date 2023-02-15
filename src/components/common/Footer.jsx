import React from "react";
import { social } from "../data/dummydata";

const Footer = () => {
  return (
    <div>
      <>
        <footer>
          {social.map((item) => (
            <>
              <i data-aos="zoom-in">{item.icon}</i>
            </>
          ))}
          <p data-aos="zoom-in">All Right Reserved 2023</p>
        </footer>
      </>
    </div>
  );
};

export default Footer;
