
import React, { useEffect, useState } from "react";
import { Typography, Box, List, ListItem, ListItemText, AppBar, Toolbar, Button } from "@mui/material";
import { getReports } from "../services/api";
import { useNavigate } from "react-router-dom";

const Reports: React.FC = () => {
  const [reports, setReports] = useState<any[]>([]);
  const navigate = useNavigate();
  // Token'dan kullanıcı adı okunursa göster
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
    navigate("/");
  };
  useEffect(() => {
    getReports().then(setReports);
  }, []);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Raporlar
          </Typography>
          {username && <Typography sx={{ mr: 2 }}>{username}</Typography>}
          <Button color="inherit" onClick={handleLogout}>Çıkış</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 4 }}>
        <List>
          {reports.map((r) => (
            <ListItem key={r.id}>
              <ListItemText primary={r.description} secondary={`Durum: ${r.status}`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Reports;
