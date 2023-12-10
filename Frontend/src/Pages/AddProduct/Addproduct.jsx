import React, { useState } from "react";
import styles from "./Addproduct.module.css";

const Addproduct = () => {
  let [Name, setName] = useState();
  return (
    <div className={styles.appContainer}>
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <p>Name</p>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="enter the name"
          />
        </div>
        <div className={styles.inputWrapper}>
          <p>image</p>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="enter the image"
          />
        </div>

        <div className={styles.inputWrapper}>
          <p>Description</p>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="enter the description"
          />
        </div>
        <div className={styles.inputWrapper}>
          <p>Price</p>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="enter the Procw"
          />
        </div>
        <div className={styles.inputWrapper}>
          <p>Category</p>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="enter the Category"
          />
        </div>
        <div className={styles.btnWrapper}>
          <button className={styles.addBtn}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
