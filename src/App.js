import React from "react";
import Home from "./components/Home";

import Contacts from "./components/Contacts";
import Order from "./components/Order";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/order" element={<Order />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
