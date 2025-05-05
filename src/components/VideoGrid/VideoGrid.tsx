import React from 'react';
import { Box } from '@mui/material';
import VideoCard from './VideoCard';

// Mock video data
const mockVideos = [
  {
    id: '1',
    title: 'Earn on P2P Swaps: USDC - WETH with No Fees, No Limits! Profit 3K$ daily on...',
    channel: 'Coin Bureau Swap',
    views: '8.9K views',
    date: '7 days ago',
    duration: '5:52',
    avatar: 'https://yt3.ggpht.com/ytc/AMLnZu9d8z0n4wZk1bA9yC7QnWQk2w0kQK1Q=s48-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.imgur.com/4YQZ8cI.jpg',
    sponsored: true,
    live: false,
  },
  {
    id: '2',
    title: '5000 Subscriber Q&A Stream!!',
    channel: 'GM Felix Blohberger',
    views: '42 watching',
    date: '',
    duration: '',
    avatar: 'https://yt3.ggpht.com/ytc/AMLnZu8k5nQ8wQJc2w0kQK1Q=s48-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.imgur.com/2lO5W6h.jpg',
    sponsored: false,
    live: true,
  },
  {
    id: '3',
    title: 'I Left My A-Rank Party - Episode 07 [EN Sub] | Muse IN',
    channel: 'Muse India',
    views: '9.3K views',
    date: '2 weeks ago',
    duration: '23:02',
    avatar: 'https://yt3.ggpht.com/ytc/AMLnZu8k5nQ8wQJc2w0kQK1Q=s48-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.imgur.com/8Km9tLL.jpg',
    sponsored: false,
    live: true,
  },
  {
    id: '4',
    title: 'Tactical Magic | Grand Chess Tour',
    channel: 'ChessBase India',
    views: 'LIVE',
    date: '',
    duration: '',
    avatar: 'https://yt3.ggpht.com/ytc/AMLnZu8k5nQ8wQJc2w0kQK1Q=s48-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.imgur.com/9bK0U2N.jpg',
    sponsored: false,
    live: true,
  },
  {
    id: '5',
    title: 'PUZZLE UNFOLDED',
    channel: 'Puzzle Guy',
    views: '1.2K views',
    date: '1 hour ago',
    duration: '12:34',
    avatar: 'https://yt3.ggpht.com/ytc/AMLnZu8k5nQ8wQJc2w0kQK1Q=s48-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.imgur.com/XRk5l6s.jpg',
    sponsored: false,
    live: false,
  },
];

const VideoGrid: React.FC = () => {
  return (
    <Box sx={{ width: '100%', mt: 2 }}>
        <Box sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
          },
        }}>
          {mockVideos.map((video) => (
            <Box
              key={video.id}
              sx={{
                flex: {
                  xs: '1 1 100%',
                  sm: '1 1 50%',
                  md: '1 1 33.33%',
                },
                minWidth: 0,
              }}
            >
              <VideoCard {...video} />
            </Box>
          ))}
        </Box>
    </Box>
  );
};

export default VideoGrid;
