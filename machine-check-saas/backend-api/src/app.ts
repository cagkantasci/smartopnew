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
