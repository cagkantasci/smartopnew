import React from "react";
import { Typography, Box, Paper, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import AdminActions from "../components/AdminActions";

const Manage: React.FC = () => {
  const history = useHistory();
  let username = "";
  let role = "";
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      username = payload.email || payload.name || "";
      role = payload.role || "";
    }
  } catch {}
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
      py: 6,
      px: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Box sx={{ width: '100%', maxWidth: 1200, mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" fontWeight={700} color="primary.main">
          Yönetim
        </Typography>
        <Box>
          {username && <Typography sx={{ mr: 2, display: 'inline-block' }}>{username}</Typography>}
          <Button color="primary" variant="outlined" onClick={handleLogout}>Çıkış</Button>
        </Box>
      </Box>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3, width: '100%', maxWidth: 700, textAlign: 'center', mb: 4 }}>
        <Typography>
          Firma, operatör, makine ve kontrol listesi yönetimi ekranı
        </Typography>
      </Paper>
      {(role === "admin" || role === "manager") && (
        <AdminActions />
      )}
    </Box>
  );
};

export default Manage;
