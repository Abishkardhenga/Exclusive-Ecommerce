import React, { useContext, useEffect, useState } from "react";
import styles from "./CartDesign.module.css";
import { UserInfo } from "../../utilis/UseContext/UseContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdAddShoppingCart } from "react-icons/md";
import axios from "axios";

const Cartdesign = ({ item }) => {
  const [Quantity, setQuantity] = useState(1);
  const [IsChecked, setIsChecked] = useState(false);
  const [ProductDetail, setProductDetail] = useState();
  let { dispatch, state } = useContext(UserInfo);
  let id = item.product;

  let getProductApi = `http://localhost:8000/getproduct?_id=${id}`;
  let deleteProductApi = "http://localhost:8000/deleteCart";
  let IncreaseQuantity = () => {
    setQuantity(1 + Quantity);
  };
  let DecreaseQuantity = () => {
    if (Quantity == 1) {
      return;
    }
    setQuantity(Quantity - 1);
  };

  const handleCheckboxChange = () => {
    setIsChecked(true);
    alert("btn clicked");
    dispatch({ type: "setOrderDetail", payload: item });
  };

  const getProduct = async () => {
    const { data, status } = await axios.get(getProductApi);
    if (status == 200) {
      setProductDetail(data.message[0]);
      console.log("this is state", state);
    }
  };
  const deleteProduct = async (item) => {
    try {
      const { data, status } = await axios.delete(
        `${deleteProductApi}/${item._id}`
      );

      if (status === 200) {
        alert("delete");
        console.log("this is deleted data", data);

        await state.getCartFn();
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
            handleCheckboxChange();
          }} // Attach the event handler
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
            IncreaseQuantity();
          }}
        >
          +
        </button>
        <p>{Quantity}</p>
        <button
          className={styles.decreaseBtn}
          onClick={() => {
            DecreaseQuantity();
          }}
        >
          -
        </button>
      </div>
      <div className={styles.iconWrapper}>
        <MdAddShoppingCart className={styles.cartIcon} />
      </div>
    </div>
  );
};

export default Cartdesign;
