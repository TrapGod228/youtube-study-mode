import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Home, Explore, Subscriptions, History, VideoLibrary, Settings, YouTube, WatchLater, PlaylistAdd } from '@mui/icons-material';

const menuItems = [
  { text: 'Home', icon: <Home /> },
  { text: 'Explore', icon: <Explore /> },
  { text: 'Subscriptions', icon: <Subscriptions /> },
  { text: 'Library', icon: <VideoLibrary /> },
  { text: 'History', icon: <History /> },
  { text: 'Your Videos', icon: <PlaylistAdd /> },
  { text: 'Watch Later', icon: <WatchLater /> },
  { text: 'Settings', icon: <Settings /> },
];

const Sidebar: React.FC = () => {
  return (
    <Box sx={{ width: 240, bgcolor: 'white', borderLeft: 1, borderColor: 'divider', p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <YouTube sx={{ color: 'red', mr: 1 }} />
        <Typography variant="h6" color="primary">
          YouTube
        </Typography>
      </Box>
      
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text}>
            <ListItemIcon sx={{ color: 'rgba(0,0,0,0.54)' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              sx={{ color: 'rgba(0,0,0,0.87)' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
