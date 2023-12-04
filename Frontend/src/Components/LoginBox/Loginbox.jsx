import React from "react";
import styles from "./Loginbox.module.css";

const Loginbox = () => {
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
        />
        <input
          className={styles.inputBox}
          placeholder="Password"
          type="password" // Use type="password" for password fields
        />
      </div>
      <div className={styles.btnWrapper}>
        <button className={styles.loginBtn}>Login</button>
        <button className={styles.forgotPasswordBtn}>Forgot Password?</button>
      </div>
    </div>
  );
};

export default Loginbox;
