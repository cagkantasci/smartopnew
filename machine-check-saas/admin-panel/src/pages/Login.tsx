import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "../services/api";
import { useAuth } from "../context/AuthContext";


const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const { setUser } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      // Kullanıcıyı AuthContext'e ekle
      if (res.data.user) {
        setUser(res.data.user);
        history.push("/dashboard");
      } else {
        // Eğer backend user objesi dönmüyorsa, fetchUserDetails ile çek
        window.location.href = "/dashboard";
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Giriş başarısız");
    }
  };

  return (
    <Box maxWidth={400} mx="auto" mt={8}>
      <Typography variant="h5" mb={2}>Giriş Yap</Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="E-posta"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Şifre"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Giriş Yap
        </Button>
      </form>
      <Button variant="text" color="secondary" fullWidth sx={{ mt: 1 }} onClick={() => history.push("/register")}>Kayıt Ol</Button>
    </Box>
  );
};

export default Login;
