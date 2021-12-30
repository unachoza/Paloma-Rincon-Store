import React from "react";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="sidebar-nav left">
      <div className="icon">
        <div className="square square-one"></div>
        <div className="square square-two"></div>
        <div className="square square-three">
          <img
            id="logo"
            src="https://assets.bigcartel.com/theme_images/49413500/PR_firma.jpeg?auto=format&fit=max&h=400&w=400"
            alt="palomas logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;
