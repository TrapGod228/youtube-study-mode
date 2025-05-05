import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { BlurOn } from '@mui/icons-material';
import StudyIcon from './StudyIcon';
import { useStudyMode } from '../../context/StudyModeContext';

const StudyModeToggle: React.FC = () => {
  const { isStudyMode, toggleStudyMode } = useStudyMode();

  const handleToggle = () => {
    toggleStudyMode();
  };

  return (
    <Tooltip title={isStudyMode ? 'Disable Study Mode' : 'Enable Study Mode'}>
      <IconButton
        color="inherit"
        onClick={handleToggle}
        sx={{
          '&:hover': {
            bgcolor: isStudyMode ? 'primary.main' : 'primary.light',
          }
        }}
      >
        {isStudyMode ? <StudyIcon /> : <BlurOn />}
      </IconButton>
    </Tooltip>
  );
};

export default StudyModeToggle;
