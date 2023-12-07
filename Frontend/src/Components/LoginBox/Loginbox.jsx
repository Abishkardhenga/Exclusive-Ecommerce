import React, { useState } from "react";
import styles from "./Loginbox.module.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Loginbox = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { state } = useLocation();
  console.log("this is state", state);
  let api = "http://localhost:8000/login";
  let handleLogin = async () => {
    try {
      let { data, status } = await axios.post(api, {
        email,
        password,
      });
      if (status === 200) {
        alert("Login successfully ");
        setEmail("");
        setPassword("");
      }
      console.log("this is data", data);
    } catch (err) {
      console.log(err);
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
    </div>
  );
};

export default Loginbox;
