import React from 'react';
import { Box } from '@mui/material';

interface SidebarBackdropProps {
  open: boolean;
  onClose: () => void;
}

const SidebarBackdrop: React.FC<SidebarBackdropProps> = ({ open, onClose }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1150,
        opacity: open ? 1 : 0,
        visibility: open ? 'visible' : 'hidden',
        transition: 'opacity 0.2s ease-in-out',
        backdropFilter: 'blur(4px)',
        background: 'rgba(0, 0, 0, 0.2)',
        pointerEvents: open ? 'auto' : 'none',
        '& [data-sidebar="true"]': {
          backdropFilter: 'none',
        },
      }}
      onClick={onClose}
    />
  );
};

export default SidebarBackdrop;
