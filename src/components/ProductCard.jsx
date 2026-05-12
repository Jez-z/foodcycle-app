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
          <strong>Rp{product.price.toLocaleString("id-ID")}</strong>
          <span>Rp{product.originalPrice.toLocaleString("id-ID")}</span>
        </div>

        <p>Stok: {product.quantity}</p>
        <p>Kedaluwarsa: {product.expiredTime}</p>

        <Link className="button" to={`/products/${product.id}`}>
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
