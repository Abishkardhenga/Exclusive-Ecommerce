import React from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <Link className={styles.links} to="/category/Fashion">
        <p className={styles.siderbarlink}> Fashion</p>
      </Link>
      <p className={styles.siderbarlink}>Electronics</p>
      <p className={styles.siderbarlink}>Medicine</p>
      <Link className={styles.links} to="/category/health">
        <p className={styles.siderbarlink}>Health & Beauty</p>
      </Link>
      <p className={styles.siderbarlink}>Groceries & Toys</p>
    </div>
  );
};

export default Sidebar;
