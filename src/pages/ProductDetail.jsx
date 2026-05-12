import { useParams, Link } from "react-router-dom";

function ProductDetail({ products }) {
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

  return (
    <div className="page detail-layout">
      <img className="detail-image" src={product.image} alt={product.name} />

      <div className="detail-content">
        <h1>{product.name}</h1>
        <p>{product.description}</p>

        <p>
          <strong>Penjual:</strong> {product.seller}
        </p>
        <p>
          <strong>Lokasi:</strong> {product.location}
        </p>
        <p>
          <strong>Stok:</strong> {product.quantity}
        </p>
        <p>
          <strong>Kedaluwarsa:</strong> {product.expiredTime}
        </p>
        <p>
          <strong>Status:</strong> {product.status}
        </p>

        <div className="price-row detail-price">
          <strong>Rp{product.price.toLocaleString("id-ID")}</strong>
          <span>Rp{product.originalPrice.toLocaleString("id-ID")}</span>
        </div>

        <Link className="button" to={`/checkout/${product.id}`}>
          Pesan Sekarang
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;
