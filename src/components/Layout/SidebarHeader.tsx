import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { YouTube, Menu } from '@mui/icons-material';

interface SidebarHeaderProps {
  onToggle: () => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ onToggle }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 2,
        borderBottom: '1px solid rgba(0,0,0,0.12)',
        bgcolor: 'background.paper',
      }}
    >
      <IconButton
        onClick={onToggle}
        sx={{
          color: 'text.secondary',
          mr: 2,
        }}
      >
        <Menu />
      </IconButton>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <YouTube sx={{ fontSize: 24 }} />
        <Typography
          variant="h6"
          sx={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: 'text.primary',
          }}
        >
          YouTube
        </Typography>
      </Box>
    </Box>
  );
};

export default SidebarHeader;
