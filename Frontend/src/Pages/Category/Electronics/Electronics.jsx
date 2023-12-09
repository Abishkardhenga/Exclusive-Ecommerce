import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Electronics.module.css";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const Electronics = () => {
  let api = "http://localhost:8000/getproduct?category=Electronic";
  let [ElectronicsCollection, setElectronicCollection] = useState([]);

  useEffect(() => {
    FetchHealth();
  }, []);

  let FetchHealth = async () => {
    try {
      let { data, status } = await axios.get(api);
      console.log("this is data", data);
      if (status === 200) {
        setElectronicCollection(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.healthContainer}>
      <Navbar />
      <div>
        {ElectronicsCollection.map((item) => {
          return <ProductCard item={item} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Electronics;
