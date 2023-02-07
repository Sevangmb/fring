import { Paper, Button } from "@mui/material";
import React from "react";

function Item({ item }) {
  return (
    <Paper>
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default Item;
