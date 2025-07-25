// Kontrol listesi verisini çeken fonksiyon
export const getChecklists = async (): Promise<any[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/checklist`);
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};

// Bildirim gönderme fonksiyonu
export const sendNotification = async (token: string, title: string, body: string): Promise<any> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/notification/send`, { token, title, body });
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};
// Rapor listesini çeken fonksiyon
export const getReports = async (): Promise<any[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/report`);
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};
// Makine listesini çeken fonksiyon (token gerektirmez)
export const getEquipments = async (): Promise<any[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/equipment`);
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

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
        const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};

// Function to fetch all machines
export const fetchMachines = async (token: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/machines`, {
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
        const response = await axios.post(`${API_BASE_URL}/machine-checks`, checkData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};

// Function to fetch user details
export const fetchUserDetails = async (token: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/me`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : error.message;
    }
};