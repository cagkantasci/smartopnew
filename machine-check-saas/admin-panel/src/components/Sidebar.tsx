
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemButton } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';

const Sidebar: React.FC = () => {
    const { user } = useAuth();
    const { t } = useTranslation();
    if (!user) return null;
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="/dashboard">{t('dashboard')}</ListItemButton>
            </ListItem>
            {(user.role === 'admin' || user.role === 'manager') && (
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/reports">{t('reports')}</ListItemButton>
                </ListItem>
            )}
            {(user.role === 'admin' || user.role === 'manager') && (
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/manage">{t('equipments')}</ListItemButton>
                </ListItem>
            )}
            {/* Diğer menüler rol bazında eklenebilir */}
        </List>
    );
};

export default Sidebar;