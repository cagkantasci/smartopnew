// Demo veri ekleme
import { pool } from './services/db';
async function addDemoData() {
  // Şirket ekle
  await pool.query(`INSERT INTO companies (id, name) VALUES (1, 'Demo Şirket') ON CONFLICT (id) DO NOTHING`);
  // Ekipman ekle
  await pool.query(`INSERT INTO equipments (id, name, plate, type, company_id) VALUES (1, 'Test Makine', 'ABC123', 'Kompresör', 1) ON CONFLICT (id) DO NOTHING`);
  // Kullanıcı ekle
  await pool.query(`INSERT INTO users (id, email, password, role) VALUES (1, 'demo@demo.com', '$2a$10$Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9QOQ9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9', 'admin') ON CONFLICT (id) DO NOTHING`);
  // Rapor ekle
  await pool.query(`INSERT INTO reports (id, title, description, equipment_id, created_by) VALUES (1, 'Test Rapor', 'Test açıklama', 1, 1) ON CONFLICT (id) DO NOTHING`);
}

addDemoData().catch(console.error);
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

import companyRoutes from "./routes/companyRoutes";

import equipmentRoutes from "./routes/equipmentRoutes";

import checklistRoutes from "./routes/checklistRoutes";
import reportRoutes from "./routes/reportRoutes";

import uploadRoutes from "./routes/uploadRoutes";

import { i18n } from "./middleware/i18n";

import worklogRoutes from "./routes/worklogRoutes";

import notificationRoutes from "./routes/notificationRoutes";

import statsRoutes from "./routes/statsRoutes";

import offlineRoutes from "./routes/offlineRoutes";

import qrRoutes from "./routes/qrRoutes";

import subscriptionRoutes from "./routes/subscriptionRoutes";

import maintenanceRoutes from "./routes/maintenanceRoutes";

import aiRoutes from "./routes/aiRoutes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(i18n);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.use("/api/company", companyRoutes);

app.use("/api/equipment", equipmentRoutes);

app.use("/api/checklist", checklistRoutes);
app.use("/api/report", reportRoutes);

app.use("/api/upload", uploadRoutes);

app.use("/api/worklog", worklogRoutes);

app.use("/api/notification", notificationRoutes);

app.use("/api/stats", statsRoutes);

app.use("/api/offline", offlineRoutes);

app.use("/api/qr", qrRoutes);

app.use("/api/subscription", subscriptionRoutes);

app.use("/api/maintenance", maintenanceRoutes);

app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("Machine Check SaaS API çalışıyor!");
});

export default app;
