import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "./Myorder.module.css";
import axios from "axios";
import OrderedDetail from "../../Components/OrderedDetails/OrderedDetail";

const Myorder = () => {
  const [OrderData, setOrderData] = useState([]);
  let api =
    "http://localhost:8000/getOrderHistory?_id=659a72310fd5cf96d3cd0ec6";

  useEffect(() => {
    orderhistory();
  }, []);

  const orderhistory = async () => {
    const { data, status } = await axios.get(api);
    if (status == 200) {
      console.log("this is data ", data.data);
      let fetchedData = data.data;
      setOrderData(fetchedData);
    }
    try {
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className={styles.orderContainer}>
      <Navbar />

      <div className={styles.heroContainer}>
        <h1>My Orders</h1>
        <div className={styles.historySection}>
          {OrderData.map((item) => {
            return <OrderedDetail item={item} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Myorder;
