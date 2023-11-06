import React from "react";
import Home from "../page/home";
import Login from "../page/login";
import Signup from "../page/signup";
import { Routes, Route } from "react-router-dom";
import BuyTicket from "../page/buy-ticket";
import Cart from "../page/cart";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/buy-ticket" element={<BuyTicket />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Router;
