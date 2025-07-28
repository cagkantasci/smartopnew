import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { registerUser } from "../services/api";
import { useHistory } from "react-router-dom";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const history = useHistory();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await registerUser(name, email, password);
      setSuccess("Kayıt başarılı! Giriş yapabilirsiniz.");
      setTimeout(() => history.push("/"), 1500);
    } catch (err: any) {
      setError(err.message || "Kayıt başarısız");
    }
  };

  return (
    <Box maxWidth={400} mx="auto" mt={8}>
      <Typography variant="h5" mb={2}>Kayıt Ol</Typography>
      <form onSubmit={handleRegister}>
        <TextField
          label="Ad Soyad"
          fullWidth
          margin="normal"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
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
        {success && <Typography color="primary">{success}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Kayıt Ol
        </Button>
      </form>
    </Box>
  );
};

export default Register;
