import ProductCard from "../components/ProductCard";

function ProductList({ products }) {
  return (
    <div className="page">
      <h1>Daftar Makanan Surplus</h1>
      <p>Pilih makanan surplus yang tersedia di sekitar kamu.</p>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
