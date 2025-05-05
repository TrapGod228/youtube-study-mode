import React, { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
} from '@mui/material';
import {
  Search,
  Menu,
  Notifications,
  Apps,
  AccountCircle,
  YouTube,
} from '@mui/icons-material';
import SidebarNavigation from './SidebarNavigation';
import CategoryChips from '../CategoryChips/CategoryChips';
import StudyModeButton from '../StudyModeButton/StudyModeButton';
import SidebarBackdrop from './SidebarBackdrop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Box sx={{
      display: 'flex',
      minHeight: '100vh',
      bgcolor: 'background.paper',
      position: 'relative',
    }}>
      <Box
        component="aside"
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          width: '240px',
          bgcolor: 'background.paper',
          boxShadow: '4px 0 6px rgba(0,0,0,0.1)',
          transform: isSidebarVisible ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
          zIndex: 1300,
          pt: 0,
          pb: 0,
          m: 0,
        }}
      >
        <SidebarNavigation
          isSidebarVisible={isSidebarVisible}
          onToggle={handleSidebarToggle}
        />
      </Box>
      <Box sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#f9f9f9',
        position: 'relative',
        overflow: 'hidden',
        pl: isSidebarVisible ? 0 : 0,
        m: 0,
      }}>
        <Box sx={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          bgcolor: 'background.paper',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          mb: 0,
          p: 0,
        }}>
          <AppBar position="static" color="inherit" elevation={0}>
            <Toolbar sx={{
              px: 0,
              width: '100vw',
              display: 'flex',
              justifyContent: 'space-between',
              minHeight: 56,
              height: 56,
              bgcolor: 'background.paper',
              borderBottom: '1px solid rgba(0,0,0,0.12)',
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1.5, flex: 1 }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleSidebarToggle}
                  sx={{ color: 'text.secondary' }}
                >
                  <Menu />
                </IconButton>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
                  <YouTube sx={{ 
                    fontSize: 40, 
                    color: '#ff0000',
                    fontWeight: 'bold',
                    transform: 'scale(1.5)',
                    transformOrigin: 'center'
                  }} />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: '#1a1a1a',
                      flexGrow: 1,
                      fontWeight: 900,
                      fontSize: '20px',
                      fontFamily: 'Roboto, Arial, sans-serif',
                      letterSpacing: '-0.02em',
                      textTransform: 'uppercase',
                      textShadow: '0 1px 1px rgba(0,0,0,0.3)',
                    }}
                  >
                    YouTube
                  </Typography>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    ml: 2,
                  }}>
                    <StudyModeButton />
                  </Box>
                </Box>
              </Box>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                filter: isSidebarVisible ? 'blur(2px)' : 'none',
                transition: 'filter 0.3s ease-in-out',
                borderRadius: 1,
                p: 1.5, // Match search bar padding
                flex: 3,
                maxWidth: 'calc(100% - 240px)',
                width: '100%',
              }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 4,
                  width: '100%',
                  maxWidth: '800px',
                  minWidth: '600px',
                }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.25,
                    bgcolor: 'background.paper',
                    borderRadius: '24px',
                    p: 1.25,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    width: '100%',
                    maxWidth: '800px',
                    minWidth: '600px',
                    height: '36px',
                  }}>
                    <IconButton
                      color="inherit"
                      sx={{ color: 'text.secondary' }}
                    >
                      <Search />
                    </IconButton>
                    <InputBase
                      placeholder="Search"
                      sx={{
                        flex: 1,
                        fontSize: '0.875rem',
                        color: 'text.primary',
                        '&::placeholder': {
                          color: 'text.secondary',
                        },
                        pl: 1,
                        pr: 1,
                        height: '100%',
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, ml: 2, pr: 2, flex: 1 }}>
                <IconButton
                  color="inherit"
                  size="small"
                  sx={{ color: 'text.secondary' }}
                >
                  <Notifications />
                </IconButton>
                <IconButton
                  color="inherit"
                  size="small"
                  sx={{ color: 'text.secondary' }}
                >
                  <Apps />
                </IconButton>
                <IconButton
                  color="inherit"
                  size="small"
                  sx={{ color: 'text.secondary' }}
                >
                  <AccountCircle />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{
          position: 'sticky',
          top: 64,
          left: 0,
          right: 0,
          zIndex: 1100,
          bgcolor: 'background.paper',
          p: 2, // Add padding around the category chips
        }}>
          <CategoryChips />
        </Box>
        <Box
          sx={{
            flex: 1,
            overflow: 'auto',
            p: 2,
            bgcolor: 'background.paper',
            width: '100%',
            mt: 2, // Add spacing between header and content
          }}
        >
          {children}
        </Box>
      </Box>
      <SidebarBackdrop open={isSidebarVisible} onClose={handleSidebarToggle} />
    </Box>
  );
};

export default Layout;
