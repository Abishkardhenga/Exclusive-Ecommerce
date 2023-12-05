import React from "react";
import styles from "./Footer.module.css";
import { IoSend } from "react-icons/io5";
import Qr from "../../../public/img/Qr.png";
import google from "../../../public/img/google.png";
import appstore from "../../../public/img/appstore.png";
import { FaRegCopyright } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footUpperPart}>
        <div className={styles.firstPart}>
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className={styles.inputWrapper}>
            <input
              placeholder="Enter Your Email"
              className={styles.inputBox}
              type="text"
            />
            <IoSend />
          </div>
        </div>
        <div className={styles.secondPart}>
          <h3>Support</h3>
          <p>Butwal 3 Dingarnagar</p>
          <p>exclusive@gmail.com</p>
          <p>+80000000</p>
        </div>
        <div className={styles.thirdPart}>
          <h3>Account</h3>
          <p>My Account</p>
          <p>Login</p>
          <p>Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
        </div>
        <div className={styles.quickLinks}>
          <h3>Quick Links</h3>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className={styles.fifthLinks}>
          <h3>Download App</h3>
          <p>Save $3 with App New User Only </p>
          <div className={styles.imgWrapper}>
            <img src={Qr} alt="Qr Code" />
            <div className={styles.storeWrapper}>
              <img src={google} alt="Google playstore" />
              <img src={appstore} alt="App Store" />
            </div>
          </div>
          <div className={styles.iconWrapper}>
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTiktok />
          </div>
        </div>
      </div>
      <div className={styles.footlowerPart}>
        <FaRegCopyright className={styles.copyrightIcon} />

        <p className={styles.copyrightDisclaimer}>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
