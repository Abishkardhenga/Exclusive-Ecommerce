import React, { useContext } from "react";
import axios from "axios";
import styles from "./BookmarkCard.module.css";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { UserInfo } from "../../utilis/UseContext/UseContext";

const BookmarkCard = ({ item }) => {
  let cartapi = "http://localhost:8000/createCart";
  const { state, dispatch } = useContext(UserInfo);

  let handleCart = async () => {
    try {
      const data = await axios.post(cartapi, {
        product: item?._id,
        buyer: state?.userdata?._id,
      });
    } catch (err) {
      console.log("this is err", err.message);
    }
  };

  // console.log("this is state", state);

  return (
    <div className={styles.productContainer}>
      <Link
        to={"/product"}
        state={{ item: item }}
        className={styles.imgWrapper}
      >
        <img
          src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=600"
          className={styles.productImg}
          alt="watch img"
        />
      </Link>
      <div>
        <p className={styles.name}>asfda</p>
        <p className={styles.price}>Rs234</p>
      </div>
      <div className={styles.iconsWrapper}>
        <button className={styles.cartBtn}>Add To Cart</button>
      </div>
    </div>
  );
};

export default BookmarkCard;
