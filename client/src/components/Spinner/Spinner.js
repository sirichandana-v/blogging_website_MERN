import React from "react";
import loader from "../../assets/loader.gif";
import "../Spinner/Spinner.css";

export const Spinner = () => {
  return (
    <center>
      <div className="spinner">
        <img src={loader} />
      </div>
    </center>
  );
};
