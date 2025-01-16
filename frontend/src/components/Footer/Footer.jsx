import React from "react";
import "./Footer.css";
import { assets } from "../../assets/img";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo}  alt="" className="footer-logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto aliquam placeat eum sint voluptates et, optio aliquid facere explicabo cum sequi ullam vero!</p>
        <div className="footer-social-icons">
          <img src={assets.linkedin_icon} alt="" />
          <img src={assets.twitter} alt="" />
          <img src={assets.facebook_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2> COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@runofresh.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024@Tomato.com - All rights reserved</p>
    </div>
  );
};

export default Footer;
