import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Product/Product";
import Contact from "./Pages/Contact/Contact";
import Checkout from "./Pages/Checkout/Checkout";
import Cart from "./Pages/Cart/Cart";
import Bookmark from "./Pages/Whislist/Bookmark";
import Fashion from "./Pages/Category/Fashion/Fashion";
import Electronics from "./Pages/Category/Electronics/Electronics";
import Health from "./Pages/Category/Health/Health";
import Toys from "./Pages/Category/Toys/Toys";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/category">
        <Route path="Fashion" element={<Fashion />} />
        <Route path="Health" element={<Health />} />
        <Route path="toys" element={<Toys />} />
        <Route path="electronics" element={<Electronics />} />
      </Route>
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
