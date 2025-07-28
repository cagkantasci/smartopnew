
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemButton } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Sidebar: React.FC = () => {
    const { user } = useAuth();
    if (!user) return null;
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="/dashboard">Dashboard</ListItemButton>
            </ListItem>
            {(user.role === 'admin' || user.role === 'manager') && (
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/reports">Reports</ListItemButton>
                </ListItem>
            )}
            {(user.role === 'admin' || user.role === 'manager') && (
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/manage">Manage</ListItemButton>
                </ListItem>
            )}
            {/* Diğer menüler rol bazında eklenebilir */}
        </List>
    );
};

export default Sidebar;