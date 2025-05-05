import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useStudyMode } from '../../context/StudyModeContext';
import StudyIcon from '../StudyModeToggle/StudyIcon';
import StudyModeSetupModal from '../StudyModeSetup/StudyModeSetupModal';

const StudyModeButton: React.FC = () => {
  const [isSetupOpen, setIsSetupOpen] = useState(false);
  const { isStudyMode, toggleStudyMode } = useStudyMode();

  const handleToggle = () => {
    if (!isStudyMode) {
      setIsSetupOpen(true);
    } else {
      toggleStudyMode();
    }
  };

  return (
    <>
      <Box
        onClick={handleToggle}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.75,
          bgcolor: 'background.paper',
          borderRadius: '12px',
          px: 2,
          py: 0.625,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.05)',
            bgcolor: isStudyMode ? 'primary.light' : 'action.hover',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
          position: 'relative',
        }}
      >
        {isStudyMode ? (
          <Box
            sx={{
              position: 'absolute',
              top: -4,
              right: -4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'primary.main',
              color: 'white',
              borderRadius: '50%',
              px: 0.5,
              py: 0.25,
              fontSize: '0.75rem',
              fontWeight: 500,
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            ACTIVE
          </Box>
        ) : (
          <Box
            sx={{
              position: 'absolute',
              top: -4,
              right: -4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'primary.main',
              color: 'white',
              borderRadius: '50%',
              px: 0.5,
              py: 0.25,
              fontSize: '0.75rem',
              fontWeight: 500,
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            NEW
          </Box>
        )}
        <StudyIcon />
        <Typography variant="body2" sx={{
          color: 'text.secondary',
          fontSize: '0.875rem',
        }}>
          {isStudyMode ? 'Study Mode' : 'Enable Study Mode'}
        </Typography>
      </Box>
      <StudyModeSetupModal
        open={isSetupOpen}
        onClose={() => setIsSetupOpen(false)}
      />
    </>
  );
};

export default StudyModeButton;
