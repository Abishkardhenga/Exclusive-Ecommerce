import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "./Myorder.module.css";
import OrderedDetail from "../../Components/OrderedDetails/OrderedDetail";

const Myorder = () => {
  return (
    <div className={styles.orderContainer}>
      <Navbar />

      <div className={styles.heroContainer}>
        <h1>My Orders</h1>
        <div className={styles.historySection}>
          <OrderedDetail/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Myorder;
