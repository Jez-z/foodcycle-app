import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <div>
        <h1>Kurangi Food Waste dengan FoodCycle</h1>
        <p>
          FoodCycle membantu penjual menawarkan makanan surplus yang masih layak
          konsumsi kepada pembeli dengan harga lebih terjangkau.
        </p>

        <Link className="button" to="/products">
          Lihat Produk
        </Link>
      </div>
    </div>
  );
}

export default Home;
