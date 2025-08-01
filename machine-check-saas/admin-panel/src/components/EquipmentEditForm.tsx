import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper, IconButton, List, ListItem, ListItemText } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

interface EquipmentEditFormProps {
  initial: { name: string; features: string[] };
  onSubmit: (data: { name: string; features: string[] }) => void;
}

const EquipmentEditForm: React.FC<EquipmentEditFormProps> = ({ initial, onSubmit }) => {
  const [name, setName] = useState(initial.name);
  const [feature, setFeature] = useState("");
  const [features, setFeatures] = useState<string[]>(initial.features);

  const handleAddFeature = () => {
    if (feature.trim()) {
      setFeatures([...features, feature.trim()]);
      setFeature("");
    }
  };
  const handleRemoveFeature = (idx: number) => {
    setFeatures(features.filter((_, i) => i !== idx));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name: name.trim(), features });
  };
  return (
    <Paper sx={{ p: 3, mb: 2 }}>
      <Typography variant="h6" mb={2}>Makineyi Düzenle</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Ekipman/Makine Adı" value={name} onChange={e => setName(e.target.value)} fullWidth margin="normal" required />
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <TextField label="Kontrol Özelliği" value={feature} onChange={e => setFeature(e.target.value)} fullWidth />
          <IconButton color="primary" onClick={handleAddFeature} sx={{ ml: 1 }}><AddIcon /></IconButton>
        </Box>
        <List dense>
          {features.map((f, idx) => (
            <ListItem key={idx} secondaryAction={
              <IconButton edge="end" color="error" onClick={() => handleRemoveFeature(idx)}><DeleteIcon /></IconButton>
            }>
              <ListItemText primary={f} />
            </ListItem>
          ))}
        </List>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Kaydet</Button>
      </form>
    </Paper>
  );
};

export default EquipmentEditForm;
