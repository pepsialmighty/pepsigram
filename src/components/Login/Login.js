import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase from "firebase/app";
import { motion } from "framer-motion";

import "./Login.scss";
import { auth } from "../../firebase";
import Background from "../videos/background.mp4";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Login = () => {
  const { width } = useWindowDimensions();

  const svgVariants = {
    hidden: {
      scale: 3,
      x: 0,
      y: 0,
    },
    visible: {
      scale: 1,
      x: "-52vw",
      y: "-40vh",
      transition: {
        delay: 4,
        duration: 1,
        type: "tween",
      },
    },
  };

  const responsiveSVGVariants = {
    hidden: {
      scale: 2,
      x: 0,
      y: 0,
    },
    visible: {
      scale: 1,
      x: "-56vw",
      y: "-40vh",
      transition: {
        delay: 4,
        duration: 1,
        type: "tween",
      },
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      fill: "rgba(238, 206, 202, 0)",
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      fill: "rgba(238, 206, 202, 1)",
      pathLength: 1,
      transition: {
        default: { duration: 3, ease: "easeInOut" },
        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
      },
    },
  };

  const loginCardVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 5,
        duration: 0.5,
      },
    },
  };

  const loginCardH2 = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 5.5,
        duration: 0.5,
      },
    },
  };

  const buttonContainerVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 6,
        duration: 1,
        type: "spring",
        bounce: 0.7,
      },
    },
  };

  const buttonVariants = {
    hover: {
      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      textShadow: "0px 0px 8px rgb(223, 217, 217)",
      scale: 1.3,
      transition: {
        type: "spring",
        stiffness: 500,
      },
    },
  };

  return (
    <div id="login-page">
      <div className="loginLogo">
        <motion.svg
          width="407"
          height="135"
          viewBox="0 0 407 135"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="loginSvg"
          variants={width <= 600 ? responsiveSVGVariants : svgVariants}
          initial="hidden"
          animate="visible"
        >
          //P
          <motion.path
            d="M36.5 1.49999C18.3 5.49999 3.49996 13.8 0.999957 21.5C-1.10004 27.7 3.19996 34 9.59996 34C12.2 34 12.2 33.9 11.6 29.2C10.6 22.3 10.7 21 12.6 18.8C14.4 16.9 28.4 9.69999 32.9 8.49999C35.2 7.8 35.3 7.8 34.6 14.1C32 38.9 31.2 72 32.9 81C33.9 86.1 37.1 89.2 40.9 88.8L43.5 88.5L43.2 78.8C43 73.5 43.1 67.3 43.5 65.1C44.2 61.1 44.2 61.1 46.6 62.7C51.4 65.8 61.5 62.5 68.6 55.5C85.3 38.7 82.4 7.09999 63.6 1.49999C57.6 -0.300011 44.6 -0.300011 36.5 1.49999ZM61.5 8.99999C70.6 13 73 20.4 69.1 32.1C64.5 46 55.5 57 48.8 57C44.9 57 44.6 55.1 45.2 31.8C45.7 12.6 45.7 11.8 43.7 9.89999C42.6 8.89999 40.9 7.99999 40.1 7.89999C39.2 7.8 39.6 7.39999 41 6.99999C44.7 5.69999 56.9 6.89999 61.5 8.99999Z"
            fill="#000"
            variants={pathVariants}
          />
          //ep
          <motion.path
            d="M121.2 25.9C120.1 26.5 119.8 30.4 119.9 43.3C120 53.8 119.7 60.1 119 60.5C118.5 60.8 118 62 118 63.1C118 67.1 113.8 75.1 110.9 76.5C105.9 79.1 101.6 78.4 98.1 74.5C94.4 70.3 93.6 64.4 96.9 65.5C99.8 66.4 105.4 63.6 108.2 59.9C111.5 55.4 113 50.8 113 44.8C113 40.5 112.6 39.4 109.6 36.4C106.7 33.5 105.5 33 101.7 33C98 33 96.6 33.5 94 36.1C88 42.1 85 51.1 85 63C85.1 75 89.2 81.7 98 84.1C104.6 85.8 110.4 84 115.8 78.4L120 74V90.3C120 101.6 120.4 107 121.2 107.8C122.6 109.2 129.8 109.4 131.9 108.1C133.1 107.3 133.1 106.7 131.9 103.8C129.7 98.6 129.9 62.9 132.3 53C135.5 39.4 140.4 35 143.7 42.7C145.9 48.1 145.2 71.5 142.7 75.3C140.8 78.3 137.9 78.8 136 76.5C133 72.9 129.8 76.6 132.4 80.6C135.9 85.8 145.2 83.9 149.7 77.1C153 72.3 154 67.7 154 57.9C154 47.1 151.9 39.7 147.5 35.3C141.3 29.1 134.5 31.9 131 42L129.1 47.5L129 39C129 34.2 128.4 29.4 127.7 28C126.4 25.4 123.4 24.4 121.2 25.9ZM106.8 44.1C107.5 51.3 102.9 60 98.4 60C95.5 60 95.3 58.2 97.6 50.2C99.3 44.5 103.1 39.5 105.3 40.3C106 40.5 106.6 42.2 106.8 44.1Z"
            fill="#000"
            variants={pathVariants}
          />
          //s
          <motion.path
            d="M173.3 36.7C166.8 38.6 160.5 43.9 159.6 48.1C158.6 53.5 161.8 58.9 170.3 65.8C180.2 73.9 181.6 78 174.6 78C172.6 78 169.5 76.8 166.8 75C162 71.8 159 71.8 159 75C159 79.7 166.2 82.4 176.4 81.8C184.2 81.3 187.8 79.7 188.6 76.3C189.6 72.6 188.3 70.7 180.5 64.2C170.4 55.8 169.5 54.2 171.4 49.6C173.3 45.1 177 44 181.3 46.5C184.3 48.3 184.3 48.3 186.7 45.6C189.6 42.2 189.8 37.5 187.1 36C184.4 34.6 179.5 34.9 173.3 36.7Z"
            fill="#000"
            variants={pathVariants}
          />
          //dau cham tren chu i
          <motion.path
            d="M194.6 17.3C193 18.4 192.9 19 193.9 20.9C196.5 25.6 203.8 28.3 208.1 26C209.9 25 209.9 24.7 208.5 22C205.6 16.5 198.9 14.2 194.6 17.3Z"
            fill="#000"
            variants={pathVariants}
          />
          //i khong co dau cham va g
          <motion.path
            d="M230.5 28.9C226 30.8 221.6 38.9 220.5 47.5C219.2 57.6 216.7 67.1 214.6 70.3C212.1 74 208.1 75 205.9 72.4C204 70.1 204 49.1 205.9 43.7C207.4 39.2 206.8 38.2 201.9 37.1C194.3 35.6 194.5 35.1 194.8 53.3C195.2 72.6 196.5 77.1 202.6 79.6C207.7 81.7 212.2 80.7 216.4 76.4L219.7 73L220.4 76C221.6 82.3 229.8 87.3 236.2 85.7C237.5 85.3 239.7 83.2 241.3 80.8L244 76.6V80.9C244 84.9 243.5 85.8 238.3 91C231.2 98 226.4 107.1 224.8 116.7C223.8 123 223.8 124.4 225.3 127.4C227.3 131.8 231.3 133.9 238.7 134.6C245.8 135.2 248.6 133.9 251.4 128.5C253.2 125 253.5 122.1 254 106.1L254.5 87.7L256.9 87.3C260 86.9 260.4 86.5 259.7 84.5C259.3 83.7 257.9 83 256.4 83H253.8L254.3 69.7C254.6 62.5 255.1 55.5 255.5 54.3C256 52.7 255.7 52 254.1 51.5C252.3 51 252 50.1 252 45C252 37.2 250.7 34.6 245.6 32.5C243.4 31.6 240 30.2 238.2 29.4C234.5 27.8 233.4 27.8 230.5 28.9ZM242.4 39.2C244.3 41.8 244.4 45.4 242.9 55.2C240.7 70.1 236.6 79 231.9 79C228.6 79 227.5 75.2 227.5 63.5C227.5 51.8 229.2 44.5 233.1 39.6C235.7 36.3 240.3 36.1 242.4 39.2ZM243.8 107C243.3 120 241.5 126 237.4 127.9C235.2 128.8 234.6 128.7 232.5 126.5C227.3 121.4 230.9 106.5 240.2 94L243.5 89.5L243.8 92.5C244 94.1 244 100.7 243.8 107Z"
            fill="#000"
            variants={pathVariants}
          />
          //ram
          <motion.path
            d="M302.7 30.7C298.3 35.4 296 42 294.9 53.7C293.6 66.3 290.5 76.7 287.3 78.7C285.3 80 285 79.9 283.8 77.8C281.9 74.5 282.3 58.1 284.4 49.7C285.5 45.5 285.9 42.5 285.3 41.9C284.8 41.4 281.3 40.4 277.4 39.7C271.7 38.7 270.5 38.1 270.4 36.5C270.1 31.4 269.9 31 267.8 31C262.8 31 262.5 32 262.4 46.2C262.4 53.5 262 62.1 261.6 65.2C261 69.2 261.1 71 261.9 71C264.1 71 266 66.1 267.5 56.7C268.3 51.3 269.2 46.6 269.5 46.1C269.8 45.6 270.9 45.4 272 45.7C274 46.2 274 46.8 273.4 55.9C272.4 70.9 276.3 83 282.7 84.6C286.6 85.6 290.2 83.9 292.9 79.7L295.4 76L296.6 78.9C298.2 82.7 301.3 84.7 307.1 85.5C311.1 86.1 312 85.8 314.7 83.6C316.5 82.1 318.6 78.9 319.6 76.4L321.3 71.9L323.1 75.9C326.1 82.8 332.6 84.1 337.5 79C341.1 75.3 342 75.2 342 78.9C342 82.2 343.3 83.5 347.7 84.5C353 85.6 355 84.4 355 80.2C355 76 356.6 65.3 358.1 59.7C359.9 52.9 361 55.7 361 66.9C361 78.6 361.6 80.4 366.5 81.6C370.6 82.6 372.5 80.7 373.9 73.9C375.2 67.7 379.5 55.1 380.8 53.8C381.2 53.4 381.4 56.7 381.2 61C380.8 69.9 382.8 78.6 385.8 81.4C389.1 84.3 393.5 85 397.2 83.2C401.4 81.1 406.1 72.1 406.8 64.9C407.5 57.5 405.1 58.8 402.3 67.4C399.7 75.3 398.6 77 395.5 77C393.8 77 392.9 76.1 392.1 73.9C390.5 69.3 390.8 57.6 392.6 50.1L394.3 43.6L391.4 41.3C389.2 39.6 387.5 39 384.6 39.2L380.6 39.5L375.4 53.5L370.1 67.5L370 56.5C370 49.2 369.6 45 368.8 44.2C368.1 43.5 365.9 43 363.8 43C359.1 43 357.5 45.2 354.4 55.9L352.1 63.5V49.7L352 36L349.4 35C348 34.4 345.8 34 344.4 34C342 34 342 34.1 341.9 43.2C341.8 63.5 339.1 75.1 334.3 75.8C330.6 76.3 329.7 72.9 330.3 61.4C330.7 52.3 330.6 51.1 328.9 49.6C327.5 48.5 327 46.7 327 43.1C327 35.7 325.4 33.2 319.2 30.4C311.7 27.1 306.1 27.2 302.7 30.7ZM318.1 39.6C319.7 41.6 319.7 46.9 318.1 59C316 74.2 313.3 80 308.5 80C304.5 80 303.5 76.7 303.5 64C303.5 51.6 305.2 44.3 309.1 40.2C311.5 37.6 316.2 37.3 318.1 39.6Z"
            fill="#000"
            variants={pathVariants}
          />
        </motion.svg>
      </div>

      <div className="overlay">
        <video autoPlay loop muted className="login-video">
          <source src={Background} type="video/mp4" />
        </video>
      </div>
      <motion.div
        id="login-card"
        variants={loginCardVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={loginCardH2} initial="hidden" animate="visible">
          Welcome to Pepsigram
        </motion.h2>

        <motion.div
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
          variants={buttonContainerVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <motion.div className="login-button google" variants={buttonVariants}>
            <GoogleOutlined /> Sign in with Google
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
