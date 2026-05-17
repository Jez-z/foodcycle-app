function SellerDashboard({ products, deleteProduct }) {
  return (
    <div className="page">
      <h1>Dashboard Penjual</h1>
      <p>Halaman ini digunakan penjual untuk memantau dan mengelola produk yang tersedia.</p>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Nama Produk</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>Lokasi</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>Rp{product.price.toLocaleString("id-ID")}</td>
                <td>{product.quantity}</td>
                <td>{product.location}</td>
                <td>{product.status}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SellerDashboard;
