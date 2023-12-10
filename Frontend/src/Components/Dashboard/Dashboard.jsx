import React from "react";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Link className={styles.links} to="/seller/addproduct">
        <p className={styles.dashboardPage}>Add Product</p>
      </Link>
      <Link className={styles.links} to={"/seller/mystore"}>
        <p className={styles.dashboardPage}>My Store</p>
      </Link>
    </div>
  );
};

export default Dashboard;
