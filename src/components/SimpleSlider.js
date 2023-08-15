import React from "react";
import Slider from "react-slick";
// import Slides from "./slides";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider>
      <Slider {...settings}>
        {/* <Slides /> */}
      </Slider>
    </Slider>
  );
};
