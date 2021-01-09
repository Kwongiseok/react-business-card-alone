import React from "react";
import { useHistory } from "react-router-dom";
import { firebaseInstance } from "../../shared/fire";
const SocialLogin = (props) => {
  let history = useHistory();
  const socialLogin = async (event) => {
    let provider;
    const {
      target: { name },
    } = event;
    if (name === "Google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "Github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await firebaseInstance
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
        }
        // The signed-in user info.
        let user = result.user;
        props.onHandleEmail(user.email);
        history.push("/app");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="social-login-box">
      <button onClick={socialLogin} name="Google">
        Sign in with Google
      </button>
      <button onClick={socialLogin} name="Github">
        Sign in with Github
      </button>
    </div>
  );
};

export default SocialLogin;
