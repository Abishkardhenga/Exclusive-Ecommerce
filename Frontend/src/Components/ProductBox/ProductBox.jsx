import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import styles from "./ProductBox.module.css";

const ProductBox = ({ item }) => {
  // const { state } = useLocation();
  let [Quantity, setQuantity] = useState(1);
  let handleIncrease = () => {
    setQuantity(Quantity + 1);
  };
  let handleDecrease = () => {
    if (Quantity == 1) {
      return;
    }
    setQuantity(Quantity - 1);
  };
  // console.log("prodcutBox", state);
  return (
    <div className={styles.productBoxContainer}>
      <div className={styles.imgWrapper}>
        <img src={item?.image} className={styles.productImg} alt="productImg" />
      </div>
      <div className={styles.productDetail}>
        <p>{item?.name}</p>
        <p>Rs :{item?.price}</p>
        <div className={styles.Wrapper}>
          <div className={styles.QuantityDetailWrapper}>
            <p>Quantity</p>
            <div className={styles.btnWrapper}>
              <button
                onClick={() => {
                  handleDecrease();
                }}
                className={styles.subtractBtn}
              >
                -
              </button>
              <p>{Quantity}</p>
              <button
                onClick={() => {
                  handleIncrease();
                }}
                className={styles.addBtn}
              >
                {" "}
                +
              </button>
            </div>
          </div>
          <div className={styles.btnWrapper}>
            <button className={styles.buyBtn}>Buy Now</button>
            <button className={styles.cartBtn}> Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
