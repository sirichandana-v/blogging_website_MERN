import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css";
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";
import background_right from "../../assets/background_right.png";
import Home from "../Home/Home";
import { Spinner } from "../Spinner/Spinner";

const Splash = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const handleButton = (e) => {
    e.preventDefault();
    setOpen(true);
    // setTimeout(() => {
    //   navigate("/home");
    // }, 3000);
  };

  return (
    <>
      <div className="splash">
        {/* left window */}
        <div className={`splash__left ${open ? "open__left" : ""}`}>
          <div>WRITE</div>
          <div>TO</div>
          <div>INSPIRE &nbsp; &nbsp; AND CONNECT</div>
        </div>

        {/* right window */}

        <div className={`splash__right ${open ? "open__right" : ""}`}>
          <img
            src={background_right}
            alt=""
            className={open ? "open__rightImg" : ""}
          />
          <Login
            handleButton={handleButton}
            className={open ? "open__rightLogin" : ""}
          />
        </div>

        {/* home screen */}
        <center>
          <div className="splash__home">
            <Spinner />
          </div>
        </center>
      </div>
    </>
  );
};

export default Splash;
