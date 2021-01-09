import React from "react";
import SocialLogin from "./socialLogin";

const Login = (props) => {
  return (
    <div className="login-full">
      <header>
        <img src="/images/logo.png" alt="logo" />
        <h2>Business Card Maker - Kwon</h2>
      </header>
      <div className="login-login">
        <h2>Login</h2>
        <SocialLogin
          onHandleEmail={props.onHandleEmail}
          userEmail={props.userEmail}
        />
      </div>
      <div>
        <h3>Kwon</h3>
      </div>
    </div>
  );
};

export default Login;
