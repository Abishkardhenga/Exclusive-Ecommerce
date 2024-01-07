import React, { useContext, useEffect, useState } from "react";
import styles from "./CartDesign.module.css";
import { UserInfo } from "../../utilis/UseContext/UseContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdAddShoppingCart } from "react-icons/md";
import axios from "axios";
import { useAsyncError } from "react-router-dom";

const Cartdesign = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [IsChecked, setIsChecked] = useState(false);
  const [ProductDetail, setProductDetail] = useState();
  let { dispatch, state } = useContext(UserInfo);
  let id = item.product;
  useEffect(() => {
    // Update Quantity state when item.quantity changes
    setQuantity(item.quantity);
  }, [item.quantity]);

  let editApi = `http://localhost:8000/editCart`;
  let getProductApi = `http://localhost:8000/getproduct?_id=${id}`;
  let deleteProductApi = "http://localhost:8000/deleteCart";

  let IncreaseQuantity = async () => {
    const updatedQuantity = quantity + 1;
    setQuantity(updatedQuantity);
    try {
      await axios.patch(`${editApi}/${item._id}`, {
        quantity: updatedQuantity,
      });
    } catch (err) {
      console.log("error", err);
    }
  };

  let DecreaseQuantity = async () => {
    if (quantity === 1) {
      return;
    }
    const updatedQuantity = quantity - 1;
    setQuantity(updatedQuantity);
    try {
      await axios.patch(`${editApi}/${item._id}`, {
        quantity: updatedQuantity,
      });
    } catch (err) {
      console.log("error", err);
    }
  };

  // console.log("this is item", item);
  const handleCheckboxChange = (orderinfo) => {
    console.log("this is pk", orderinfo);
    setIsChecked(!IsChecked);
    alert("btn clicked");
    dispatch({ type: "setOrderDetail", payload: orderinfo });
  };

  const getProduct = async () => {
    const { data, status } = await axios.get(getProductApi);
    if (status == 200) {
      setProductDetail(data.message[0]);
    }
  };
  const deleteProduct = async (deletingitem) => {
    try {
      const { data, status } = await axios.delete(
        `${deleteProductApi}/${deletingitem._id}`
      );

      if (status === 200) {
        alert("delete");
        state.getCartFn();
      }
    } catch (err) {
      console.log("this is err", err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.Aboutproduct}>
        <input
          type="checkbox"
          checked={IsChecked}
          onChange={() => {
            handleCheckboxChange(item?.product);
          }}
          className={styles.checkBox}
        />
        <div className={styles.imgWrapper}>
          <img
            src={ProductDetail?.image}
            className={styles.productImage}
            alt="product item"
          />
        </div>
        <div>
          <p>{ProductDetail?.name}</p>
          <p>No Brand Name</p>
          <RiDeleteBin6Line
            onClick={() => {
              deleteProduct(item);
            }}
            className={styles.deleteIcon}
          />
        </div>
        <div>
          <p>Rs{ProductDetail?.price}</p>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <button
          className={styles.increaseBtn}
          onClick={() => {
            IncreaseQuantity(item);
          }}
        >
          +
        </button>
        <p>{quantity}</p>
        <button
          className={styles.decreaseBtn}
          onClick={() => {
            DecreaseQuantity(item._id);
          }}
        >
          -
        </button>
      </div>
      {/* <div className={styles.iconWrapper}>
        <MdAddShoppingCart className={styles.cartIcon} />
      </div> */}
    </div>
  );
};

export default Cartdesign;
