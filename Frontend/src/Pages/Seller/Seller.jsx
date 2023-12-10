import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Dashboard from "../../Components/Dashboard/Dashboard";
import { Outlet } from "react-router-dom";
import styles from "./Seller.module.css"

const Seller = () => {
  return (
    <div className={styles.sellerContainer}>
      <Navbar />
      <div className={styles.heroSection}>
        <Dashboard />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Seller;
