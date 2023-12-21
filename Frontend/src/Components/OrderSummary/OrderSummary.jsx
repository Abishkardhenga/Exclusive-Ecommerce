import React from "react";
import styles from "./OrderSummary.module.css";

const OrderSummary = () => {
  return (
    <div className={styles.orderSummaryContainer}>
      <h1>Order Summary</h1>

      <div className={styles.couponAndSummaryContainer}>
        <div className={styles.couponContainer}>
          <p>Discount Coupons</p>
          <div className={styles.promoCodeContainer}>
            <p>Promocode</p>
            <div className={styles.inputContainer}>
              <input type="text" placeholder="Enter Coupon Code" />
              <button className={styles.applyButton}>Apply</button>
            </div>
          </div>
        </div>

        <div className={styles.summaryContainer}>
          <p>Order Summary</p>
          <div className={styles.itemDetailsContainer}>
            <div className={styles.itemDetail}>
              <p>Quantity</p>
              <p>1</p>
            </div>
            <div className={styles.itemDetail}>
              <p>Item Total</p>
              <p>Rs 2900</p>
            </div>
            <div className={styles.itemDetail}>
              <p>Delivery Fee</p>
              <p>Rs 100</p>
            </div>
            <div className={styles.itemDetail}>
              <p>Delivery Discount</p>
              <p>Rs 40</p>
            </div>
            <div className={styles.itemDetail}>
              <p>Total Payment</p>
              <p>Rs 3000</p>
            </div>
          </div>
        </div>

        <div className={styles.placeOrderButton}>Place Order</div>
      </div>
    </div>
  );
};

export default OrderSummary;
