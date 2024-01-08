import React, { useContext, useState, useEffect } from "react";
import styles from "./OrderSummary.module.css";
import { UserInfo } from "../../utilis/UseContext/UseContext";
import Modal from "../../Modal/Modal";
import ShippingForm from "../../Pages/Shippingform/Shippingform";
import axios from "axios";

const OrderSummary = () => {
  const { dispatch, state } = useContext(UserInfo);
  const [ProductAmount, setProductAmount] = useState(0); // Default value set to 0
  const [TotalAmount, setTotalAmount] = useState(0); // Default value set to 0
  const [open, setOpen] = useState(false);

  let id = state.OrderDetail;
  console.log("thi is id", id);
  let api = id ? `http://localhost:8000/getproduct?_id=${id}` : null;

  useEffect(() => {
    if (id) {
      OrderSummaryProduct();
      sum();
    }
  }, [state.OrderDetail]);

  const OrderSummaryProduct = async () => {
    try {
      const { data, status } = await axios.get(api);
      console.log("this is ordersummary data", data, status);
      setProductAmount(data?.message[0]?.price);
    } catch (err) {
      console.log("this is err", err.message);
    }
  };

  const sum = () => {
    let item = ProductAmount + 100;
    console.log("this is sum totat", item);
    setTotalAmount(item);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
              <p>Rs {ProductAmount}</p>
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
              <p>{TotalAmount}</p>
            </div>
          </div>
        </div>
        <button onClick={handleOpen} className={styles.placeOrderButton}>
          Place Order
        </button>
        <Modal isOpen={open} onClose={handleClose}>
          <ShippingForm />
        </Modal>
      </div>
    </div>
  );
};

export default OrderSummary;
