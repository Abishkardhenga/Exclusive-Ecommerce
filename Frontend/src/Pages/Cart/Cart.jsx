import React, { useContext, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { UserInfo } from "../../utilis/UseContext/UseContext";
// import CartCard from "../../Components/CartCard/CartCard";
// import ProductCard from "../../Components/ProductCard/ProductCard";
// import ProductBox from "../../Components/ProductBox/ProductBox";
import Cartdesign from "../../Components/CartDesign/CartDesign";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";

const Cart = () => {
  let [cartCollection, setCartCollection] = useState([]);
  let { dispatch, state } = useContext(UserInfo);
  useEffect(() => {
    setCartCollection(state.cartCollection);
  }, []);
  return (
    <div className={styles.cartContainer}>
      <Navbar />
      <div className={styles.bodySection}>
        <div className={styles.heroSection}>
          {cartCollection.map((item) => {
            return <Cartdesign item={item} />;
          })}
        </div>
        <OrderSummary />
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
