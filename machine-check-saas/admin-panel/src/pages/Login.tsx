import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button, Box, Typography, Paper, Avatar } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
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
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)'
    }}>
      <Paper elevation={6} sx={{ p: 4, maxWidth: 380, width: '100%', borderRadius: 3, boxShadow: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" fontWeight={600} mb={1}>
            Giriş Yap
          </Typography>
        </Box>
        <form onSubmit={handleLogin}>
          <TextField
            label="E-posta"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoFocus
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
          {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, py: 1.2, fontWeight: 600 }}>
            Giriş Yap
          </Button>
        </form>
        <Button variant="text" color="secondary" fullWidth sx={{ mt: 2 }} onClick={() => history.push("/register")}>Kayıt Ol</Button>
      </Paper>
    </Box>
  );
};

export default Login;
