export interface Report {
  id: number;
  operator_id: number;
  equipment_id: number;
  checklist_id: number;
  status: "pending" | "approved" | "rejected";
  photos: string[];
  description: string;
  created_at: string;
}
