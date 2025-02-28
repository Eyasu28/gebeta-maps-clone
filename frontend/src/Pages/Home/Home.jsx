import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import CarouselComponent from "../../components/Carousel/CarouselComponent";
import classes from "./Home.module.css";
import zayRide from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10016.svg";
import ethioPost from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10005.svg";
import nationalId from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10018.svg";
import adika from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10020.svg";
import tewos from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10006.svg";
import tilla from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10007.png";
import highPerformance from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10008.svg";
import easyToImplement from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10009.svg";
import featureRich from "../../assets/image/gebeta.app/GebetaMaps_-_Location_Solutions_Simplified/10010.svg";


const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <CarouselComponent />
      <div className={`fw-bold`}>
        LOCATION SOLUTIONS POWERING INNOVATIVE BUSINESSES
      </div>
      <div
        className={`d-flex px-4 my-5 justify-content-between ${classes.partners}`}
      >
          <img src={zayRide} alt="" />
          <img src={ethioPost} alt="" />
          <img src={nationalId} alt="" />
          <img src={adika} alt="" />
          <img src={tewos} alt="" />
        <img src={tilla} alt="" className={``} />
      </div>
      <section className={`d-flex flex-column align-items-center`}>
        <div className={`fw-bold`}>THIS IS AMBALAY MAPS</div>
        <h1 className={`fw-bold`}>All in One Location Solution</h1>
        <div className={` ${classes.amba__description}`}>
          We are your one-stop solution for geocoding, routing, and location
          intelligence with our powerful API for developers.
        </div>
      </section>
      <div className={`d-flex justify-content-evenly `}>
        <div className={`d-flex align-items-center`}>
          <img src={highPerformance} alt="" />
          High Performance
        </div>
        <div className={`d-flex align-items-center`}>
          <img src={easyToImplement} alt="" />
          Easy to implement
        </div>
        <div className={`d-flex align-items-center`}>
          <img src={featureRich} alt="" />
          Feature-rich API
        </div>
      </div>
    </div>
  );
};

export default Home;
