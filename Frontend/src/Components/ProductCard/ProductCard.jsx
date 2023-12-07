import React, { useContext } from "react";
import styles from "./ProductCard.module.css";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { UserInfo } from "../../utilis/UseContext/UseContext";

const ProductCard = ({ item }) => {
  const { state, dispatch } = useContext(UserInfo);

  let handleBookmark = () => {
    alert("bookmark dabaiyo hai ");
    dispatch({ type: "setBookmark", payload: item });
  };

  console.log("this is state", state);

  return (
    <div className={styles.productContainer}>
      <Link
        to={"/product"}
        state={{ item: item }}
        className={styles.imgWrapper}
      >
        <img src={item.image} className={styles.productImg} alt="watch img" />
      </Link>
      <div>
        <p className={styles.name}>{item.name}</p>
        <p className={styles.price}>Rs {item.price}</p>
      </div>
      <div className={styles.iconsWrapper}>
        <IoBookmarkOutline
          onClick={() => {
            handleBookmark();
          }}
          className={styles.bookmarkIcon}
        />
        <IoCartOutline className={styles.cartIcon} />
      </div>
    </div>
  );
};

export default ProductCard;
