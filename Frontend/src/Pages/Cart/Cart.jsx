import React, { useContext, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { UserInfo } from "../../utilis/UseContext/UseContext";
// import CartCard from "../../Components/CartCard/CartCard";
// import ProductCard from "../../Components/ProductCard/ProductCard";
// import ProductBox from "../../Components/ProductBox/ProductBox";
import Cartdesign from "../../Components/CartDesign/CartDesign";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";

const Cart = () => {
  let { dispatch, state } = useContext(UserInfo);
  let [cartCollection, setCartCollection] = useState([]);
  let api = "http://localhost:8000/getCart?buyer=";
  let buyer = state.userdata._id;

  useEffect(() => {
    GetCart();
  }, []);
  useEffect(() => {
    dispatch({ type: "setGetCartFn", payload: GetCart });
    console.log("this is state", state);
  }, []);

  const GetCart = async () => {
    try {
      const { data, status } = await axios.get(api + buyer);
      console.log("this is get cart data", data);
      if (status == 200) {
        setCartCollection(data.message);
      }
    } catch (err) {
      console.log("this is err", err.message);
    }
  };

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
