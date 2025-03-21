import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import { styled, alpha, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './SideBar';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha('#ffffff', 0.1),
  '&:hover': {
    backgroundColor: alpha('#ffffff', 0.2),
  },
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    maxWidth: 300,
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#fff',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize: '0.875rem',
  },
}));

export default function PrimarySearchAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            background: 'linear-gradient(to right, #ff0080, #7928ca)',
            boxShadow: '0 6px 20px rgba(255, 0, 128, 0.3)',
            borderRadius: 0,
          }}
        >
          <Toolbar
            sx={{
              flexDirection: isXs ? 'column' : 'row',
              alignItems: isXs ? 'stretch' : 'center',
              justifyContent: 'space-between',
              px: 2,
              py: isXs ? 1.5 : 1,
              gap: isXs ? 1.5 : 0,
            }}
          >
            {/* Left Section */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                flexWrap: 'nowrap',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant={isXs ? 'h6' : 'h5'}
                  noWrap
                  sx={{
                    fontWeight: 'bold',
                    letterSpacing: 1.2,
                    color: '#fff',
                    fontSize: isXs ? '1.05rem' : '1.4rem',
                    textShadow: '0 1px 3px rgba(0,0,0,0.4)',
                  }}
                >
                  🔥 My Dashboard
                </Typography>
              </Box>
            </Box>

            {/* Search Section */}
            <Box sx={{ width: '100%' }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
              </Search>
            </Box>

            {/* Icons Section */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: isXs ? 'center' : 'flex-end',
                alignItems: 'center',
                gap: 1,
                width: '100%',
                flexWrap: 'wrap',
              }}
            >
              <IconButton size="large" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton size="large" color="inherit">
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton size="large" color="inherit">
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Sidebar Drawer (Just Full Height) */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              height: '100vh', // ✔ Full height across all screens
              width: 250,
            },
          }}
        >
          <SideBar />
        </Drawer>
      </Box>
    </>
  );
}
