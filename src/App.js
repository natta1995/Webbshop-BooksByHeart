import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ProductPage from "./pages/products";
import Navbar from "./navbar"
import ContactPage from "./pages/contacts";


function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </Router>

  );
}

export default App;
