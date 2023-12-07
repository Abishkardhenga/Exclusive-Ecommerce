import React, { useContext } from "react";
import styles from "./Cartdesign.module.css";
import { UserInfo } from "../../utilis/UseContext/UseContext";

const Cartdesign = () => {
  let { dispatch, state } = useContext(UserInfo);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.imgWrapper}>
        <img src={styles.productImg} alt="productImg" />
      </div>
      <div>
        <p>m14 bluetooth hai </p>
        <p>No brand hai ta</p>
      </div>
      <div>
        <p>Rs 1899</p>
      </div>
    </div>
  );
};

export default Cartdesign;
