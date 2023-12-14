import React, { useContext, useState } from "react";
import styles from "./Loginbox.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { UserInfo } from "../../utilis/UseContext/UseContext";

const Loginbox = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();
  let api = "http://localhost:8000/login";
  let { state, dispatch } = useContext(UserInfo);
  let handleLogin = async () => {
    try {
      let { data, status } = await axios.post(api, {
        email,
        password,
      });
      // console.log("this is status: ", status);
      if (status === 200) {
        alert("Login successfully ");
        setEmail("");
        setPassword("");
        // console.log("this is data", data);
        dispatch({ type: "setUserdata", payload: data.data });
        navigate("/");
      }
      console.log("this is data", data);
    } catch (err) {
      console.log("err", err);
      console.log("this is err message", err.message);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div>
        <h1 className={styles.loginTitle}>Log in to Exclusive</h1>
        <p className={styles.loginSubtitle}>Enter Your Details Below</p>
      </div>
      <div className={styles.inputWrapper}>
        <input
          className={styles.inputBox}
          placeholder="Enter Email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className={styles.inputBox}
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password" // Use type="password" for password fields
        />
      </div>
      <div className={styles.btnWrapper}>
        <button
          onClick={() => {
            handleLogin();
          }}
          className={styles.loginBtn}
        >
          Login
        </button>
        <button className={styles.forgotPasswordBtn}>Forgot Password?</button>
      </div>
      <div className={styles.bottom}>
        <p className={styles.loginText}>Already have an Account? </p>
        <Link to={"/signup"} className={styles.links}>
          <p className={styles.loginLink}>Register </p>
        </Link>
      </div>
    </div>
  );
};

export default Loginbox;
