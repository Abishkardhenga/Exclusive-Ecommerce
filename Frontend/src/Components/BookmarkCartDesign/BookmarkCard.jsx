import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styles from "./BookmarkCard.module.css";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

import { UserInfo } from "../../utilis/UseContext/UseContext";

const BookmarkCard = ({ item }) => {
  let [ProductInfo, setProductInfo] = useState("");
  let deletingApi = " http://localhost:8000/deleteBookmark";
  let cartapi = "http://localhost:8000/createCart";
  const { state, dispatch } = useContext(UserInfo);
  let id = item?.productId;
  let getProductApi = `http://localhost:8000/getproduct?_id=${id}`;
  console.log("this is state", state);

  let handleCart = async (pk) => {
    try {
      const { data, status } = await axios.post(cartapi, {
        product: pk?._id,
        buyer: state?.userdata?._id,
      });
      if (status == 200) {
        alert("succesfully added");
      }
    } catch (err) {
      console.log("this is err", err.message);
    }
  };
  useEffect(() => {
    ProductDetail();
  }, []);

  let handleDelete = async (deletingItem) => {
    try {
      const { data, status } = await axios.delete(
        `${deletingApi}/${deletingItem?._id}`
      );
      if (status == 200) {
        state.getBookmarkFn();
        alert("successfully deleted hai ta ");
      }
    } catch (err) {
      console.log("this is err", err.message);
    }
  };

  let ProductDetail = async () => {
    try {
      const { data, status } = await axios.get(getProductApi);
      if (status == 200) {
        let productData = data.message[0];
        setProductInfo(productData);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={styles.productContainer}>
      <Link
        to={"/product"}
        state={{ item: item }}
        className={styles.imgWrapper}
      >
        <img
          src={ProductInfo?.image}
          className={styles.productImg}
          alt="watch img"
        />
      </Link>
      <div>
        <p className={styles.name}>{ProductInfo?.name}</p>
        <p className={styles.price}>Rs {ProductInfo?.price}</p>
      </div>
      <div className={styles.iconsWrapper}>
        <button
          onClick={() => {
            handleCart(item);
          }}
          className={styles.cartBtn}
        >
          Add To Cart
        </button>
        <MdDeleteForever
          onClick={() => {
            handleDelete(item);
          }}
          className={styles.deleteIcons}
        />
      </div>
    </div>
  );
};

export default BookmarkCard;
