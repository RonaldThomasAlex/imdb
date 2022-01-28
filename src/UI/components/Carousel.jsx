import React from "react";
import Slider from "react-slick";

export function Carousel(props) {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
  };
  return (
    <div id="container">
      <Slider {...settings}>{props.children}</Slider>
    </div>
  );
}
