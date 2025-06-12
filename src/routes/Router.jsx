import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import ProductList from "../pages/Products/ProductList";
import ProductDetail from "../pages/Products/ProductDetail";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
);

export default AppRouter;
