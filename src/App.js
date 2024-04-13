import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ProductPage from "./pages/products";
import Navbar from "./navbar"


function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductPage/>} />
      </Routes>
    </Router>

  );
}

export default App;
