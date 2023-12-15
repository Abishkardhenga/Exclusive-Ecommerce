import React from "react";
import styles from "./Contact.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.heroSection}>
        <div className={styles.formContainer}>
          <h3>Get in Touch</h3>
          <h2>Let's Chat, Reach Out to Us</h2>
          <p>
            Have a question or feedback ? We're here tp help you.Send us a
            message and we will respond in 24 hours .
          </p>
          <div className={styles.inputContainer}>
            <div className={styles.inputWrapper}>
              <p>FirstName</p>
              <input
                type="text"
                placeholder="Enter the Email"
                className={styles.inputBox}
              />
            </div>
            <div className={styles.inputWrapper}>
              <p>Lastname</p>
              <input
                type="text"
                placeholder="Enter the Lastname"
                className={styles.inputBox}
              />
            </div>
          </div>
          <div>
            <p>Email Address</p>
            <input placeholder="enter the email" type="text" />
          </div>
          <div>
            <p>Message</p>
            <textarea
              placeholder="Leave us a message"
              className={styles.textArea}
            ></textarea>
          </div>
        </div>
        <div>
          <div className={styles.imgWrapper}>
            <img
              src={
                "https://images.pexels.com/photos/11402998/pexels-photo-11402998.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              className={styles.image}
              alt="modelImage"
            />
          </div>
          <div>
            <div className={styles.emailContainerWrapper}>
              <MdOutlineEmail className={styles.emailIcon} />
              <div className={styles.emailWrapper}>
                <p>Email</p>
                <p>teamExclusiveShop@gmail.com</p>
              </div>
            </div>
            <div className={styles.phoneContainerWrapper}>
              <FaPhone className={styles.phoneIcon} />
              <div className={styles.phoneWrapper}>
                <p>Phone</p>
                <p>07272272727</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
