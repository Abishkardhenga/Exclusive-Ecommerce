import React, { useContext, useState } from "react";
import styles from "./CartDesign.module.css";
import { UserInfo } from "../../utilis/UseContext/UseContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdAddShoppingCart } from "react-icons/md";

const Cartdesign = ({ item }) => {
  let [Quantity, setQuantity] = useState(1);

  let IncreaseQuantity = () => {
    setQuantity(1 + Quantity);
  };
  let DecreaseQuantity = () => {
    if (Quantity == 1) {
      return;
    }
    setQuantity(Quantity - 1);
  };
  console.log("this is item", item);
  let { dispatch, state } = useContext(UserInfo);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.Aboutproduct}>
        <div className={styles.imgWrapper}>
          <img
            src={item?.image}
            className={styles.productImage}
            alt="product item"
          />
        </div>
        <div>
          <p>{item?.name}</p>
          <p>No Brand Name</p>
          <RiDeleteBin6Line className={styles.Icon} />
        </div>
        <div>
          <p>Rs{item?.price}</p>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <button
          className={styles.increaseBtn}
          onClick={() => {
            IncreaseQuantity();
          }}
        >
          +
        </button>
        <p>{Quantity}</p>
        <button
          className={styles.decreaseBtn}
          onClick={() => {
            DecreaseQuantity();
          }}
        >
          -
        </button>
      </div>
      <div className={styles.iconWrapper}>
        <MdAddShoppingCart className={styles.Icon} />
      </div>
    </div>
  );
};

export default Cartdesign;
