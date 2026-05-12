import { useState } from "react";

function AddProduct({ addProduct }) {
  const [form, setForm] = useState({
    name: "",
    seller: "",
    price: "",
    originalPrice: "",
    quantity: "",
    location: "",
    expiredTime: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.seller ||
      !form.price ||
      !form.quantity ||
      !form.location
    ) {
      alert("Mohon lengkapi data produk utama.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      ...form,
      price: Number(form.price),
      originalPrice: Number(form.originalPrice || form.price),
      quantity: Number(form.quantity),
      image:
        form.image ||
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
      status: "Tersedia",
    };

    addProduct(newProduct);

    alert("Produk berhasil ditambahkan!");

    setForm({
      name: "",
      seller: "",
      price: "",
      originalPrice: "",
      quantity: "",
      location: "",
      expiredTime: "",
      description: "",
      image: "",
    });
  };

  return (
    <div className="page">
      <h1>Tambah Produk Surplus</h1>
      <p>Penjual dapat menambahkan makanan surplus yang masih layak konsumsi.</p>

      <form className="form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nama produk"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="seller"
          placeholder="Nama penjual"
          value={form.seller}
          onChange={handleChange}
        />

        <input
          name="price"
          type="number"
          placeholder="Harga diskon"
          value={form.price}
          onChange={handleChange}
        />

        <input
          name="originalPrice"
          type="number"
          placeholder="Harga normal"
          value={form.originalPrice}
          onChange={handleChange}
        />

        <input
          name="quantity"
          type="number"
          placeholder="Jumlah stok"
          value={form.quantity}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Lokasi"
          value={form.location}
          onChange={handleChange}
        />

        <input
          name="expiredTime"
          placeholder="Waktu kedaluwarsa"
          value={form.expiredTime}
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="URL gambar produk, opsional"
          value={form.image}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Deskripsi produk"
          value={form.description}
          onChange={handleChange}
        />

        <button className="button" type="submit">
          Tambah Produk
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
