import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper, MenuItem, Grid } from "@mui/material";
import { registerUser, getEquipments } from "../services/api";
import EquipmentForm from "./EquipmentForm";
import UserEditForm from "./UserEditForm";
import EquipmentEditForm from "./EquipmentEditForm";
import { Dialog } from "@mui/material";

const AdminActions: React.FC = () => {
  // Kullanıcı ekleme
  const [userForm, setUserForm] = useState({ name: "", email: "", password: "", role: "operator" });
  const [userMsg, setUserMsg] = useState("");
  // Ekipman ekleme (özellikli)
  const [equipmentMsg, setEquipmentMsg] = useState("");
  const [equipmentDialogOpen, setEquipmentDialogOpen] = useState(false);
  const [editUserOpen, setEditUserOpen] = useState(false);
  const [editEquipmentOpen, setEditEquipmentOpen] = useState(false);

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const handleUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserMsg("");
    try {
      await registerUser(userForm.name, userForm.email, userForm.password, userForm.role);
      setUserMsg("Kullanıcı başarıyla eklendi.");
      setUserForm({ name: "", email: "", password: "", role: "operator" });
    } catch (err: any) {
      setUserMsg("Hata: " + (err.message || err));
    }
  };

  // Ekipman ekleme fonksiyonu (özellikli)
  const handleEquipmentSubmit = async (data: { name: string; features: string[] }) => {
    setEquipmentMsg("(Demo) Ekipman ekleme için backend API gereklidir.\n" + JSON.stringify(data));
    setEquipmentDialogOpen(false);
  };
  // Kullanıcı düzenleme (demo)
  const handleUserEdit = (data: { name: string; email: string; role: string }) => {
    alert("Kullanıcı düzenleme (demo): " + JSON.stringify(data));
    setEditUserOpen(false);
  };
  // Ekipman düzenleme (demo)
  const handleEquipmentEdit = (data: { name: string; features: string[] }) => {
    alert("Makine düzenleme (demo): " + JSON.stringify(data));
    setEditEquipmentOpen(false);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, mb: 2 }}>
          <Typography variant="h6" mb={2}>Kullanıcı Ekle</Typography>
          <form onSubmit={handleUserSubmit}>
            <TextField label="Ad Soyad" name="name" value={userForm.name} onChange={handleUserChange} fullWidth margin="normal" required />
            <TextField label="E-posta" name="email" value={userForm.email} onChange={handleUserChange} fullWidth margin="normal" required />
            <TextField label="Şifre" name="password" type="password" value={userForm.password} onChange={handleUserChange} fullWidth margin="normal" required />
            <TextField select label="Rol" name="role" value={userForm.role} onChange={handleUserChange} fullWidth margin="normal">
              <MenuItem value="operator">Operatör</MenuItem>
              <MenuItem value="manager">Yönetici</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </TextField>
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Ekle</Button>
            {userMsg && <Typography sx={{ mt: 2 }} color={userMsg.startsWith("Hata") ? "error" : "success.main"}>{userMsg}</Typography>}
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, mb: 2 }}>
          <Typography variant="h6" mb={2}>Ekipman Ekle</Typography>
          <Button variant="contained" color="success" onClick={() => setEquipmentDialogOpen(true)}>
            Ekipman Ekle (Özellikli)
          </Button>
          {equipmentMsg && <Typography sx={{ mt: 2 }} color="warning.main">{equipmentMsg}</Typography>}
          <Dialog open={equipmentDialogOpen} onClose={() => setEquipmentDialogOpen(false)}>
            <EquipmentForm onSubmit={handleEquipmentSubmit} />
          </Dialog>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, mb: 2 }}>
          <Typography variant="h6" mb={2}>Kullanıcı Düzenle (Demo)</Typography>
          <Button variant="outlined" color="primary" onClick={() => setEditUserOpen(true)}>Kullanıcı Düzenle</Button>
          <Dialog open={editUserOpen} onClose={() => setEditUserOpen(false)}>
            <UserEditForm initial={{ name: "Demo Kullanıcı", email: "demo@demo.com", role: "operator" }} onSubmit={handleUserEdit} />
          </Dialog>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, mb: 2 }}>
          <Typography variant="h6" mb={2}>Makine Düzenle (Demo)</Typography>
          <Button variant="outlined" color="secondary" onClick={() => setEditEquipmentOpen(true)}>Makine Düzenle</Button>
          <Dialog open={editEquipmentOpen} onClose={() => setEditEquipmentOpen(false)}>
            <EquipmentEditForm initial={{ name: "Demo Makine", features: ["Yağ seviyesi", "Lastik basıncı"] }} onSubmit={handleEquipmentEdit} />
          </Dialog>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AdminActions;
