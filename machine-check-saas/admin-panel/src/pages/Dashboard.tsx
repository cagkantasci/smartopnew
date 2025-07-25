import React, { useEffect, useState } from 'react';
import { getEquipments } from '../services/api';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const [equipments, setEquipments] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    // Token'dan kullanıcı adı okunursa göster
    let username = "";
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]));
            username = payload.email || payload.name || "";
        }
    } catch {}

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    useEffect(() => {
        const loadEquipments = async () => {
            try {
                const result = await getEquipments();
                setEquipments(result);
            } catch (err) {
                setError('Makine verisi alınamadı');
            } finally {
                setLoading(false);
            }
        };
        loadEquipments();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    {username && <Typography sx={{ mr: 2 }}>{username}</Typography>}
                    <Button color="inherit" onClick={handleLogout}>Çıkış</Button>
                </Toolbar>
            </AppBar>
            <div>
                <h2>Makine Listesi</h2>
                <ul>
                    {equipments.map((eq: any) => (
                        <li key={eq.id}>{eq.name} - Plaka: {eq.plate}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;