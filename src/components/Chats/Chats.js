import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../../firebase";
import { motion } from "framer-motion";

import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";

import "./Chats.scss";
import logo from "../images/logo.png";

const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const logoutButtonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        bounce: 0.6,
        boxShadow: "0px 0px 8px rgb(36, 31, 31)",
      },
    },
  };

  const handleLogout = async () => {
    await auth.signOut();

    history.push("/");
  };

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "f6f50542-8132-4860-8e48-842f9bf79e42",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY,
              },
            })
            .then(() => {
              setLoading(false);
            })
            .catch((error) => console.log(error));
        });
      });
  }, []);

  if (!user || loading) return "Loading...";

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">
          <img src={logo} alt="logo" />
        </div>
        <motion.div
          onClick={handleLogout}
          className="logout-tab"
          variants={logoutButtonVariants}
          whileHover="hover"
        >
          Logout
        </motion.div>
      </div>

      <div style={{ color: "#0C4271" }}>
        <ChatEngine
          height="calc(100vh - 66px)"
          projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
          userName={user.email}
          userSecret={user.uid}
        />
      </div>
    </div>
  );
};

export default Chats;
