import React, { useContext, useEffect, useState } from "react";
import styles from "./Addproduct.module.css";
import { UserInfo } from "../../utilis/UseContext/UseContext";
import axios from "axios";

const Addproduct = () => {
  let { state, dispatch } = useContext(UserInfo);
  console.log("this is state", state);
  let api = "http://localhost:8000/addproduct";
  let [name, setName] = useState();
  let [image, setImage] = useState();
  let [description, setDescription] = useState();
  let [price, setPrice] = useState();
  let [category, setCategory] = useState();
  let [owner, setOwner] = useState();
  useEffect(() => {
    setOwner(state?.userdata?._id);
  }, [state]);

  let handleAdd = async () => {
    try {
      const { data, status } = await axios.post(api, {
        name,
        image,
        description,
        price,
        category,
        owner,
      });
      if (status == 200) {
        setName("");
        setImage("");
        setDescription("");
        setPrice("");
        setCategory("");
        alert("successfully added product");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.appContainer}>
      <div className={styles.container}>
        {/* Name Container */}
        <div className={styles.inputWrapper}>
          <p>Name</p>
          <input
            type="text"
            className={styles.inputBox}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="enter the name"
          />
        </div>
        {/* Image Container */}
        <div className={styles.inputWrapper}>
          <p>image</p>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="enter the image"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        {/* Description container */}

        <div className={styles.inputWrapper}>
          <p>Description</p>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="enter the description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        {/* Price Container  */}
        <div className={styles.inputWrapper}>
          <p>Price</p>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="enter the Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        {/* Category Container  */}
        <div className={styles.inputWrapper}>
          <p>Category</p>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="enter the Category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </div>

        <div className={styles.btnWrapper}>
          <button
            onClick={() => {
              handleAdd();
            }}
            className={styles.addBtn}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
