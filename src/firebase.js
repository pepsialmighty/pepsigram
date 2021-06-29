import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDl5vWGa27079ASIvFORfyEFREJAbL1KwM",
    authDomain: "pepsigram-21f26.firebaseapp.com",
    projectId: "pepsigram-21f26",
    storageBucket: "pepsigram-21f26.appspot.com",
    messagingSenderId: "302353794785",
    appId: "1:302353794785:web:4d23432cf2a477e26119a0",
  })
  .auth();
