import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { useStudyMode } from '../../context/StudyModeContext';
import { mockVideos } from '../../data/mockVideos';
import { AIRecommendationEngine } from '../../utils/aiRecommendations';

const FilteredVideos: React.FC = () => {
  const { studyModeFilters } = useStudyMode();
  const recommendationEngine = React.useMemo(() => new AIRecommendationEngine(), []);

  // Get recommended videos using AI
  const filteredVideos = React.useMemo(() => {
    return recommendationEngine.getRecommendedVideos(mockVideos, studyModeFilters);
  }, [studyModeFilters, recommendationEngine]);

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Study Mode Videos
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 2 }}>
        {filteredVideos.map((video) => (
          <Box key={video.id} sx={{ width: '100%' }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={video.thumbnail}
                alt={video.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {video.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {video.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {video.channel} • {video.views} views • {video.duration}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FilteredVideos;
