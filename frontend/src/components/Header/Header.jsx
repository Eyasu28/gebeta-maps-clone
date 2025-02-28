import React, { useState } from "react";
import classes from "./Header.module.css";
import { BsChevronDown } from "react-icons/bs";
import { IoPerson, IoPersonOutline } from "react-icons/io5";
import logo from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10026.svg";
import person from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10002.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={`fixed-top`}>
      <div
        className={`d-flex justify-content-between align-items-center px-4 py-3 ${classes.header}`}
      >
        <div
          className={`d-flex align-items-center gap-2 ${classes.header__logo}`}
        >
          <div className={classes.logo__image}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={`fw-bold ${classes.logo__text}`}>GebetaMaps</div>
        </div>
        <div className={`${classes.header__nav}`}>
          <ul className={`d-flex mb-0 justify-content-evenly`}>
            <li
              className={`${classes.orange__links} ${classes.products} mx-3 py-3`}
              onMouseEnter={() => {
                setIsActive(true);
              }}
              onMouseUp={() => setIsActive(false)}
            >
              Products{" "}
              <span>
                <BsChevronDown />
              </span>
            </li>
            <li className={`${classes.orange__links} mx-3 py-3`}>Company</li>
            <li className={`${classes.orange__links} mx-3 py-3`}>
              Documentation
            </li>
            <li className={`${classes.orange__links} mx-3 py-3`}>Pricing</li>
          </ul>
        </div>
        <div
          className={`d-flex align-items-center gap-3 ${classes.nav__buttons}`}
        >
          <div
            className={`${classes.orange__links} fs-6 px-3 d-flex align-items-end ${classes.signIn__button}`}
          >
            <span className={`fs-5 mx-1 ${classes.person__icon}`}>
              <img src={person} alt="" />
            </span>{" "}
            Sign In
          </div>
          <div
            className={`py-3 px-4 rounded-3 fw-bold ${classes.getStarted__button} ${classes.orange__links}`}
          >
            Get Started
          </div>
        </div>
      </div>
      {isActive && (
        <div
          className={`d-flex justify-content-evenly py-4 ${classes.hidden__Links}`}
          onMouseLeave={() => {
            setIsActive(false);
          }}
        >
          <div className={`p-3 rounded-3`}>
            <div className={`fw-bold mb-2`}>Geocoding</div>
            <small className={`opacity-50 fw-light`}>
              Convert addresses to coordinates and vice versa
            </small>
          </div>
          <div className={`p-3 rounded-3`}>
            <div className={`fw-bold mb-2`}>Route Optimization</div>
            <small className={`opacity-50 fw-light`}>
              Find the most efficient routes for multiple stops
            </small>
          </div>
          <div className={`p-3 rounded-3`}>
            <div className={`fw-bold mb-2`}>Directions</div>
            <small className={`opacity-50 fw-light`}>
              Get turn-by-turn navigation for various transportation modes
            </small>
          </div>
          <div className={`p-3 rounded-3`}>
            <div className={`fw-bold mb-2`}>Matrix</div>
            <small className={`opacity-50 fw-light`}>
              Calculate travel times and distances between multiple origins and
              destinations
            </small>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
