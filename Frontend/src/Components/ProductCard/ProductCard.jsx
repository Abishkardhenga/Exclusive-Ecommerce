import React from "react";
import styles from "./ProductCard.module.css";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Link
      to={"/product"}
      state={{ item: item }}
      className={styles.productContainer}
    >
      <div className={styles.imgWrapper}>
        <img src={item.image} className={styles.productImg} alt="watch img" />
      </div>
      <div>
        <p className={styles.name}>{item.name}</p>
        <p className={styles.price}>Rs {item.price}</p>
      </div>
      <div className={styles.iconsWrapper}>
        <IoBookmarkOutline className={styles.bookmarkIcon} />
        <IoCartOutline className={styles.cartIcon} />
      </div>
    </Link>
  );
};

export default ProductCard;
