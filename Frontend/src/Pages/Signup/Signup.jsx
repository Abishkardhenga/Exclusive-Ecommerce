import React from "react";
import styles from "./Signup.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
// import Loginbox from "../../Components/LoginBox/Loginbox";
import sideimg from "../../../public/img/sideimg.png";
import Signupbox from "../../Components/SignupBox/Signupbox";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.imgWrapper}>
          <img src={sideimg} className={styles.img} alt="img " />
        </div>
        <Signupbox />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
