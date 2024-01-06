import React from "react";
import styles from "./Footer.module.css";
import { IoSend } from "react-icons/io5";
import Qr from "../../../public/img/Qr.png";
import google from "../../../public/img/google.png";
import appstore from "../../../public/img/appstore.png";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footUpperPart}>
        <div className={styles.secondPart}>
          <h3 className={styles.subHeading}>Support</h3>
          <p>Butwal 3 Dingarnagar</p>
          <p>exclusive@gmail.com</p>
          <p>+80000000</p>
        </div>
        <div className={styles.thirdPart}>
          <h3 className={styles.subHeading}>Account</h3>
          <p>My Account</p>
          <Link className={styles.footerlink} to="/login">
            <p>Login</p>
          </Link>
          <Link className={styles.footerlink} to="/register">
            <p>Register</p>
          </Link>
          <p>Cart</p>
        </div>
        <div className={styles.quickLinks}>
          <h3 className={styles.subHeading}>Quick Links</h3>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className={styles.fifthLinks}>
          <h3 className={styles.subHeading}>Social Media </h3>
          <div className={styles.iconWrapper}>
            <FaFacebookF className={styles.icons} />
            <a
              target="_blank"
              href="https://www.facebook.com/officialroutineofnepalbanda/"
              className={styles.socialmediaName}
            >
              Facebook
            </a>
          </div>
          <div className={styles.iconWrapper}>
            <FaInstagram className={styles.icons} />
            <a
              href="https://www.instagram.com/routineofnepalronb/?hl=en"
              target="_blank"
              className={styles.socialmediaName}
            >
              Instagram
            </a>
          </div>
          <div className={styles.iconWrapper}>
            {" "}
            <FaLinkedinIn className={styles.icons} />
            <a
              href="https://www.linkedin.com/company/routineofnepalbanda/?originalSubdomain=np"
              target="_blank"
              className={styles.socialmediaName}
            >
              Linkedin
            </a>
          </div>
          <div className={styles.iconWrapper}>
            {" "}
            <FaTiktok className={styles.icons} />
            <a
              href="https://www.tiktok.com/@routineofnepalbanda?lang=en"
              target="_blank"
              className={styles.socialmediaName}
            >
              Tiktok
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footlowerPart}>
        <FaRegCopyright className={styles.copyrightIcon} />

        <p className={styles.copyrightDisclaimer}>
          Copyright 2022@ by Aabiskar Dhenga
        </p>
      </div>
    </div>
  );
};

export default Footer;
