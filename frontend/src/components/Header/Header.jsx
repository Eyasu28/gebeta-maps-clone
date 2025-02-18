import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10026.svg";

const Header = () => {
  return (
    <div
      className={`d-flex justify-content-between align-items-center  px-4 ${classes.header}`}
    >
      <div
        className={`d-flex align-items-center gap-2 ${classes.header__logo}`}
      >
        <div className={classes.logo__image}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={`fw-semibold ${classes.logo__text}`}>GebetaMaps</div>
      </div>
      <div className={`w-50 mb-0 ${classes.header__nav}`}>
        <ul className={`d-flex mb-0 py-4 justify-content-evenly`}>
          <li>
            Products
            {/* <select name="pricing" id="">
              <option value="geocoding">Products</option>
              <option value="geocoding">Geocoding</option>
              <option value="route-optimization">Route Optimization</option>
              <option value="direction">Direction</option>
              <option value="matrix">Matrix</option>
            </select> */}
          </li>
          <li>Company</li>
          <li>Documentation</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div
        className={`d-flex align-items-center gap-3 ${classes.nav__buttons}`}
      >
        <div className={`fw-semibold ${classes.signIn__button}`}>Sign In</div>
        <div className={`py-3 px-3 border-1 rounded-3 ${classes.getStarted__button}`}>
          <button
            className={`bg-white text-black border-0 fw-semibold `}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
