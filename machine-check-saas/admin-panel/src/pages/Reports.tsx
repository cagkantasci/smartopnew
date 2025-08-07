
import React, { useEffect, useState } from "react";
import { Typography, Box, List, ListItem, ListItemText, Paper, Button } from "@mui/material";
import { getReports } from "../services/api";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Reports: React.FC = () => {
  const [reports, setReports] = useState<any[]>([]);
  const history = useHistory();
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
    history.push("/");
  };
  useEffect(() => {
    getReports().then(setReports);
  }, []);
  const { t } = useTranslation();
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
          {t('reports')}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LanguageSwitcher />
          {username && <Typography sx={{ mr: 2, ml: 2, display: 'inline-block' }}>{username}</Typography>}
          <Button color="primary" variant="outlined" onClick={handleLogout}>{t('logout')}</Button>
        </Box>
      </Box>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3, width: '100%', maxWidth: 700 }}>
        <List>
          {reports.length === 0 && <Typography color="text.secondary">{t('notifications')}</Typography>}
          {reports.map((r) => (
            <ListItem key={r.id} divider>
              <ListItemText primary={r.description} secondary={`Durum: ${r.status}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Reports;