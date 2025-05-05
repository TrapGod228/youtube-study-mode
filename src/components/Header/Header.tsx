import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  InputBase,
  Avatar,
  Badge,
  Button
} from '@mui/material';
import {
  Menu,
  Search,
  Mic,
  VideoCall,
  Notifications,
  AccountCircle
} from '@mui/icons-material';

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #e5e5e5', bgcolor: '#fff', zIndex: 1201 }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
        {/* Left: Logo & Menu */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton edge="start" color="default">
            <Menu />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <img src="https://www.youtube.com/s/desktop/6e9d3b5b/img/favicon_144x144.png" alt="YouTube" style={{ width: 32, height: 32 }} />
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#000', ml: 0.5, fontSize: '1.4rem', letterSpacing: '-0.5px' }}>
              YouTube
            </Typography>
            <Typography variant="caption" sx={{ color: '#606060', ml: 0.2, fontWeight: 700, fontSize: '0.7rem', verticalAlign: 'super' }}>IN</Typography>
          </Box>
        </Box>
        {/* Center: Search */}
        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, maxWidth: 600, mx: 2 }}>
          <Box sx={{ display: 'flex', flex: 1, bgcolor: '#f1f1f1', borderRadius: 20, border: '1px solid #ccc', overflow: 'hidden', mr: 1 }}>
            <InputBase
              placeholder="Search"
              sx={{ px: 2, py: 0.5, flex: 1, fontSize: '1rem' }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="submit" sx={{ bgcolor: '#f8f8f8', borderRadius: 0, borderLeft: '1px solid #ccc', px: 2 }}>
              <Search />
            </IconButton>
          </Box>
          <IconButton sx={{ ml: 1, bgcolor: '#f1f1f1', borderRadius: '50%' }}>
            <Mic />
          </IconButton>
        </Box>
        {/* Right: Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton color="default">
            <VideoCall />
          </IconButton>
          <IconButton color="default">
            <Badge badgeContent={9} color="error" max={99}>
              <Notifications />
            </Badge>
          </IconButton>
          <Button sx={{ minWidth: 0, p: 0, ml: 1 }}>
            <Avatar sx={{ width: 32, height: 32 }}>
              <AccountCircle sx={{ fontSize: 32 }} />
            </Avatar>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
