import React from "react";
import "./Login.css";

const Login = ({ handleButton }) => {
  return (
    <div className="login">
      {/* <h4>LOGIN</h4> */}
      <form action="">
        <label className="login__label">
          <input type="email" name="" id="" placeholder="Enter Email..." />
        </label>
        <label className="login__label">
          <input type="text" name="" id="" placeholder="Enter Password..." />
        </label>
        <button type="submit" onClick={handleButton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
