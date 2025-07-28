import React from "react";
import { Typography, Box, AppBar, Toolbar, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const Manage: React.FC = () => {
  const history = useHistory();
  let username = "";
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      username = payload.email || payload.name || "";
    }
  } catch {}
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Yönetim
          </Typography>
          {username && <Typography sx={{ mr: 2 }}>{username}</Typography>}
          <Button color="inherit" onClick={handleLogout}>Çıkış</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 4 }}>
        <Typography align="center" sx={{ mt: 2 }}>
          Firma, operatör, makine ve kontrol listesi yönetimi ekranı
        </Typography>
      </Box>
    </Box>
  );
};

export default Manage;
