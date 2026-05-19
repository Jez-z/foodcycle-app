import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

function Checkout({ products }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const [buyerName, setBuyerName] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="page">
        <h2>Produk tidak ditemukan</h2>
        <Link to="/products">Kembali ke daftar produk</Link>
      </div>
    );
  }

  const serviceFee = 1000;
  const total = product.price * Number(quantity) + serviceFee;

  const handleCheckout = async () => {
    if (!buyerName) {
      alert("Nama pembeli wajib diisi.");
      return;
    }

    if (Number(quantity) < 1) {
      alert("Jumlah pesanan minimal 1.");
      return;
    }

    if (Number(quantity) > product.quantity) {
      alert("Jumlah pesanan melebihi stok.");
      return;
    }

    const { error } = await supabase.from("orders").insert([
      {
        product_id: product.id,
        buyer_name: buyerName,
        quantity: Number(quantity),
        total_price: total,
        status: "pending",
      },
    ]);

    if (error) {
      console.log("ERROR CHECKOUT:", error);
      alert("Gagal membuat pesanan.");
      return;
    }

    alert("Pesanan berhasil dikonfirmasi!");
    setBuyerName("");
    setQuantity(1);
  };

  return (
    <div className="page checkout-box">
      <h1>Checkout</h1>

      <div className="summary-card">
        <h2>Ringkasan Pesanan</h2>

        <p>
          <strong>Produk:</strong> {product.name}
        </p>

        <p>
          <strong>Penjual:</strong> {product.seller}
        </p>

        <p>
          <strong>Lokasi:</strong> {product.location}
        </p>

        <p>
          <strong>Harga:</strong> Rp{product.price.toLocaleString("id-ID")}
        </p>

        <p>
          <strong>Stok tersedia:</strong> {product.quantity}
        </p>

        <input
          type="text"
          placeholder="Nama pembeli"
          value={buyerName}
          onChange={(e) => setBuyerName(e.target.value)}
        />

        <input
          type="number"
          min="1"
          max={product.quantity}
          placeholder="Jumlah pesanan"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <p>
          <strong>Biaya Layanan:</strong> Rp
          {serviceFee.toLocaleString("id-ID")}
        </p>

        <hr />

        <h2>Total: Rp{total.toLocaleString("id-ID")}</h2>

        <button className="button" onClick={handleCheckout}>
          Konfirmasi Pesanan
        </button>
      </div>
    </div>
  );
}

export default Checkout;