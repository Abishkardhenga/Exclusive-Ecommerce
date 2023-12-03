import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Whislist from "./Pages/Whislist/Whislist";
import Product from "./Pages/Product/Product";
import Contact from "./Pages/Contact/Contact";
import Checkout from "./Pages/Checkout/Checkout";
import Cart from "./Pages/Cart/Cart";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/whislist" element={<Whislist />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
