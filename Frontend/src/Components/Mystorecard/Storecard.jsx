import React, { useContext, useEffect, useState } from "react";
import styles from "./Storecard.module.css";
import axios from "axios";
import { UserInfo } from "../../utilis/UseContext/UseContext";
import { Link } from "react-router-dom";

const Storecard = ({ item }) => {
  let { state, dispatch } = useContext(UserInfo);
  let deleteapi = "http://localhost:8000/deleteproduct";

  let handleDelete = async (item) => {
    try {
      const { data, status } = await axios.delete(`${deleteapi}/${item?._id}`);
      if (status == 200) {
        alert("successfully deleted");
        state.getProductFn();
      }
    } catch (err) {
      console.log(err);
    }
  };

  let handleEdit = (item) => {
    console.log("item");
    try {
      dispatch({ type: "setEditingmode", payload: true });

      dispatch({ type: "setEditingData", payload: item });
    } catch (err) {
      console.log(err);
    }
  };
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
          <Link className={styles.link} to="/seller/addproduct">
            <button
              onClick={() => {
                handleEdit(item);
              }}
              className={styles.editBtn}
            >
              edit
            </button>
          </Link>
          <button
            onClick={() => {
              handleDelete(item);
            }}
            className={styles.deleteBtn}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Storecard;
