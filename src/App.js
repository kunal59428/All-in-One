import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Donar from "./pages/donar/Donar/Donar";
import MyState from "./components/context/data/myState";
import Footer from "./components/footer/Footer";
import "./App.css";
import Login from "./components/Login/Login";
import ConsumerSwt from "./pages/Consumer/Consumer/consumer";
import Product from "./pages/donar/Product/Product";
import DonationForm from "./pages/donar/DonationForm/DonationForm";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/Contact/contact";
import Cart from "./components/cart/Cart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Services from "./components/Services/Services";
import Success from "./components/CancelSuccess/Success"
import Cancel from "./components/CancelSuccess/Cancel"

function App() {
  return (
    <div className="app">
      <MyState>
        <Router>
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donar" element={<Donar />} />
            <Route path="/Consumer" element={<ConsumerSwt />} />
            <Route path="/dForm" element={<DonationForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/services" element={<Services />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
          <Footer />
        </Router>
      </MyState>
    </div>
  );
}

export default App;
