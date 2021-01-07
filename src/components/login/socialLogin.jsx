import React from "react";
import { useHistory } from "react-router-dom";
import { firebaseInstance } from "../../shared/fire";
const SocialLogin = (props) => {
  let history = useHistory();
  const socialLogin = async (event) => {
    let isLogin = false;
    let provider;
    const {
      target: { name },
    } = event;
    if (name === "Google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "Github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await firebaseInstance.auth().signInWithRedirect(provider);
    history.push("/app");
    // firebaseInstance
    //   .auth()
    //   .getRedirectResult()
    //   .then((result) => {
    //     if (result.credential) {
    //       // This gives you a Google Access Token. You can use it to access the Google API.
    //       var token = result.credential.accessToken;
    //     }
    //     // The signed-in user info.
    //     isLogin = true;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // if (isLogin) {
    //   history.push("/app");
    // }
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
