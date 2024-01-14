import React, { useContext } from "react";
import axios from "axios";
import styles from "./ProductCard.module.css";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { UserInfo } from "../../utilis/UseContext/UseContext";

const ProductCard = ({ item }) => {
  let cartapi = "http://localhost:8000/createCart";
  const { state, dispatch } = useContext(UserInfo);
  let bookmarkapi = "http://localhost:8000/createBookmark";
  console.log("this is ite,", item);
  console.log("this is state", state);

  let handleBookmark = async () => {
    try {
      const { data, status } = await axios.post(bookmarkapi, {
        productId: item?._id,
        buyerId: state?.userdata?._id,
      });
      if (status == 200) {
        alert("successfully  Bookmarked ");
      }
    } catch (err) {
      console.log("err.message");
    }
  };
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
        <IoCartOutline
          onClick={() => {
            handleCart();
          }}
          className={styles.cartIcon}
        />
      </div>
    </div>
  );
};

export default ProductCard;
