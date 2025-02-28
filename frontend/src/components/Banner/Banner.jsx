import classes from "./Banner.module.css";

const Banner = () => {
    return (
      <div
        className={`d-flex text-center flex-column align-items-center justify-content-center ${classes.banner}`}
      >
        <div className={`pt-3 fw-light ${classes.banner__title}`}>
          {/* <h1 className={` pt-3`}> */}
          Location Solutions, <br />
          Simplified.
          {/* </h1> */}
        </div>
        <div className={`fw ${classes.banner__description}`}>
          Advanced location technology for businesses,
          <br />
          developers, and logistics providers
        </div>
        <div
          className={`d-flex justify-content-around ${classes.banner__buttons}`}
        >
          <div
            className={`px-4 py-3 rounded-3 fw-bold ${classes.banner__buttons__signUp}`}
          >
            Sign up for free
          </div>
          <div
            className={`px-4 py-3 rounded-3 fs-6 ${classes.banner__buttons__contact}`}
          >
            Contact sales
          </div>
        </div>
      </div>
    );
};

export default Banner;
