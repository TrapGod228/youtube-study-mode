import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF0000',
      dark: '#CC0000',
      light: '#FF4444',
    },
    secondary: {
      main: '#FF0000',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: '#030303',
      secondary: '#606060',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    h6: {
      fontWeight: 700,
    },
    body1: {
      color: '#999999',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 2,
          padding: '6px 16px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          borderRadius: 8,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#FF0000',
        },
        thumb: {
          width: 16,
          height: 16,
        },
      },
    },
  },
});
