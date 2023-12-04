import React, { useState } from "react";
import styles from "./Signupbox.module.css";
import axios from "axios";

const Signupbox = () => {
  let [username, setUsername] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let api = "http://localhost:8000/register";
  let handleRegister = async () => {
    try {
      let { data, status } = await axios.post(api, {
        email,
        username,
        password,
      });
      if (status === 200) {
        setEmail("");
        setPassword("");
        setUsername("");
        alert("successfully registered");
      }
      console.log("this is data", data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.loginboxContainer}>
      <div>
        <h1>Create an account</h1>
        <p>Enter Your details below</p>
      </div>
      <div className={styles.inputWrapper}>
        <input
          className={styles.inputBox}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder=" Name"
          type="text"
        />
        <input
          className={styles.inputBox}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          type="text"
        />
        <input
          className={styles.inputBox}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          type="text"
        />
      </div>
      <div className={styles.btnWrapper}>
        <button
          onClick={() => {
            handleRegister();
          }}
          className={styles.createAccountBtn}
        >
          Create Account
        </button>
        <button className={styles.googleSignupBtn}>Signup with Google</button>
      </div>
      <div className={styles.bottom}>
        <p className={styles.loginText}>Already have an Account? </p>
        <p className={styles.loginLink}>Login </p>
      </div>
    </div>
  );
};

export default Signupbox;
