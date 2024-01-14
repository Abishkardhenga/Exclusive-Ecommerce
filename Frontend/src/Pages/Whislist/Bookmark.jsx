import React, { useContext, useEffect, useState } from "react";
import styles from "./Bookmark.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { UserInfo } from "../../utilis/UseContext/UseContext";
import BookmarkCard from "../../Components/BookmarkCartDesign/BookmarkCard";

const Bookmark = () => {
  let [cartCollection, setCartCollection] = useState([]);
  let { dispatch, state } = useContext(UserInfo);
  useEffect(() => {
    setCartCollection(state.bookmarkCollection);
  }, []);
  return (
    <div className={styles.cartContainer}>
      <Navbar />
      <div className={styles.bookmarkHeroSection}>
        {cartCollection.map((item) => {
          return <BookmarkCard />;
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Bookmark;
