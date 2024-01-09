import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "./Myorder.module.css";

const Myorder = () => {
  return (
    <div className={styles.orderContainer}>
      <Navbar />
      <div className={styles.heroContainer}></div>
      <Footer />
    </div>
  );
};

export default Myorder;
