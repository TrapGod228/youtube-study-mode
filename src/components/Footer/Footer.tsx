import React from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import { Home, Explore, Subscriptions, History, VideoLibrary, Settings } from '@mui/icons-material';

interface FooterProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const Footer: React.FC<FooterProps> = ({ selectedTab, onTabChange }) => {
  const menuItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Explore', icon: <Explore />, path: '/explore' },
    { text: 'Subscriptions', icon: <Subscriptions />, path: '/subscriptions' },
    { text: 'Library', icon: <VideoLibrary />, path: '/library' },
    { text: 'History', icon: <History />, path: '/history' },
    { text: 'Settings', icon: <Settings />, path: '/settings' },
  ];

  return (
    <Box sx={{ 
      bgcolor: '#f5f5f5',
      borderTop: 1,
      borderColor: 'divider',
      p: 2,
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      gap: { xs: 1, sm: 0 },
      justifyContent: 'center',
      alignItems: 'center',
      height: { xs: 'auto', sm: '60px' },
    }}>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{
        flexWrap: 'wrap',
        gap: 1,
        width: '100%',
        justifyContent: { xs: 'center', sm: 'flex-start' },
      }}>
        {menuItems.map((item) => (
          <IconButton
            key={item.text}
            onClick={() => onTabChange(item.path)}
            sx={{
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
      <Typography variant="body2" align="center" color="text.secondary" sx={{
        mt: { xs: 1, sm: 0 },
        flexGrow: 1,
        textAlign: { xs: 'center', sm: 'left' },
      }}>
        © 2025 YouTube
      </Typography>
    </Box>
  );
};

export default Footer;
