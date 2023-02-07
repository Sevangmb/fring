import React, { Fragment } from "react";
import Carousel from "./Carousel";

function DoubleCarousel() {
  return (
    <>
      <div
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 65,
        }}
      >
        <Carousel>
          <img src="https://via.placeholder.com/1600x800" alt="placeholder" />
          <img src="https://via.placeholder.com/1600x800" alt="placeholder" />
          <img src="https://via.placeholder.com/1600x800" alt="placeholder" />
        </Carousel>
      </div>
      <div
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 0,
        }}
      >
        <Carousel>
          <img src="https://via.placeholder.com/1600x800" alt="placeholder" />
          <img src="https://via.placeholder.com/1600x800" alt="placeholder" />
          <img src="https://via.placeholder.com/1600x800" alt="placeholder" />
        </Carousel>
      </div>
    </>
  );
}
export default DoubleCarousel;
