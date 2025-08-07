import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper, Avatar } from "@mui/material";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { registerUser } from "../services/api";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("operator");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const history = useHistory();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await registerUser(name, email, password, role);
      setSuccess("Kayıt başarılı! Giriş yapabilirsiniz.");
      setTimeout(() => history.push("/"), 1500);
    } catch (err: any) {
      setError(err.message || "Kayıt başarısız");
    }
  };

  const { t } = useTranslation();
  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)'
    }}>
      <Paper elevation={6} sx={{ p: 4, maxWidth: 400, width: '100%', borderRadius: 3, boxShadow: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
          <LanguageSwitcher />
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <PersonAddAltIcon />
          </Avatar>
          <Typography component="h1" variant="h5" fontWeight={600} mb={1}>
            {t('login')}
          </Typography>
        </Box>
        <form onSubmit={handleRegister}>
          <TextField
            label={t('welcome')}
            fullWidth
            margin="normal"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <TextField
            select
            label={t('login')}
            fullWidth
            margin="normal"
            value={role}
            onChange={e => setRole(e.target.value)}
            SelectProps={{ native: true }}
            required
            sx={{ background: '#f5f5f5' }}
          >
            <option value="operator">{t('equipments')}</option>
            <option value="manager">{t('reports')}</option>
            <option value="admin">Admin</option>
          </TextField>
          <TextField
            label={t('login') + ' E-posta'}
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <TextField
            label={t('login') + ' Şifre'}
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}
          {success && <Typography color="primary" sx={{ mt: 1 }}>{success}</Typography>}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, py: 1.2, fontWeight: 600 }}>
            {t('login')}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;
