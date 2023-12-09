import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Toys.module.css";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const Toys = () => {
  let api = "http://localhost:8000/getproduct?category=toys";
  let [ToysCollection, setToysCollection] = useState([]);

  useEffect(() => {
    FetchToys();
  }, []);

  let FetchToys = async () => {
    try {
      let { data, status } = await axios.get(api);
      console.log("this is data", data);
      if (status === 200) {
        setToysCollection(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.healthContainer}>
      <Navbar />
      <div>
        {ToysCollection.map((item) => {
          return <ProductCard item={item} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Toys;
