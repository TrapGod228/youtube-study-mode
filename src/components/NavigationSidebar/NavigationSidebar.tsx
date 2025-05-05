import React from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import { Home, Explore, Subscriptions, History, VideoLibrary, Settings } from '@mui/icons-material';

interface NavigationSidebarProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
  visible: boolean;
}

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({ selectedTab, onTabChange, visible }) => {
  const menuItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Explore', icon: <Explore />, path: '/explore' },
    { text: 'Subscriptions', icon: <Subscriptions />, path: '/subscriptions' },
    { text: 'Library', icon: <VideoLibrary />, path: '/library' },
    { text: 'History', icon: <History />, path: '/history' },
    { text: 'Settings', icon: <Settings />, path: '/settings' },
  ];

  return (
    <Box
      sx={{
        width: 60,
        height: '100vh',
        bgcolor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 1000,
        p: 1,
        transition: 'all 0.3s ease',
        transform: visible ? 'translateX(0)' : 'translateX(-100%)',
      }}
    >
      <Stack
        direction="column"
        spacing={1}
        alignItems="center"
        sx={{
          width: '100%',
          pt: 1,
          pb: 3,
          flex: 1,
          overflowY: 'auto',
        }}
      >
        {menuItems.map((item) => (
          <IconButton
            key={item.text}
            onClick={() => onTabChange(item.path)}
            sx={{
              width: '100%',
              justifyContent: 'center',
              color: selectedTab === item.path ? 'primary.main' : 'inherit',
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Stack>

      <Typography
        variant="caption"
        color="text.secondary"
        sx={{
          mt: 'auto',
          width: '100%',
          textAlign: 'center',
          pb: 1,
          fontSize: '0.7rem',
        }}
      >
        © 2025 YouTube
      </Typography>
    </Box>
  );
};

export default NavigationSidebar;
