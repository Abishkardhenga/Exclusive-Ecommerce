import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <p className={styles.siderbarlink}>Women's Fashion</p>
      <p className={styles.siderbarlink}>Men's Fashion</p>
      <p className={styles.siderbarlink}>Electronics</p>
      <p className={styles.siderbarlink}>Medicine</p>
      <p className={styles.siderbarlink}>Sports&outdoor</p>
      <p className={styles.siderbarlink}>Groceries & Toys</p>
      <p className={styles.siderbarlink}>Sports&outdoor</p>
      <p className={styles.siderbarlink}>Groceries & Toys</p>
      <p className={styles.siderbarlink}>Health & Beauty</p>
      <p className={styles.siderbarlink}>Groceries & Toys</p>
    </div>
  );
};

export default Sidebar;
