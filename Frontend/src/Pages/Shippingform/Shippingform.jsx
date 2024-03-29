import React, { useContext, useState } from "react";
import "./Shippingform.css"; // Import your CSS file for styling
import axios from "axios";
import { UserInfo } from "../../utilis/UseContext/UseContext";

const ShippingForm = () => {
  const { dispatch, state } = useContext(UserInfo);

  const [shippingDetails, setShippingDetails] = useState({
    fullname: "",
    emailAddress: "",
    phonenumber: "",
    country: "",
    city: "",
    zipcode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  let api = "http://localhost:8000/createshippingaddress";

  let CreateShippingAddress = async () => {
    try {
      const { data, status } = await axios.post(api, {
        fullname: shippingDetails.fullname,
        emailAddress: shippingDetails.emailAddress,
        phonenumber: shippingDetails.phonenumber,
        country: shippingDetails.country,
        city: shippingDetails.city,
        zipcode: shippingDetails.zipcode,
        user: state?.userdata?._id,
      });
      if (status === 200) {
        alert("Successfully stored the shipping address");
        setShippingDetails({
          fullname: "",
          emailAddress: "",
          phonenumber: "",
          country: "",
          city: "",
          zipcode: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="shipping-form-container">
      <h2>Shipping Details</h2>
      <div className="container">
        <label>
          Full Name:
          <input
            type="text"
            name="fullname"
            value={shippingDetails.fullname}
            onChange={handleChange}
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            name="emailAddress"
            value={shippingDetails.emailAddress}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phonenumber"
            value={shippingDetails.phonenumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={shippingDetails.country}
            onChange={handleChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={shippingDetails.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Zip Code:
          <input
            type="text"
            name="zipcode"
            value={shippingDetails.zipcode}
            onChange={handleChange}
          />
        </label>
        <button
          onClick={() => {
            CreateShippingAddress();
          }}
          type="submit"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ShippingForm;
