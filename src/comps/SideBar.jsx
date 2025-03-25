import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const navItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/', color: '#FFD700' },
  { text: 'Products', icon: <InventoryIcon />, path: '/products', color: '#FF69B4' },
  { text: 'Category', icon: <CategoryIcon />, path: '/categories', color: '#FFA500' },
  { text: 'Orders', icon: <ShoppingCartIcon />, path: '/orders', color: '#32CD32' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings', color: '#1E90FF' },
];

const SideBar = () => {
  return (
    <Box
      sx={{
        width: 250,
        height: '120vh',
        background: 'linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4)',
        color: 'white',
        padding: '20px',
        boxShadow: '4px 0px 12px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          textAlign: 'center',
          letterSpacing: 1.5,
          fontFamily: 'Poppins, sans-serif',
          background: 'linear-gradient(90deg, #fff1eb, #ace0f9)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Maaz
      </Typography>

      {/* Sidebar Navigation */}
      <List sx={{ mt: 4 }}>
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            style={{ textDecoration: 'none' }}
          >
            <ListItem
              button
              sx={{
                marginBottom: 5,
                borderRadius: '12px',
                transition: '0.3s',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.05)',
                },
                '&.active': {
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(6px)',
                },
              }}
            >
              <ListItemIcon sx={{ color: item.color }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ color: 'white', fontWeight: 500 }}
              />
            </ListItem>
          </NavLink>
        ))}
      </List>

      {/* Logout Button */}
      <Box sx={{ textAlign: 'center', mt: 'auto', paddingBottom: '20px' }}>
        <NavLink to="/logout" style={{ textDecoration: 'none' }}>
          <ListItem
            button
            sx={{
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.15)',
              color: 'white',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.3)',
              },
            }}
          >
            <ListItemIcon>
              <ExitToAppIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </NavLink>
      </Box>
    </Box>
  );
};

export default SideBar;
