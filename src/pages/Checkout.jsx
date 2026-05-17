import { useParams, Link } from "react-router-dom";

function Checkout({ products }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="page">
        <h2>Produk tidak ditemukan</h2>
        <Link to="/products">Kembali ke daftar produk</Link>
      </div>
    );
  }

  const serviceFee = 1000;
  const total = product.price + serviceFee;

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
          <strong>Biaya Layanan:</strong> Rp
          {serviceFee.toLocaleString("id-ID")}
        </p>

        <hr />

        <h2>Total: Rp{total.toLocaleString("id-ID")}</h2>

        <button
          className="button"
          onClick={() => alert("Pesanan berhasil dikonfirmasi!")}
        >
          Konfirmasi Pesanan
        </button>
      </div>
    </div>
  );
}

export default Checkout;
