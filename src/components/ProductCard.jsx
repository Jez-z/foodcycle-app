import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-content">
        <h3>{product.name}</h3>
        <p>{product.seller}</p>
        <p>{product.location}</p>

        <div className="price-row">
          <span className="old-price">
            Rp{Number(product.original_price || product.originalPrice || 0).toLocaleString("id-ID")}
          </span>

          <strong>
            Rp{Number(product.price || 0).toLocaleString("id-ID")}
          </strong>
        </div>

        <p>Stok: {product.quantity}</p>
        <p>Batas konsumsi: {product.expired_time || product.expiredTime || "-"}</p>

        <Link className="button" to={`/products/${product.id}`}>
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
