import React, { useContext, useEffect, useState } from "react";
import styles from "./Bookmark.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { UserInfo } from "../../utilis/UseContext/UseContext";
import BookmarkCartdesign from "../../Components/BookmarkCartDesign/BookmarkCartdesign";

const Bookmark = () => {
  let [cartCollection, setCartCollection] = useState([]);
  let { dispatch, state } = useContext(UserInfo);
  useEffect(() => {
    setCartCollection(state.bookmarkCollection);
  }, []);
  return (
    <div className={styles.cartContainer}>
      <Navbar />
      <div>
        {cartCollection.map((item) => {
          return <BookmarkCartdesign item={item} />;
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Bookmark;
