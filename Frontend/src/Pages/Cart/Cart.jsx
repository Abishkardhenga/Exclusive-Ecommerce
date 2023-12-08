import React, { useContext, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { UserInfo } from "../../utilis/UseContext/UseContext";

const Cart = () => {
  let [cartCollection, setCartCollection] = useState([]);
  let { dispatch, state } = useContext(UserInfo);
  useEffect(() => {
    setCartCollection(state.cartCollection);
  }, []);
  return (
    <div className={styles.cartContainer}>
      <Navbar />
      <div></div>

      <Footer />
    </div>
  );
};

export default Cart;
