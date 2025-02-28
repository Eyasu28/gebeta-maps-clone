import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const CarouselComponent = () => {
  return (
    <>
      <Carousel
        centerMode="true"
        centerSlidePercentage={50}
        showArrows="true"
        selectedItem={1}
        thumbWidth={80}
      >
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IYE3lYxlX5w?si=QZBIYkMkM2yI6UTS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="560"
            height="400"
            src="https://www.youtube.com/embed/pTD69UWcH5Q?si=lQEJhihtHh8HSwRp"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8cheBwH9M8k?si=Xpgslg1xlTknKg6p"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </Carousel>
    </>
  );
}

export default CarouselComponent