import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import initialProducts from "./data/products";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct";
import Checkout from "./pages/Checkout";
import SellerDashboard from "./pages/SellerDashboard";

function App() {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList products={products} />} />
        <Route
          path="/products/:id"
          element={<ProductDetail products={products} />}
        />
        <Route
          path="/add-product"
          element={<AddProduct addProduct={addProduct} />}
        />
        <Route path="/checkout/:id" element={<Checkout products={products} />} />
        <Route
          path="/seller-dashboard"
          element={<SellerDashboard products={products} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
