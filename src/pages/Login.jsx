import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage("Login gagal: " + error.message);
      return;
    }

    setMessage("Login berhasil!");
    navigate("/");
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Login</h1>
        <p>Masuk ke akun FoodCycle kamu.</p>

        <form onSubmit={handleLogin} className="auth-form">
          <label>Email</label>
          <input
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Masuk..." : "Login"}
          </button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <p className="auth-link">
          Belum punya akun? <Link to="/register">Register</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;