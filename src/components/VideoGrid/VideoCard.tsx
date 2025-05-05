import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

interface VideoCardProps {
  title: string;
  channel: string;
  views: string;
  date: string;
  duration: string;
  avatar: string;
  thumbnail: string;
  sponsored?: boolean;
  live?: boolean;
  viewsCount?: number;
  publishedTime?: string;
  videoId?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, channel, views, date, duration, avatar, thumbnail, sponsored, live }) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        bgcolor: '#fff',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        },
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        mb: 2,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          bgcolor: '#fff',
          overflow: 'hidden',
          borderRadius: 2,
        }}
      >
        <img
          src={thumbnail}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            borderRadius: 8,
          }}
        />
        {duration && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              bgcolor: 'rgba(0,0,0,0.87)',
              color: '#fff',
              borderRadius: 1,
              px: 0.75,
              py: 0.25,
              fontSize: 12,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            {duration}
          </Box>
        )}
        {live && (
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              bgcolor: '#ff0000',
              color: '#fff',
              borderRadius: 2,
              px: 1.5,
              py: 0.25,
              fontSize: 12,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            LIVE
          </Box>
        )}
        {sponsored && (
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              bgcolor: '#e6e6e6',
              color: '#222',
              borderRadius: 2,
              px: 1,
              py: 0.25,
              fontSize: 12,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            Sponsored
          </Box>
        )}
      </Box>
      <Box sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        width: '100%',
      }}>
        <Avatar
          src={avatar}
          alt={channel}
          sx={{
            width: 36,
            height: 36,
            mt: 0.5,
            bgcolor: '#f9f9f9',
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 500,
              fontSize: 14,
              color: '#030303',
              mb: 1,
              lineHeight: 1.4,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <Typography
              variant="body2"
              sx={{
                color: '#606060',
                fontSize: 12,
                fontWeight: 500,
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                mb: 0.5,
              }}
            >
              {channel}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: '#606060',
              fontSize: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 0.75,
              mt: 'auto',
            }}
          >
            <span>{views}</span>
            <span>•</span>
            <span>{date}</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoCard;
