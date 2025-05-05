import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, IconButton, Button } from '@mui/material';
import { PlayArrow, Pause, RestartAlt, VolumeUp, VolumeOff } from '@mui/icons-material';
import { useStudyMode } from '../../context/StudyModeContext';

interface TimerState {
  isRunning: boolean;
  isWorkSession: boolean;
  timeLeft: number;
  isSoundEnabled: boolean;
}

const PomodoroTimer: React.FC = () => {
  const { isStudyMode } = useStudyMode();
  const [timer, setTimer] = useState<TimerState>({
    isRunning: false,
    isWorkSession: true,
    timeLeft: 1500, // 25 minutes in seconds
    isSoundEnabled: true,
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timer.isRunning) {
      interval = setInterval(() => {
        setTimer(prev => ({
          ...prev,
          timeLeft: prev.timeLeft - 1
        }));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer.isRunning]);

  useEffect(() => {
    if (timer.timeLeft <= 0) {
      playSound();
      setTimer(prev => ({
        ...prev,
        isWorkSession: !prev.isWorkSession,
        timeLeft: prev.isWorkSession ? 300 : 1500, // 5 minutes break or 25 minutes work
        isRunning: false
      }));
    }
  }, [timer.timeLeft]);

  const playSound = () => {
    if (timer.isSoundEnabled) {
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2067/2067-preview.mp3');
      audio.play().catch(console.error);
    }
  };

  const toggleTimer = () => {
    setTimer(prev => ({
      ...prev,
      isRunning: !prev.isRunning
    }));
  };

  const resetTimer = () => {
    setTimer({
      isRunning: false,
      isWorkSession: true,
      timeLeft: 1500,
      isSoundEnabled: timer.isSoundEnabled,
    });
  };

  const toggleSound = () => {
    setTimer(prev => ({
      ...prev,
      isSoundEnabled: !prev.isSoundEnabled
    }));
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        bgcolor: isStudyMode ? 'background.paper' : 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        minWidth: 300,
      }}
    >
      <Box
        sx={{
          width: '100%',
          aspectRatio: '1',
          borderRadius: '50%',
          bgcolor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem',
          fontWeight: 'bold',
        }}
      >
        {formatTime(timer.timeLeft)}
      </Box>

      <Typography
        variant="h6"
        sx={{
          color: isStudyMode ? 'text.primary' : 'text.secondary',
          mb: 2,
        }}
      >
        {timer.isWorkSession ? 'Work Session' : 'Break Time'}
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <IconButton
          onClick={toggleTimer}
          size="large"
          sx={{
            bgcolor: timer.isRunning ? 'error.main' : 'primary.main',
            '&:hover': {
              bgcolor: timer.isRunning ? 'error.dark' : 'primary.dark',
            },
          }}
        >
          {timer.isRunning ? <Pause /> : <PlayArrow />}
        </IconButton>

        <Button
          variant="outlined"
          color="primary"
          startIcon={<RestartAlt />}
          onClick={resetTimer}
        >
          Reset
        </Button>

        <IconButton
          onClick={toggleSound}
          size="large"
          sx={{
            bgcolor: timer.isSoundEnabled ? 'primary.main' : 'grey.300',
            '&:hover': {
              bgcolor: timer.isSoundEnabled ? 'primary.dark' : 'grey.400',
            },
          }}
        >
          {timer.isSoundEnabled ? <VolumeUp /> : <VolumeOff />}
        </IconButton>
      </Box>
    </Paper>
  );
};

export default PomodoroTimer;
