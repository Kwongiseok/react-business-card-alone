import React, { memo } from "react";
import { firebaseDatabase } from "../../shared/fire";
import CardList from "./cardList";

const CardApp = (props) => {
  console.log(props.userEmail);
  if (
    firebaseDatabase.ref("users").orderByChild("email").equalTo(props.userEmail)
  ) {
    firebaseDatabase.ref("users").push({ email: props.userEmail });
  } else {
    firebaseDatabase.ref("users/").on("child_added", (result) => {
      console.log(result.val());
    });
  }
  return (
    <div className="card-app">
      <header>
        <img src="/images/logo.png" />
        <h2>Business Card Maker</h2>
      </header>
      <div className="cardMakerList">
        <h2>Card Maker</h2>
        <CardList userEmail={props.userEmail} />
      </div>
    </div>
  );
};

export default CardApp;
