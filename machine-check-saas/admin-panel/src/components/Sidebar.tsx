import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';

const Sidebar: React.FC = () => {
    return (
        <Menu>
            <MenuItem component={Link} to="/dashboard">Dashboard</MenuItem>
            <MenuItem component={Link} to="/users">Users</MenuItem>
            <MenuItem component={Link} to="/machines">Machines</MenuItem>
            <MenuItem component={Link} to="/reports">Reports</MenuItem>
            <MenuItem component={Link} to="/settings">Settings</MenuItem>
        </Menu>
    );
};

export default Sidebar;