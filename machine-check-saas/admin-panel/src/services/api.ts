// Kullanıcı kayıt fonksiyonu
export const registerUser = async (name: string, email: string, password: string, role: string) => {
    try {
        const response = await axios.post('/api/auth/register', { name, email, password, role });
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};
// Kontrol listesi verisini çeken fonksiyon
export const getChecklists = async (): Promise<any[]> => {
    try {
        const response = await axios.get('/api/checklist');
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};

// Bildirim gönderme fonksiyonu
export const sendNotification = async (token: string, title: string, body: string): Promise<any> => {
    try {
        const response = await axios.post('/api/notification/send', { token, title, body });
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};
// Rapor listesini çeken fonksiyon
export const getReports = async (): Promise<any[]> => {
    try {
        const response = await axios.get('/api/report');
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};
// Makine listesini çeken fonksiyon (token gerektirmez)
export const getEquipments = async (): Promise<any[]> => {
    try {
        const response = await axios.get('/api/equipment');
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};
import axios from 'axios';
export default axios;

// Token'ı otomatik ekleyen interceptor
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Function to handle user login
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post('/api/auth/login', { email, password });
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : error.message;
  }
};

// Function to fetch all machines
export const fetchMachines = async (token: string) => {
    try {
        const response = await axios.get('/api/machines', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};

// Function to submit a machine check
export const submitMachineCheck = async (checkData: any, token: string) => {
    try {
        const response = await axios.post('/api/machine-checks', checkData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};

// Function to fetch user details
export const fetchUserDetails = async () => {
    try {
        const response = await axios.get('/api/users/me');
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};

// Raporu onayla
export const approveReport = async (reportId: number, approvedBy: number) => {
    try {
        const response = await axios.post(`/api/report/${reportId}/approve`, { approved_by: approvedBy });
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};

// Raporu reddet
export const rejectReport = async (reportId: number, approvedBy: number) => {
    try {
        const response = await axios.post(`/api/report/${reportId}/reject`, { approved_by: approvedBy });
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};

// Bildirimleri listele
export const getNotifications = async (userId: number) => {
    try {
        const response = await axios.get(`/api/notification/list`, { params: { user_id: userId } });
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};