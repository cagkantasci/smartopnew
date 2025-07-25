export interface User {
  id: number;
  name: string;
  email: string;
  role: 'operator' | 'manager' | 'admin';
  companyId: number;
}

export interface MachineCheck {
  machineId: number;
  operatorId: number;
  checklist: ChecklistItem[];
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  startTime: string;
  fuelEstimate: number;
}

export interface ChecklistItem {
  item: string;
  status: 'ok' | 'faulty';
  photoUrl?: string;
}