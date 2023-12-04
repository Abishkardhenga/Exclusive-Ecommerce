import React from "react";
import styles from "./Home.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import img from "../../../public/img/banner.png";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <div className={styles.siderbarWrapper}>
        <Sidebar />
        <div className={styles.bannerImgWrapper}>
          <img src={img} alt="bannerImg" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
