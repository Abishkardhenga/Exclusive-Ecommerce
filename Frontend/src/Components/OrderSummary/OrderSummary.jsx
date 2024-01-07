import React, { useContext, useState, useEffect } from "react";
import styles from "./OrderSummary.module.css";
import { UserInfo } from "../../utilis/UseContext/UseContext";
import Modal from "../../Modal/Modal";
import ShippingForm from "../../Pages/Shippingform/Shippingform";
import axios from "axios";

const OrderSummary = () => {
  const { dispatch, state } = useContext(UserInfo);
  const [productInfo, setProductInfo] = useState(0); // Default value set to 0
  const [totalAmount, setTotalAmount] = useState(0); // Default value set to 0
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    fetchGetApi();
  }, [state.OrderDetail]); // Include state.OrderDetail in the dependency array

  const totalSum = () => {
    const total = productInfo + 100;
    setTotalAmount(total);
  };

  const fetchGetApi = async () => {
    try {
      const { data, status } = await axios.get(
        `http://localhost:8000/getproduct?_id=${state.OrderDetail}`
      );
      if (status === 200) {
        const item = data.message[0].price;
        setProductInfo(item);
      }
    } catch (err) {
      console.log("Error fetching product info", err);
    }
  };

  useEffect(() => {
    totalSum();
  }, [productInfo]); // Include productInfo in the dependency array

  return (
    <div className={styles.orderSummaryContainer}>
      <h1>Order Summary</h1>
      <div className={styles.couponAndSummaryContainer}>
        <div className={styles.summaryContainer}>
          <p>Order Summary</p>
          <div className={styles.itemDetailsContainer}>
            <div className={styles.itemDetail}>
              <p>Quantity</p>
              <p>1</p>
            </div>
            <div className={styles.itemDetail}>
              <p>Item Total</p>
              <p>Rs {productInfo}</p>
            </div>
            <div className={styles.itemDetail}>
              <p>Delivery Fee</p>
              <p>Rs 100</p>
            </div>
            <div className={styles.itemDetail}>
              <p>Delivery Discount</p>
              <p>Rs 0</p>
            </div>
            <div className={styles.itemDetail}>
              <p>Total Payment</p>
              <p>{totalAmount}</p>
            </div>
          </div>
        </div>

        <button onClick={handleOpen} className={styles.placeOrderButton}>
          Place Order
        </button>
        <Modal isOpen={open} onClose={handleClose}>
          <>
            <ShippingForm />
          </>
        </Modal>
      </div>
    </div>
  );
};

export default OrderSummary;
