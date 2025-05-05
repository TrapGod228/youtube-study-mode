import React from 'react';
import { Box, Button, Typography, Slider, IconButton } from '@mui/material';
import { Timer, BlurOn } from '@mui/icons-material';
import { useStudyMode } from '../../context/StudyModeContext';

interface StudyModeControlsProps {
  currentSpeed: number;
  onChangeSpeed: (speed: number) => void;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  timeLeft: number;
}

const StudyModeControls: React.FC<StudyModeControlsProps> = ({
  currentSpeed,
  onChangeSpeed,
  isTimerRunning,
  onToggleTimer,
  timeLeft,
}) => {
  const { isStudyMode, isAutoplay, isNotesVisible, toggleAutoplay, toggleNotes, toggleStudyMode } = useStudyMode();
  const speedMarks = [
    { value: 0.5, label: '0.5x' },
    { value: 1.0, label: '1.0x' },
    { value: 1.5, label: '1.5x' },
    { value: 2.0, label: '2.0x' },
  ];

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <Box sx={{ p: 2, bgcolor: 'rgba(0,0,0,0.8)', borderRadius: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" color="white">
          Study Mode Controls
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<BlurOn />}
            onClick={toggleStudyMode}
            sx={{
              '&:hover': {
                bgcolor: isStudyMode ? 'primary.main' : 'primary.light',
              }
            }}
          >
            {isStudyMode ? 'Disable Study Mode' : 'Enable Study Mode'}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={isAutoplay ? <Timer /> : <BlurOn />}
            onClick={toggleAutoplay}
            sx={{
              '&:hover': {
                bgcolor: isAutoplay ? 'primary.main' : 'primary.light',
              }
            }}
          >
            {isAutoplay ? 'Disable Autoplay' : 'Enable Autoplay'}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={isNotesVisible ? <Timer /> : <BlurOn />}
            onClick={toggleNotes}
            sx={{
              '&:hover': {
                bgcolor: isNotesVisible ? 'primary.main' : 'primary.light',
              }
            }}
          >
            {isNotesVisible ? 'Hide Notes' : 'Show Notes'}
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Typography variant="subtitle1" color="white">
            Video Speed
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Slider
              value={currentSpeed}
              min={0.5}
              max={2.0}
              step={0.5}
              marks={speedMarks}
              onChange={(_, value) => onChangeSpeed(value as number)}
              sx={{ color: 'white' }}
            />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconButton
            color="primary"
            onClick={onToggleTimer}
            sx={{
              bgcolor: isTimerRunning ? 'primary.main' : 'transparent',
              '&:hover': {
                bgcolor: isTimerRunning ? 'primary.dark' : 'primary.light',
              },
            }}
          >
            <Timer />
          </IconButton>
          <Typography variant="subtitle1" color="white">
            {formatTime(timeLeft)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StudyModeControls;
