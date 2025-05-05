import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, IconButton, Button, Slider, Chip, Avatar } from '@mui/material';
import {
  PlayArrow,
  Pause,
  SkipNext,
  SkipPrevious,
  VolumeMute,
  Fullscreen,
  Bookmark,
  BookmarkAdded,
  ThumbUp,
  ThumbDown,
  Share,
  Save,
} from '@mui/icons-material';
import { useVideo } from '../../context/VideoContext';

interface VideoPlayerProps {
  videoUrl: string;
  channelName: string;
  channelAvatar: string;
  views: number;
  publishedTime: string;
  duration: number;
  onLike: () => void;
  onDislike: () => void;
  onSave: () => void;
  onShare: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  channelName,
  channelAvatar,
  views,
  publishedTime,
  duration,
  onLike,
  onDislike,
  onSave,
  onShare,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { addBookmark, bookmarks, jumpToBookmark, clearBookmarks } = useVideo();

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };



  const handleVolumeChange = (_: any, newValue: number | number[]) => {
    const volumeValue = typeof newValue === 'number' ? newValue : newValue[0];
    setVolume(volumeValue);
    if (videoRef.current) {
      videoRef.current.volume = volumeValue / 100;
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (isFullscreen) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  const handleProgressChange = (_: any, newValue: number | number[]) => {
    if (videoRef.current) {
      const progressValue = typeof newValue === 'number' ? newValue : newValue[0];
      videoRef.current.currentTime = progressValue;
    }
  };

  useEffect(() => {
    const handleProgress = () => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('timeupdate', handleProgress);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', handleProgress);
      }
    };
  }, []);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'black', borderRadius: 1, overflow: 'hidden' }}>
      {/* Video Container */}
      <Box sx={{ position: 'relative', aspectRatio: '16/9' }}>
        <video
          ref={videoRef}
          src={videoUrl}
          controls={false}
          autoPlay={false}
          style={{ width: '100%', height: '100%' }}
        />
      </Box>

      {/* Video Info */}
      <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
          <Typography variant="body2" sx={{ flex: 1 }}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </Typography>
          <Box sx={{ width: '100%' }}>
            <Slider
              value={currentTime}
              onChange={handleProgressChange}
              min={0}
              max={duration}
              size="small"
              sx={{
                '& .MuiSlider-thumb': {
                  width: 12,
                  height: 12,
                },
                '& .MuiSlider-track': {
                  height: 2,
                },
                '& .MuiSlider-rail': {
                  height: 2,
                  opacity: 0.5,
                  backgroundColor: 'text.secondary',
                },
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
            {bookmarks.map((bookmark, index) => (
              <Chip
                key={index}
                label={bookmark.label}
                size="small"
                onClick={() => jumpToBookmark(bookmark.time)}
                onDelete={() => {
                  clearBookmarks();
                }}
                sx={{
                  cursor: 'pointer',
                  bgcolor: 'background.paper',
                  color: 'text.primary',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                }}
              />
            ))}
            <IconButton
              onClick={clearBookmarks}
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              <BookmarkAdded />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar src={channelAvatar} sx={{ width: 32, height: 32, mr: 1 }} />
          <Box>
            <Typography variant="subtitle1" color="white">
              {channelName}
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.7)">
              {views.toLocaleString()} views • {publishedTime}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={togglePlay}
              startIcon={isPlaying ? <Pause /> : <PlayArrow />}
              sx={{
                textTransform: 'none',
                borderRadius: 2,
                padding: '6px 16px',
              }}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              startIcon={<Fullscreen />} 
              onClick={toggleFullscreen}
              sx={{
                textTransform: 'none',
                borderRadius: 2,
                padding: '6px 16px',
              }}
            >
              {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={onLike}
              startIcon={<ThumbUp />}
            >
              Like
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={onDislike}
              startIcon={<ThumbDown />}
            >
              Dislike
            </Button>
            <Button variant="outlined" color="primary" onClick={onSave} startIcon={<Save />}>
              Save
            </Button>
            <Button variant="outlined" color="primary" onClick={onShare} startIcon={<Share />}>
              Share
            </Button>
          </Box>
        </Box>

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
            <IconButton onClick={() => {
              if (videoRef.current) {
                videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
              }
            }}>
              <SkipPrevious sx={{ color: 'text.secondary' }} />
            </IconButton>
            <IconButton onClick={() => {
              if (videoRef.current) {
                videoRef.current.currentTime = Math.min(duration, videoRef.current.currentTime + 10);
              }
            }}>
              <SkipNext sx={{ color: 'text.secondary' }} />
            </IconButton>
            <IconButton onClick={() => {
              if (videoRef.current) {
                videoRef.current.volume = videoRef.current.volume === 0 ? 1 : 0;
              }
            }}>
              <VolumeMute sx={{ color: 'text.secondary' }} />
            </IconButton>
            <Slider
              value={volume}
              onChange={handleVolumeChange}
              min={0}
              max={100}
              size="small"
              sx={{ width: 100 }}
            />
            <IconButton onClick={toggleFullscreen}>
              <Fullscreen sx={{ color: 'text.secondary' }} />
            </IconButton>
            <IconButton
              onClick={() => addBookmark(currentTime)}
              sx={{
                color: bookmarks.some(b => Math.abs(b.time - currentTime) < 1)
                  ? 'primary.main'
                  : 'text.secondary',
              }}
            >
              <Bookmark />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPlayer;
