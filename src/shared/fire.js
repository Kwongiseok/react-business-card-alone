import firebase from "firebase";
//   Your web app's Firebase configuration
//   For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA2Y7-7MapevuwhTmAyC_ZFy0fFKdU0egQ",
  authDomain: "business-card-maker-744a7.firebaseapp.com",
  projectId: "business-card-maker-744a7",
  storageBucket: "business-card-maker-744a7.appspot.com",
  messagingSenderId: "557177475955",
  appId: "1:557177475955:web:fc69c3733cecadd305eb06",
  measurementId: "G-GKHE80R6VD",
};
//   Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const firebaseInstance = firebase;
