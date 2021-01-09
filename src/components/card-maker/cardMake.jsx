import React, { useRef } from "react";
import { firebaseDatabase } from "../../shared/fire";
const CardMake = (props) => {
  const nameRef = useRef();
  const teamRef = useRef();
  const majorRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();
  const userEmail = props.userEmail;
  const writeUserData = () => {
    firebaseDatabase.ref("users/" + userEmail).set({
      userName: nameRef.current.value,
      userTeam: teamRef.current.value,
    });
    console.log(nameRef.current.value, teamRef);
  };
  return (
    <div className="CardMake">
      <div className="first-grid" onSubmit={writeUserData}>
        <input
          ref={nameRef}
          type="text"
          className="name"
          onChange={writeUserData}
        />
        <input ref={teamRef} type="text" className="team" />
        <select></select>
      </div>
      <div className="second-grid"></div>
    </div>
  );
};

export default CardMake;
