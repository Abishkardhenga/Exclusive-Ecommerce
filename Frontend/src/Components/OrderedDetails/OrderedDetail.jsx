import React from "react";
import styles from "./OrderedDetail.module.css";

const OrderedDetail = () => {
  return (
    <div className={styles.orderdetailContainer}>
      {/* 1 st box ? */}
      <div className={styles.upper_wrapper}>
        <div className={styles.orderid_date}>
          <p>Order : #234561234</p>
          <p>Placed on 07 Jan 2024</p>
        </div>
        <div>
          <p>Manage</p>
        </div>
      </div>
      {/* 2nd box  */}
      <div className={styles.lower_wrapper}>
        <div className={styles.about_product}>

        <div className={styles.img_wrapper}>
          <img
            className={styles.product_img}
            src="https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product Img "
            />
        </div>
        <p>Ice cream</p>
            </div>
        <p className={styles.qty}>Qty : 1</p>
        <div>Cancelled </div>
      </div>
    </div>
  );
};

export default OrderedDetail;
