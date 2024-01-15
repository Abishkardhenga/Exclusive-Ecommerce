import React, { useContext, useEffect, useState } from "react";
import styles from "./Bookmark.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { UserInfo } from "../../utilis/UseContext/UseContext";
import BookmarkCard from "../../Components/BookmarkCartDesign/BookmarkCard";
import axios from "axios";

const Bookmark = () => {
  let [bookmarkCollection, setbookmarkCollection] = useState([]);
  let { dispatch, state } = useContext(UserInfo);
  let api = "http://localhost:8000/getBookmark";
  const fetchApi = async () => {
    try {
      const { data, status } = await axios.get(api);
      if (status == 200) {
        setbookmarkCollection(data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchApi();
    dispatch({ type: "setGetBookmarkFn", payload: fetchApi });
  }, []);

  return (
    <div className={styles.cartContainer}>
      <Navbar />
      <div className={styles.bookmarkHeroSection}>
        {bookmarkCollection.map((item) => {
          return <BookmarkCard item={item} />;
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Bookmark;
