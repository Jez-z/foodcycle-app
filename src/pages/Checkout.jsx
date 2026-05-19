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
        <div className="empty-state">
          <h2>Produk tidak ditemukan</h2>
          <Link className="button" to="/products">
            Kembali ke daftar produk
          </Link>
        </div>
      </div>
    );
  }

  const serviceFee = 1000;
  const subtotal = product.price * Number(quantity || 1);
  const total = subtotal + serviceFee;

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
    <div className="page checkout-page">
      <div className="checkout-header">
        <div>
          <p className="section-label">FoodCycle Checkout</p>
          <h1>Konfirmasi Pesanan</h1>
          <p>
            Cek lagi detail makanan surplus sebelum pesanan kamu dikonfirmasi.
          </p>
        </div>

        <Link className="secondary-button" to="/products">
          Kembali
        </Link>
      </div>

      <div className="checkout-layout">
        <div className="checkout-card product-summary">
          <img
            className="checkout-image"
            src={product.image}
            alt={product.name}
          />

          <div className="checkout-product-info">
            <span className="status-badge">{product.status}</span>
            <h2>{product.name}</h2>
            <p>{product.description}</p>

            <div className="info-grid">
              <div>
                <span>Penjual</span>
                <strong>{product.seller}</strong>
              </div>

              <div>
                <span>Lokasi</span>
                <strong>{product.location}</strong>
              </div>

              <div>
                <span>Stok</span>
                <strong>{product.quantity}</strong>
              </div>

              <div>
                <span>Kedaluwarsa</span>
                <strong>{product.expired_time || product.expiredTime}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="checkout-card order-summary">
          <h2>Data Pesanan</h2>

          <label>Nama Pembeli</label>
          <input
            type="text"
            placeholder="Contoh: Amanda"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
          />

          <label>Jumlah Pesanan</label>
          <input
            type="number"
            min="1"
            max={product.quantity}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <div className="price-detail">
            <div>
              <span>Harga satuan</span>
              <strong>Rp{product.price.toLocaleString("id-ID")}</strong>
            </div>

            <div>
              <span>Subtotal</span>
              <strong>Rp{subtotal.toLocaleString("id-ID")}</strong>
            </div>

            <div>
              <span>Biaya layanan</span>
              <strong>Rp{serviceFee.toLocaleString("id-ID")}</strong>
            </div>

            <div className="total-row">
              <span>Total</span>
              <strong>Rp{total.toLocaleString("id-ID")}</strong>
            </div>
          </div>

          <button className="button checkout-button" onClick={handleCheckout}>
            Konfirmasi Pesanan
          </button>

          <p className="checkout-note">
            Pesanan akan masuk ke dashboard database dengan status pending.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;