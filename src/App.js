import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ProductPage from "./pages/products";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductPage/>} />
      </Routes>
    </Router>

  );
}

export default App;
