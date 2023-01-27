import React from "react";
import { Carousel as MUICarousel } from "react-material-ui-carousel";
import Item from "./Item";
import slider from "../helper/slider.json";

function Carousel() {
  return (
    <MUICarousel>
      {slider.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </MUICarousel>
  );
}

export default Carousel;
