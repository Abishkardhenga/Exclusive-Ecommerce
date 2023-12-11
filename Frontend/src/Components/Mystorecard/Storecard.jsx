import React from "react";
import styles from "./Storecard.module.css";

const Storecard = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={item?.image} className={styles.productImg} alt="productimg" />
      </div>
      <div className={styles.heroSection}>
        <p className={styles.name}>{item?.name}</p>
        <p className={styles.desc}>{item?.description}</p>
        <p className={styles.price}>Rs: {item?.price}</p>
        <div className={styles.btnWrapper}>
          <button className={styles.editBtn}>edit</button>

          <button className={styles.deleteBtn}>delete</button>
        </div>
      </div>
    </div>
  );
};

export default Storecard;
