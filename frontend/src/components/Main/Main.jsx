import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import CarouselComponent from "../Carousel/CarouselComponent";
import zayRide from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10016.svg";
import ethioPost from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10005.svg";
import nationalId from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10018.svg";
import adika from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10020.svg";
import tewos from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10006.svg";
import tilla from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10007.png";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <div>
      <Header />
      <Banner />
      {/* <CarouselComponent /> */}
      <div className={`fw-bold`}>
        LOCATION SOLUTIONS POWERING INNOVATIVE BUSINESSES
      </div>
      
    </div>
  );
};

export default Main;
