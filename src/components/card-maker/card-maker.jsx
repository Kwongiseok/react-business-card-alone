import React from "react";
import CardMake from "./cardMake";

const CardApp = (props) => {
  return (
    <div className="card-app">
      <header>
        <img src="/images/logo.png" />
        <h2>Business Card Maker</h2>
      </header>
      <div className="cardMakerList">
        <h2>Card Maker</h2>
        <CardMake />
      </div>
    </div>
  );
};

export default CardApp;
