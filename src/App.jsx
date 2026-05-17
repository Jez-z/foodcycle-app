import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
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
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: true });

    console.log("DATA SUPABASE:", data);
    console.log("ERROR SUPABASE:", error);

    if (error) {
     console.log("Error ambil data:", error);
   } else {
     setProducts(data);
   }
 };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async (newProduct) => {
    const productToInsert = {
      name: newProduct.name,
      seller: newProduct.seller,
      price: newProduct.price,
      original_price: newProduct.originalPrice,
      quantity: newProduct.quantity,
      location: newProduct.location,
      expired_time: newProduct.expiredTime,
      description: newProduct.description,
      image: newProduct.image,
      status: newProduct.status,
    };

    const { data, error } = await supabase
      .from("products")
      .insert([productToInsert])
      .select();

    if (error) {
      console.log("ERROR TAMBAH PRODUK:", error);
      alert("Gagal menambahkan produk ke database.");
      return;
    }

    setProducts([data[0], ...products]);
  };

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm("Yakin mau hapus produk ini?");

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      console.log("ERROR DELETE:", error);
      alert("Gagal menghapus produk dari database.");
      return;
    }

    setProducts(products.filter((product) => product.id !== id));

    alert("Produk berhasil dihapus!");
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
          element={<SellerDashboard products={products} deleteProduct={deleteProduct} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
