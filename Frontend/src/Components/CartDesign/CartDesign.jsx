import React, { useContext } from "react";
import styles from "./CartDesign.module.css";
import { UserInfo } from "../../utilis/UseContext/UseContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdAddShoppingCart } from "react-icons/md";

const Cartdesign = ({ item }) => {
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
          <RiDeleteBin6Line className={styles.deleteIcon} />
        </div>
        <div>
          <p>Rs{item?.price}</p>
        </div>
      </div>
      <div className={styles.iconWrapper}>
        <MdAddShoppingCart className={styles.cartIcon} />
      </div>
    </div>
  );
};

export default Cartdesign;
