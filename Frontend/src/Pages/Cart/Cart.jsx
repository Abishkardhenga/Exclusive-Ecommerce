import React, { useContext, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { UserInfo } from "../../utilis/UseContext/UseContext";
import Cartdesign from "../../Components/cartDesign/Cartdesign";

const Cart = () => {
  let [cartCollection, setCartCollection] = useState([]);
  let { dispatch, state } = useContext(UserInfo);
  useEffect(() => {
    setCartCollection(state);
  }, []);
  return (
    <div className={styles.cartContainer}>
      <Navbar />
      <div>
        {cartCollection.map((item) => {
          return <Cartdesign item={item} />;
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
