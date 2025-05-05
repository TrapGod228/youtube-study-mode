import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Home as HomeIcon,
  Subscriptions as SubscriptionsIcon,
  AccountCircle as AccountIcon,
  Menu,
  YouTube,
} from '@mui/icons-material';
import ShortsIcon from './icons/ShortsIcon';

interface SidebarNavigationProps {
  isSidebarVisible: boolean;
  onToggle: () => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isSidebarVisible, onToggle }) => {


  const navItems = [
    {
      icon: <HomeIcon sx={{ fontSize: 24 }} />,
      text: 'Home',
      path: '/',
    },
    {
      icon: <ShortsIcon />,
      text: 'Shorts',
      path: '/shorts',
    },
    {
      icon: <SubscriptionsIcon sx={{ fontSize: 24 }} />,
      text: 'Subscriptions',
      path: '/subscriptions',
    },
    {
      icon: <AccountIcon sx={{ fontSize: 24 }} />,
      text: 'Me',
      path: '/me',
    },
  ];

  return (
    <Box
      sx={{
        width: '240px',
        height: '100vh',
        bgcolor: 'background.paper',
        borderRight: '1px solid',
        borderColor: 'divider',
        position: 'fixed',
        top: 0,
        left: 0,
        transition: 'transform 0.3s ease-in-out',
        transform: isSidebarVisible ? 'translateX(0)' : 'translateX(-100%)',
        zIndex: 1300,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="close"
          onClick={onToggle}
          sx={{ color: 'text.secondary' }}
        >
          <Menu sx={{ fontSize: 24 }} />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <YouTube sx={{ fontSize: 24, color: '#ff0000' }} />
          <Typography
            variant="h6"
            sx={{
              color: 'text.primary',
              fontWeight: 600,
              fontSize: '1.1rem',
            }}
          >
            YouTube
          </Typography>
        </Box>
      </Box>
      
      <List sx={{ p: 0, mt: 2 }}>
        {navItems.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              '&:hover': {
                bgcolor: 'action.hover',
              },
              py: 1.5,
              minHeight: 'auto',
            }}
          >
            <ListItemIcon sx={{ minWidth: '40px' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                color: 'text.secondary',
                fontSize: '0.9rem',
                fontWeight: 500,
              }}
            />
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
        <Typography
          variant="subtitle2"
          sx={{
            color: 'text.secondary',
            fontWeight: 600,
            mb: 1,
          }}
        >
          Your Channel
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.primary',
            fontWeight: 500,
          }}
        >
          Sign in to like videos, comment, and subscribe.
        </Typography>
        <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
          <AccountIcon sx={{ color: 'text.secondary' }} />
          <Typography
            variant="body2"
            sx={{
              color: 'primary.main',
              fontWeight: 600,
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            Sign in
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNavigation;
