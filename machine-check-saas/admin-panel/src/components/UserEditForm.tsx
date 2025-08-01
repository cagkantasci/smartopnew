import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper, MenuItem } from "@mui/material";

interface UserEditFormProps {
  initial: { name: string; email: string; role: string };
  onSubmit: (data: { name: string; email: string; role: string }) => void;
}

const UserEditForm: React.FC<UserEditFormProps> = ({ initial, onSubmit }) => {
  const [form, setForm] = useState(initial);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };
  return (
    <Paper sx={{ p: 3, mb: 2 }}>
      <Typography variant="h6" mb={2}>Kullanıcıyı Düzenle</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Ad Soyad" name="name" value={form.name} onChange={handleChange} fullWidth margin="normal" required />
        <TextField label="E-posta" name="email" value={form.email} onChange={handleChange} fullWidth margin="normal" required />
        <TextField select label="Rol" name="role" value={form.role} onChange={handleChange} fullWidth margin="normal">
          <MenuItem value="operator">Operatör</MenuItem>
          <MenuItem value="manager">Yönetici</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Kaydet</Button>
      </form>
    </Paper>
  );
};

export default UserEditForm;
