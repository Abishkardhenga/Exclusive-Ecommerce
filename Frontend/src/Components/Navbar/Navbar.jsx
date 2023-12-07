import React from "react";
import styles from "./Navbar.module.css";
import { IoSearch } from "react-icons/io5";
import { PiBookmarkSimpleDuotone } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Link className={styles.links} to="/">
        <h1>Exclusive</h1>
      </Link>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.links}>
          <p className={styles.navItem}>Home</p>
        </Link>
        <Link to="/contact" className={styles.links}>
          <p className={styles.navItem}>Contact</p>
        </Link>
        <Link to="/about" className={styles.links}>
          <p className={styles.navItem}>About</p>
        </Link>
        <Link to="/signup" className={styles.links}>
          <p className={styles.navItem}>Signup</p>
        </Link>
      </div>
      <div className={styles.navRight}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.inputBox}
            placeholder="What are you looking for?"
            type="text"
          />
          <IoSearch className={styles.navIcon} />
        </div>
        <PiBookmarkSimpleDuotone className={styles.navIcon} />
        <IoCartOutline className={styles.navIcon} />
      </div>
    </div>
  );
};

export default Navbar;
