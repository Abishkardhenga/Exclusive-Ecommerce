import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Dropdown.module.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdownContainer}>
      <button onClick={() => setIsOpen(!isOpen)}>profile</button>
      {isOpen && (
        <div className={styles.list}>
          <Link className={styles.links} to="/seller">
            Be seller
          </Link>
          <Link className={styles.links} to="/order">
            My Order
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
