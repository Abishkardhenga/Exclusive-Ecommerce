import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "./Product.module.css";
import ProductBox from "../../Components/ProductBox/ProductBox";

const Product = () => {
  return (
    <div className={styles.ProductContainer}>
      <Navbar />
      <ProductBox />
      <Footer />
    </div>
  );
};

export default Product;
