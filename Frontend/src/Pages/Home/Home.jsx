import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import img from "../../../public/img/banner.png";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";

let api = "http://localhost:8000/getproduct";
const Home = () => {
  let [ProductCollection, SetProductCollection] = useState([]);

  useEffect(() => {
    GetAllProduct();
  }, []);
  let GetAllProduct = async () => {
    try {
      const { data, status } = await axios.get(api);
      console.log("this is data", data);
      console.log("this is data message", data.message);
      SetProductCollection(data.message);
    } catch (err) {
      console.log("this is err", err);
    }
  };
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <div className={styles.siderbarWrapper}>
        <Sidebar />
        <div className={styles.bannerImgWrapper}>
          <img src={img} alt="bannerImg" />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.flashsaleComponent}>
          <h2>Flash Sales</h2>
          <div className={styles.countdown}>
            <div>
              <p>days</p>
              <h3>03</h3>
            </div>
            <div>
              <p>Hours</p>
              <h3>23</h3>
            </div>
            <div>
              <p>Mnutes</p>
              <h3>56</h3>
            </div>
            <div>
              <p>Seconds</p>
              <h3>56</h3>
            </div>
          </div>
        </div>
        <div className={styles.productCardContainer}>
          {ProductCollection.map((item) => {
            return <ProductCard item={item} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
