import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar"
import Footer from "./footer"
import { CartProvider } from "./cartContext";

import HomePage from "./pages/home";
import ProductPage from "./pages/products";
import ProductDetailPage from "./pages/productDetail";
import ContactPage from "./pages/contacts";
import BookClub from "./pages/bookclub";
import BookClubApply from "./pages/bookclubApply";


function App() {
  
  return (
    <CartProvider>
      <Router>
       <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<ProductPage/>} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/bookclub" element={<BookClub/>} />
          <Route path="/bookclub/apply" element={<BookClubApply />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
