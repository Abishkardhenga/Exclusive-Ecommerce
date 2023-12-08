import React, { useContext, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { UserInfo } from "../../utilis/UseContext/UseContext";
// import CartCard from "../../Components/CartCard/CartCard";
// import ProductCard from "../../Components/ProductCard/ProductCard";
import ProductBox from "../../Components/ProductBox/ProductBox";

const Cart = () => {
  let [cartCollection, setCartCollection] = useState([]);
  let { dispatch, state } = useContext(UserInfo);
  useEffect(() => {
    setCartCollection(state.cartCollection);
  }, []);
  return (
    <div className={styles.cartContainer}>
      <Navbar />
      <div>
        {cartCollection.map((item) => {
          return <ProductBox item={item} />;
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
