import React from "react";
import "./Header.css";
import { assets } from "../../assets/img";

const Header = () => {
  return (
    <div className="header">
      {/* Background image */}
      <picture className="header-bg">
        <source srcSet={assets.header_img_webp} type="image/webp" />
        <img
          src={assets.header_img_png}
          alt="Fresh food"
          loading="eager"
        />
      </picture>

      <div className="header-contents">
        <h1>Order fresh quality food here</h1>
        <p>
          We only source our products from farms. All products are collected
          from farms after we receive orders.
        </p>
        <button>Categories</button>
      </div>
    </div>
  );
};

export default Header;
