export interface WorkLog {
  id: number;
  operator_id: number;
  equipment_id: number;
  start_time: string;
  end_time?: string;
  distance?: number;
  fuel_cost?: number;
}
