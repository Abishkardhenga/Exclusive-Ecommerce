import React, { useContext, useEffect, useState } from "react";
import styles from "./Storecard.module.css";
import axios from "axios";
import { UserInfo } from "../../utilis/UseContext/UseContext";

const Storecard = ({ item }) => {
  let { state, dispatch } = useContext(UserInfo);
  let deleteapi = "http://localhost:8000/deleteproduct";

  let handleDelete = async (item) => {
    console.log("this is item", item);
    console.log("this is item", item._id);

    try {
      const { data, status } = await axios.delete(`${deleteapi}/${item?._id}`);
      if (status == 200) {
        alert("successfully deleted");
      }
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
          <button className={styles.editBtn}>edit</button>

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
