import React from 'react';
import { Box } from '@mui/material';
import CategoryChips from '../components/CategoryChips/CategoryChips';
import VideoGrid from '../components/VideoGrid/VideoGrid';

const Home: React.FC = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#f9f9f9', pb: 4 }}>
      {/* Category Chips (Topics) */}
      <CategoryChips />

      {/* Video Feed (Responsive Grid) */}
      <Box sx={{ width: '100%', maxWidth: 1400, mx: 'auto', mt: 3 }}>
        <VideoGrid />
      </Box>
    </Box>
  );
};

export default Home;
