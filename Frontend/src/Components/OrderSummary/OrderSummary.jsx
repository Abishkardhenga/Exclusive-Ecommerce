import React, { useContext } from "react";
import styles from "./OrderSummary.module.css";
import { UserInfo } from "../../utilis/UseContext/UseContext";
import Modal from "../../Modal/Modal";
import ShippingForm from "../../Pages/Shippingform/Shippingform";

const OrderSummary = () => {
  let { dispatch, state } = useContext(UserInfo);
  const [open, setOpen] = React.useState(false);

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
        {/* <div className={styles.couponContainer}>
          <p>Discount Coupons</p>
          <div className={styles.promoCodeContainer}>
            <p>Promocode</p>
            <div className={styles.inputContainer}>
              <input type="text" placeholder="Enter Coupon Code" />
              <button className={styles.applyButton}>Apply</button>
            </div>
          </div>
        </div> */}

        <div className={styles.summaryContainer}>
          <p>Order Summary</p>
          <div className={styles.itemDetailsContainer}>
            <div className={styles.itemDetail}>
              <p>Quantity</p>
              <p>1</p>
            </div>
            <div className={styles.itemDetail}>
              <p>Item Total</p>
              <p>Rs {state?.OrderDetail?.price}</p>
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
              <p>Rs 3000</p>
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
