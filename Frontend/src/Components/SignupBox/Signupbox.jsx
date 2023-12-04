import React from "react";
import styles from "./Signupbox.module.css";

const Signupbox = () => {
  return (
    <div className={styles.loginboxContainer}>
      <div>
        <h1>Create an account</h1>
        <p>Enter Your details below</p>
      </div>
      <div className={styles.inputWrapper}>
        <input className={styles.inputBox} placeholder=" Name" type="text" />
        <input className={styles.inputBox} placeholder="Email" type="text" />
        <input className={styles.inputBox} placeholder="Password" type="text" />
      </div>
      <div className={styles.btnWrapper}>
        <button className={styles.createAccountBtn}>Create Account</button>
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
