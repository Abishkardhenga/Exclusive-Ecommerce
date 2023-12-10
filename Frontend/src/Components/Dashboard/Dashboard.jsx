import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <p className={styles.dashboardPage}>Add Product</p>
      <p className={styles.dashboardPage}>My Store</p>
    </div>
  );
};

export default Dashboard;
