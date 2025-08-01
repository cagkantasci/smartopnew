import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Paper, Avatar, Button } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import { getEquipments, getReports } from '../services/api';
import { useHistory } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<any>({ users: 0, equipment: 0, reports: 0 });
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
    // Sahte kullanıcı sayısı, gerçek uygulamada API'den alınmalı
    const users = 5;
    Promise.all([
      getEquipments(),
      getReports()
    ]).then(([equipments, reports]) => {
      setStats({
        users,
        equipment: equipments.length,
        reports: reports.length
      });
    });
  }, []);

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
          Yönetim Paneli
        </Typography>
        <Box>
          {username && <Typography sx={{ mr: 2, display: 'inline-block' }}>{username}</Typography>}
          <Button color="primary" variant="outlined" onClick={handleLogout}>Çıkış</Button>
        </Box>
      </Box>
      <Grid container spacing={4} justifyContent="center" maxWidth={900}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={4} sx={{ p: 3, borderRadius: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 170, cursor: 'pointer', transition: 'box-shadow 0.2s', '&:hover': { boxShadow: 8 } }} onClick={() => history.push('/manage')}>
            <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48, mb: 1 }}>
              <GroupIcon fontSize="large" />
            </Avatar>
            <Typography variant="h6" fontWeight={600} color="text.secondary">Toplam Kullanıcı</Typography>
            <Typography variant="h3" fontWeight={700} color="primary.main">{stats.users || 0}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={4} sx={{ p: 3, borderRadius: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 170, cursor: 'pointer', transition: 'box-shadow 0.2s', '&:hover': { boxShadow: 8 } }} onClick={() => history.push('/manage')}>
            <Avatar sx={{ bgcolor: 'success.main', width: 48, height: 48, mb: 1 }}>
              <BuildCircleIcon fontSize="large" />
            </Avatar>
            <Typography variant="h6" fontWeight={600} color="text.secondary">Toplam Ekipman</Typography>
            <Typography variant="h3" fontWeight={700} color="success.main">{stats.equipment || 0}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={4} sx={{ p: 3, borderRadius: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 170, cursor: 'pointer', transition: 'box-shadow 0.2s', '&:hover': { boxShadow: 8 } }} onClick={() => history.push('/reports')}>
            <Avatar sx={{ bgcolor: 'warning.main', width: 48, height: 48, mb: 1 }}>
              <DescriptionIcon fontSize="large" />
            </Avatar>
            <Typography variant="h6" fontWeight={600} color="text.secondary">Toplam Rapor</Typography>
            <Typography variant="h3" fontWeight={700} color="warning.main">{stats.reports || 0}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;