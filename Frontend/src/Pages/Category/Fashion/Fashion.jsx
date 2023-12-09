import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Fashion.module.css";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const Fashion = () => {
  let api = "http://localhost:8000/getproduct?category=fashion";
  let [FashionCollection, setFashionCollection] = useState([]);

  useEffect(() => {
    FetchFashionCollection();
  }, []);

  let FetchFashionCollection = async () => {
    try {
      let { data, status } = await axios.get(api);
      console.log("this is data", data);
      if (status === 200) {
        setFashionCollection(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.fashionContainer}>
      <Navbar />
      <div>
        {FashionCollection.map((item) => {
          return <ProductCard item={item} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Fashion;
