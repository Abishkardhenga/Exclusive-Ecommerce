import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Dropdown.module.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdownContainer}>
      <button onClick={() => setIsOpen(!isOpen)}>profile</button>
      {isOpen && (
        <div>
          <Link className={styles.links} to="/seller">
            Be seller
          </Link>
          <p>My Order</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
