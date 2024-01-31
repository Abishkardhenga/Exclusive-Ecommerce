import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import sideimg from "../../../public/img/sideimg.png";
import styles from "./Login.module.css";
import Loginbox from "../../Components/LoginBox/Loginbox";
import { useCookies } from "react-cookie";

const Login = () => {
  let [cookies, setCookie] = useCookies();
  console.log("cookie ", cookies);
  return (
    <div className={styles.loginContainer}>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.imgWrapper}>
          <img src={sideimg} className={styles.img} alt="img " />
        </div>
        <Loginbox />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
