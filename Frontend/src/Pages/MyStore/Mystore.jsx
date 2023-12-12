import React, { useContext, useEffect, useState } from "react";
import styles from "./Mystore.module.css";
import Storecard from "../../Components/Mystorecard/Storecard";
import { UserInfo } from "../../utilis/UseContext/UseContext";
import axios from "axios";

const Mystore = () => {
  let { state, dispatch } = useContext(UserInfo);
  let api = `http://localhost:8000/getproduct?owner=${state?.userdata?._id}`;

  let [productCollection, setProductCollection] = useState([]);

  useEffect(() => {
    ProductFetch();
    dispatch({ type: "setGetProductFn", payload: ProductFetch });
  }, []);

  console.log("this is state", state);

  let ProductFetch = async () => {
    try {
      const { data, status } = await axios.get(api);
      if (status == 200) {
        setProductCollection(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      {productCollection.map((item) => {
        return <Storecard item={item} />;
      })}
    </div>
  );
};

export default Mystore;
