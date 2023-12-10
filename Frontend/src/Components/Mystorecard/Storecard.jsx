import React from "react";
import styles from "./Storecard.module.css";

const Storecard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img
          src="https://images.pexels.com/photos/10853637/pexels-photo-10853637.jpeg?auto=compress&cs=tinysrgb&w=600"
          className={styles.productImg}
          alt="productimg"
        />
      </div>
      <div className={styles.heroSection}>
        <p className={styles.name}>Jordan shoes</p>
        <p className={styles.desc}>best shoes in nepal</p>
        <p className={styles.price}>Rs: 1000</p>
        <div className={styles.btnWrapper}>
          <button className={styles.editBtn}>edit</button>

          <button className={styles.deleteBtn}>delete</button>
        </div>
      </div>
    </div>
  );
};

export default Storecard;
