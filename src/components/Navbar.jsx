import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>FoodCycle</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Produk</Link>
        <Link to="/add-product">Tambah Produk</Link>
        <Link to="/seller-dashboard">Dashboard Penjual</Link>
      </div>
    </nav>
  );
}

export default Navbar;
