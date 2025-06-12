import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "../pages/Products/ProductList";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<div>🏠 홈입니다</div>} />
    <Route path="/products" element={<ProductList />} />
  </Routes>
);

export default AppRouter;
