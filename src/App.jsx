import { useState } from "react";

function App() {
  const [cart, setCart] = useState(0);

  const products = [
    { name: "Nasi Goreng", price: 15000, exp: "Hari ini" },
    { name: "Roti Bakery", price: 10000, exp: "Besok" },
  ];

  const addToCart = () => {
    setCart(cart + 1);
  };

  return (
    <div style={{ fontFamily: "Arial" }}>
      
      {/* NAVBAR */}
      <div
        style={{
          background: "#2e7d32",
          color: "white",
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>FoodCycle</h2>
        <div>Cart: {cart}</div>
      </div>

      {/* CONTENT */}
      <div style={{ padding: "20px" }}>
        <h1>Marketplace</h1>
        <p>Beli makanan surplus dengan harga diskon</p>

        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          {products.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                width: "200px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  height: "100px",
                  background: "#eee",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              ></div>

              <h3>{item.name}</h3>
              <p>Rp{item.price}</p>
              <p style={{ fontSize: "12px", color: "red" }}>
                Exp: {item.exp}
              </p>

              <button
                onClick={addToCart}
                style={{
                  marginTop: "10px",
                  padding: "8px",
                  width: "100%",
                  background: "#2e7d32",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Tambah ke Keranjang
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;