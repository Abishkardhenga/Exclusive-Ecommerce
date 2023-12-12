import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { IoSearch } from "react-icons/io5";
import { PiBookmarkSimpleDuotone } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { UserInfo } from "../../utilis/UseContext/UseContext";
import Dropdown from "../Dropdown/Dropdown";

const Navbar = () => {
  let { state, dispatch } = useContext(UserInfo);
  console.log("thi is state ", state);

  return (
    <div className={styles.navbarContainer}>
      <Link className={styles.links} to="/">
        <h1>Exclusive</h1>
      </Link>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.links}>
          <p className={styles.navItem}>Home</p>
        </Link>
        <Link to="/seller" className={styles.links}>
          <p className={styles.navItem}>Be Seller</p>
        </Link>

        <Link to="/contact" className={styles.links}>
          <p className={styles.navItem}>Contact</p>
        </Link>
        <Link to="/login" className={styles.links}>
          <p className={styles.navItem}>Login</p>
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
        <Link to="/bookmark" className={styles.links}>
          <PiBookmarkSimpleDuotone className={styles.navIcon} />
        </Link>
        <Link to="/cart" className={styles.links}>
          <IoCartOutline className={styles.navIcon} />
        </Link>
        {state.userdata ? <Dropdown /> : "no hey"}
      </div>
    </div>
  );
};

export default Navbar;
