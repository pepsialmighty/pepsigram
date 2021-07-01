import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase from "firebase/app";

import "./Login.scss";
import { auth } from "../../firebase";
import Background from "../videos/background.mp4";

const Login = () => {
  return (
    <div id="login-page">
      <video autoPlay loop muted className="login-video">
        <source src={Background} type="video/mp4" />
      </video>
      <div id="login-card">
        <h2>Welcome to Pepsigram</h2>

        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
